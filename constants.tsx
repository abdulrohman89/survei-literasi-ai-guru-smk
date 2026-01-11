
import { Question, ScenarioQuestion } from './types';

export const REGENCIES = [
  "Kab. Bandung", "Kab. Bandung Barat", "Kab. Bekasi", "Kab. Bogor", "Kab. Ciamis",
  "Kab. Cianjur", "Kab. Cirebon", "Kab. Garut", "Kab. Indramayu", "Kab. Karawang",
  "Kab. Kuningan", "Kab. Majalengka", "Kab. Pangandaran", "Kab. Purwakarta",
  "Kab. Subang", "Kab. Sukabumi", "Kab. Sumedang", "Kab. Tasikmalaya",
  "Kota Bandung", "Kota Banjar", "Kota Bekasi", "Kota Bogor", "Kota Cimahi",
  "Kota Cirebon", "Kota Depok", "Kota Sukabumi", "Kota Tasikmalaya"
];

export const JOB_CRAFTING_ITEMS: Question[] = [
  { id: 'M1', dimension: 'Structural Job Resources', text: 'Saya berusaha mengembangkan kompetensi profesional untuk meningkatkan kualitas pembelajaran saya.' },
  { id: 'M2', dimension: 'Structural Job Resources', text: 'Saya mencari cara kerja yang lebih efektif agar tugas mengajar menjadi lebih terkelola.' },
  { id: 'M3', dimension: 'Structural Job Resources', text: 'Saya meningkatkan otonomi dalam menentukan strategi mengajar yang paling sesuai bagi siswa saya.' },
  { id: 'M4', dimension: 'Structural Job Resources', text: 'Saya memanfaatkan pelatihan atau sumber belajar untuk memperkuat keterampilan kerja saya.' },
  { id: 'M5', dimension: 'Social Job Resources', text: 'Saya meminta umpan balik dari rekan sejawat untuk meningkatkan kualitas mengajar.' },
  { id: 'M6', dimension: 'Social Job Resources', text: 'Saya berdiskusi dengan pimpinan atau koordinator program keahlian untuk memperoleh dukungan kerja.' },
  { id: 'M7', dimension: 'Social Job Resources', text: 'Saya membangun kolaborasi dengan guru lain untuk berbagi praktik baik pembelajaran.' },
  { id: 'M8', dimension: 'Social Job Resources', text: 'Saya mencari komunitas profesional untuk memperluas jejaring dan pembelajaran kolektif.' },
  { id: 'M9', dimension: 'Challenging Job Demands', text: 'Saya mengambil inisiatif terlibat dalam inovasi pembelajaran di sekolah.' },
  { id: 'M10', dimension: 'Challenging Job Demands', text: 'Saya mencoba pendekatan pembelajaran baru ketika ada kesempatan.' },
  { id: 'M11', dimension: 'Challenging Job Demands', text: 'Saya tertarik mengambil peran tambahan yang menantang untuk pengembangan sekolah.' },
  { id: 'M12', dimension: 'Challenging Job Demands', text: 'Saya menjadikan perubahan tuntutan kerja sebagai peluang untuk berkembang.' },
  { id: 'M13', dimension: 'Hindering Job Demands', text: 'Saya mengatur strategi agar beban administratif tidak mengganggu fokus pembelajaran.' },
  { id: 'M14', dimension: 'Hindering Job Demands', text: 'Saya mencari cara untuk mengurangi stres kerja yang menghambat kinerja mengajar.' },
  { id: 'M15', dimension: 'Hindering Job Demands', text: 'Saya mengelola tuntutan kerja yang melelahkan secara emosional agar tetap profesional.' },
  { id: 'M16', dimension: 'Hindering Job Demands', text: 'Saya memprioritaskan pekerjaan yang paling berdampak pada pembelajaran siswa ketika waktu terbatas.' }
];

export const AI_IMPLEMENTATION_ITEMS: Question[] = [
  { id: 'Y1', dimension: 'Desain Instruksional', text: 'Dalam pembelajaran yang pernah saya lakukan, saya menggunakan sistem yang menganalisis data siswa untuk membantu perencanaan pembelajaran' },
  { id: 'Y2', dimension: 'Desain Instruksional', text: 'Saya memanfaatkan rekomendasi sistem berbasis data untuk menyusun diferensiasi atau jalur belajar adaptif' },
  { id: 'Y3', dimension: 'Desain Instruksional', text: 'Saya menggunakan bantuan sistem berbasis AI untuk mengidentifikasi kesenjangan kompetensi siswa dan merancang strategi pembelajaran' },
  { id: 'Y4', dimension: 'Asesmen Adaptif', text: 'Saya menggunakan sistem yang menyesuaikan kesulitan penilaian berdasarkan respons siswa.' },
  { id: 'Y5', dimension: 'Asesmen Adaptif', text: 'Saya memanfaatkan hasil asesmen adaptif untuk memperoleh profil kemampuan siswa yang lebih akurat.' },
  { id: 'Y6', dimension: 'Asesmen Adaptif', text: 'Saya memanfaatkan sistem yang memberi rekomendasi tindak lanjut berdasarkan hasil penilaian siswa.' },
  { id: 'Y7', dimension: 'Umpan Balik Otomatis', text: 'Saya menggunakan sistem berbasis AI yang memberi umpan balik otomatis untuk mempercepat siklus evaluasi belajar' },
  { id: 'Y8', dimension: 'Umpan Balik Otomatis', text: 'Saya menggunakan umpan balik otomatis yang dipersonalisasi untuk membantu siswa memperbaiki kinerja.' },
  { id: 'Y9', dimension: 'Umpan Balik Otomatis', text: 'Saya memeriksa kualitas umpan balik otomatis sebelum dijadikan dasar keputusan pembelajaran.' },
  { id: 'Y10', dimension: 'Learning Analytics', text: 'Saya menggunakan analitik pembelajaran berbasis data untuk memantau kemajuan dan risiko belajar siswa' },
  { id: 'Y11', dimension: 'Learning Analytics', text: 'Saya menggunakan data hasil belajar untuk menentukan intervensi atau dukungan belajar yang dibutuhkan siswa.' },
  { id: 'Y12', dimension: 'Learning Analytics', text: 'Saya menggunakan informasi berbasis data untuk mengambil keputusan instruksional yang lebih tepat.' },
  { id: 'Y13', dimension: 'Simulasi/Praktik', text: 'Saya menggunakan simulasi berbasis AI yang memungkinkan latihan adaptif dan berulang sesuai kebutuhan siswa' },
  { id: 'Y14', dimension: 'Simulasi/Praktik', text: 'Saya menggunakan simulasi atau virtual lab yang memungkinkan latihan berulang dan aman untuk kompetensi kejuruan.' },
  { id: 'Y15', dimension: 'Simulasi/Praktik', text: 'Saya menyesuaikan skenario latihan berbasis simulasi agar mendekati situasi industri dan kebutuhan kompetensi siswa.' }
];

export const AI_LITERACY_ITEMS: Question[] = [
  { id: 'X1', dimension: 'Understanding', text: 'Saya memahami perbedaan AI dengan penggunaan ICT biasa (misalnya PowerPoint, WhatsApp, LMS).' },
  { id: 'X2', dimension: 'Understanding', text: 'Saya memahami bahwa sistem AI belajar dari data dan dapat menghasilkan prediksi atau rekomendasi.' },
  { id: 'X3', dimension: 'Understanding', text: 'Saya memahami keterbatasan AI sehingga output AI perlu diverifikasi sebelum digunakan.' },
  { id: 'X4', dimension: 'Understanding', text: 'Saya memahami konsep AI yang paling relevan dengan mata pelajaran dan kompetensi keahlian yang saya ampu.' },
  { id: 'X5', dimension: 'Understanding', text: 'Saya memperbarui pemahaman tentang AI seiring perkembangan terbaru dalam pendidikan.' },
  { id: 'X6', dimension: 'Use', text: 'Saya menyesuaikan penggunaan alat AI dengan kondisi perangkat dan akses teknologi di sekolah saya.' },
  { id: 'X7', dimension: 'Use', text: 'Saya memilih alat AI yang sesuai dengan materi pelajaran atau jurusan yang saya ajarkan.' },
  { id: 'X8', dimension: 'Use', text: 'Saya menggunakan AI untuk membantu merancang materi ajar yang otentik dan spesifik bidang kejuruan.' },
  { id: 'X9', dimension: 'Use', text: 'Saya menggunakan AI untuk membantu mengurangi beban kerja tertentu seperti penyusunan soal atau umpan balik.' },
  { id: 'X10', dimension: 'Use', text: 'Saya mencoba dan mengevaluasi alat AI baru untuk meningkatkan kualitas pembelajaran dari waktu ke waktu.' },
  { id: 'X11', dimension: 'Detection', text: 'Saya mampu mengenali ketika sistem digital yang digunakan sekolah memiliki fitur AI meskipun tidak disebutkan secara eksplisit.' },
  { id: 'X12', dimension: 'Detection', text: 'Saya memeriksa akurasi output AI dengan membandingkannya pada sumber lain sebelum dipakai dalam pembelajaran.' },
  { id: 'X13', dimension: 'Detection', text: 'Saya menilai kesesuaian output AI dengan standar kompetensi dan kebutuhan praktik kejuruan.' },
  { id: 'X14', dimension: 'Detection', text: 'Saya mampu mengidentifikasi potensi bias atau ketidakadilan pada output AI (misalnya pada penilaian siswa).' },
  { id: 'X15', dimension: 'Detection', text: 'Saya menyesuaikan cara verifikasi output AI seiring munculnya alat AI generasi baru.' },
  { id: 'X16', dimension: 'Ethics', text: 'Dalam praktik penggunaan AI yang pernah saya lakukan, saya memastikan data siswa digunakan sesuai prinsip privasi' },
  { id: 'X17', dimension: 'Ethics', text: 'Saya menghindari memasukkan data pribadi siswa ke sistem AI yang tidak jelas kebijakan datanya' },
  { id: 'X18', dimension: 'Ethics', text: 'Saat menggunakan sistem berbasis AI untuk penilaian, saya mempertimbangkan potensi bias dan keadilan hasil yang dihasilkan' },
  { id: 'X19', dimension: 'Ethics', text: 'Saya pernah menjelaskan kepada siswa batasan penggunaan AI agar tidak menurunkan integritas pembelajaran' },
  { id: 'X20', dimension: 'Ethics', text: 'Saya memperbarui pemahaman etika penggunaan AI ketika terdapat kebijakan atau regulasi baru yang relevan' },
  { id: 'X21', dimension: 'Creation', text: 'Saya mampu merancang prompt yang menghasilkan materi ajar sesuai konteks jurusan saya.' },
  { id: 'X22', dimension: 'Creation', text: 'Saya mampu menyusun alur kerja penggunaan AI (workflow) dari perencanaan hingga evaluasi pembelajaran.' },
  { id: 'X23', dimension: 'Creation', text: 'Saya memodifikasi hasil AI agar lebih sesuai dengan karakteristik siswa dan konteks sekolah.' },
  { id: 'X24', dimension: 'Creation', text: 'Saya mampu mengombinasikan beberapa alat AI untuk menghasilkan satu produk pembelajaran (misalnya modul, rubrik, soal, atau simulasi).' },
  { id: 'X25', dimension: 'Creation', text: 'Saya meningkatkan keterampilan membuat workflow AI seiring tuntutan pembelajaran dan asesmen yang berubah.' },
  { id: 'X26', dimension: 'Self Efficacy', text: 'Saya yakin mampu mempelajari fitur AI baru meskipun tidak selalu ada pendampingan atau pelatihan formal' },
  { id: 'X27', dimension: 'Self Efficacy', text: 'Saya yakin dapat memilih AI yang tepat untuk tujuan pembelajaran, bukan sekadar mengikuti tren.' },
  { id: 'X28', dimension: 'Self Efficacy', text: 'Saya yakin dapat mengintegrasikan AI ke strategi pedagogi vokasi yang saya gunakan dalam pembelajaran' },
  { id: 'X29', dimension: 'Self Efficacy', text: 'Saya yakin dapat memperbaiki penggunaan AI ketika hasilnya kurang sesuai.' },
  { id: 'X30', dimension: 'Self Efficacy', text: 'Saya yakin dapat menggunakan AI meskipun fasilitas sekolah tidak selalu ideal.' },
  { id: 'X31', dimension: 'Self-Management', text: 'Saya secara sadar membatasi penggunaan AI agar tidak menggantikan penilaian profesional saya sebagai guru' },
  { id: 'X32', dimension: 'Self-Management', text: 'Saya membatasi ketergantungan pada AI agar tetap aktif merancang pembelajaran secara mandiri' },
  { id: 'X33', dimension: 'Self-Management', text: 'Saya tetap menjaga kualitas interaksi belajar dengan siswa meskipun menggunakan AI dalam pembelajaran' },
  { id: 'X34', dimension: 'Self-Management', text: 'Saya mengelola emosi ketika AI menghasilkan output yang salah atau tidak sesuai.' },
  { id: 'X35', dimension: 'Self-Management', text: 'Saya menggunakan AI secara proporsional sesuai tujuan pembelajaran, bukan hanya untuk mempercepat pekerjaan' }
];

export const PERFORMANCE_SCENARIOS: ScenarioQuestion[] = [
  // AI Literacy Scenarios
  {
    id: 'PB-AI1',
    title: 'Literasi AI: AI vs ICT',
    text: 'Sekolah menggunakan aplikasi pembelajaran yang hanya menyimpan materi dan mengirim tugas. Sistem tidak menganalisis data siswa dan tidak memberi rekomendasi.',
    options: [
      { id: 'A', text: 'Sistem ini termasuk AI karena mendukung proses pembelajaran digital' },
      { id: 'B', text: 'Sistem ini dapat disebut AI jika ditambahkan fitur personalisasi' },
      { id: 'C', text: 'Sistem ini termasuk ICT karena belum menganalisis data atau memberi rekomendasi' },
      { id: 'D', text: 'Sistem ini sudah cerdas karena mempermudah manajemen kelas' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 'PB-AI2',
    title: 'Literasi AI: Evaluasi Output',
    text: 'Sistem menghasilkan rubrik praktik yang rapi, tetapi beberapa indikator tidak sesuai standar kompetensi keahlian.',
    options: [
      { id: 'A', text: 'Menggunakan rubrik tersebut sambil menyesuaikan penilaian secara lisan' },
      { id: 'B', text: 'Mengganti rubrik dengan contoh dari internet' },
      { id: 'C', text: 'Menjadikan rubrik sebagai referensi tanpa digunakan langsung' },
      { id: 'D', text: 'Merevisi rubrik berdasarkan standar kompetensi dan konteks siswa' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 'PB-AI3',
    title: 'Literasi AI: Bias Penilaian',
    text: 'Sistem secara konsisten merekomendasikan nilai lebih rendah pada kelompok siswa tertentu tanpa penjelasan yang jelas.',
    options: [
      { id: 'A', text: 'Menerima rekomendasi karena berbasis data historis' },
      { id: 'B', text: 'Menghentikan penggunaan sistem tanpa analisis lebih lanjut' },
      { id: 'C', text: 'Menyesuaikan nilai secara manual agar tampak adil' },
      { id: 'D', text: 'Menelaah data, kriteria, dan proses rekomendasi untuk mendeteksi potensi bias' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 'PB-AI4',
    title: 'Literasi AI: Privasi Siswa',
    text: 'Anda ingin memasukkan contoh jawaban siswa ke layanan daring yang belum jelas kebijakan datanya.',
    options: [
      { id: 'A', text: 'Mengunggah data lengkap agar analisis lebih akurat' },
      { id: 'B', text: 'Mengunggah data setelah menghapus identitas dan memastikan penggunaan minimal data' },
      { id: 'C', text: 'Menyimpan data di media pribadi tanpa perlindungan tambahan' },
      { id: 'D', text: 'Membagikan data ke komunitas guru agar mendapat masukan' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 'PB-AI5',
    title: 'Literasi AI: Profesional Needs SMK',
    text: 'Sistem memberikan materi umum yang kurang sesuai dengan kompetensi keahlian yang Anda ajarkan.',
    options: [
      { id: 'A', text: 'Menggunakan materi umum agar pembelajaran tetap berjalan' },
      { id: 'B', text: 'Menghentikan penggunaan sistem karena tidak relevan' },
      { id: 'C', text: 'Menyerahkan pengayaan materi kepada siswa' },
      { id: 'D', text: 'Menyesuaikan prompt dan memodifikasi output agar sesuai konteks jurusan' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 'PB-AI6',
    title: 'Literasi AI: Dynamic Development',
    text: 'Pembaruan sistem mengubah cara rekomendasi pembelajaran dihasilkan.',
    options: [
      { id: 'A', text: 'Tetap menggunakan cara lama karena sudah terbiasa' },
      { id: 'B', text: 'Menunggu panduan resmi sebelum mencoba' },
      { id: 'C', text: 'Mempelajari perubahan, menguji coba, dan menyesuaikan praktik pembelajaran' },
      { id: 'D', text: 'Menyerahkan seluruh keputusan pada sistem baru' }
    ],
    correctAnswer: 'C'
  },
  // Job Crafting Scenarios
  {
    id: 'PB-JC1',
    title: 'Job Crafting: Hindering Demands',
    text: 'Beban administrasi mulai mengganggu persiapan pembelajaran.',
    options: [
      { id: 'A', text: 'Mengurangi kualitas persiapan agar semua tugas selesai' },
      { id: 'B', text: 'Menyusun strategi prioritas dan mengurangi beban yang menghambat pembelajaran' },
      { id: 'C', text: 'Mengambil tambahan tugas agar terlihat produktif' },
      { id: 'D', text: 'Menunda pembelajaran inovatif sampai beban berkurang' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 'PB-JC2',
    title: 'Job Crafting: Social Resources',
    text: 'Anda membutuhkan dukungan untuk menerapkan inovasi pembelajaran.',
    options: [
      { id: 'A', text: 'Mengandalkan pengalaman pribadi agar tidak bergantung pada orang lain' },
      { id: 'B', text: 'Menunggu instruksi resmi sebelum bertindak' },
      { id: 'C', text: 'Mencari umpan balik, kolaborasi rekan, dan dukungan pimpinan' },
      { id: 'D', text: 'Mengurangi inovasi agar pekerjaan lebih ringan' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 'PB-JC3',
    title: 'Job Crafting: Structural Resources',
    text: 'Anda merasa kompetensi belum cukup menghadapi tuntutan baru.',
    options: [
      { id: 'A', text: 'Menunggu pelatihan formal dari sekolah' },
      { id: 'B', text: 'Menolak perubahan agar beban tidak bertambah' },
      { id: 'C', text: 'Mengurangi persiapan pembelajaran sementara' },
      { id: 'D', text: 'Proaktif belajar dan mencari sumber untuk meningkatkan kompetensi' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 'PB-JC4',
    title: 'Job Crafting: Challenging Demands',
    text: 'Sekolah membuka kesempatan terlibat dalam proyek inovasi pembelajaran.',
    options: [
      { id: 'A', text: 'Menolak karena bukan tugas utama' },
      { id: 'B', text: 'Menghindari keterlibatan agar fokus mengajar' },
      { id: 'C', text: 'Mengambil peran menantang sebagai peluang pengembangan profesional' },
      { id: 'D', text: 'Menunda keterlibatan sampai ada kewajiban resmi' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 'PB-JC5',
    title: 'Job Crafting: Kombinasi Adaptif',
    text: 'Waktu terbatas, tetapi sekolah mendorong inovasi pembelajaran.',
    options: [
      { id: 'A', text: 'Memaksakan semua tuntutan tanpa prioritas' },
      { id: 'B', text: 'Mengabaikan inovasi demi menyelesaikan tugas rutin' },
      { id: 'C', text: 'Menentukan prioritas berdampak tinggi dan mencari dukungan untuk mengurangi hambatan' },
      { id: 'D', text: 'Menyalahkan kondisi sekolah tanpa perubahan strategi' }
    ],
    correctAnswer: 'C'
  },
  // AI Implementation Scenarios
  {
    id: 'PB-IMP1',
    title: 'Implementasi AI: Desain Instruksional',
    text: 'Anda ingin membuat jalur belajar berbeda untuk siswa dengan kecepatan belajar yang berbeda.',
    options: [
      { id: 'A', text: 'Membagi siswa secara manual berdasarkan pengamatan' },
      { id: 'B', text: 'Mengirim materi yang sama untuk semua siswa' },
      { id: 'C', text: 'Menggunakan sistem yang menganalisis performa siswa dan merekomendasikan jalur belajar adaptif' },
      { id: 'D', text: 'Menambah jumlah latihan tanpa penyesuaian' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 'PB-IMP2',
    title: 'Implementasi AI: Asesmen Adaptif',
    text: 'Anda ingin penilaian menyesuaikan kemampuan siswa secara real time.',
    options: [
      { id: 'A', text: 'Menggunakan ujian tertulis standar' },
      { id: 'B', text: 'Mengulang soal yang sama untuk semua siswa' },
      { id: 'C', text: 'Memberi nilai rata-rata agar adil' },
      { id: 'D', text: 'Menggunakan sistem yang menyesuaikan kesulitan soal berdasarkan respons siswa' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 'PB-IMP3',
    title: 'Implementasi AI: Feedback Otomatis',
    text: 'Anda ingin mempercepat umpan balik tanpa menambah beban kerja.',
    options: [
      { id: 'A', text: 'Mengurangi jumlah tugas siswa' },
      { id: 'B', text: 'Menggunakan komentar template pada LMS' },
      { id: 'C', text: 'Mengandalkan diskusi kelas sebagai umpan balik utama' },
      { id: 'D', text: 'Menggunakan sistem yang menganalisis jawaban siswa dan memberi umpan balik otomatis' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 'PB-IMP4',
    title: 'Implementasi AI: Simulasi Praktik',
    text: 'Sekolah kekurangan alat praktik untuk pembelajaran kejuruan.',
    options: [
      { id: 'A', text: 'Menghapus kegiatan praktik' },
      { id: 'B', text: 'Mengganti praktik dengan presentasi' },
      { id: 'C', text: 'Menggunakan simulasi berbasis AI yang memungkinkan latihan adaptif dan berulang' },
      { id: 'D', text: 'Menambah tugas membaca sebagai pengganti' }
    ],
    correctAnswer: 'C'
  }
];
