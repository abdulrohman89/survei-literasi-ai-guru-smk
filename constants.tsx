// constants.ts
import { Question, ScenarioQuestion } from './types';

// 1. PERBAIKAN REGENCIES (Pastikan semua dalam satu array)
export const REGENCIES = [
  "Kota Bandung", "Kota Bogor", "Kota Bekasi", "Kota Depok", "Kota Cimahi", 
  "Kota Tasikmalaya", "Kota Banjar", "Kota Sukabumi", "Kota Cirebon",
  "Kabupaten Bandung", "Kabupaten Bandung Barat", "Kabupaten Bekasi", 
  "Kabupaten Bogor", "Kabupaten Ciamis", "Kabupaten Cianjur", 
  "Kabupaten Cirebon", "Kabupaten Garut", "Kabupaten Indramayu", 
  "Kabupaten Karawang", "Kabupaten Kuningan", "Kabupaten Majalengka", 
  "Kabupaten Pangandaran", "Kabupaten Purwakarta", "Kabupaten Subang", 
  "Kabupaten Sukabumi", "Kabupaten Sumedang", "Kabupaten Tasikmalaya"
];

// 2. JOB CRAFTING ITEMS
export const JOB_CRAFTING_ITEMS: Question[] = [
  { id: 'JC1', text: 'Saya mencoba mengembangkan diri secara profesional.' },
  { id: 'JC2', text: 'Saya mencoba mempelajari hal-hal baru di tempat kerja.' },
  { id: 'JC3', text: 'Saya mencari tantangan dalam pekerjaan saya.' },
  { id: 'JC4', text: 'Saya meminta umpan balik atas kinerja saya.' },
  { id: 'JC5', text: 'Saya mengambil inisiatif untuk mengerjakan tugas tambahan.' }
];

// 3. AI IMPLEMENTATION ITEMS
export const AI_IMPLEMENTATION_ITEMS: Question[] = [
  { id: 'AI_IMP1', text: 'Saya menggunakan alat AI untuk membantu penyusunan rencana pembelajaran.' },
  { id: 'AI_IMP2', text: 'Saya memanfaatkan AI untuk membuat materi/bahan ajar kreatif.' },
  { id: 'AI_IMP3', text: 'Saya menggunakan AI dalam proses penilaian/asesmen siswa.' },
  { id: 'AI_IMP4', text: 'Saya membantu siswa memahami cara kerja AI dalam praktik di SMK.' }
];

// 4. AI LITERACY ITEMS
export const AI_LITERACY_ITEMS: Question[] = [
  { id: 'AI_LIT1', text: 'Saya memahami konsep dasar cara kerja kecerdasan buatan.' },
  { id: 'AI_LIT2', text: 'Saya mampu membedakan antara sistem AI yang baik dan yang bias.' },
  { id: 'AI_LIT3', text: 'Saya merasa percaya diri menggunakan berbagai tools AI baru.' },
  { id: 'AI_LIT4', text: 'Saya menyadari aspek etika dan privasi saat menggunakan AI.' }
];

// 5. PERFORMANCE SCENARIOS (Penting: Struktur harus konsisten)
export const PERFORMANCE_SCENARIOS: ScenarioQuestion[] = [
  {
    id: 'PS1',
    title: 'Skenario 1',
    text: 'Seorang siswa menggunakan AI untuk mengerjakan seluruh tugas praktiknya. Sebagai guru, tindakan apa yang paling tepat?',
    options: [
      { id: 'A', text: 'Melarang total penggunaan AI dalam semua tugas.' },
      { id: 'B', text: 'Memberikan nilai nol tanpa penjelasan lebih lanjut.' },
      { id: 'C', text: 'Mendiskusikan batasan etika penggunaan AI dan meminta revisi.' },
      { id: 'D', text: 'Membiarkannya selama hasilnya terlihat bagus.' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 'PS2',
    title: 'Skenario 2',
    text: 'Anda ingin meningkatkan efisiensi waktu dalam mengoreksi ujian essai yang berjumlah banyak.',
    options: [
      { id: 'A', text: 'Mengabaikan AI dan tetap mengoreksi manual sepenuhnya.' },
      { id: 'B', text: 'Menggunakan AI sebagai asisten pengoreksi dengan verifikasi manual.' },
      { id: 'C', text: 'Menyerahkan sepenuhnya penilaian kepada AI tanpa dicek kembali.' },
      { id: 'D', text: 'Meminta siswa mengoreksi satu sama lain.' }
    ],
    correctAnswer: 'B'
  }
];