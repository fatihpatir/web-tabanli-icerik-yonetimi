const app = {
  activeExam: null,
  deferredPrompt: null,
  score: 0,
  timer: null,
  timeLeft: 0,
  progress: JSON.parse(localStorage.getItem('wt_progress')) || {},
  soundEnabled: JSON.parse(localStorage.getItem('wt_sound')) !== false,
  achievements: JSON.parse(localStorage.getItem('wt_achievements')) || [],
  theme: localStorage.getItem('wt_theme') || 'dark',
  leaderboard: JSON.parse(localStorage.getItem('wt_leaderboard')) || {}, 
  audioCtx: null,

  init() {
    this.applyTheme();
    this.renderHome();
    this.setupPWA();
    this.initConfetti();
    this.initAudio();
    this.setupAchievementToast();
    this.renderBadges();
  },

  // --- Theme Logic ---
  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'blueprint' : 'dark';
    localStorage.setItem('wt_theme', this.theme);
    this.applyTheme();
    this.playSound('click');
  },

  applyTheme() {
    document.body.className = this.theme === 'blueprint' ? 'theme-blueprint' : '';
    const btn = document.getElementById('btn-theme');
    if (btn) btn.innerText = this.theme === 'blueprint' ? '📐' : '🎨';
  },

  // --- Leaderboard ---
  saveScore(gameType, score) {
    if (!this.activeExam) return;
    if (!this.leaderboard[this.activeExam.id]) this.leaderboard[this.activeExam.id] = {};
    if (!this.leaderboard[this.activeExam.id][gameType]) this.leaderboard[this.activeExam.id][gameType] = [];
    
    this.leaderboard[this.activeExam.id][gameType].push({
      score: score,
      date: new Date().toLocaleDateString('tr-TR')
    });
    
    this.leaderboard[this.activeExam.id][gameType].sort((a,b) => b.score - a.score);
    this.leaderboard[this.activeExam.id][gameType] = this.leaderboard[this.activeExam.id][gameType].slice(0, 5);
    
    localStorage.setItem('wt_leaderboard', JSON.stringify(this.leaderboard));
    this.renderLeaderboard();
  },

  renderLeaderboard() {
    const container = document.getElementById('leaderboard-content');
    if (!this.activeExam || !container) return;
    const data = this.leaderboard[this.activeExam.id] || {};
    let html = '';
    const gameNames = { test: 'Klasik Test', ta: 'Zamanla Yarış', tf: 'Doğru/Yanlış' };
    for (let game in data) {
      html += `<div style="margin-bottom:1.2rem">
        <h4 style="color:var(--accent); font-size:0.8rem; margin-bottom:0.3rem">${gameNames[game] || game}</h4>
        <table style="width:100%; font-size:0.85rem;">
          ${data[game].map((entry, i) => `<tr><td style="color:var(--accent); font-weight:700">#${i+1}</td><td>${entry.score} Puan</td><td style="text-align:right; opacity:0.6">${entry.date}</td></tr>`).join('')}
        </table>
      </div>`;
    }
    container.innerHTML = html || '<p style="opacity:0.5">Henüz skor yok.</p>';
  },

  // --- Print ---
  printNotes() {
    this.playSound('click');
    const area = document.getElementById('print-area');
    if (!this.activeExam || !area) return;
    let html = `<div style="text-align:center; margin-bottom:2rem"><h1>İÇERİK YÖNETİMİ DERS NOTLARI</h1><h3>${this.activeExam.title}</h3><p>Fatih PATIR - Bilişim Teknolojileri Öğretmeni</p></div>`;
    this.activeExam.questions.forEach((item, i) => {
      html += `<div style="margin-bottom:1.5rem; border-bottom:1px solid #ccc; padding-bottom:1rem"><b>SORU ${i+1}: ${item.q}</b><br>CEVAP: ${item.a}</div>`;
    });
    area.innerHTML = html; window.print();
  },

  printOpenEnded() {
    this.playSound('click');
    const a = document.getElementById('print-area');
    if(!this.activeExam || !a) return;
    let html = `<div style="text-align:center; margin-bottom:2rem"><h1 style="font-family:sans-serif">AÇIK UÇLU SINAV SORULARI</h1><h3>${this.activeExam.title}</h3><p>Fatih PATIR - Bilişim Teknolojileri Öğretmeni</p></div>`;
    if(this.activeExam.openEndedQuestions) {
      this.activeExam.openEndedQuestions.forEach((q, i) => {
        html += `
          <div style="margin-bottom:25px; padding:15px; border-bottom:1px solid #ccc; font-family:sans-serif;">
            <strong style="font-size:12pt;">Soru ${i+1}: ${q.q}</strong><br><br>
            <div style="font-size:11pt; color:#111;"><strong>Cevap:</strong> ${q.a}</div>
          </div>
        `;
      });
    }
    a.innerHTML = html;
    window.print();
  },

  // --- Achievements ---
  saveProgress(id, type) {
    if (!this.progress[id]) this.progress[id] = {};
    this.progress[id][type] = true;
    localStorage.setItem('wt_progress', JSON.stringify(this.progress));
    this.renderHome();
  },

  checkAchievement(id, condition) {
    if (this.achievements.includes(id)) return;
    if (condition) {
      this.achievements.push(id);
      localStorage.setItem('wt_achievements', JSON.stringify(this.achievements));
      this.showAchievementToast(id);
      this.renderBadges();
      this.playSound('win');
    }
  },

  BADGES: [
    { id: 'first_study', name: 'Kaşif', icon: '🔍' },
    { id: 'perfect_test', name: 'Bilgi Küpü', icon: '💎' },
    { id: 'speed_demon', name: 'Işık Hızı', icon: '☄️' },
    { id: 'word_master', name: 'Terim Ustası', icon: '📖' }
  ],

  renderBadges() {
    const container = document.getElementById('badge-container');
    if (!container) return;
    container.innerHTML = this.BADGES.map(b => `<div class="badge ${this.achievements.includes(b.id) ? 'earned' : ''}"><i>${b.icon}</i> ${b.name}</div>`).join('');
  },

  showAchievementToast(id) {
    const toast = document.getElementById('achievement-toast');
    const badge = this.BADGES.find(b => b.id === id);
    if (toast && badge) { toast.innerHTML = `<i>${badge.icon}</i> <b>Rozet: ${badge.name}</b>`; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3000); }
  },

  setupAchievementToast() {
    if (!document.getElementById('achievement-toast')) { const t = document.createElement('div'); t.id = 'achievement-toast'; document.body.appendChild(t); }
  },

  // --- Audio ---
  initAudio() { this.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); this.updateSoundBtn(); },
  playTone(freq, type, duration, vol = 0.1) {
    if (!this.soundEnabled || !this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
    const o = this.audioCtx.createOscillator(); const g = this.audioCtx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
    g.gain.setValueAtTime(vol, this.audioCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);
    o.connect(g); g.connect(this.audioCtx.destination); o.start(); o.stop(this.audioCtx.currentTime + duration);
  },
  playSound(type) {
    if(type === 'click') this.playTone(800, 'sine', 0.1, 0.05);
    if(type === 'success') { this.playTone(600, 'sine', 0.1); setTimeout(() => this.playTone(900, 'sine', 0.2), 100); }
    if(type === 'fail') { this.playTone(300, 'sawtooth', 0.2, 0.05); setTimeout(() => this.playTone(200, 'sawtooth', 0.3, 0.05), 150); }
    if(type === 'win') [440, 554, 659, 880].forEach((f, i) => setTimeout(() => this.playTone(f, 'sine', 0.4, 0.1), i * 150));
  },
  toggleSound() { this.soundEnabled = !this.soundEnabled; localStorage.setItem('wt_sound', this.soundEnabled); this.updateSoundBtn(); if (this.soundEnabled) this.playSound('click'); },
  updateSoundBtn() { const b = document.getElementById('btn-sound'); if (b) b.innerText = this.soundEnabled ? '🔊' : '🔇'; },

  // --- Navigation & Core UI ---
  showView(viewId) {
    this.playSound('click'); clearInterval(this.timer);
    document.getElementById('stat-timer').innerText = ''; document.getElementById('stat-score').innerText = '';
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active'); window.scrollTo(0, 0);
  },
  showHome() { this.showView('view-home'); },
  showSelection(exam) {
    this.activeExam = exam || this.activeExam;
    document.getElementById('selection-title').innerText = this.activeExam.title;
    this.renderLeaderboard(); this.showView('view-selection');
  },

  renderHome() {
    const grid = document.getElementById('exam-grid');
    grid.innerHTML = '';
    const allCards = window.EXAM_DATA.flatMap(e => e.flashcards);
    const fact = allCards[Math.floor(Math.random()*allCards.length)];
    grid.innerHTML = `<div class="q-card glow-card" style="grid-column: 1 / -1; margin-bottom: 2rem; border-color: var(--primary);"><div class="q-num">💡 GÜNÜN TERİMİ</div><p class="q-text">${fact.front}</p><p class="a-text">${fact.back}</p></div>`;
    window.EXAM_DATA.forEach(exam => {
      const isDone = this.progress[exam.id]?.study;
      const card = document.createElement('div'); card.className = 'card glow-card';
      const iconContent = this.getIcon(exam.id).endsWith('.png') ? `<img src="${this.getIcon(exam.id)}" class="card-icon" style="width:64px; height:64px; object-fit:contain;">` : `<div class="card-icon">${this.getIcon(exam.id)}</div>`;
      card.innerHTML = `${isDone ? '<span style="position:absolute; top:1rem; right:1rem; background:var(--primary); font-size:0.6rem; padding:2px 6px; border-radius:5px;">BİTTİ</span>' : ''}
        ${iconContent}<h3 class="card-title">${exam.title}</h3><p class="card-desc">Soru-Cevap, Oyunlar ve Testler.</p>`;
      card.onclick = () => this.showSelection(exam); grid.appendChild(card);
    });
  },
  getIcon(id) {
    const icons = { 
      '1-1': 'icons/cms.png', 
      '1-2': 'icons/seo.png', 
      '2-1': 'icons/hosting.png', 
      '2-2': 'icons/security.png' 
    };
    return icons[id] || '📄';
  },

  handleSearch(query) {
    const container = document.getElementById('search-results');
    const grid = document.getElementById('search-grid');
    if (!query || query.length < 2) { container.style.display = 'none'; return; }
    const results = [];
    window.EXAM_DATA.forEach(exam => {
      exam.flashcards.forEach(card => { if (card.front.toLowerCase().includes(query.toLowerCase()) || card.back.toLowerCase().includes(query.toLowerCase())) results.push({ ...card, category: exam.title }); });
    });
    if (results.length > 0) {
      container.style.display = 'block';
      grid.innerHTML = results.slice(0, 4).map(r => `<div class="q-card"><div class="q-num">${r.category}</div><p class="q-text">${r.front}</p><p class="a-text">${r.back}</p></div>`).join('');
    } else container.style.display = 'none';
  },

  // --- Modes ---
  startSummary() {
    const c = document.getElementById('content-container');
    c.innerHTML = `
      <div class="game-container" style="text-align:left;">
        <h2 style="text-align:center; margin-bottom:2rem;">📖 ${this.activeExam.title} Özeti</h2>
        <div class="q-card" style="line-height:1.8; font-size:1.1rem; border-left:4px solid var(--accent);">
          ${this.activeExam.summary}
        </div>
        <div style="text-align:center; margin-top:2rem;">
          <button class="btn" onclick="app.startStudy()">📚 ÇALIŞMAYA BAŞLA</button>
        </div>
      </div>
    `;
    this.showView('view-content');
  },

  startOpenEnded() {
    const c = document.getElementById('content-container');
    const qs = this.activeExam.openEndedQuestions || [];
    
    if(qs.length === 0) {
      c.innerHTML = `<div class="game-container"><h3 style="text-align:center;">Bu ünite için açık uçlu soru bulunamadı.</h3></div>`;
      return;
    }

    c.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2.5rem; flex-wrap:wrap;">
          <h2 style="color:var(--accent); margin:0;">${this.activeExam.title} / Açık Uçlu Sınav</h2>
          <button class="btn btn-secondary" style="padding:0.6rem 1rem; font-size:0.8rem;" onclick="app.printOpenEnded()">🖨️ PDF İNDİR</button>
      </div>
      ${qs.map((q, i) => `<div class="q-card" style="margin-bottom:2rem;"><div class="q-num">SORU ${i+1}</div><p class="q-text" style="font-weight:bold; font-size:1.1rem; margin-bottom:1rem; border-bottom:1px solid var(--glass-border); padding-bottom:10px;">${q.q}</p><p class="a-text" style="color:var(--accent); line-height:1.6; font-size:1.05rem;"><strong style="color:var(--text);">Cevap:</strong> ${q.a}</p></div>`).join('')}
    `;
    this.saveProgress(this.activeExam.id, 'openEnded');
    this.showView('view-content');
  },

  startStudy() {
    const c = document.getElementById('content-container');
    c.innerHTML = `<h2>${this.activeExam.title}</h2>${this.activeExam.questions.map((q, i) => `<div class="q-card"><div class="q-num">SORU ${i+1}</div><p class="q-text">${q.q}</p><p class="a-text">${q.a}</p></div>`).join('')}`;
    this.saveProgress(this.activeExam.id, 'study'); this.checkAchievement('first_study', true); this.showView('view-content');
  },
  startFlashcards() {
    const c = document.getElementById('content-container');
    c.innerHTML = `<h2>Bilgi Kartları</h2><div class="fc-grid">${this.activeExam.flashcards.map(f => `<div class="fc-card" onclick="app.playSound('click'); this.classList.toggle('flipped')"><div class="fc-inner"><div class="fc-front">${f.front}</div><div class="fc-back">${f.back}</div></div></div>`).join('')}</div>`;
    this.showView('view-content');
  },
  startTFGame() { this.score = 0; this.renderTF(); this.showView('view-content'); },
  renderTF() {
    const isCorrect = Math.random() > 0.5;
    const card = this.activeExam.flashcards[Math.floor(Math.random()*this.activeExam.flashcards.length)];
    let display = card.back;
    if (!isCorrect) display = this.activeExam.flashcards.find(f => f !== card).back;
    document.getElementById('content-container').innerHTML = `<div class="game-container"><h3>Doğru mu Yanlış mı?</h3><div style="font-size:1.5rem; margin:2rem 0; min-height:100px; display:flex; align-items:center; justify-content:center; flex-direction:column;"><b style="color:var(--primary)">${card.front}</b><p style="margin-top:10px">${display}</p></div><div class="tf-btns"><button class="btn btn-true" onclick="app.checkTF(true, ${isCorrect})">DOĞRU</button><button class="btn btn-false" onclick="app.checkTF(false, ${isCorrect})">YANLIŞ</button></div></div>`;
    document.getElementById('stat-score').innerText = `Puan: ${this.score}`;
  },
  checkTF(choice, actual) {
    if (choice === actual) { this.score += 10; this.playSound('success'); this.renderTF(); }
    else { this.playSound('fail'); this.saveScore('tf', this.score); alert(`Hata! Skor: ${this.score}`); this.showSelection(); }
  },

  startWordGame() {
    const card = this.activeExam.flashcards[Math.floor(Math.random()*this.activeExam.flashcards.length)];
    this.targetWord = card.front.toLocaleUpperCase('tr-TR'); this.description = card.back;
    this.guessed = []; this.renderWord(); this.showView('view-content');
  },
  renderWord() {
    const display = this.targetWord.split('').map(l => (l === ' ' || this.guessed.includes(l)) ? l : '_').join('');
    document.getElementById('content-container').innerHTML = `<div class="game-container"><h3>Kelime Tahmin</h3><p style="opacity:0.7; margin-bottom:1.5rem;">"${this.description}"</p><div class="word-display">${display}</div><div class="keyboard" id="kb"></div></div>`;
    "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split('').forEach(l => {
      const k = document.createElement('div'); k.className = `key ${this.guessed.includes(l) ? 'used' : ''}`;
      k.innerText = l; k.onclick = () => { this.guessed.push(l); if(!this.targetWord.includes(l)) this.playSound('fail'); else this.playSound('success'); this.renderWord(); };
      document.getElementById('kb').appendChild(k);
    });
    if(!display.includes('_')) { this.playSound('win'); this.triggerConfetti(); this.checkAchievement('word_master', true); setTimeout(() => this.startWordGame(), 1500); }
  },

  startTestMode() { this.score = 0; this.testQs = [...this.activeExam.flashcards].sort(() => 0.5 - Math.random()).slice(0, 10); this.testIdx = 0; this.renderTest(); this.showView('view-content'); },
  renderTest() {
    const q = this.testQs[this.testIdx]; const opts = [q.back];
    const others = this.activeExam.flashcards.filter(f => f.back !== q.back).map(f => f.back);
    while(opts.length < 4) { const r = others[Math.floor(Math.random()*others.length)]; if(!opts.includes(r)) opts.push(r); }
    opts.sort(() => 0.5 - Math.random());
    document.getElementById('content-container').innerHTML = `<div class="game-container"><h3>Soru ${this.testIdx+1}/10</h3><p style="font-size:1.3rem; margin:1.5rem 0; color:var(--primary); font-weight:700;">${q.front}</p><div class="test-options">${opts.map(o => `<button class="option-btn" onclick="app.checkTest(this, '${o}', '${q.back}')">${o}</button>`).join('')}</div></div>`;
    document.getElementById('stat-score').innerText = `Puan: ${this.score}`;
  },
  checkTest(btn, chosen, correct) {
    if (chosen === correct) { this.score += 10; this.playSound('success'); btn.classList.add('correct'); }
    else { this.playSound('fail'); btn.classList.add('wrong'); document.querySelectorAll('.option-btn').forEach(b => { if(b.innerText === correct) b.classList.add('correct'); }); }
    setTimeout(() => { if (++this.testIdx < 10) this.renderTest(); else { this.playSound('win'); this.saveScore('test', this.score); this.checkAchievement('perfect_test', this.score === 100); this.triggerConfetti(); alert(`Bitti! Puan: ${this.score}`); this.showSelection(); } }, 1200);
  },

  startTimeAttack() { this.score = 0; this.timeLeft = 60; this.showView('view-content'); this.renderTAReady(); },
  renderTAReady() { document.getElementById('content-container').innerHTML = `<div class="game-container"><h3>Zamanla Yarış</h3><p>60 saniyede kaç Doğru/Yanlış?</p><button class="btn" style="margin-top:2rem" onclick="app.startTA()">BAŞLA!</button></div>`; },
  startTA() { this.renderTF(); this.timer = setInterval(() => { this.timeLeft--; document.getElementById('stat-timer').innerText = `${this.timeLeft}s`; if(this.timeLeft <= 0) { clearInterval(this.timer); this.playSound('win'); this.saveScore('ta', this.score); this.checkAchievement('speed_demon', this.score >= 100); alert(`Bitti! Skor: ${this.score}`); this.showSelection(); } }, 1000); },

  // --- Extra ---
  initConfetti() { this.confetti = document.getElementById('confetti-canvas'); this.ctx = this.confetti.getContext('2d'); this.particles = []; },
  triggerConfetti() { this.confetti.width = innerWidth; this.confetti.height = innerHeight; for(let i=0; i<80; i++) this.particles.push({ x: Math.random()*innerWidth, y: -10, r: Math.random()*5+2, d: Math.random()*8, color: `hsl(${Math.random()*360}, 100%, 50%)`, tilt: Math.random()*10 }); this.drawConfetti(); },
  drawConfetti() { this.ctx.clearRect(0,0,innerWidth,innerHeight); this.particles.forEach((p, i) => { p.y += 3; this.ctx.beginPath(); this.ctx.fillStyle = p.color; this.ctx.arc(p.x, p.y, p.r, 0, 7); this.ctx.fill(); if(p.y > innerHeight) this.particles.splice(i, 1); }); if(this.particles.length > 0) requestAnimationFrame(() => this.drawConfetti()); },
  showModal(id) { document.getElementById(id).classList.add('active'); },
  closeModals() { document.querySelectorAll('.modal').forEach(m => m.classList.remove('active')); },
  setupPWA() { window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); this.deferredPrompt = e; document.getElementById('btn-install').style.display = 'flex'; }); },
  async installApp() { if(this.deferredPrompt) { this.deferredPrompt.prompt(); this.deferredPrompt = null; document.getElementById('btn-install').style.display = 'none'; } }
};
document.addEventListener('DOMContentLoaded', () => app.init());
