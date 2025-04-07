// Kunci localStorage
const SAVE_KEY = 'jaxLiaSave';

// State game
const state = {
  currentScene: 'prolog',
  trustLia: false,
  helpedLia: false,
  foughtBoss: false,
  evacuated: false,
  friendship: 0,
  romance: 0,
  inventory: []
};

// Definisi scene narasi
const scenes = {
  prolog: {
    text: `Prolog: Raja Jalanan yang Membeku

Jax dikenal sebagai ketua geng motor Fist—sebuah klan legendaris yang merajai aspal malam di kota pesisir. Dengan jaket kulit hitam dan helm bertato api di punggung, ia memerintah dengan tatapan dingin. Konon, di balik ketenaran dan kekayaannya—hasil warisan keluarga serta keuntungan bisnis bawah tanah—Jax pernah dikhianati oleh seorang wanita yang ia cintai. Sejak itu, hatinya membeku; perempuan baginya hanyalah penjarah rasa dan ambisi.

Malam itu, langit kelam, kilat menyambar, dan hujan mengguyur deras. Jembatan tua yang menghubungkan dua sisi kota menjadi pilihan Jax untuk berteduh sejenak. Dibawah siraman hujan yang mengguyur helmnya, Jax menatap pantulan lampu kota yang berpendar di permukaan sungai. Kenangan lama berputar dalam benaknya—desas-desus tentang perang antargang yang semakin memanas, dan bisikan tentang senjata berbahaya yang mengancam kota.

Jax hendak memacu kembali motor V‑Twin kesayangannya, tapi sebuah sosok di balik payung hitam menarik perhatiannya…`,
    choices: [{ text: 'Lanjutkan', next: 'bab1' }]
  },
  bab1: {
    text: `Bab 1: Pertemuan di Bawah Hujan

Jax mematikan mesin. Ia turun, menyibakkan jaketnya, menatap perempuan itu dengan dingin. "Mau apa?" suaranya serendah malam.

Perempuan itu menunduk, rambut hitam panjangnya basah menempel di pipi. Air hujan menetes dari ujung payungnya yang robek di satu sisi. "Tolong… baterai motorku habis. Bisa pinjam power bank?" gumamnya pelan, suaranya hampir tenggelam oleh deru hujan.

Jax mengerutkan alis. Bagi lelaki sepertinya, perempuan di malam begini pasti punya niat tersembunyi. Namun naluri geng motor juga berkata: tolong orang di jalan, sebelum ia menimbulkan masalah.

Dengan gerakan lambat, Jax merogoh saku dalam jaketnya dan mengeluarkan power bank hitam kecil. Ia menyerahkannya tanpa kata. Mata mereka bertemu—ada getar aneh di balik tatapan dingin Jax. Wajah perempuan itu begitu murni, begitu... tak asing?`,
    choices: [
      { text: 'Tanyakan Namanya', next: 'bab1_tanya_nama', action: () => { state.friendship += 1; } },
      { text: 'Diam dan Tunggu', next: 'bab1_diam', action: () => { state.inventory.push('Pemantik Api'); } }
    ]
  },
  bab1_tanya_nama: {
    text: `"Siapa namamu?" tanya Jax, suaranya masih dingin namun ada sedikit nada penasaran.

Perempuan itu tersenyum tipis, matanya yang berwarna coklat madu menatap Jax dengan sedikit lebih berani. "Lia," jawabnya singkat. "Aku Lia. Baru pindah ke kota ini sebulan lalu."

Jax mengangguk pelan. Ada sesuatu dari cara Lia berbicara yang membuatnya ingin tahu lebih banyak. "Kota ini tidak ramah pada pendatang baru," gumamnya. "Apalagi untuk perempuan yang berkeliaran sendirian malam-malam."

"Kadang kita tidak punya pilihan selain menghadapi kegelapan, bukan?" balas Lia, matanya menerawang ke kejauhan.`,
    choices: [{ text: 'Lanjutkan', next: 'bab2' }]
  },
  bab1_diam: {
    text: `Jax memilih diam. Ia bersandar pada motornya, menunggu perempuan itu selesai mengisi daya. Hujan semakin deras, melukis pola-pola abstrak di kubangan air jembatan.

Perempuan itu melirik Jax sesekali, tampak gugup namun juga penasaran. Akhirnya, ia mengeluarkan sebatang rokok dan mencari-cari sesuatu di tasnya.

"Butuh api?" tanya Jax datar, menyodorkan pemantik api emas miliknya.

"Terima kasih," perempuan itu mendekat, mengambil pemantik itu dengan jari-jari lentiknya. "Aku Lia," katanya sambil menyalakan rokok. Ia mengembalikan pemantik itu, tapi Jax menggeleng.

"Simpan saja. Aku punya cadangan."`,
    choices: [{ text: 'Lanjutkan', next: 'bab2' }]
  },
  bab2: {
    text: `Bab 2: Jejak Masa Lalu

Kilat menyambar, menerangi wajah Lia sesaat. Dalam sekejap cahaya itu, Jax melihat sebuah bekas luka tipis di pelipis kiri Lia. Bekas luka yang hanya dimiliki oleh anggota geng motor—tanda pengakuan.

Jax termenung. Dua tahun lalu, ia bertemu Alina—wanita cantik pewaris perusahaan teknologi. Cinta mereka meledak cepat seperti koktail molotov. Pertemuan demi pertemuan rahasia di markas Fist, janji-janji manis, dan rencana masa depan yang gemilang.

Namun Alina ternyata memanfaatkan Jax untuk menembus jaringan kriminal rival. Ia merekam setiap pertemuan rahasia geng, mencuri data-data berharga, dan menghilang begitu saja setelah mendapatkan semua yang ia inginkan. Jax berakhir di penjara selama enam bulan karena pengkhianatan itu.

Sejak itu, Jax berhenti membuka hati. Ia kembali memimpin Fist dengan tangan besi, menghancurkan siapapun yang berani mencoba menyusup ke dalam lingkarannya.`,
    choices: [
      { text: 'Tanyakan tentang bekas luka Lia', next: 'bab2_tanya_luka', action: () => { state.romance += 1; } },
      { text: 'Berhati-hati dan jaga jarak', next: 'bab2_waspada', action: () => { state.inventory.push('Pisau Lipat'); } }
    ]
  },
  bab2_tanya_luka: {
    text: `"Bekas luka di pelipismu," kata Jax tiba-tiba, jarinya menunjuk sisi kiri wajah Lia. "Itu tanda pengakuan, bukan? Kau bagian dari geng motor mana?"

Lia tampak terkejut, secara refleks tangannya menyentuh bekas luka itu. Ia terdiam sejenak, matanya menyipit menatap Jax dengan lebih seksama.

"Kau tahu banyak," jawabnya pelan. "Ya, dulu aku pernah terlibat dengan dunia seperti itu. Tapi itu masa lalu."

Jax tidak percaya dengan konsep 'masa lalu'. Baginya, sekali kau masuk dalam dunia gelap, tak ada jalan keluar yang bersih. "Tidak ada mantan anggota geng," katanya dingin. "Hanya anggota yang bersembunyi."

Lia tersenyum pahit. "Atau anggota yang lari untuk bertahan hidup," balasnya.`,
    choices: [{ text: 'Lanjutkan', next: 'bab3' }]
  },
  bab2_waspada: {
    text: `Jax meraba pisau lipat di saku belakangnya—kebiasaan lama yang selalu ia lakukan saat mencium bahaya. Perempuan ini terlalu misterius, terlalu tenang untuk ukuran orang yang terjebak hujan di jembatan sepi.

"Terima kasih untuk power bank-nya," kata Lia sambil mengembalikan benda itu. "Ini sangat membantu."

Jax mengambilnya dengan gerakan cepat, berhati-hati agar tangan mereka tidak bersentuhan. Tidak ada yang bisa dipercaya di kota ini, terutama orang asing dengan bekas luka pengakuan geng.

"Jalan-jalan di sekitar sini berbahaya malam-malam," kata Jax datar. "Banyak geng motor berkeliaran."

"Seperti Fist?" Lia menyebut nama geng Jax dengan nada yang sulit diartikan. "Aku dengar pemimpin mereka sangat... dingin."`,
    choices: [{ text: 'Lanjutkan', next: 'bab3' }]
  },
  bab3: {
    text: `Bab 3: Misteri di Balik Payung

Hujan mulai mereda, menyisakan rintik-rintik kecil yang jatuh di kubangan air. Motor Lia sudah menyala kembali, siap melaju membelah malam.

"Terima kasih untuk bantuannya," kata Lia, menutup payungnya. Saat itulah Jax melihatnya—jaket Lia yang basah tersingkap, menampakkan logo merah berbentuk burung gagak—simbol Crimson Raven, geng motor saingan yang sudah lama ia incar.

Tanpa kata, Jax menarik Lia ke balik tiang jembatan, mendesaknya ke dinding. "Kamu… anggota Crimson Raven?" desaknya, mencengkeram lengan Lia.

Lia tidak melawan, tapi matanya menatap tajam. "Aku… dulu, ya. Tapi aku cabut setelah tahu rahasia gelap bosku."

Jax mendengus. "Tidak ada yang bisa keluar dari Crimson Raven hidup-hidup."

"Itulah mengapa aku butuh perlindungan," balas Lia, suaranya bergetar. "Mereka merencanakan sesuatu besar malam ini. Sesuatu yang akan menghancurkan kota ini."`,
    choices: [
      { text: 'Tanyakan detail rencana', next: 'bab4_tanya_detail', action: () => { state.friendship += 1; } },
      { text: 'Selidiki motif Lia', next: 'bab4_selidiki', action: () => { state.romance += 1; } }
    ]
  },
  bab4_tanya_detail: {
    text: `"Rencana apa?" desak Jax, melepaskan cengkeramannya namun tetap waspada.

Lia menghela napas panjang. "Selama ini, Crimson Raven tidak hanya mengendalikan jalanan, tapi juga aliran senjata ilegal ke kota. Bos mereka, Victor, memiliki koneksi kuat dengan lingkaran dalam kepolisian."

Jax mengernyitkan dahi. Ini konfirmasi dari rumor yang selama ini beredar—korupsi di kepolisian yang membuat geng-geng kecil seperti Fist selalu menjadi target, sementara Crimson Raven beroperasi bebas.

"Malam ini, mereka akan melakukan serangan ke gudang amunisi utama polisi. Bukan untuk mencuri, tapi untuk meledakkannya—menciptakan kekacauan agar pengiriman senjata besar bisa masuk tanpa hambatan."

"Dan kau?" tanya Jax. "Apa yang membuatmu tiba-tiba jadi malaikat pembawa pesan?"

Mata Lia berkilat. "Ayahku tewas karena senjata ilegal mereka. Aku masuk ke Crimson Raven untuk mencari bukti."`,
    choices: [{ text: 'Lanjutkan', next: 'bab4_keputusan' }]
  },
  bab4_selidiki: {
    text: `"Kenapa kau memberitahuku?" tanya Jax, mengambil jarak satu langkah. "Dari semua orang di kota ini, kenapa pemimpin Fist?"

Lia tersenyum tipis. "Karena kau satu-satunya yang punya nyali untuk melawan Victor secara langsung. Dan karena..." ia ragu sejenak, "karena aku pernah melihatmu bertarung di arena bawah tanah dua tahun lalu. Kau tidak seperti yang lain—kau punya kode etik."

Jax teringat pertarungan itu. Dua tahun lalu, saat namanya mulai naik, ia sering bertarung di arena ilegal untuk menambah reputasi Fist. Salah satu pertarungan terberat adalah melawan anggota Crimson Raven. Jax menang, tapi menolak membunuh lawannya meski penonton menginginkannya.

"Crimson Raven merencanakan serangan ke gudang senjata polisi malam ini," lanjut Lia. "Untuk menciptakan kekacauan yang bisa menutupi pengiriman besar senjata biologis. Senjata yang bisa melumpuhkan seluruh kota."

"Dan kenapa kau peduli?" tanya Jax lagi.

"Karena ayahku tewas karena senjata mereka," jawab Lia. "Dan karena aku tidak bisa membiarkan lebih banyak orang tak bersalah menjadi korban."`,
    choices: [{ text: 'Lanjutkan', next: 'bab4_keputusan' }]
  },
  bab4_keputusan: {
    text: `Jax memandang ke kejauhan. Hujan telah berhenti sepenuhnya, menyisakan kabut tipis yang melayang di atas jembatan. Ia menghadapi dilema: mempercayai seorang anggota Crimson Raven—musuh bebuyutannya—atau membiarkan kota yang ia cintai terancam bahaya.

Ia menatap Lia, mencoba membaca kebohongan dari matanya, namun yang ia lihat hanyalah ketulusan—atau akting yang sangat meyakinkan.

"Jika kau bohong," kata Jax, suaranya seperti es, "aku akan memastikan kau menyesalinya."

"Dan jika aku benar," balas Lia, "kita harus bergerak cepat. Waktu kita tidak banyak."`,
    choices: [
      { text: 'Lindungi Lia', next: 'bab5_protect', action: () => { state.trustLia = true; state.helpedLia = true; } },
      { text: 'Tinggalkan dan Ikuti', next: 'bab5_follow', action: () => { state.trustLia = false; state.helpedLia = false; } }
    ]
  },
  bab5_protect: {
    text: `Bab 5: Bayangan di Markas

Markas Fist terletak di bekas pabrik tekstil di pinggiran kota—bangunan tua berlantai tiga dengan tembok grafiti dan jendela-jendela tinggi yang dilapisi kawat besi. Di lantai dasar, puluhan motor berbaris rapi; di lantai atas, ruangan-ruangan pribadi para anggota.

Jax membawa Lia masuk, disambut tatapan curiga dan bisikan dari anggota Fist lainnya. Snake, tangan kanan Jax yang bertubuh besar dengan tato ular melilit lehernya, langsung menghadang.

"Bos," kata Snake, matanya tak lepas dari Lia, "dia memakai jaket Crimson."

"Aku tahu," jawab Jax datar. "Geledah dia, lalu bawa ke ruang rapat."

Lia tidak melawan saat Snake dan dua anggota lain menggeledahnya. Mereka menemukan ponsel, dompet, dan sebuah flash disk hitam kecil.

Di ruang rapat, Jax duduk berhadapan dengan Lia, sementara Snake dan empat anggota senior Fist lainnya berdiri di sekitar ruangan.

"Ceritakan semuanya," perintah Jax. "Setiap detail."`,
    choices: [
      { text: 'Dengarkan cerita Lia', next: 'bab5_protect_cerita' },
      { text: 'Introgasi dengan keras', next: 'bab5_protect_interogasi', action: () => { state.friendship -= 1; } }
    ]
  },
  bab5_protect_cerita: {
    text: `Lia menarik napas dalam, lalu mulai bercerita dengan suara tenang namun tegas.

"Tiga tahun lalu, ayahku—seorang polisi jujur bernama Kapten Daniel Reyes—ditembak oleh mafia senjata. Kasus itu ditutup begitu saja oleh kepolisian. Aku tahu ada yang tidak beres."

Lia mengeluarkan sebuah foto dari dompetnya—seorang pria berseragam polisi dengan senyum hangat. "Ayahku sedang menyelidiki aliran senjata ilegal saat ia dibunuh. Semua filenya menghilang, tapi ia meninggalkan petunjuk untukku—nama 'Crimson' yang terukir di belakang jam tangannya."

"Aku menyusup ke Crimson Raven, berpura-pura sebagai kurir. Selama setahun, aku mengumpulkan bukti dan informasi. Victor, pemimpin mereka, ternyata bekerja sama dengan Komisaris Morgan—kepala kepolisian kota ini—untuk menguasai jalur senjata ilegal."

Jax mengernyitkan dahi. Komisaris Morgan terkenal dengan kampanye anti-gangnya, menjadikan Fist sebagai target operasi berulang kali.

"Rencana mereka adalah menciptakan kekacauan besar dengan meledakkan gudang amunisi polisi, lalu memanfaatkan situasi ini untuk memasukkan kiriman senjata biologis hasil curian dari laboratorium militer. Senjata ini bisa melumpuhkan satu kota dalam hitungan hari."`,
    choices: [{ text: 'Lanjutkan', next: 'bab5_protect_lanjutan' }]
  },
  bab5_protect_interogasi: {
    text: `"Snake," perintah Jax dengan suara dingin, "buat dia bicara."

Snake mendekat, menaruh pistol di meja tepat di hadapan Lia. "Kau punya lima menit untuk meyakinkan kami bahwa kau bukan mata-mata, atau aku sendiri yang akan mengantarmu kembali ke Crimson Raven. Dalam kantong mayat."

Jax melihat rahang Lia mengeras, tapi tidak ada ketakutan di matanya—hanya kemarahan yang terkendali.

"Baik," kata Lia tajam. "Ingin bukti? Putar flash disk itu. Di dalamnya ada rekaman pertemuan Victor dengan Komisaris Morgan—ya, kepala kepolisian yang selalu memburu kalian itu. Mereka bersekongkol menguasai jalur senjata ilegal di kota ini."

Snake memasukkan flash disk ke laptop di sudut ruangan. Rekaman itu memperlihatkan dua pria di sebuah ruangan pribadi mewah—Victor yang bertato dan besar, serta Komisaris Morgan dalam pakaian sipil.

"Sial," gumam Snake. "Itu benar-benar Morgan."

Dalam rekaman itu, Victor dan Morgan membahas rencana detail untuk menyerang gudang amunisi polisi, menciptakan kepanikan publik, lalu memasukkan kiriman senjata biologis.

"Ayahku," kata Lia, suaranya bergetar, "Kapten Daniel Reyes, dibunuh tiga tahun lalu karena menyelidiki koneksi ini. Aku menyusup ke Crimson Raven untuk mendapatkan bukti."`,
    choices: [{ text: 'Lanjutkan', next: 'bab5_protect_lanjutan' }]
  },
  bab5_protect_lanjutan: {
    text: `Ruangan hening sejenak. Jax memandang anggota-anggotanya satu per satu, lalu kembali ke Lia.

"Kenapa datang pada Fist?" tanya Jax. "Kenapa tidak ke federal, atau media?"

"Karena jaringan Victor terlalu luas—aku tidak tahu siapa yang bisa dipercaya di kepolisian. Dan media? Mereka butuh waktu untuk memverifikasi, waktu yang tidak kita punya. Serangan akan terjadi malam ini, pukul 11."

Jax melihat jam dinding—pukul 9.30 malam. Mereka punya waktu kurang dari dua jam.

"Snake," perintah Jax, "kumpulkan semua anggota yang siap bertarung. Razor, siapkan senjata. Doc, siagakan peralatan medis." Ia berpaling pada Lia. "Kau tetap di sini, dengan penjagaan."

"Tidak," bantah Lia. "Aku ikut. Aku yang paling tahu layout gudang itu. Dan ini pertarunganku juga."

Jax menatap mata Lia lama. Ada tekad membara di sana—tekad yang hanya dimiliki seseorang yang berjuang untuk sesuatu yang lebih besar dari dirinya sendiri.`,
    choices: [
      { text: 'Izinkan Lia ikut', next: 'bab6', action: () => { state.friendship += 2; } },
      { text: 'Paksa Lia tetap di markas', next: 'bab6', action: () => { state.romance -= 1; } }
    ]
  },
  bab5_follow: {
    text: `Bab 5: Bayangan dalam Bayangan

"Aku harus pergi," kata Jax datar, berbalik menuju motornya. "Berhati-hatilah di jembatan ini. Banyak... hal berbahaya di malam hari."

Lia mengangguk pelan, matanya menyiratkan kekecewaan. "Terima kasih untuk bantuannya."

Jax menstarter motornya, membiarkan Lia berjalan menjauh. Namun, alih-alih melaju kencang, ia memilih berjalan perlahan, menjaga jarak sekitar lima puluh meter di belakang Lia. Instingnya mengatakan ada yang tidak beres, dan ia tidak akan membiarkan seorang anggota Crimson Raven berkeliaran begitu saja di wilayahnya.

Lia berjalan memasuki area pergudangan tua, tempat yang dikenal sebagai zona netral bagi geng-geng motor. Beberapa kali ia berhenti, menoleh ke belakang, memaksa Jax untuk bersembunyi di balik kontainer atau tumpukan barang bekas.

Setelah berjalan sekitar dua puluh menit, Lia berhenti di depan sebuah gudang kecil. Ia mengetuk pintu dengan ritme tertentu—tiga ketukan cepat, dua lambat, tiga cepat lagi. Pintu terbuka, dan seorang pria tinggi besar menerimanya masuk.

Jax menunggu beberapa menit, lalu mengendap-endap mendekati gudang itu. Ada jendela kecil di samping, cukup tinggi namun bisa dijangkau jika ia berdiri di atas tong kosong. Dari sana, ia melihat Lia sedang berbicara serius dengan seorang pria berpakaian rapi yang tidak tampak seperti anggota geng motor biasa.

Lia mengeluarkan flash disk dari sakunya, menyerahkannya pada pria itu. "Ini semua buktinya, Jones. Rekaman pertemuan Victor dengan Komisaris, rencana serangan, dan jalur pengiriman senjata biologis. Aku hampir tertangkap mengambil ini."

Pria bernama Jones itu mengangguk. "Berani sekali kau, Lia. Ayahmu akan bangga. Tapi ini belum cukup untuk menangkap Victor. Kita butuh menangkap basah mereka."

"Serangan akan terjadi malam ini pukul 11. Gudang amunisi utama di pelabuhan."`,
    choices: [
      { text: 'Curi flash disk itu', next: 'bab5_follow_curi', action: () => { state.inventory.push('Flash Disk Bukti'); } },
      { text: 'Dengarkan lebih lanjut', next: 'bab5_follow_dengar', action: () => { state.romance += 1; } }
    ]
  },
  bab5_follow_curi: {
    text: `Jax menunggu sampai Lia dan Jones keluar gudang. Ia mengikuti mereka dari kejauhan, menunggu saat yang tepat. Ketika mereka berpisah di persimpangan—Jones menuju mobilnya, Lia kembali berjalan kaki—Jax beraksi.

Dengan gerakan cepat, ia mendekati Jones, memukul tengkuknya dengan hantaman keras, menjatuhkannya tanpa suara. Ia mengambil flash disk dari saku Jones dan bersiap pergi ketika suara familier menghentikannya.

"Jax?" Lia berdiri di ujung gang, matanya melebar melihat apa yang terjadi. "Apa yang kau lakukan?"

Sebelum Jax bisa menjawab, tiga orang bertopeng muncul di belakang Lia, menariknya ke dalam cengkeraman. Salah satu dari mereka menodongkan pistol ke kepala Lia.

"Jax dari Fist," kata pria bertopeng itu, suaranya menyiratkan senyuman di balik topeng. "Ini kejutan yang menyenangkan. Victor akan senang mendapat dua hadiah sekaligus malam ini."

Jax menggenggam erat flash disk di tangannya, matanya tidak lepas dari Lia yang berusaha tenang meski dalam bahaya.

"Serahkan flash disk itu," perintah pria bertopeng, "atau gadis ini mati di sini."`,
    choices: [
      { text: 'Selamatkan Lia', next: 'bab5_follow_selamatkan', action: () => { state.helpedLia = true; } },
      { text: 'Prioritaskan flash disk', next: 'bab5_follow_prioritas', action: () => { state.friendship -= 2; } }
    ]
  },
  bab5_follow_dengar: {
    text: `"Victor bekerja dengan seseorang di tingkat tinggi kepolisian," lanjut Lia. "Kalau kita bergerak ceroboh, semua bukti ini bisa hilang seperti yang terjadi pada ayahku."

Jones mengangguk. "Aku mengerti. Itu sebabnya kita butuh bantuan dari luar sistem. Kau yakin Fist bisa dipercaya?"

"Jax..." Lia terdiam sejenak. "Dia punya reputasi sebagai orang yang berpegang pada kode etik. Dan dia punya dendam pribadi dengan Victor. Aku mencoba mendekatinya tadi, tapi sepertinya dia terlalu waspada."

"Wajar saja, setelah apa yang Alina lakukan padanya," kata Jones. "Tapi kita kehabisan waktu dan pilihan. Aku akan menghubungi tim federal, tapi mereka butuh waktu minimal tiga jam untuk tiba. Sementara itu, coba sekali lagi dengan Jax. Kita butuh bantuan lokal."

Lia mengangguk. "Baiklah, aku akan mencarinya lagi. Di mana kita bertemu nanti?"

"Gudang 7 di pelabuhan, satu jam sebelum serangan. Hati-hati, Lia. Orang-orang Victor ada di mana-mana."

Jax hendak bergerak dari posisinya ketika mendengar suara keributan dari dalam. Tiba-tiba pintu samping gudang terbuka dengan keras, dan tiga orang bertopeng masuk, menodongkan senjata.

"Jones! Pengkhianat!" teriak salah satu pria bertopeng. "Victor tahu apa yang kau rencanakan!"

Suara tembakan terdengar. Jones terjatuh, sementara Lia berusaha melarikan diri. Jax tanpa pikir panjang melompat dari persembunyiannya, menarik Lia ke belakang kontainer saat peluru-peluru melesat di sekitar mereka.`,
    choices: [{ text: 'Lanjutkan', next: 'bab5_follow_lanjut' }]
  },
  bab5_follow_selamatkan: {
    text: `Jax melempar flash disk itu jauh ke dalam kanal air di samping mereka, lalu dengan gerakan kil