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
    text: `Jax melempar flash disk itu jauh ke dalam kanal air di samping mereka, lalu dengan gerakan kilat menarik pisau lipatnya dan melemparkannya ke arah pria yang menodongkan pistol ke kepala Lia. Pisau itu menancap tepat di bahu pria tersebut, membuatnya menjerit dan melepaskan senjatanya.

Memanfaatkan momen tersebut, Jax melesat maju, menerjang dua pria lainnya. Dengan gerakan yang telah terlatih selama bertahun-tahun di jalanan, ia menghantam rahang salah satu pria dan menyapu kaki pria lainnya dalam satu gerakan mulus.

Lia tidak tinggal diam. Begitu genggaman terlepas, ia mengayunkan sikunya ke belakang, menghantam keras perut pria yang tersisa, lalu memutar tubuh dan menendang pistol dari tangannya.

"Lari!" teriak Jax, menarik tangan Lia.

Mereka berlari menembus lorong-lorong sempit di antara gudang, diiringi suara tembakan yang menggema di belakang mereka. Jax menarik Lia ke balik sebuah truk kontainer besar, napas mereka terengah-engah.

"Kau mengikutiku," kata Lia di antara napasnya yang pendek-pendek.

"Dan kau tidak sepenuhnya jujur," balas Jax. "Siapa Jones itu? FBI?"

Lia mengangguk. "Rekan ayahku di divisi khusus. Kami bekerja sama untuk membongkar jaringan Victor dan Komisaris Morgan. Dan sekarang..." ia menelan ludah, "dia kemungkinan sudah mati."

Jax menatap tajam ke mata Lia. "Flash disk itu. Isinya?"

"Semua bukti—rekaman, foto, dokumen transaksi senjata ilegal. Semuanya yang kami kumpulkan selama dua tahun."

"Dan sekarang ada di dasar kanal," ucap Jax, setengah menyesal.

"Aku punya cadangannya," kata Lia, mengeluarkan sebuah kalung dari balik bajunya. Di ujung kalung itu tergantung flash disk mungil lainnya. "Jones selalu mengajarkanku untuk selalu memiliki rencana cadangan."`,
    choices: [{ text: 'Lanjutkan', next: 'bab6' }]
  },
  bab5_follow_prioritas: {
    text: `Jax menggenggam erat flash disk di tangannya. Bukti penting—terlalu penting untuk ditukar dengan satu nyawa. 

"Maaf," gumamnya pelan.

Dengan gerakan tiba-tiba, Jax melemparkan debu ke mata para penyandera, memanfaatkan satu detik kebingungan mereka untuk melarikan diri, melompati pagar kawat di belakangnya.

"Bunuh dia!" teriak pria bertopeng, mengarahkan pistolnya pada Lia.

Jax terus berlari, mengabaikan jeritan di belakangnya, mengabaikan suara tembakan yang menggema di udara malam. Ia melompat ke atas motornya, menstarter dengan cepat, dan melesat menjauh dengan flash disk aman di sakunya.

Di markas Fist, Jax segera mengumpulkan para pemimpinnya—Snake, Razor, Doc, dan Viper. Mereka menonton rekaman dalam flash disk itu dengan wajah tegang.

"Sialan," gumam Snake. "Jadi Morgan yang selama ini membuat hidup kita sulit, ternyata bekerja sama dengan Victor?"

Jax mengangguk suram. "Serangan akan terjadi malam ini pukul 11. Gudang amunisi utama di pelabuhan."

"Lalu gadis itu?" tanya Viper. "Mata-mata Crimson yang memberikan info ini?"

Jax menatap kosong ke dinding, kilasan wajah Lia bermain di benaknya. "Entahlah. Mungkin dia berkata jujur, mungkin tidak. Yang pasti, aku tidak bisa menyelamatkannya."

"Kita tidak punya waktu untuk menyesali apa yang sudah terjadi," kata Snake, praktis seperti biasa. "Sekarang, apa rencanamu, Bos?"

Jax berdiri, matanya berkilat dingin—tatapan yang tidak pernah gagal membuat lawan-lawannya gentar. "Kita akan menghentikan serangan itu, menangkap Victor, dan mengekspos Morgan. Siapkan semua anggota yang siap bertarung."`,
    choices: [{ text: 'Lanjutkan', next: 'bab6' }]
  },
  bab5_follow_lanjut: {
    text: `"Tetap menunduk!" teriak Jax, menarik Lia merapat ke belakang kontainer saat peluru bersarang di metal di atas kepala mereka.

"Apa yang kau lakukan di sini?" tanya Lia, suaranya tegang namun tenang—ketenangan yang hanya dimiliki seseorang yang terbiasa dengan bahaya.

"Mengikutimu," jawab Jax singkat. "Mana Jones?"

"Tertembak. Aku tidak yakin dia selamat." Mata Lia berkaca-kaca, tapi tidak ada air mata yang jatuh. "Flash disk itu masih bersamanya."

Jax melihat celah di antara dua gudang. "Kita harus bergerak. Mereka akan memanggil bala bantuan."

Dengan gerakan cepat, mereka berlari zig-zag di antara kontainer dan tumpukan barang, menghindari tembakan yang semakin jarang terdengar. Setelah berlari sekitar lima menit, mereka sampai di tempat motor Jax terparkir.

"Naik," perintah Jax. Lia naik ke belakang motor tanpa banyak tanya, tangannya melingkar erat di pinggang Jax saat motor itu melesat membelah malam.

Jax membawa mereka ke sebuah tempat tak terduga—lantai atas bekas hotel kecil yang sudah lama ditutup, salah satu safe house rahasia milik Fist.

"Kita aman di sini untuk sementara," kata Jax, membuka pintu dengan kunci khusus. Ruangan itu sederhana tapi bersih—sebuah sofa, meja kecil, dapur mini, dan sebuah tempat tidur di sudut.

"Flash disk itu berisi semua bukti," kata Lia, duduk di sofa dengan wajah lelah. "Tanpa itu, kita tidak punya apa-apa untuk menghentikan Victor dan Morgan."

"Berapa banyak orang yang tahu tentang serangan malam ini?"

"Hanya Jones, aku, dan sekarang kau. Jones seharusnya menghubungi tim federal, tapi mereka butuh waktu untuk tiba."

Jax menatap keluar jendela, ke arah kota yang berpendar dalam cahaya malam. "Dan sekarang kita kehabisan waktu dan pilihan."`,
    choices: [{ text: 'Lanjutkan', next: 'bab6' }]
  },
  bab6: {
    text: `Bab 6: Konfrontasi di Pelabuhan

Jam menunjukkan pukul 10.30 malam. Di pelabuhan kota yang remang-remang, dua puluh anggota Fist bersiaga di berbagai posisi strategis. Di tengah-tengah mereka, Jax berdiri tegak di atas motornya, memberikan instruksi terakhir.

"Target kita Victor dan anak buahnya. Hindari konflik dengan polisi—mereka hanya pion. Prioritas utama adalah mencegah ledakan di gudang amunisi. Snake, kau pimpin tim alpha di pintu utara. Razor, tim beta di pintu selatan. Doc, siapkan klinik darurat di markas. Viper, kau dan lima orang lainnya jaga perimeter."

Lia berdiri di samping Jax, mengenakan rompi anti peluru yang dipinjamkan Fist. Ia telah mengganti jaket Crimson Raven-nya dengan jaket hitam polos.

"Menurut informasi terakhir, Victor akan datang dengan sekitar tiga puluh orang. Mereka akan memasang bom waktu di lima titik kritis," kata Lia, menunjukkan peta gudang di ponselnya.

"Lebih banyak dari yang kuperkirakan," gumam Jax.

"Masih bisa mundur," kata Lia. "Ini pertarungan yang hampir mustahil."

Jax mendengus. "Sejak kapan Fist mundur dari pertarungan?"

Jauh di kejauhan, terlihat konvoi motor mendekat—lampu-lampu depan berjajar seperti mata predator dalam kegelapan.

"Mereka datang," kata Snake, menurunkan teropongnya. "Dan sepertinya membawa lebih banyak orang dari yang kita kira."

Jax mengeratkan sarung tangannya. "Sekarang atau tidak sama sekali."`,
    choices: [
      { text: 'Konfrontasi langsung', next: 'bab6_konfrontasi', action: () => { state.foughtBoss = true; } },
      { text: 'Strategi menghindar', next: 'bab6_strategi', action: () => { state.evacuated = true; } }
    ]
  },
  bab6_konfrontasi: {
    text: `"Snake, siapkan roket sinyal. Razor, nyalakan semua lampu sorot."

Dalam hitungan detik, pelabuhan yang gelap tiba-tiba terang benderang oleh cahaya lampu sorot yang disiapkan tim Fist. Konvoi Crimson Raven terhenti, silau oleh cahaya tak terduga.

Jax memacu motornya ke depan, berhenti sekitar lima puluh meter dari barisan depan Crimson Raven. Ia turun, melepas helmnya, menampakkan wajahnya yang dingin dan keras.

"Victor!" teriak Jax. "Kupikir kau lebih suka bekerja dari balik layar. Ternyata cukup berani untuk muncul sendiri malam ini."

Dari tengah konvoi, seorang pria bertubuh besar dengan jaket merah turun dari motornya. Victor—pemimpin Crimson Raven—berjalan santai ke depan, senyum dingin terukir di wajahnya yang penuh bekas luka.

"Jax dari Fist," suara Victor berat dan kasar. "Ini kejutan. Apa yang membawa raja jalanan kecil ke wilayah kami malam ini?"

"Wilayahmu?" Jax mendengus. "Setahuku, pelabuhan ini milik kota, bukan milik pengedar senjata dan polisi korup."

Mata Victor menyipit. Ia mengamati keadaan sekitar, menghitung anggota Fist yang terlihat. "Kau membawa terlalu sedikit orang untuk memulai perang, Jax."

"Aku tidak butuh pasukan untuk mengalahkanmu, Victor."

Victor tertawa. "Keberanian atau kebodohan? Sulit dibedakan pada orang-orang sepertimu." Matanya tiba-tiba menangkap sosok di belakang Jax. "Ah, si pengkhianat kecil kita. Lia, sayang, kupikir kau sudah ditangani anak buahku tadi."

Lia melangkah maju, berdiri di samping Jax. "Aku datang untuk membalaskan kematian ayahku, Victor. Dan untuk menghentikan rencana gilamu."

"Daniel Reyes?" Victor tertawa lagi. "Polisi idealis itu? Dia tidak mengerti bagaimana dunia ini bekerja. Seperti kau dan Jax sekarang."`,
    choices: [
      { text: 'Serang Victor', next: 'bab6_konfrontasi_serang', action: () => { state.friendship += 1; } },
      { text: 'Coba negosiasi', next: 'bab6_konfrontasi_negosiasi', action: () => { state.romance += 1; } }
    ]
  },
  bab6_konfrontasi_serang: {
    text: `Tanpa peringatan, Jax melemparkan pisau yang tersembunyi di tangannya. Mata pisau berkilau dalam cahaya lampu sorot sebelum menancap di bahu Victor, membuat pria besar itu terhuyung ke belakang.

"Sekarang!" teriak Jax.

Snake menembakkan roket sinyal ke udara, meledak dalam semburat merah menyilaukan—sinyal untuk semua anggota Fist menyerang.

Dalam sekejap, pelabuhan berubah menjadi medan pertempuran. Motor-motor Fist menyerbu dari berbagai arah, melemparkan bom asap dan granat kejut ke arah konvoi Crimson Raven. Tembakan mulai terdengar dari kedua belah pihak.

Victor, sambil mencabut pisau dari bahunya, berteriak murka. "Bunuh mereka semua!"

Jax melesat maju, menerjang Victor dalam perkelahian jarak dekat. Meski Victor lebih besar dan kuat, Jax lebih cepat dan teknik bertarungnya jauh lebih baik. Pukulan demi pukulan dilancarkan, ditangkis, dan dibalas.

Lia, di tengah pertempuran, bertarung dengan lincah. Gaya bertarungnya elegan namun mematikan—campuran seni bela diri formal dan teknik jalanan yang kasar. Ia menjatuhkan dua anggota Crimson Raven yang menghadangnya, lalu bergerak menuju gudang amunisi.

"Aku akan menjinakkan bomnya!" teriak Lia pada Jax yang masih bertarung dengan Victor.

Jax mengangguk singkat, sebelum menghindari tendangan kuat Victor yang nyaris mengenai kepalanya. Ia membalas dengan kombinasi pukulan cepat ke perut dan rahang Victor, membuat pria besar itu terhuyung.

"Kau akan membayar pengkhianatan ini, Jax," geram Victor, darah mengalir dari sudut bibirnya. "Morgan akan memastikan geng kalian hancur setelah malam ini!"

"Morgan tidak akan bisa menyelamatkanmu," balas Jax dingin, melancarkan tendangan keras ke dada Victor. "Kami punya bukti keterlibatannya denganmu. Malam ini, bukan hanya Crimson Raven yang jatuh, tapi juga karirnya."`,
    choices: [{ text: 'Lanjutkan', next: 'bab7' }]
  },
  bab6_konfrontasi_negosiasi: {
    text: `"Kita semua tahu bagaimana dunia ini bekerja, Victor," kata Jax, suaranya tenang meski ketegangan mengisi udara. "Uang, kekuasaan, pengaruh—hal-hal yang kau kejar. Tapi senjata biologis? Itu melewati batas."

Victor mengangkat alisnya, terkejut Jax mengetahui detail rencananya.

"Pikir baik-baik," lanjut Jax. "Kau meledakkan gudang itu, melepaskan senjata bio ke kota, berapa banyak yang akan mati? Termasuk keluargamu sendiri?"

"Senjata itu tidak akan digunakan di kota ini," balas Victor. "Itu hanya komoditas. Pembeli kami membayar mahal untuk itu."

"Dan kau percaya Morgan akan membiarkanmu hidup setelah transaksi? Pria yang mengorbankan ayah Lia dan siapa tahu berapa banyak polisi jujur lainnya?"

Keraguan sekilas tampak di mata Victor. Jax tahu ia mengenai titik lemah.

"Kami punya bukti keterlibatan Morgan," kata Lia, menunjukkan flash disk di tangannya. "Salinannya sudah dikirim ke federal. Malam ini mereka akan datang, Victor. Kau hanya pion dalam permainan Morgan."

"Federal?" Victor mendengus. "Kau pikir aku takut pada ancaman kosong? Bukti apa yang kalian punya?"

Jax mengeluarkan ponselnya, memutar sebagian rekaman yang berhasil ia salin dari flash disk. Suara Victor dan Morgan terdengar jelas membahas pembagian keuntungan dan rencana eliminasi 'pihak tidak perlu' setelah transaksi.

Wajah Victor mengeras. "Bajingan itu... dia berencana mengkhianatiku."

"Masih ada jalan keluar, Victor," kata Jax. "Hentikan serangan ini, berikan kami lokasi senjata biologis, dan bersaksilah melawan Morgan. Federal akan memberikan kesepakatan yang lebih baik daripada kematian atau penjara seumur hidup."`,
    choices: [{ text: 'Lanjutkan', next: 'bab7' }]
  },
  bab6_strategi: {
    text: `"Kita tidak bisa melawan mereka secara langsung," bisik Jax pada timnya. "Terlalu berisiko. Snake, kau dan tim alpha pergi ke belakang gudang. Razor, bawa tim beta ke menara pengawas untuk sniper support. Sisanya, ikut aku dan Lia—kita akan masuk lebih dulu ke dalam gudang."

Semua mengangguk dan bergerak dengan cepat dan sunyi. Jax, Lia, dan lima anggota Fist lainnya merayap melalui jalur pipa air di sisi pelabuhan, memanjat pagar kawat dengan hati-hati, lalu berlari cepat menuju pintu samping gudang amunisi.

"Aku bisa membuka ini," kata Lia, mengeluarkan peralatan kecil dari sakunya dan mulai membuka kunci elektronik di pintu.

Konvoi Crimson Raven terlihat memasuki area utama pelabuhan, jauh dari posisi mereka. Victor terlihat di tengah konvoi, berbicara dengan seseorang melalui telepon—kemungkinan Morgan, pikir Jax.

"Berhasil," bisik Lia saat pintu terbuka dengan suara klik pelan.

Mereka masuk ke dalam gudang yang gelap, hanya diterangi lampu darurat merah di beberapa sudut. Kotak-kotak amunisi dan senjata tersusun rapi dalam rak-rak tinggi, membentuk labirin metal yang mencekam.

"Menurut rencana Victor, mereka akan memasang bom di lima titik struktural," Lia menunjukkan peta digital di ponselnya. "Pilar utama di sana, ruang kontrol di lantai dua, dua sudut bangunan di timur dan barat, serta generator listrik di basement."

"Kita berpencar," perintah Jax. "Dua orang ke setiap titik. Lia, kau ikut denganku ke ruang kontrol."

Semua bergerak sesuai instruksi. Jax dan Lia dengan cepat menemukan tangga menuju lantai dua dan bergerak menuju ruang kontrol.

"Tunggu," bisik Lia tiba-tiba, menarik Jax ke balik sebuah lemari berkas. "Ada yang aneh. Terlalu sunyi."

Benar saja, tak lama kemudian terdengar suara langkah kaki mendekati ruang kontrol—dua anggota Crimson Raven, membawa tas besar yang kemungkinan berisi bahan peledak.`,
    choices: [
      { text: 'Hadapi mereka', next: 'bab6_strategi_hadapi' },
      { text: 'Ambil jalan memutar', next: 'bab6_strategi_memutar', action: () => { state.inventory.push('Kunci Ruang Server'); } }
    ]
  },
  bab6_strategi_hadapi: {
    text: `Jax memberi isyarat pada Lia untuk bersiap. Dengan gerakan cepat, ia melompat keluar dari persembunyian, mendorong salah satu anggota Crimson Raven ke dinding dengan keras hingga tas yang dibawanya terjatuh.

Lia tidak kalah cepat, dengan tendangan berputar ia menjatuhkan anggota kedua, lalu dengan gerakan lincah mengunci lengan pria itu ke belakang punggungnya.

"Jangan berteriak," bisik Jax dingin ke telinga lawannya, pisau lipat menempel di leher pria itu. "Berapa banyak tim yang Victor kirim ke dalam?"

"Cu-cuma kami berdua di lantai ini," jawab pria itu terbata-bata. "Tim lain masih di luar, menunggu sinyal."

"Bom-nya?" tanya Lia, menekan lebih keras lengan pria yang ia kunci.

"Di... di dalam tas. Timer sudah terpasang, tapi belum diaktifkan. Victor yang pegang remote aktivasinya."

Jax dan Lia bertukar pandang. Ini konfirmasi bahwa Victor bermaksud meledakkan tempat ini dari jarak aman.

"Ikat mereka," kata Jax, mengeluarkan cable tie dari sakunya. "Dan periksa bomnya."

Setelah kedua pria itu terikat dan disembunyikan di lemari berkas, Lia membuka tas dengan hati-hati. Di dalamnya, sebuah perangkat peledak canggih dengan timer digital yang belum aktif.

"Aku bisa menjinakkannya," kata Lia, mengeluarkan alat kecil dari sakunya. "Tapi kita perlu temukan tim lain sebelum mereka memasang bom di titik-titik lainnya."

Jax mengangguk, mengirim pesan singkat ke timnya melalui earpiece. "Tim alpha dan beta, laporkan. Ada pergerakan di titik kalian?"`,
    choices: [{ text: 'Lanjutkan', next: 'bab7' }]
  },
  bab6_strategi_memutar: {
    text: `"Terlalu berisiko menghadapi mereka langsung," bisik Jax. "Ikuti aku."

Dengan langkah sunyi, Jax memimpin Lia merayap di antara lemari-lemari berkas, menuju pintu lain di ujung koridor. Pintu itu mengarah ke ruang server kecil yang terhubung dengan ruang kontrol melalui lubang ventilasi besar.

"Dari sini kita bisa mengawasi mereka tanpa terlihat," kata Jax pelan, memindahkan panel ventilasi dengan hati-hati.

Mereka mengintip melalui ventilasi, melihat dua anggota Crimson Raven sedang memasang perangkat peledak di panel kontrol utama. Satu pria tampak sedang berkomunikasi melalui radio.

"Timer sudah terpasang, Bos," kata pria itu. "Menunggu perintah untuk aktivasi."

"Bagus," suara Victor terdengar dari radio. "Tunggu sampai semua tim melapor. Kita aktifkan semua bom secara bersamaan."

Jax dan Lia bertukar pandang. Situasi semakin genting—mereka harus bertindak sebelum semua bom terpasang.

"Aku punya ide," bisik Lia. "Ruang server ini mengontrol sistem keamanan gudang. Jika kita bisa mengakses mainframe-nya, kita mungkin bisa mengunci seluruh gudang dan memulai protokol keamanan."

"Kau bisa hacknya?" tanya Jax.

Lia tersenyum tipis. "Dulu aku bekerja di divisi IT kepolisian sebelum menyusup ke Crimson Raven. Berikan aku lima menit."

Jax mengawasi pintu sementara Lia bekerja pada komputer server. Jari-jarinya menari di atas keyboard, menggali lapisan demi lapisan keamanan sistem.

"Dapat!" bisiknya setelah beberapa menit. "Aku bisa mengaktifkan alarm kebakaran, mengunci semua pintu kecuali jalur evakuasi, dan mematikan semua komunikasi radio di dalam gedung."

"Lakukan," perintah Jax. "Lalu kita ambil bomnya saat mereka panik."`,
    choices: [{ text: 'Lanjutkan', next: 'bab7' }]
  },
  bab7: {
    text: `Bab 7: Kesetiaan di Tengah Kobaran

Situasi berubah dalam sekejap. Sirine alarm berbunyi nyaring, sprinkler di seluruh gudang menyala, menyemprotkan air ke segala arah. Dalam kebingungan, anggota Crimson Raven terlihat panik, berlarian mencari jalan keluar.

Di luar gudang, pertempuran antara Fist dan sisa pasukan Crimson Raven semakin sengit. Snake dan timnya berhasil menguasai menara pengawas, memberikan bantuan tembakan dari atas.

Jax dan Lia berhasil menjinakkan bom di ruang kontrol, lalu bergegas turun untuk membantu tim lain. Di tengah koridor lantai dasar, mereka dihadang oleh Victor dan empat pengawalnya.

"Kalian!" geram Victor, wajahnya merah oleh amarah. "Kalian yang merusak semuanya!"

"Serahkan remote aktivasi bomnya, Victor," kata Jax tenang meski ketegangan mengisi udara. "Permainanmu sudah berakhir."

Victor tertawa kasar. "Kau pikir ini semua tentang bom? Bodoh! Ini hanya pengalihan!"

Tepat saat itu, ponsel Jax berbunyi. Snake di seberang telepon, suaranya panik. "Bos! Ada truk kontainer besar memasuki pelabuhan dari pintu belakang! Kami melihat beberapa orang menurunkan tabung-tabung aneh!"

Jax menatap Victor tajam. "Senjata biologismu sudah tiba, kupikir?"

"Terlambat untuk menghentikannya," Victor menyeringai. "Dalam tiga puluh menit, pengiriman itu akan meninggalkan pelabuhan menuju pembeli. Komisaris Morgan sendiri yang akan mengawalnya—dengan mobil polisi resmi."

"Dan dia akan menghabisimu setelahnya," tambah Lia. "Kau hanya alat, Victor."

Keraguan sekilas tampak di mata Victor, namun segera berganti dengan tatapan keras. "Cukup bicara!" Ia mengeluarkan pistol dan menembak ke arah Jax dan Lia.`,
    choices: [
      { text: 'Kejar Morgan', next: 'bab7_kejar_morgan', action: () => { state.inventory.push('Senjata Api'); } },
      { text: 'Tangkap Victor', next: 'bab7_tangkap_victor', action: () => { state.friendship += 2; } }
    ]
  },
  bab7_kejar_morgan: {
    text: `"Victor hanya pion," bisik Jax pada Lia sambil berlindung di balik pilar beton. "Target utama kita Morgan dan senjata biologisnya."

Lia mengangguk. "Aku akan menahan Victor. Kau kejar Morgan."

"Terlalu berbahaya," bantah Jax. "Kita pergi bersama."

Lia tersenyum tipis. "Tidak ada waktu untuk berdebat, Jax." Dengan gerakan cepat, ia melemparkan granat asap ke arah Victor dan pengawalnya, menciptakan kabut tebal yang menghalangi pandangan.

Memanfaatkan kebingungan, Jax dan Lia berlari melalui pintu samping. Di luar, pertempuran masih berlangsung, tapi fokus mereka kini pada dermaga belakang, tempat truk kontainer terparkir.

"Itu dia," tunjuk Lia pada sebuah truk putih besar dengan logo perusahaan pengiriman palsu. Di sekitarnya, beberapa pria berpakaian formal dan berjas anti peluru sedang memindahkan kotak-kotak metal ke dalam truk.

Dan di sana, mengawasi proses tersebut, berdiri Komisaris Morgan dalam balutan jas mahal, dikelilingi empat pengawal pribadi.

"Kita butuh senjata lebih besar," gumam Jax, mengamati situasi.

Seolah menjawab, Snake tiba-tiba muncul di belakang mereka, membawa dua senapan semi-otomatis. "Bantuan datang, Bos," katanya dengan senyum tipis.

Jax mengambil salah satu senjata, memeriksanya dengan cepat. "Rencana: aku dan dua orang akan mengalihkan perhatian dari sisi barat. Snake, kau dan sisanya masuk dari timur. Target utama adalah kotak-kotak metal itu—amankan, jangan sampai rusak. Lia, kau ikut denganku."

Semua mengangguk, bersiap pada posisi masing-masing. Jax menatap Lia sesaat, melihat keteguhan di matanya. Ada sesuatu yang ingin ia katakan, tapi ini bukan waktu yang tepat.

"Sekarang!" perintah Jax.`,
    choices: [{ text: 'Lanjutkan', next: 'bab8' }]
  },
  bab7_tangkap_victor: {
    text: `"Victor adalah kuncinya," kata Jax tegas. "Kita tangkap dia, paksa dia menghentikan semuanya."

    Lia mengangguk, dari balik jaketnya ia mengeluarkan pistol kecil—senjata cadangan yang ia sembunyikan. "Ikuti aku, kita harus cepat."

    Mereka berdua bergerak hati-hati mendekati Victor yang masih tergeletak di tanah, berusaha untuk bangkit. Jax menendang pistol yang terjatuh dari tangan Victor, memastikan pria itu tidak bisa melawan.

    "Kau tidak akan bisa melarikan diri kali ini, Victor," kata Jax, menatap tajam ke arah Victor.

    "Kau pikir kau bisa menghentikanku? Morgan akan datang dan menghancurkan kalian semua!" Victor berusaha bangkit, tetapi Jax menekannya kembali ke tanah.

    "Kau akan memberitahu kami di mana Morgan berada dan menghentikan rencana ini!" desak Jax.

    Victor, terengah-engah, akhirnya mengakui, "Baiklah! Dia akan berada di dermaga belakang dalam waktu lima belas menit. Dia tidak akan membiarkan senjata itu jatuh ke tangan kalian!"

    Jax menatap Lia, "Kita harus segera ke dermaga belakang. Kita tidak punya waktu untuk membuang-buang waktu."

    Lia mengangguk, "Ayo, kita harus menghentikan Morgan sebelum terlambat."`,
    choices: [
      { text: 'Kejar Morgan', next: 'bab8_kejar_morgan', action: () => { state.foughtBoss = true; } },
      { text: 'Tanya lebih lanjut tentang rencana Morgan', next: 'bab8_tanya_rencana', action: () => { state.friendship += 1; } }
    ]
  },
  bab8_kejar_morgan: {
    text: `Jax dan Lia berlari menuju dermaga belakang, mengikuti petunjuk Victor. Di sepanjang jalan, mereka melihat sisa-sisa pertempuran antara Fist dan Crimson Raven, dengan suara tembakan dan teriakan yang menggema di udara malam.

    Saat mereka tiba di dermaga, mereka melihat truk besar yang dimaksud Victor, dikelilingi oleh beberapa pengawal bersenjata.

    "Kita harus mengalihkan perhatian mereka," kata Jax. "Lia, kau ambil posisi di sebelah kiri, aku akan dari kanan."

    Dengan strategi yang telah disepakati, mereka melancarkan serangan bersamaan. Jax menembakkan senapan semi-otomatisnya ke arah pengawal, sementara Lia menggunakan kecepatan dan kelincahannya untuk menghindari tembakan dan mendekati truk.

    Dalam kekacauan, mereka berhasil menjatuhkan beberapa pengawal, tetapi Morgan masih berada di dalam truk, mengawasi situasi.

    "Kita harus menghentikannya sebelum dia bisa melarikan diri," kata Lia, berusaha menembus pertahanan pengawal yang tersisa.

    "Ayo, kita tidak punya waktu!" Jax berteriak, memacu semangat Lia untuk terus maju.`,
    choices: [
      { text: 'Serang pengawal yang tersisa', next: 'bab8_serang_pengawal', action: () => { state.friendship += 1; } },
      { text: 'Coba negosiasi dengan Morgan', next: 'bab8_negosiasi_morgan', action: () => { state.romance += 1; } }
    ]
  },
  bab8_tanya_rencana: {
    text: `Jax menatap Victor dengan tajam. "Sebelum kita pergi, kau harus memberi tahu kami lebih banyak tentang rencana Morgan."

    Victor, terdesak, menghela napas. "Baiklah, aku akan memberitahumu. Morgan berencana untuk mengirimkan senjata biologis ke kliennya malam ini. Dia tidak akan membiarkan siapapun menghalanginya."

    "Di mana dia akan melakukan pengiriman itu?" tanya Lia, berusaha mendapatkan informasi lebih lanjut.

    "Di dermaga belakang, di truk putih besar. Dia akan mengawasi pengiriman itu sendiri," jawab Victor, terlihat putus asa.

    "Kita harus segera ke sana," kata Jax, menatap Lia. "Kita tidak punya waktu untuk membuang-buang waktu."

    Lia mengangguk, "Ayo, kita harus menghentikan Morgan sebelum terlambat."`,
    choices: [
      { text: 'Kejar Morgan', next: 'bab8_kejar_morgan', action: () => { state.foughtBoss = true; } },
      { text: 'Tanya lebih lanjut tentang rencana Morgan', next: 'bab8_tanya_rencana', action: () => { state.friendship += 1; } }
    ]
  },
  bab8_serang_pengawal: {
    text: `Jax dan Lia melancarkan serangan ke pengawal yang tersisa. Dengan tembakan yang terarah, Jax berhasil menjatuhkan satu pengawal, sementara Lia dengan cepat menghindari serangan dan menendang pengawal lainnya.

    "Kita harus cepat!" teriak Jax, melihat Morgan masih berada di dalam truk.

    Mereka berdua berlari menuju truk, tetapi Morgan sudah bersiap untuk melarikan diri. Jax melompat ke atas truk, berusaha membuka pintu.

    "Morgan! Hentikan!" teriak Jax, tetapi Morgan sudah memutar kunci kontak dan truk mulai bergerak.

    Lia berlari ke samping truk, berusaha untuk menghentikannya. "Jax, aku butuh bantuan!"`,
    choices: [
      { text: 'Lompat ke dalam truk', next: 'bab9_lompat_truk', action: () => { state.friendship += 1; } },
      { text: 'Coba blokir jalan', next: 'bab9_blokir_jalan', action: () => { state.romance += 1; } }
    ]
  },
  bab8_negosiasi_morgan: {
    text: `Jax mencoba untuk bernegosiasi dengan Morgan. "Kau tidak perlu melakukan ini, Morgan. Kita bisa menyelesaikannya dengan cara yang lebih baik."

    Morgan menatap Jax dengan sinis. "Kau tidak mengerti, Jax. Ini bukan hanya tentang uang. Ini tentang kekuasaan."

    "Kau akan kehilangan segalanya jika kau melanjutkan rencana ini," kata Lia, berusaha meyakinkan Morgan.

    "Kau pikir aku takut pada ancaman kosong? Aku sudah terlalu jauh terlibat," jawab Morgan, bersikeras.

    "Tapi kau bisa menghentikan semua ini," Jax mendesak. "Bergabunglah dengan kami, dan kita bisa menghentikan kekacauan ini."`,
    choices: [
      { text: 'Tawarkan kesepakatan', next: 'bab9_tawarkan_kesepakatan', action: () => { state.friendship += 1; } },
      { text: 'Tanya tentang rencana lebih lanjut', next: 'bab9_tanya_rencana', action: () => { state.romance += 1; } }
    ]
  },
  bab9_lompat_truk: {
    text: `Jax melompat ke dalam truk, berusaha mengendalikan kemudi. "Hentikan truk ini, Morgan!" teriaknya.

    Morgan berusaha melawan, tetapi Jax berhasil mengunci lengannya. "Kau tidak akan bisa melarikan diri!"

    Dengan usaha keras, Jax berhasil menghentikan truk di tengah jalan. Lia berlari mendekat, siap untuk membantu.

    "Kita harus menghubungi pihak berwenang sekarang!" kata Lia, melihat situasi yang semakin genting.`,
    choices: [
      { text: 'Hubungi polisi', next: 'bab10_hubungi_polisi', action: () => { state.friendship += 2; } },
      { text: 'Bawa Morgan pergi', next: 'bab10_bawa_morgan', action: () => { state.romance += 1; } }
    ]
  },
  bab9_blokir_jalan: {
    text: `Jax dan Lia berusaha memblokir jalan dengan kendaraan lain. Mereka berhasil menghentikan truk, tetapi Morgan sudah bersiap untuk melawan.

    "Kau tidak akan bisa menghentikanku!" teriak Morgan, berusaha melarikan diri.

    Jax dan Lia bersiap untuk menghadapi Morgan, bertekad untuk menghentikan rencana jahatnya.`,
    choices: [
      { text: 'Serang Morgan', next: 'bab10_serang_morgan', action: () => { state.friendship += 1; } },
      { text: 'Coba negosiasi lagi', next: 'bab10_negosiasi_lagi', action: () => { state.romance += 1; } }
    ]
  },
  bab9_tawarkan_kesepakatan: {
    text: `Jax menawarkan kesepakatan kepada Morgan. "Bergabunglah dengan kami, dan kita bisa menghentikan kekacauan ini."

    Morgan terlihat ragu. "Apa yang kau tawarkan?"

    "Kami bisa melindungimu dari konsekuensi. Kita bisa bekerja sama untuk menghentikan jaringan ini," jawab Jax.

    Lia menambahkan, "Kau bisa mendapatkan kembali kepercayaan publik jika kau membantu kami."

    Morgan berpikir sejenak, tetapi kemudian menjawab, "Aku tidak bisa mempercayai kalian."`,
    choices: [
      { text: 'Tanya lebih lanjut tentang rencana', next: 'bab10_tanya_rencana', action: () => { state.friendship += 1; } },
      { text: 'Tawarkan perlindungan', next: 'bab10_tawarkan_perlindungan', action: () => { state.romance += 1; } }
    ]
  },
  bab10_hubungi_polisi: {
    text: `Jax segera menghubungi pihak berwenang. "Kami memiliki informasi tentang pengiriman senjata biologis. Kami butuh bantuan segera!"

    Pihak berwenang merespons dengan cepat, mengirimkan tim untuk menangkap Morgan dan pengawalnya.

    "Kau tidak akan bisa melarikan diri kali ini, Morgan," kata Jax, menatap tajam.

    Morgan terlihat putus asa saat polisi tiba dan menangkapnya. "Kau akan menyesal, Jax!" teriaknya saat dibawa pergi.

    Lia menatap Jax, "Kita berhasil."`,
    choices: [
      { text: 'Rayakan kemenangan', next: 'bab11_rayakan_kemenangan', action: () => { state.friendship += 2; } },
      { text: 'Rencanakan langkah selanjutnya', next: 'bab11_rencanakan_langkah', action: () => { state.romance += 1; } }
    ]
  },
  bab10_bawa_morgan: {
    text: `Jax dan Lia membawa Morgan pergi dari tempat itu, berusaha untuk menghindari perhatian pihak berwenang.

    "Kau tidak bisa melarikan diri dariku, Morgan," kata Jax, menatap tajam.

    Morgan terlihat putus asa, tetapi Jax dan Lia bertekad untuk menghentikan rencana jahatnya.

    "Kita harus segera pergi sebelum mereka menemukan kita," kata Lia, melihat ke sekeliling dengan cemas.`,
    choices: [
      { text: 'Bawa Morgan ke tempat aman', next: 'bab11_bawa_ke_tempat_aman', action: () => { state.friendship += 2; } },
      { text: 'Serahkan Morgan ke pihak berwenang', next: 'bab11_serahkan_ke_pihak_berwenang', action: () => { state.romance += 1; } }
    ]
  },
  bab10_serang_morgan: {
    text: `Jax dan Lia menyerang Morgan, berusaha untuk menghentikannya. Dalam perkelahian sengit, mereka berhasil menjatuhkan Morgan.

    "Hentikan semua ini, Morgan!" teriak Jax, menahan pria itu di tanah.

    Morgan, terdesak, akhirnya mengakui, "Baiklah! Aku akan menghentikan rencana ini."

    Jax dan Lia menatap satu sama lain, menyadari bahwa mereka telah berhasil menghentikan rencana jahat Morgan.`,
    choices: [
      { text: 'Hubungi pihak berwenang', next: 'bab11_hubungi_pihak_berwenang', action: () => { state.friendship += 2; } },
      { text: 'Bawa Morgan pergi', next: 'bab11_bawa_morgan', action: () => { state.romance += 1; } }
    ]
  },
  bab10_negosiasi_lagi: {
    text: `Jax mencoba untuk bernegosiasi lagi dengan Morgan. "Kau bisa menghentikan semua ini. Kami bisa membantumu."

    Morgan terlihat ragu, tetapi Jax dan Lia berusaha meyakinkannya.

    "Kau bisa mendapatkan kembali kepercayaan publik jika kau membantu kami," kata Lia.

    Morgan akhirnya setuju untuk bekerja sama, dan mereka segera menghubungi pihak berwenang untuk menangkap jaringan kriminal yang lebih besar.`,
    choices: [
      { text: 'Rayakan kemenangan', next: 'bab11_rayakan_kemenangan', action: () => { state.friendship += 2; } },
      { text: 'Rencanakan langkah selanjutnya', next: 'bab11_rencanakan_langkah', action: () => { state.romance += 1; } }
    ]
  },
  bab11_rayakan_kemenangan: {
    text: `Setelah berhasil menghentikan rencana Morgan, Jax dan Lia merayakan kemenangan mereka bersama anggota Fist lainnya.

    "Kita berhasil!" teriak Jax, mengangkat gelasnya.

    "Untuk keadilan!" balas Lia, tersenyum lebar.

    Mereka semua bersorak, merayakan keberhasilan mereka dalam menghentikan kekacauan yang hampir terjadi di kota.

    "Ini baru permulaan," kata Jax, menatap Lia. "Kita harus terus berjuang untuk keadilan."`,
    choices: [
      { text: 'Akhiri cerita', next: 'end' },
      { text: 'Rencanakan langkah selanjutnya', next: 'bab11_rencanakan_langkah', action: () => { state.romance += 1; } }
    ]
  },
  bab11_rencanakan_langkah: {
    text: `Jax dan Lia berkumpul dengan anggota Fist lainnya untuk merencanakan langkah selanjutnya.

    "Kita harus memastikan tidak ada lagi jaringan kriminal yang bisa mengancam kota ini," kata Jax.

    Lia mengangguk, "Kita bisa mulai dengan menyelidiki lebih dalam tentang koneksi Morgan dan Victor."

    Mereka semua setuju untuk bekerja sama dan melanjutkan perjuangan mereka demi keadilan di kota.

    "Bersiaplah, karena ini baru permulaan," kata Jax, penuh semangat.`,
    choices: [
      { text: 'Akhiri cerita', next: 'end' }
    ]
  },
  end: {
    text: `Cerita ini berakhir di sini. Jax dan Lia melanjutkan perjuangan mereka untuk keadilan, berkomitmen untuk melindungi kota dari ancaman yang akan datang. 
    Terima kasih telah bermain!`,
    choices: []
  }
};

// Fungsi untuk menyimpan dan memuat state permainan
function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadGame() {
  const savedState = localStorage.getItem(SAVE_KEY);
  if (savedState) {
    Object.assign(state, JSON.parse(savedState));
  }
}

// Fungsi untuk memulai permainan
function startGame() {
  loadGame();
  displayScene(state.currentScene);
}

// Fungsi untuk menampilkan scene
function displayScene(sceneKey) {
  const scene = scenes[sceneKey];
  console.log(scene.text);
  scene.choices.forEach((choice, index) => {
    console.log(`${index + 1}. ${choice.text}`);
  });
}

// Fungsi untuk memilih pilihan
function choose(choiceIndex) {
  const scene = scenes[state.currentScene];
  const choice = scene.choices[choiceIndex - 1];
  if (choice) {
    state.currentScene = choice.next;
    choice.action && choice.action();
    saveGame();
    displayScene(state.currentScene);
  } else {
    console.log("Pilihan tidak valid.");
  }
}

// Memulai permainan
startGame();