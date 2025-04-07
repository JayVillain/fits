// Kunci localStorage
tconst SAVE_KEY = 'jaxLiaSave';

// Definisi scene narasi\const scenes = {
  prolog: {
    text: `Prolog: Raja Jalanan yang Membeku

Jax dikenal sebagai ketua geng motor Fist—sebuah klan legendaris yang merajai aspal malam di kota pesisir. Dengan jaket kulit hitam dan helm bertato api di punggung, ia memerintah dengan tatapan dingin. Konon, di balik ketenaran dan kekayaannya—hasil warisan keluarga serta keuntungan bisnis bawah tanah—Jax pernah dikhianati oleh seorang wanita yang ia cintai. Sejak itu, hatinya membeku; perempuan baginya hanyalah penjarah rasa dan ambisi.

Malam itu, langit kelam, kilat menyambar, dan hujan mengguyur deras. Jax menepi di sebuah jembatan tua, merasakan rintik air yang menetes di ujung hidungnya. Ia hendak memacu kembali motor V‑Twin kesayangannya, tapi sebuah sosok di balik payung hitam menarik perhatiannya…`,
    choices: [{ text: 'Lanjutkan', next: 'bab1' }]
  },
  bab1: {
    text: `Bab 1: Pertemuan di Bawah Hujan

Jax mematikan mesin. Ia turun, menyibakkan jaketnya, menatap perempuan itu dengan dingin. “Mau apa?” suaranya serendah malam.

Perempuan itu menunduk, rambut basah menempel di pipi. “Tolong… baterai motorku habis. Bisa pinjam power bank?” gumamnya pelan.

Jax mengerutkan alis. Bagi lelaki sepertinya, perempuan di malam begini pasti punya niat tersembunyi. Namun naluri geng motor juga berkata: tolong orang di jalan, sebelum ia menimbulkan masalah. Ia menyerahkan power bank. Mata mereka bertemu—ada getar aneh di balik tatapan dingin Jax.`,
    choices: [{ text: 'Lanjutkan', next: 'bab2' }]
  },
  bab2: {
    text: `Bab 2: Jejak Masa Lalu

Dua tahun lalu, Jax bertemu Alina—wanita cantik pewaris perusahaan teknologi. Cinta mereka meledak cepat, tapi Alina ternyata memanfaatkan Jax untuk menembus jaringan kriminal rival, lalu meninggalkannya di penjara. Sejak itu, Jax berhenti membuka hati.`,
    choices: [{ text: 'Lanjutkan', next: 'bab3' }]
  },
  bab3: {
    text: `Bab 3: Misteri di Balik Payung

Setelah mengisi baterai, perempuan itu mengangkat muka. “Terima kasih, aku Lia,” katanya.

Jax hanya mengangguk, berbalik hendak pergi. Namun, ia merasa ada yang ganjil: jaket Lia—meski basah—ternyata berlogo Crimson Raven, geng motor saingan yang sudah lama ia incar.

Tanpa kata, Jax menarik Lia ke balik tiang jembatan. “Kamu… anggota Crimson Raven?” desaknya.

Lia menelan ludah. “Aku… dulu, ya. Tapi aku cabut setelah tahu rahasia gelap bosku.” Ia menghela napas, matanya sembab. “Mereka merencanakan sesuatu besar malam ini. Aku butuh perlindungan.”`,
    choices: [
      { text: 'Lindungi Lia', next: 'bab5_protect', action: () => { state.trustLia = true; state.helpedLia = true; } },
      { text: 'Tinggalkan dan Ikuti', next: 'bab5_follow', action: () => { state.trustLia = false; state.helpedLia = false; } }
    ]
  },
  bab5_protect: {
    text: `Bab 5: Bayangan di Markas

Di markas Fist, Lia digeledah dan ditempatkan di ruangan aman. Malam-malam berlalu, Lia menceritakan rencana Crimson Raven: serangan ke gudang amunisi polisi kota, yang bisa memicu kekacauan besar. Jax tergerak—meski dinginnya hati, ia tak tega membiarkan warga jadi korban.`,
    choices: [{ text: 'Lanjutkan', next: 'bab6' }]
  },
  bab5_follow: {
    text: `Bab 5: Bayangan dalam Bayangan

Jax menunggui Lia dari kejauhan, menyusuri gang sempit. Saat Lia menyerahkan flash disk berisi rencana itu pada orang misterius, Jax mencuri flash disk tersebut. Lia ketahuan dan hampir tertangkap—Jax harus turun tangan menyelamatkan.`,
    choices: [{ text: 'Lanjutkan', next: 'bab6' }]
  },
  bab6: {
    text: `Bab 6: Bentrokan di Gudang Tua

Di sebuah gudang tua di pelabuhan, Jax dan Fist berhadapan dengan Crimson Raven. Suara mesin motor meraung, peluru berdesing, lampu sorot memantulkan kilat hujan. Jax berdiri di tengah, melindungi Lia yang gemetar.`,
    choices: [
      { text: 'Hadapi Bos Crimson', next: 'bab6_duel', action: () => { state.foughtBoss = true; } },
      { text: 'Evakuasi Lia', next: 'bab6_evacuate', action: () => { state.evacuated = true; } }
    ]
  },
  bab6_duel: {
    text: `Jax menantang bos Crimson Raven dalam duel satu lawan satu. Dengan satu tamparan keras, Jax berhasil menjatuhkan lawannya. Suasana sejenak hening sebelum keributan pecah kembali di luar ring.`,
    choices: [{ text: 'Lanjutkan', next: 'bab7' }]
  },
  bab6_evacuate: {
    text: `Jax mengambil Lia dan berlari keluar gudang, sementara anggota Fist lainnya menahan Crimson Raven. Teriakan dan ledakan kecil mengiringi langkah mereka menjauh.`,
    choices: [{ text: 'Lanjutkan', next: 'bab7' }]
  },
  bab7: {
    text: `Bab 7: Rahasia Terungkap

Dalam kekacauan, Lia terbuka: ia sebenarnya putri komisaris polisi—menyusup ke Crimson Raven untuk menggagalkan rencana mereka. Motivasinya: balas dendam atas kematian ayahnya yang terjebak skema senjata ilegal. Jax terkejut, sekaligus terharu melihat keberanian Lia.`,
    choices: [{ text: 'Lanjutkan', next: 'bab8' }]
  },
  bab8: {
    text: `Bab 8: Titik Balik Hati

Setelah pertarungan usai—Fist menang tipis—Jax menatap Lia. Hujan reda, bulan menampakkan sinarnya.`,
    choices: [{ text: 'Lihat Epilog', next: () => {
        if (state.trustLia && state.foughtBoss) return 'epilog_happy';
        if (!state.trustLia && state.foughtBoss) return 'epilog_bittersweet';
        return 'epilog_tragic';
      }}]
  },
  epilog_happy: {
    text: `Epilog: Fajar Baru

Beberapa bulan kemudian, Jax dan Lia memimpin Fist bersama unit anti-kejahatan gabungan. Geng motor itu kini menjadi pelindung jalanan, membersihkan sisa-sisa kriminalitas. Di balik jaket kulit dan helm, tersimpan kisah cinta yang lahir di bawah hujan deras—kisah dua jiwa yang dulu saling curiga, kini bersatu untuk sebuah harapan baru.`,
    choices: []
  },
  epilog_bittersweet: {
    text: `Epilog: Jejak yang Hilang

Jax kalah duel dan menghilang setelah malam itu. Lia meneruskan misinya di kepolisian, membawa kenangan pahit tentang pria dingin yang pernah melindunginya.`,
    choices: []
  },
  epilog_tragic: {
    text: `Epilog: Penyesalan Abadi

Dalam pelarian, Lia terluka parah. Jax menyesal seumur hidup karena tak bisa menyelamatkannya. Suara hujan malam itu selamanya terngiang di hatinya.`,
    choices: []
  }
};

// State game\const state = {
  currentScene: 'prolog',
  trustLia: false,
  helpedLia: false,
  foughtBoss: false,
  evacuated: false
};

// Render scene
function renderScene() {
  const scene = scenes[state.currentScene];
  document.getElementById('text').innerText = scene.text;
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  scene.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.innerText = choice.text;
    btn.className = 'choice';
    btn.onclick = () => {
      if (choice.action) choice.action();
      const nextKey = typeof choice.next === 'function' ? choice.next() : choice.next;
      if (nextKey) {
        state.currentScene = nextKey;
        renderScene();
      }
    };
    choicesDiv.appendChild(btn);
  });
}

// Save & Loadunction saveGame()
 {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  alert('Game tersimpan!');
}
function loadGame() {
  const data = localStorage.getItem(SAVE_KEY);
  if (!data) return alert('Tidak ada data save.');
  Object.assign(state, JSON.parse(data));
  renderScene();
  alert('Game dimuat!');
}

document.getElementById('saveBtn').addEventListener('click', saveGame);
document.getElementById('loadBtn').addEventListener('click', loadGame);

// Mulai game
renderScene();