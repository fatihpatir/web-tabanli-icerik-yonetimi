const EXAM_DATA = [
  {
    id: '1-1',
    title: '1. Dönem 1. Sınav Hazırlık',
    summary: `<h3 style="color:var(--primary); margin-top:0;">1. Ünite: Web'in Temelleri ve Kontrol Merkezi</h3>
<p style="margin-bottom:15px; font-style:italic; color:var(--text-dim);">Bu bölüm, bir web sitesinin "nerede" ve "nasıl" var olduğunu anlamanı sağlar.</p>

<strong style="color:var(--accent);">1. Dijital Kimlik ve Barınma</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li><b>Domain (Alan Adı):</b> Sitenin internetteki adıdır. Karmasık IP adreslerini akılda kalıcı isimlere dönüştüren teknoloji <b>DNS</b>'dir.</li>
  <li><b>Hosting (Barındırma):</b> Sitenin tüm dosyalarının, görsellerinin ve veri tabanının 7/24 açık bir sunucuda depolanması işlemidir.</li>
</ul>

<strong style="color:var(--accent);">2. Yerel Sunucu (Localhost)</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Kendi bilgisayarınızda çalışmak için <b>XAMPP</b> kullanılır.</li>
  <li><b>Apache</b> (web sunucusu) ve <b>MySQL</b> (veri tabanı) modüllerini çalıştırarak bilgisayarı sunucuya dönüştürür.</li>
</ul>

<strong style="color:var(--accent);">3. Yönetim ve Kullanıcı Rolleri</strong>
<p style="margin-top:5px;">Yönetici paneline (<code>wp-admin</code>) girdiğinizde en kritik yapı Kullanıcı Rolleri'dir:</p>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li><b>Yönetici:</b> Sitenin mutlak hakimidir; tema, eklenti ve kullanıcı ekleyip silebilir.</li>
  <li><b>Editör:</b> İçeriklerin kralıdır; başkalarının yazılarını da düzenleyip yayınlayabilir.</li>
  <li><b>İçerik Sağlayıcı:</b> En kısıtlı içerik üreticisidir; yazı yazar ancak yayınlayamaz ve görsel yükleyemez.</li>
</ul>`,
    questions: [
      { q: "Domain ve hosting olmadan bir web sitesi yayınlanabilir mi?", a: "Hayır." },
      { q: ".edu uzantısı neyi temsil eder?", a: "Eğitim kurumlarını." },
      { q: "WordPress kurulumunda wp-config.php ne işe yarar?", a: "Veri tabanı bağlantı ayarlarını tutar." },
      { q: "Kullanıcı rolleri içinde en geniş yetkiye sahip olan hangisidir?", a: "Yönetici." },
      { q: "İçerik Sağlayıcı rolü görsel yükleyebilir mi?", a: "Hayır." },
      { q: "Bir yazıyı yayınlamadan sadece belirli kişilere şifreyle göstermek için hangi ayar kullanılır?", a: "Parola Korumalı." },
      { q: "WordPress'in varsayılan içerik editörü nedir?", a: "Gutenberg." },
      { q: "Bir blogun en üstüne bir yazıyı sabitlemek için ne yapılır?", a: "Blogun en üstüne sabitle seçeneği işaretlenir." },
      { q: "IP adresini domain adresine çeviren teknoloji nedir?", a: "DNS." },
      { q: "Bir kullanıcı oluşturulurken hangi alanın girilmesi zorunludur?", a: "Kullanıcı adı ve e-posta." }
    ],
    flashcards: [
      { front: "Domain", back: "Web sitesinin internetteki adı." },
      { front: "Hosting", back: "Web sitesi dosyalarının saklandığı sunucu alanı." },
      { front: "IP Adresi", back: "İnternet sitelerinin rakamlardan oluşan benzersiz adresi." },
      { front: "DNS", back: "IP adreslerini alan adlarına çeviren sistem." },
      { front: "XAMPP", back: "Yerel bilgisayarda sunucu ortamı kuran program." },
      { front: "wp-admin", back: "WordPress yönetim paneli giriş adresi." },
      { front: "Veri Tabanı", back: "Sitedeki yazı ve ayarların saklandığı yer." },
      { front: "PHP", back: "WordPress'in yazıldığı programlama dili." },
      { front: "Yönetici", back: "Sitedeki her türlü işlemi yapabilen en yetkili rol." },
      { front: "Editör", back: "Başkalarının yazılarını düzenleyip yayınlayabilen rol." },
      { front: "Yazar", back: "Sadece kendi yazılarını yazıp yayınlayabilen rol." },
      { front: "İçerik Sağlayıcı", back: "Kendi yazısını yazar ama yayınlayamaz." },
      { front: "Abone", back: "Sadece kendi profilini güncelleyebilen en düşük yetkili rol." },
      { front: "Gutenberg", back: "WordPress'in blok tabanlı yeni içerik editörü." },
      { front: "Blok Yerleştirici (+)", back: "Yazıya yeni bloklar eklemeyi sağlar." },
      { front: "Taslağı Kaydet", back: "Yazıyı yayınlamadan kaydetme işlemi." },
      { front: "Önizleme", back: "Yazının yayınlanmadan önceki son halini görme." },
      { front: "Site Başlığı", back: "Tarayıcı çubuğunda görünen sitenin adı." },
      { front: "Slogan", back: "Sitenin ne hakkında olduğunu açıklayan kısa ifade." },
      { front: "localhost", back: "Yerel bilgisayardaki sunucu adresi." }
    ],
    openEndedQuestions: [
      { q: "Domain (alan adı) ve hosting (barındırma) kavramlarını açıklayarak bu hizmetlerin web sitesi için önemini belirtiniz.", a: "Domain, bir web sitesinin internetteki fiziksel adı ve adresidir; hosting ise siteye ait dosya ve verilerin bir sunucuda depolanması için kullanılan alan kiralama işlemidir. Bu iki hizmet olmadan bir web sitesinin internet ortamında yer alması mümkün değildir." },
      { q: "DNS (Domain Name System) teknolojisinin temel görevi nedir?", a: "DNS, internet sitelerinin rakamlardan oluşan benzersiz IP adreslerini kullanıcıların kolayca hatırlayabileceği domain (alan adı) adreslerine çevirir." },
      { q: "WordPress'i yerel bir bilgisayarda (offline) çalıştırmak için hangi yardımcı programlar ve modüller kurulmalıdır?", a: "WordPress'i yerel sunucuda çalıştırmak için XAMPP gibi programlar kullanılmalı ve bu program içerisindeki Apache ile MySQL modülleri aktif hale getirilmelidir." },
      { q: "Kurulumu tamamlanmış bir WordPress sitesinin yönetim paneline tarayıcı üzerinden hangi uzantılarla erişilebilir?", a: "Yönetim paneline genellikle siteismi.com/wp-admin, siteismi.com/admin veya siteismi.com/login bağlantıları kullanılarak erişilir." },
      { q: "WordPress'te bulunan 5 standart kullanıcı rolünü yazınız.", a: "Standart kullanıcı rolleri; Yönetici, Editör, Yazar, İçerik Sağlayıcı ve Abone'dir." },
      { q: "Kullanıcı rolleri arasında en geniş yetkiye sahip olan \"Yönetici\" rolünün temel yetkileri nelerdir?", a: "Yönetici; yeni yayın ekleyebilir, tüm kullanıcıların yayınlarını düzenleyebilir veya silebilir, eklenti ve tema yükleyip silebilir ve kullanıcı bilgilerini değiştirip herhangi bir kullanıcıyı silebilir." },
      { q: "\"Site Başlığı\" (Site Title) nedir ve web sitesinde nerelerde görüntülenir?", a: "Site başlığı, siteyi tanımlayan metindir; web tarayıcısının başlık çubuğunda, tema başlığında, WordPress kontrol panelinde ve takipçilere giden bildirimlerde görünür." },
      { q: "Web sitesine yeni kayıt olan kullanıcılara varsayılan olarak hangi rol verilir ve bu nereden değiştirilir?", a: "Yeni kullanıcılara varsayılan olarak Abone rolü verilir; bu ayar Ayarlar > Genel sekmesinden değiştirilebilir." },
      { q: "WordPress kurulumu sırasında belirlenen kullanıcı adı daha sonra değiştirilebilir mi?", a: "Hayır, WordPress kullanıcı adı daha sonra değiştirilemez, ancak parola ve e-posta gibi diğer tüm ayrıntılar güncellenebilir." },
      { q: "Bir web sitesinin \".edu\" ve \".gov\" uzantıları ne tür kurumlara aittir?", a: ".edu uzantısı eğitim kurumlarına (üniversiteler), .gov uzantısı ise devlet kurumlarına aittir." }
    ]
  },
  {
    id: '1-2',
    title: '1. Dönem 2. Sınav Hazırlık',
    summary: `<h3 style="color:var(--primary); margin-top:0;">2. Ünite: Mimari Yapı ve İçerik Yönetimi</h3>
<p style="margin-bottom:15px; font-style:italic; color:var(--text-dim);">Bu bölümde sitenin iç yapısını nasıl organize edeceğini ve ziyaretçiye ne sunacağını öğrenirsin.</p>

<strong style="color:var(--accent);">1. Yazılar vs. Sayfalar</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li><b>Yazılar:</b> Tarihsel sıraya dizilen, kategorilere bağlanabilen dinamik içeriklerdir (haberler gibi).</li>
  <li><b>Sayfalar:</b> "Hakkımızda" veya "İletişim" gibi kategorisi olmayan, statik (sabit) içeriklerdir.</li>
</ul>

<strong style="color:var(--accent);">2. Gutenberg ve Blok Devrimi</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Modern WordPress içerikleri <b>Bloklar</b> halinde yönetir.</li>
  <li>Paragraf, görsel, buton vb. her öğe ayrı bir bloktur, sürükle-bırak ile düzenlenir.</li>
</ul>

<strong style="color:var(--accent);">3. Organizasyon (Kategoriler)</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Her yazı mutlaka bir kategoriye ait olmalıdır; seçilmezse <b>Varsayılan Kategori</b>'ye (Genel) atanır.</li>
  <li>Kategoriler arası ana-alt ilişkisi (hiyerarşi) kurularak kütüphane düzeni sağlanır.</li>
</ul>

<strong style="color:var(--accent);">4. Navigasyon (Menüler)</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Ziyaretçinin sitede kaybolmamasını sağlayan pusulalardır.</li>
  <li>Menüye sayfalar, yazılar, kategoriler veya dış bağlantılar (<b>Özel Bağlantılar</b>) eklenebilir.</li>
</ul>`,
    questions: [
      { q: "Sayfalar kategorilere bağlanabilir mi?", a: "Hayır." },
      { q: "Bir kategoriyi silince içindeki yazılar da silinir mi?", a: "Hayır, varsayılan kategoriye atanır." },
      { q: "WordPress'te varsayılan kategori silinebilir mi?", a: "Hayır." },
      { q: "Menüden bir sayfa silindiğinde o sayfa siteden de silinir mi?", a: "Hayır, sadece bağlantısı kalkar." },
      { q: "Bir yazı birden fazla kategoriye atanabilir mi?", a: "Evet." },
      { q: "Çöp kutusuna atılan bir yazı kaç gün sonra kalıcı olarak silinir?", a: "30 gün." },
      { q: "Yazı Kısa İsmi (Slug) belirlenirken neye dikkat edilmelidir?", a: "Türkçe karakter kullanılmamalı ve kelimeler arası tire konmalıdır." },
      { q: "Menü isimleri nereden değiştirilir?", a: "Görünüm > Menüler > Dolaşım Etiketi." },
      { q: "Yazı istatistiklerini (karakter, kelime sayısı) hangi simge gösterir?", a: "Info (i) simgesi." },
      { q: "Özel görünürlük seçeneği neyi sağlar?", a: "Sadece editör ve yazarların yazıyı görmesini sağlar." }
    ],
    flashcards: [
      { front: "Yazı", back: "Haber, blog veya makale gibi dinamik içerikler." },
      { front: "Sayfa", back: "Hakkımızda, iletişim gibi statik (sabit) içerikler." },
      { front: "Kategori", back: "Yazıları konularına göre gruplandırma aracı." },
      { front: "Etiket", back: "Yazı içeriğini tanımlayan anahtar kelimeler." },
      { front: "Öne Çıkan Görsel", back: "Yazı listelerinde başlığın yanında çıkan resim." },
      { front: "Kalıcı Bağlantı", back: "Yazının internetteki sabit linki (URL)." },
      { front: "Özet", back: "Yazının baş kısmında veya RSS servislerinde görünen kısa metin." },
      { front: "Tartışma", back: "Yazıya yorum yapılıp yapılamayacağını belirleyen bölüm." },
      { front: "Alt Kategori", back: "Bir ana kategoriye bağlı olan kategori." },
      { front: "Varsayılan Kategori", back: "Kategori seçilmediğinde sistemin otomatik atadığı kategori." },
      { front: "Menü", back: "Sitedeki bağlantıların listelendiği navigasyon alanı." },
      { front: "Menü Konumu", back: "Menünün sitenin neresinde (üst, alt, yan) görüneceği." },
      { front: "Özel Bağlantılar", back: "Menüye dış bir link (URL) ekleme özelliği." },
      { front: "Dolaşım Etiketi", back: "Menüde görünen başlığın adı." },
      { front: "Hızlı Düzenle", back: "Yazıyı açmadan başlık ve kategori değişikliği yapma." },
      { front: "Çöp Kutusu", back: "Silinen içeriklerin 30 gün beklediği yer." },
      { front: "Hiyerarşi", back: "Kategorilerin ana-alt ilişkisi kurması." },
      { front: "Statik İçerik", back: "Zamanla değişmeyen, sayfa yapısındaki içerik." },
      { front: "Dinamik İçerik", back: "Sürekli güncellenen blog gönderileri." },
      { front: "Galeri Bloku", back: "Birden fazla görseli düzenli gösterme bloku." }
    ],
    openEndedQuestions: [
      { q: "WordPress'teki \"Yazılar\" ve \"Sayfalar\" arasındaki temel farklar nelerdir?", a: "Yazılar; haber, blog veya makale gibi kategorilere bağlanabilen dinamik içeriklerdir. Sayfalar ise hakkımızda veya iletişim gibi sabit (statik) içeriklerdir ve kategorilere bağlanamazlar." },
      { q: "WordPress'in güncel sürümünde kullanılan Gutenberg editörünün temel çalışma prensibi nedir?", a: "Gutenberg, blok tabanlı bir editördür; paragraf, görsel, başlık ve video gibi her içerik öğesi ayrı bir \"blok\" olarak eklenir ve düzenlenir." },
      { q: "Bir yazı hazırlanırken herhangi bir kategori seçilmezse sistem nasıl bir işlem yapar?", a: "WordPress her yazının bir kategoriye ait olmasını zorunlu kılar; kategori seçilmezse yazı otomatik olarak Varsayılan Kategori (Genel/Uncategorized) altına atanır." },
      { q: "Mevcut bir kategoriyi sildiğinizde, o kategoriye bağlı olan yazılara ne olur?", a: "Kategori silindiğinde içindeki yazılar silinmez; bu yazılar varsa alt kategoriye, yoksa varsayılan kategoriye aktarılır." },
      { q: "Kategorilerde \"Ebeveyn Kategori\" seçeneği ne işe yarar?", a: "Yeni eklenen bir kategorinin, daha önce oluşturulmuş bir kategorinin alt kategorisi (hiyerarşik yapı) olmasını sağlar." },
      { q: "Yazı ekleme ekranındaki \"Kalıcı Bağlantı\" (Permalink) ayarı neyi belirler?", a: "Yayımlanacak yazının internetteki sabit URL adresini (linkini) belirler." },
      { q: "Yazı editöründeki \"Özet\" (Excerpt) alanına yazılan metin ne zaman önem kazanır?", a: "Tema destekliyorsa yazının başında görünür; ayrıca RSS servislerinde içeriğin kısa bir tanıtımı olarak ön plana çıkar." },
      { q: "Menü işlemlerinde \"Dolaşım Etiketi\" (Navigation Label) neyi ifade eder?", a: "Bir sayfanın veya bağlantının menü üzerinde görünecek ismini ifade eder." },
      { q: "Menüden bir sayfa kaldırıldığında (silindiğinde), o sayfa web sitesinden de tamamen silinmiş olur mu?", a: "Hayır, sayfa web sitesinden silinmez; sadece menü üzerindeki bağlantısı kaldırılmış olur." },
      { q: "Çöp kutusuna taşınan sayfa ve yazılar ne kadar süre sonra kalıcı olarak sistemden silinir?", a: "Çöp kutusundaki içerikler 30 gün sonra kalıcı ve otomatik olarak silinir." }
    ]
  },
  {
    id: '2-1',
    title: '2. Dönem 1. Sınav Hazırlık',
    summary: `<h3 style="color:var(--primary); margin-top:0;">3. Ünite: Estetik Tasarım ve İşlevsellik</h3>
<p style="margin-bottom:15px; font-style:italic; color:var(--text-dim);">Sitenin "nasıl göründüğü" ve "ekstra neler yapabildiği" bu dönemin ana konusudur.</p>

<strong style="color:var(--accent);">1. Tema Dünyası</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Temalar dış yüzüdür. Tema değiştirmeden önce veri kaybına karşı <b>mutlaka yedek</b> alınmalıdır.</li>
  <li>Temalar sadece görsellik değil, hızlı ve mobil uyumlu (responsive) olmalıdır.</li>
</ul>

<strong style="color:var(--accent);">2. Kod Seviyesinde Özelleştirme</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Görsel stiller değiştirmek için <code>style.css</code> dosyası kullanılır.</li>
  <li>Yeni fonksiyonlar eklemek için <code>functions.php</code> kullanılır. (Hata yapılması siteyi çökertebilir).</li>
</ul>

<strong style="color:var(--accent);">3. Eklentiler (Sitenin Süper Güçleri)</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Sistemde olmayan (SEO, Hız) özellikleri katar. <b>SEO</b> Google'da yükseltir, <b>Caching</b> siteyi hızlandırır.</li>
</ul>

<strong style="color:var(--accent);">4. PHP ile Eklenti Geliştirme</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>Eklentiler <b>PHP</b> ile yazılır ve <code>wp-content/plugins</code> klasöründe saklanır.</li>
  <li>Klasör adı ile ana dosya adı aynı olmalı ve başlangıcında özel bilgilendirme kodları bulunmalıdır.</li>
</ul>`,
    questions: [
      { q: "Tema değiştirirken ilk yapılması gereken nedir?", a: "Sitenin yedeğini almak." },
      { q: "Sitenin renk ayarlarını değiştirmek için hangi dosya düzenlenir?", a: "style.css." },
      { q: "Bir eklentiyi silmek için önce ne yapılmalıdır?", a: "Etkisizleştirilmelidir." },
      { q: "İstenmeyen yorumları otomatik filtreleyen varsayılan eklenti hangisidir?", a: "Akismet Anti-Spam." },
      { q: "Yorum el ile onaylanmalı ayarı neyi sağlar?", a: "Tüm yorumların yönetici onayından geçmesini zorunlu kılar." },
      { q: "Ortam kütüphanesindeki bir resmi tamamen silince ne olur?", a: "Diskte yer açılır ve resim yazıdan kalkar." },
      { q: "Bir eklentinin kodlarını düzenlemek için hangi menü kullanılır?", a: "Eklenti Dosya Düzenleyicisi." },
      { q: "SEO nedir?", a: "Arama Motoru Optimizasyonu." },
      { q: "Yorum yaparken isim ve e-posta zorunluluğu nereden ayarlanır?", a: "Ayarlar > Tartışma." },
      { q: "Gravatar nedir?", a: "WordPress yorumlarında görünen kullanıcı profil resmi." }
    ],
    flashcards: [
      { front: "Tema", back: "Web sitesinin dış görünümünü belirleyen tasarım paketi." },
      { front: "style.css", back: "Temanın stil (renk, yazı tipi) dosyası." },
      { front: "functions.php", back: "Temaya yeni özellikler ekleyen dosya." },
      { front: "header.php", back: "Sitenin üst bölümünü (logo, menü) yöneten dosya." },
      { front: "footer.php", back: "Sitenin en alt (telif hakkı) bölümünü yöneten dosya." },
      { front: "Eklenti (Plugin)", back: "WordPress'e yeni işlevler katan kod paketleri." },
      { front: "Akismet", back: "İstenmeyen (spam) yorumları engelleyen eklenti." },
      { front: "SEO Eklentisi", back: "Sitenin arama motorlarında üst sıraya çıkmasını sağlar." },
      { front: "Caching (Önbellek)", back: "Sitenin daha hızlı açılmasını sağlayan yöntem." },
      { front: "API Anahtarı", back: "Akismet gibi servisleri aktifleştiren özel kod." },
      { front: "Tartışma Ayarları", back: "Yorum kurallarının belirlendiği menü." },
      { front: "Spam Yorum", back: "Arama motoru kandırmak için atılan sahte yorumlar." },
      { front: "Onaylı Yorum", back: "Yönetici tarafından kabul edilen ve yayınlanan yorum." },
      { front: "Ortam Kütüphanesibi", back: "Siteye yüklenen tüm resim ve videoların listesi." },
      { front: "Küçük Resim", back: "Görsellerin 150x150 boyutundaki hali." },
      { front: "Dışa Aktar", back: "Site içeriğini XML dosyası olarak indirme." },
      { front: "Hello Dolly", back: "WordPress ile gelen rastgele sözler gösteren eklenti." },
      { front: "Klasik Düzenleyici", back: "Gutenberg öncesi eski yazı editörü eklentisi." },
      { front: "Kademeli Yorumlar", back: "Yoruma yapılan yanıtların seviye sınırı." },
      { front: "Otomatik Güncelleme", back: "Eklentilerin yeni sürümlerinin sistemce yüklenmesi." }
    ],
    openEndedQuestions: [
      { q: "Bir temanın görsel stillerini (renk, yazı tipi vb.) değiştirmek için hangi dosya düzenlenmelidir?", a: "Temanın stil özelliklerini değiştirmek için style.css dosyası düzenlenmelidir." },
      { q: "Temaya yeni özellikler veya fonksiyonlar eklemek için kullanılan dosya hangisidir?", a: "Temaya yeni işlevler katmak için functions.php dosyası kullanılır." },
      { q: "Web sitesinin üst (header) ve alt (footer) bölümlerinde kod değişikliği yapmak için hangi dosyalar seçilmelidir?", a: "Üst bölüm için header.php, alt bölüm için ise footer.php dosyası seçilmelidir." },
      { q: "Temalar arasında geçiş yapmadan veya kod değişikliği yapmadan önce neden yedek alınmalıdır?", a: "Hatalı bir kod yazımı veya uyumsuzluk durumunda web sitesinin çökmesini engellemek ve verileri korumak için mutlaka yedek alınmalıdır." },
      { q: "WordPress eklentileri (plugins) nedir ve hangi amaçla kullanılırlar?", a: "Eklentiler, sistemde var olan işlevleri genişletmeye veya yeni özellikler katmaya yarayan kod paketleridir; güvenlik, SEO ve hız gibi amaçlarla kullanılırlar." },
      { q: "SEO eklentilerinin bir web sitesi için önemi nedir?", a: "Sitenin arama motoru sonuçlarında üst sıralarda yer almasını sağlayarak organik ziyaretçi trafiğini artırır." },
      { q: "Önbelleğe Alma (Caching) eklentileri sitenin açılış hızını nasıl artırır?", a: "Ziyaret edilen sayfaların statik bir kopyasını oluşturur; kullanıcı tekrar geldiğinde bilgileri sunucu yerine yerel önbellekten alarak veri alışverişini azaltır ve hızı artırır." },
      { q: "WordPress eklentileri hangi programlama dili ile yazılır?", a: "WordPress eklentileri PHP dili kullanılarak yazılır." },
      { q: "Sunucu üzerinde eklenti dosyaları hangi klasör yolunda saklanır?", a: "Eklentiler, wp-content/plugins klasörü içerisinde yer alır." },
      { q: "Bir eklentinin sistem tarafından tanınması için ana dosyasında hangi bilgilerin bulunması zorunludur?", a: "Dosya başında Eklenti Adı (Plugin Name), açıklama, versiyon ve yazar bilgilerini içeren başlık kodlarının bulunması zorunludur." }
    ]
  },
  {
    id: '2-2',
    title: '2. Dönem 2. Sınav Hazırlık',
    summary: `<h3 style="color:var(--primary); margin-top:0;">4. Ünite: Etkileşim Güvenliği ve Siber Savunma</h3>
<p style="margin-bottom:15px; font-style:italic; color:var(--text-dim);">Son aşama, siteni korumak ve kullanıcı etkileşimini (yorumlar) yönetmektir.</p>

<strong style="color:var(--accent);">1. Yorum ve Ortam Yönetimi</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li><b>Akismet:</b> Sahte (spam) yorumları engeller.</li>
  <li>Yüklenen her görsel varsayılan olarak 3 farklı boyutta (Küçük, Orta, Büyük) saklanır. Gereksizler silinmelidir.</li>
</ul>

<strong style="color:var(--accent);">2. Siber Tehditler</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li><b>SQL Injection:</b> Veri tabanını hedefler. (Korunmak için wp_ ön eki değiştirilmelidir).</li>
  <li><b>DDoS:</b> Saniyede binlerce sahte istekle sunucuyu çökertmeyi hedefler.</li>
  <li><b>XSS:</b> Tarayıcıda zararlı kod çalıştırılmasıdır.</li>
</ul>

<strong style="color:var(--accent);">3. Savunma ve Sıkılaştırma</strong>
<ul style="margin-top:5px; margin-bottom:15px; padding-left:20px;">
  <li>2FA etkinleştirilmeli, DDoS'a açık <b>XML-RPC</b> kapatılmalı ve botlara karşı <b>reCAPTCHA</b> kullanılmalıdır.</li>
  <li><code>wp-config.php</code> üzerinden Hata Ayıklama (Debug) modunu ve dosya düzenleme editörünü kapatmak saldırganlara koz vermemek için kritiktir.</li>
</ul>`,
    questions: [
      { q: "WordPress tabanlı sitelerde neden admin kullanıcı adı kullanılmamalıdır?", a: "Kaba kuvvet saldırılarını zorlaştırmak için." },
      { q: "DDoS saldırısının temel amacı nedir?", a: "Sunucuyu aşırı yükleyerek hizmet veremez hale getirmek." },
      { q: "XML-RPC neden devre dışı bırakılmalıdır?", a: "DDoS saldırıları için açık bir kapı olabildiği için." },
      { q: "Veri tabanı güvenliği için en önemli işlem nedir?", a: "Düzenli yedek almak." },
      { q: "reCAPTCHA'da V2 ve V3 arasındaki fark nedir?", a: "V2 işlem bekler, V3 arka planda kullanıcıyı rahatsız etmeden çalışır." },
      { q: "Bir saldırı sonrası siteyi eski haline getirmenin en hızlı yolu nedir?", a: "Yedeği geri yüklemek." },
      { q: "Hata ayıklama (Debug) modu neden kapalı tutulmalıdır?", a: "Saldırganlara kod yapısı hakkında ipucu vermemek için." },
      { q: "SQL Injection saldırısı nereyi hedef alır?", a: "Veri tabanını." },
      { q: "Siteye sadece belirli bir IP'den giriş izni vermek nerede yapılır?", a: ".htaccess dosyası üzerinden." },
      { q: "Dosya düzenleme editörü güvenlik için neden kapatılmalıdır?", a: "Panelden dosyaların içine zararlı kod enjekte edilmesini önlemek için." }
    ],
    flashcards: [
      { front: "Bilgi Güvenliği", back: "Gizlilik, bütünlük ve erişilebilirlik ilkeleri." },
      { front: "SQL Injection", back: "Veri tabanından izinsiz bilgi çalma yöntemi." },
      { front: "XSS (Cross-Site Scripting)", back: "Tarayıcıda izinsiz kod çalıştırma." },
      { front: "2FA", back: "Çift faktörlü doğrulama güvenliği." },
      { front: "DDoS", back: "Sunucuyu sahte isteklerle yanıt veremez hale getirme." },
      { front: "Botnet", back: "Korsanların kontrol ettiği zombi bilgisayar ağı." },
      { front: "XML-RPC", back: "Üçüncü taraf uygulamaların siteyle etkileşim protokolü." },
      { front: "htaccess", back: "Sunucu seviyesinde güvenlik ayarları yapan dosya." },
      { front: "IP Blocker", back: "Belirli IP adreslerinin siteye erişimini engelleme." },
      { front: "Firewall", back: "Yetkisiz erişimleri filtreleyen yazılım." },
      { front: "CDN", back: "İçeriği dünya geneline dağıtarak hızı ve güvenliği artıran ağ." },
      { front: "Brute Force", back: "Sürekli şifre deneyerek sızma girişimi." },
      { front: "Raw Access Logs", back: "Siteye gelen tüm ham erişim kayıtları." },
      { front: "Veri Tabanı Öneki", back: "Tabloların başındaki wp_ gibi belirteç." },
      { front: "CAPTCHA", back: "İnsan ve botu ayıran test." },
      { front: "reCAPTCHA", back: "Google'ın sunduğu Ben robot değilim testi." },
      { front: "SSL Sertifikası", back: "Veri trafiğini şifreleyen güvenlik belgesi." },
      { front: "Debug (Hata Ayıklama)", back: "Yazılımdaki hataları bulma modu." },
      { front: "wp-config.php", back: "Sitenin ana yapılandırma ve güvenlik dosyası." },
      { front: "Site Key", back: "reCAPTCHA kurulumu için gerekli anahtarlardan biri." }
    ],
    openEndedQuestions: [
      { q: "WordPress'te yorumların yönetici onayından geçmeden yayınlanmaması için hangi ayar yapılmalıdır?", a: "Ayarlar > Tartışma menüsünden \"Yorum el ile onaylanmalı\" kutucuğu işaretlenmelidir." },
      { q: "Akismet Anti-Spam eklentisi nasıl çalışır ve ne işe yarar?", a: "Yorumları kendi veri tabanıyla karşılaştırarak istenmeyen (spam) yorumları otomatik tespit eder ve filtreler." },
      { q: "Ortam kütüphanesine yüklenen resimler varsayılan olarak hangi üç boyutta saklanır?", a: "Resimler; Küçük resim, Orta boyut ve Büyük boyut olmak üzere üç farklı boyutta saklanır." },
      { q: "SQL Injection (Enjeksiyon) saldırısı nedir ve veri tabanı güvenliği için hangi önlem alınabilir?", a: "SQL sorguları ile veri tabanından izinsiz bilgi çalma yöntemidir; korunmak için varsayılan \"wp_\" tablo ön eki (prefix) değiştirilmelidir." },
      { q: "DDoS saldırısının temel amacı nedir?", a: "Sunucuya aynı anda çok sayıda sahte istek göndererek sistem kaynaklarını tüketmek ve web sitesini hizmet veremez duruma getirmektir." },
      { q: "Güvenlik amacıyla XML-RPC özelliğinin devre dışı bırakılması neden önerilir?", a: "XML-RPC üzerinden pingback hizmeti kullanılarak DDoS saldırıları başlatılabileceği için kapatılması bir güvenlik önlemidir." },
      { q: "Botnet kavramını açıklayınız.", a: "Bilgisayar korsanları tarafından kontrol edilen ve hedef sunuculara saldırı yapmak için kullanılan zombi bilgisayar ağlarıdır." },
      { q: "WordPress güvenliği için neden \"admin\" kullanıcı adı kullanılmamalıdır?", a: "Kaba kuvvet (Brute Force) saldırılarında saldırganın kullanıcı adı ve şifreyi tahmin etmesini kolaylaştırdığı için \"admin\" ismi tercih edilmemelidir." },
      { q: "CAPTCHA testinin amacı nedir ve web sitelerinde nerelerde kullanılır?", a: "Erişimi sağlayan kullanıcının insan mı yoksa bot mu olduğunu belirlemeyi amaçlar; anket, kayıt ve yorum formlarında kullanılır." },
      { q: "reCAPTCHA V2 ve V3 arasındaki en belirgin fark nedir?", a: "V2 kullanıcıdan bir işlem (tıklama, resim seçme) beklerken, V3 kullanıcıyı rahatsız etmeden arka planda çalışır." }
    ]
  }
];

window.EXAM_DATA = EXAM_DATA;
