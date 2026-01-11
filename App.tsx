
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Step, 
  SurveyState, 
  RespondentData, 
  LikertValue,
  Question 
} from './types';
import { 
  REGENCIES, 
  JOB_CRAFTING_ITEMS, 
  AI_IMPLEMENTATION_ITEMS, 
  AI_LITERACY_ITEMS, 
  PERFORMANCE_SCENARIOS 
} from './constants';
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  Award, 
  GraduationCap, 
  School, 
  ChevronLeft, 
  UserCheck,
  Phone,
  Mail,
  ChevronRight,
  Info,
  BrainCircuit,
  Settings,
  ShieldCheck,
  Target
} from 'lucide-react';

const INITIAL_STATE: SurveyState = {
  respondent: {
    fullName: '',
    schoolName: '',
    regency: '',
    phoneNumber: '',
    subject: '',
    age: '',
    teachingExperience: '',
  },
  jobCraftingAnswers: {},
  aiImplementationAnswers: {},
  aiLiteracyAnswers: {},
  performanceAnswers: {},
};

const getLikertLabels = (statement: string) => {
  const s = statement.toLowerCase();
  if (s.includes('memahami')) {
    return ['Tidak paham', 'Sedikit', 'Cukup', 'Paham', 'Sangat'];
  }
  if (s.includes('mampu') || s.includes('dapat')) {
    return ['Tidak mampu', 'Kurang', 'Cukup', 'Mampu', 'Sangat'];
  }
  if (s.includes('yakin')) {
    return ['Tidak yakin', 'Kurang', 'Cukup', 'Yakin', 'Sangat'];
  }
  if (s.includes('setuju')) {
    return ['STS', 'TS', 'Ragu', 'S', 'SS'];
  }
  return ['Tdk Pernah', 'Jarang', 'Kadang', 'Sering', 'Selalu'];
};

export default function App() {
  const [step, setStep] = useState<Step>(Step.Welcome);
  const [state, setState] = useState<SurveyState>(INITIAL_STATE);

  const isFormValid = useMemo(() => {
    const r = state.respondent;
    return r.fullName && r.schoolName && r.regency && r.phoneNumber && r.subject && r.age && r.teachingExperience;
  }, [state.respondent]);

  const handleRespondentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      respondent: { ...prev.respondent, [name]: value }
    }));
  };

  const setLikertAnswer = (section: 'jobCraftingAnswers' | 'aiImplementationAnswers' | 'aiLiteracyAnswers', id: string, value: LikertValue) => {
    setState(prev => ({
      ...prev,
      [section]: { ...prev[section], [id]: value }
    }));
  };

  const setPerformanceAnswer = (id: string, choice: 'A' | 'B' | 'C' | 'D', confidence: number) => {
    setState(prev => ({
      ...prev,
      performanceAnswers: {
        ...prev.performanceAnswers,
        [id]: { choice, confidence }
      }
    }));
  };

  const navigateStep = (target: Step) => {
    setStep(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 md:py-8 min-h-screen flex flex-col justify-center">
      <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative">
        
        {step === Step.Welcome && (
          <div className="p-6 md:p-12 space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <img 
                  src="https://4.bp.blogspot.com/-NR-PTG-73fk/VP38zK3Fo2I/AAAAAAAACEQ/i0weJ6M6tps/s1600/logo-upi.jpg" 
                  alt="Logo UPI" 
                  className="w-24 h-24 object-contain mx-auto"
                />
              </div>
              <div>
                <h3 className="text-sm font-black text-blue-800 uppercase tracking-[0.2em]">Universitas Pendidikan Indonesia</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sekolah Pascasarjana - Pendidikan Teknologi dan Kejuruan</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h1 className="text-2xl md:text-3xl font-black text-black leading-tight max-w-3xl mx-auto">
                Peran Mediasi Job Crafting dalam Pengaruh Literasi AI Terhadap Implementasi Pembelajaran pada Guru SMK
              </h1>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 text-center border border-slate-200">
              <h2 className="text-xl font-black text-black mb-2">Assalamu'alaikum / Selamat Datang</h2>
              <p className="text-slate-800 font-medium text-sm leading-relaxed">
                Yth. Bapak/Ibu Guru SMK di Jawa Barat. Partisipasi Anda dalam pengisian kuesioner ini sangat berarti bagi pengembangan ilmu pengetahuan dan kualitas pendidikan vokasi di Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <UserCheck className="text-blue-600" size={20} />
                  <h4 className="font-black text-black text-xs uppercase tracking-widest">Peneliti Utama</h4>
                </div>
                <div>
                  <p className="font-black text-lg text-black">Abdul Rohman</p>
                </div>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-black">
                    <Phone size={14} className="text-blue-600" /> 081320380402
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black">
                    <Mail size={14} className="text-blue-600" /> arassh89@upi.edu
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <GraduationCap className="text-blue-600" size={20} />
                  <h4 className="font-black text-black text-xs uppercase tracking-widest">Tim Pembimbing</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <p className="font-black text-sm text-black">Prof. Dr. Tuti Suartini, M.Pd</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Pembimbing I</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-black text-sm text-black">Dr. Saripudin, S.Pd, M.T</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Pembimbing II</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-700 rounded-3xl p-6 text-white shadow-xl flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl">
                <Award className="w-8 h-8 text-yellow-300" />
              </div>
              <p className="text-xs md:text-sm font-bold leading-relaxed">
                Sebagai apresiasi, tersedia <strong>Pulsa/E-Wallet Rp 100.000</strong> untuk 15 responden yang mengisi data secara lengkap dan jujur.
              </p>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <button 
                onClick={() => navigateStep(Step.RespondentInfo)}
                className="w-full md:w-auto bg-black text-white px-12 py-5 rounded-[2rem] font-black text-xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                Mulai Mengisi Kuesioner <ArrowRight size={24} />
              </button>
            </div>
          </div>
        )}

        {step === Step.RespondentInfo && (
          <div className="p-6 md:p-10 space-y-6 animate-in slide-in-from-right duration-500">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="bg-blue-100 p-2 rounded-xl text-blue-700"><User size={20} /></div>
              <h3 className="text-xl font-black text-black">Data Diri Responden</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="fullName" label="Nama Lengkap & Gelar" value={state.respondent.fullName} onChange={handleRespondentChange} placeholder="Contoh: Budi, S.Pd" />
              <Input name="schoolName" label="Asal SMK" value={state.respondent.schoolName} onChange={handleRespondentChange} placeholder="Contoh: SMKN 1 Bandung" />
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-black uppercase tracking-widest">Kota/Kabupaten</label>
                <select name="regency" value={state.respondent.regency} onChange={handleRespondentChange} className="p-3 border-2 border-slate-200 rounded-xl text-sm font-bold text-black outline-none focus:border-blue-600 bg-white">
                  <option value="">Pilih Lokasi</option>
                  {REGENCIES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <Input name="phoneNumber" label="WhatsApp (Aktif)" value={state.respondent.phoneNumber} onChange={handleRespondentChange} placeholder="08..." />
              <Input name="subject" label="Mata Pelajaran" value={state.respondent.subject} onChange={handleRespondentChange} />
              <div className="grid grid-cols-2 gap-2">
                <Input name="age" label="Usia" type="number" value={state.respondent.age} onChange={handleRespondentChange} />
                <Input name="teachingExperience" label="Masa Kerja (Tahun)" type="number" value={state.respondent.teachingExperience} onChange={handleRespondentChange} />
              </div>
            </div>
            <div className="flex gap-3 pt-4">
              <button onClick={() => navigateStep(Step.Welcome)} className="flex-1 py-4 rounded-2xl font-black text-black border-2 border-slate-200 hover:bg-slate-50 transition-all">Kembali</button>
              <button 
                disabled={!isFormValid}
                onClick={() => navigateStep(Step.JobCraftingIntro)}
                className={`flex-[2] py-4 rounded-2xl font-black text-white transition-all shadow-lg ${isFormValid ? 'bg-blue-700' : 'bg-slate-300'}`}
              >
                Lanjut ke Kuesioner
              </button>
            </div>
          </div>
        )}

        {/* Section Introductions */}
        {step === Step.JobCraftingIntro && (
          <SectionIntro 
            title="Bagian A: Perilaku Kerja (Job Crafting)"
            description="Bagian ini mengukur sejauh mana Anda secara proaktif melakukan penyesuaian pada pekerjaan Anda untuk menciptakan keselarasan yang lebih baik antara tuntutan tugas dengan kemampuan serta minat Anda."
            instruction="Pilihlah angka 1-5 berdasarkan seberapa sering atau seberapa setuju Anda dengan pernyataan yang diberikan. Ingat, tidak ada jawaban benar atau salah. Mohon menjawab sejujur-jujurnya sesuai dengan praktik yang benar-benar Anda lakukan sehari-hari."
            icon={<Settings className="text-blue-600" size={32} />}
            onBack={() => navigateStep(Step.RespondentInfo)}
            onNext={() => navigateStep(Step.JobCrafting)}
          />
        )}

        {step === Step.AiImplementationIntro && (
          <SectionIntro 
            title="Bagian B: Implementasi Pembelajaran Berbasis AI"
            description="Variabel ini mengamati tingkat penerapan teknologi kecerdasan buatan (Artificial Intelligence) yang benar-benar telah Anda integrasikan dalam proses belajar mengajar di kelas."
            instruction="Sebutkan tingkat penggunaan Anda pada sistem-sistem yang disebutkan. Skala 1 (Tidak Pernah) hingga 5 (Selalu). Kejujuran Anda sangat penting untuk memetakan kondisi nyata penggunaan AI di SMK saat ini."
            icon={<BrainCircuit className="text-purple-600" size={32} />}
            onBack={() => navigateStep(Step.JobCrafting)}
            onNext={() => navigateStep(Step.AiImplementation)}
          />
        )}

        {step === Step.AiLiteracyIntro && (
          <SectionIntro 
            title="Bagian C: Literasi & Kapabilitas AI"
            description="Bagian ini bertujuan untuk mengetahui tingkat pemahaman, kemampuan praktis, kepatuhan etika, serta kepercayaan diri Anda dalam menghadapi teknologi AI."
            instruction="Gunakan skala 1-5 untuk menggambarkan kompetensi Anda. Jawablah berdasarkan apa yang benar-benar Anda pahami dan kuasai saat ini, bukan berdasarkan apa yang seharusnya dipahami. Penilaian ini bersifat pribadi dan rahasia."
            icon={<ShieldCheck className="text-emerald-600" size={32} />}
            onBack={() => navigateStep(Step.AiImplementation)}
            onNext={() => navigateStep(Step.AiLiteracy)}
          />
        )}

        {step === Step.PerformanceBasedIntro && (
          <SectionIntro 
            title="Bagian D: Tes Berbasis Kinerja (Performance Test)"
            description="Berbeda dengan bagian sebelumnya yang bersifat persepsi, bagian ini menyajikan skenario situasi nyata yang mungkin Anda hadapi dalam dunia pendidikan SMK terkait AI dan pekerjaan."
            instruction="Anda akan diberikan sebuah situasi/kasus. Pilihlah satu tindakan terbaik dari pilihan yang tersedia, lalu tentukan tingkat keyakinan Anda terhadap pilihan tersebut. Bagian ini mengukur pengambilan keputusan praktis Anda."
            icon={<Target className="text-orange-600" size={32} />}
            onBack={() => navigateStep(Step.AiLiteracy)}
            onNext={() => navigateStep(Step.PerformanceBased)}
          />
        )}

        {[Step.JobCrafting, Step.AiImplementation, Step.AiLiteracy].includes(step) && (
          <QuestionWizard 
            step={step}
            items={
              step === Step.JobCrafting ? JOB_CRAFTING_ITEMS : 
              step === Step.AiImplementation ? AI_IMPLEMENTATION_ITEMS : 
              AI_LITERACY_ITEMS
            }
            answers={
              step === Step.JobCrafting ? state.jobCraftingAnswers : 
              step === Step.AiImplementation ? state.aiImplementationAnswers : 
              state.aiLiteracyAnswers
            }
            onAnswer={(id, val) => setLikertAnswer(
              step === Step.JobCrafting ? 'jobCraftingAnswers' : 
              step === Step.AiImplementation ? 'aiImplementationAnswers' : 
              'aiLiteracyAnswers', 
              id, val
            )}
            onComplete={() => {
              if (step === Step.JobCrafting) navigateStep(Step.AiImplementationIntro);
              else if (step === Step.AiImplementation) navigateStep(Step.AiLiteracyIntro);
              else navigateStep(Step.PerformanceBasedIntro);
            }}
            onBack={() => {
              if (step === Step.JobCrafting) navigateStep(Step.JobCraftingIntro);
              else if (step === Step.AiImplementation) navigateStep(Step.AiImplementationIntro);
              else navigateStep(Step.AiLiteracyIntro);
            }}
          />
        )}

        {step === Step.PerformanceBased && (
          <PerformanceWizard 
            scenarios={PERFORMANCE_SCENARIOS}
            answers={state.performanceAnswers}
            onAnswer={setPerformanceAnswer}
            onBack={() => navigateStep(Step.PerformanceBasedIntro)}
            onComplete={() => navigateStep(Step.Summary)}
          />
        )}

        {step === Step.Summary && (
          <div className="p-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="inline-block bg-emerald-100 p-6 rounded-full">
              <CheckCircle className="w-16 h-16 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-black text-black tracking-tight">Data Berhasil Terkirim!</h2>
            <p className="text-slate-900 font-bold max-w-md mx-auto leading-relaxed">
              Hatur nuhun Bapak/Ibu <strong>{state.respondent.fullName}</strong>. Kontribusi Anda sangat berharga bagi masa depan pendidikan vokasi di Jawa Barat.
            </p>
            <div className="pt-6">
              <button onClick={() => window.location.reload()} className="bg-black text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl">Isi Ulang</button>
            </div>
          </div>
        )}
      </div>

      <footer className="mt-8 text-center text-black font-black text-[9px] uppercase tracking-[0.4em] opacity-80">
        <p>© 2025 SEKOLAH PASCASARJANA PTK - UNIVERSITAS PENDIDIKAN INDONESIA</p>
      </footer>
    </div>
  );
}

function SectionIntro({ title, description, instruction, icon, onBack, onNext }: any) {
  return (
    <div className="p-8 md:p-12 space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-slate-50 p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-inner">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-black leading-tight">{title}</h2>
      </div>
      
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
          <p className="text-slate-900 font-bold leading-relaxed italic text-center">
            "{description}"
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-800 tracking-widest">
            <Info size={14} /> Instruksi Pengisian
          </div>
          <p className="text-slate-700 font-medium text-sm leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-100">
            {instruction}
          </p>
        </div>

        <div className="bg-orange-50 p-4 rounded-2xl border-l-4 border-orange-500 flex items-start gap-4">
          <ShieldCheck className="text-orange-600 shrink-0" size={24} />
          <p className="text-xs font-bold text-orange-800 leading-relaxed">
            Penting: Mohon jawab secara jujur sesuai dengan kondisi asli di lapangan. Jawaban Anda sepenuhnya untuk kepentingan akademik dan tidak akan memengaruhi penilaian kinerja Anda.
          </p>
        </div>
      </div>

      <div className="flex gap-4 pt-6 max-w-sm mx-auto">
        <button onClick={onBack} className="flex-1 py-4 rounded-2xl font-black text-black border-2 border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
           Kembali
        </button>
        <button onClick={onNext} className="flex-[2] py-4 bg-blue-700 rounded-2xl font-black text-white shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
          Mulai Bagian Ini <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function QuestionWizard({ step, items, answers, onAnswer, onComplete, onBack }: any) {
  const [idx, setIdx] = useState(0);
  const currentItem = items[idx];
  const isLast = idx === items.length - 1;
  const currentAnswer = answers[currentItem.id];
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [idx]);

  const getSectionTitle = () => {
    if (step === Step.JobCrafting) return "Bagian A: Perilaku Kerja (Job Crafting)";
    if (step === Step.AiImplementation) return "Bagian B: Implementasi Pembelajaran AI";
    return "Bagian C: Literasi & Kapabilitas AI";
  };

  const labels = getLikertLabels(currentItem.text);
  const progress = ((idx + 1) / items.length) * 100;

  const handleNext = () => {
    if (isLast) onComplete();
    else setIdx(idx + 1);
  };

  const handleBack = () => {
    if (idx === 0) onBack();
    else setIdx(idx - 1);
  };

  return (
    <div className="flex-1 flex flex-col p-6 md:p-10 animate-in fade-in duration-300">
      <div className="mb-8">
        <div className="flex justify-between items-center text-[10px] font-black uppercase text-blue-800 mb-3 tracking-widest">
          <span>{getSectionTitle()}</span>
          <span className="bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">{idx + 1} / {items.length}</span>
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full border border-slate-200 overflow-hidden shadow-inner">
          <div className="h-full bg-blue-600 transition-all duration-300 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full">
        <div className="mb-10 text-center space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-[10px] font-black text-slate-600 uppercase tracking-widest border border-slate-200">
            Dimensi: {currentItem.dimension}
          </div>
          <h4 className="text-xl md:text-2xl font-black text-black leading-tight italic">"{currentItem.text}"</h4>
        </div>

        <div className="grid grid-cols-5 gap-2 md:gap-4 w-full">
          {[1, 2, 3, 4, 5].map((val) => (
            <LikertOption 
              key={val}
              val={val} 
              label={labels[val-1]} 
              active={currentAnswer === val} 
              onClick={() => onAnswer(currentItem.id, val as LikertValue)} 
            />
          ))}
        </div>
        
        <div className="flex justify-between px-2 mt-6 text-[9px] font-black uppercase text-slate-500 tracking-widest">
          <span>Rendah / Tidak Setuju</span>
          <span>Netral</span>
          <span>Tinggi / Sangat Setuju</span>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between">
        <button 
          onClick={handleBack} 
          className="text-black font-black text-sm flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-100 hover:bg-slate-50 transition-all"
        >
          <ChevronLeft size={20} /> Sebelumnya
        </button>
        
        <button 
          disabled={!currentAnswer}
          onClick={handleNext}
          className={`font-black text-sm flex items-center gap-2 px-10 py-3 rounded-xl transition-all shadow-lg ${
            currentAnswer 
              ? 'bg-blue-700 text-white hover:scale-105 active:scale-95' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {isLast ? 'Selesai Bagian Ini' : 'Berikutnya'} <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function LikertOption({ val, label, active, onClick }: any) {
  const activeClasses = 'bg-blue-700 border-blue-700 text-white shadow-blue-100 scale-105';
  const inactiveClasses = 'bg-white border-slate-200 text-black hover:border-blue-300';

  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center py-5 px-1 rounded-2xl border-2 transition-all group shadow-sm ${
        active ? activeClasses : inactiveClasses
      }`}
    >
      <span className={`text-xl font-black mb-1.5 transition-colors ${active ? 'text-white' : 'text-black'}`}>{val}</span>
      <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-tighter text-center leading-[1.2] px-1 ${
        active ? 'text-white' : 'text-slate-500 group-hover:text-black'
      }`}>
        {label}
      </span>
    </button>
  );
}

function PerformanceWizard({ scenarios, answers, onAnswer, onBack, onComplete }: any) {
  const [idx, setIdx] = useState(0);
  const scenario = scenarios[idx];
  const isLast = idx === scenarios.length - 1;
  const current = answers[scenario.id] || { choice: null, confidence: 0 };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [idx]);

  const handleNext = () => {
    if (isLast) onComplete();
    else setIdx(idx + 1);
  };

  return (
    <div className="p-6 md:p-10 space-y-8 flex flex-col min-h-[500px]">
      <div className="text-center space-y-4">
        <div className="inline-block bg-orange-50 px-4 py-1 rounded-full text-[10px] font-black text-orange-700 uppercase tracking-widest border border-orange-100">
          Skenario Pengambilan Keputusan {idx + 1} / {scenarios.length}
        </div>
        <h4 className="text-lg md:text-xl font-black text-black leading-tight italic max-w-2xl mx-auto">"{scenario.text}"</h4>
      </div>
      
      <div className="space-y-3 flex-1">
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center mb-2">Pilih tindakan terbaik:</p>
        {scenario.options.map((opt: any) => (
          <button
            key={opt.id}
            onClick={() => onAnswer(scenario.id, opt.id, current.confidence)}
            className={`w-full p-4 rounded-[1.5rem] border-2 text-left text-sm font-bold transition-all shadow-sm ${
              current.choice === opt.id ? 'bg-orange-600 border-orange-600 text-white scale-[1.01]' : 'bg-white border-slate-200 text-black hover:border-orange-200'
            }`}
          >
            <span className={`inline-block w-7 h-7 rounded-full text-center leading-7 mr-3 font-black text-xs ${current.choice === opt.id ? 'bg-white text-orange-600' : 'bg-slate-100 text-black'}`}>{opt.id}</span>
            {opt.text}
          </button>
        ))}
      </div>

      <div className="pt-6 border-t border-slate-100 space-y-4">
        <p className="text-[10px] font-black text-black uppercase tracking-widest text-center">Tingkat Keyakinan Jawaban (1-5):</p>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map(v => (
            <button
              key={v}
              onClick={() => onAnswer(scenario.id, current.choice, v)}
              className={`w-12 h-12 rounded-2xl font-black border-2 transition-all shadow-sm ${
                current.confidence === v ? 'bg-black text-white border-black scale-110' : 'bg-white text-black border-slate-200 hover:border-black'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <button onClick={() => idx === 0 ? onBack() : setIdx(idx - 1)} className="text-black font-black text-sm flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-100">
          <ChevronLeft size={20} /> Sebelumnya
        </button>
        <button 
          disabled={!current.choice || !current.confidence}
          onClick={handleNext}
          className={`font-black text-sm flex items-center gap-2 px-10 py-3 rounded-xl transition-all shadow-lg ${
            current.choice && current.confidence 
              ? 'bg-blue-700 text-white' 
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {isLast ? 'Kirim Seluruh Jawaban' : 'Berikutnya'} <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

function Input({ label, ...props }: { label: string; [key: string]: any }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-black text-black uppercase tracking-widest tracking-[0.1em]">{label}</label>
      <input 
        className="p-3.5 border-2 border-slate-200 rounded-xl text-sm font-bold text-black outline-none focus:border-blue-600 placeholder:text-slate-300 bg-white transition-all focus:ring-4 focus:ring-blue-50"
        {...props} 
      />
    </div>
  );
}
