// @ts-nocheck
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
  User, 
  Award, 
  GraduationCap, 
  ChevronLeft, 
  UserCheck,
  Phone,
  Mail,
  ChevronRight,
  BrainCircuit,
  Settings,
  ShieldCheck,
  Target, 
  Loader2,
  AlertCircle
} from 'lucide-react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUFBSgJNZ5Uy3Xovi5b3ce316Br4XRXsQ0s7H1YFOpybCk6jOjiewTDkbgSFTmHwF2/exec";

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
  if (s.includes('memahami')) return ['Tidak paham', 'Sedikit', 'Cukup', 'Paham', 'Sangat'];
  if (s.includes('mampu') || s.includes('dapat')) return ['Tidak mampu', 'Kurang', 'Cukup', 'Mampu', 'Sangat'];
  if (s.includes('yakin')) return ['Tidak yakin', 'Kurang', 'Cukup', 'Yakin', 'Sangat'];
  if (s.includes('setuju')) return ['STS', 'TS', 'Ragu', 'S', 'SS'];
  return ['Tdk Pernah', 'Jarang', 'Kadang', 'Sering', 'Selalu'];
};

export default function App() {
  const [step, setStep] = useState<Step>(Step.Welcome);
  const [state, setState] = useState<SurveyState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const setLikertAnswer = (section: string, id: string, value: LikertValue) => {
    setState(prev => ({
      ...prev,
      [section]: { ...prev[section], [id]: value }
    }));
  };

  const setPerformanceAnswer = (id: string, choice: string, confidence: number) => {
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

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      ...state.respondent,
      ...state.jobCraftingAnswers,
      ...state.aiImplementationAnswers,
      ...state.aiLiteracyAnswers,
      ...Object.fromEntries(
        Object.entries(state.performanceAnswers).flatMap(([id, val]: any) => [
          [id, val.choice],
          [`${id}_K`, val.confidence]
        ])
      )
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      navigateStep(Step.Summary);
    } catch (error) {
      setSubmitError("Gagal mengirim data. Coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 md:py-8 min-h-screen flex flex-col justify-center">
      <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col relative min-h-[600px]">
        
        {isSubmitting && (
          <div className="absolute inset-0 z-50 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
            <Loader2 className="w-16 h-16 text-blue-700 animate-spin mb-4" />
            <h3 className="text-xl font-black text-black uppercase tracking-widest">Sedang Mengirim</h3>
          </div>
        )}

        {/* STEP 1: WELCOME SCREEN */}
        {step === Step.Welcome && (
          <div className="p-6 md:p-12 space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <img 
                  src="https://tse2.mm.bing.net/th/id/OIP.gQRHGL0Mov56alQpz4YPgwAAAA?pid=Api&P=0&h=180" 
                  alt="Logo UPI" 
                  className="w-24 h-24 object-contain mx-auto"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
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
                Yth. Bapak/Ibu Guru SMK di Jawa Barat. Partisipasi Anda sangat berarti bagi pengembangan kualitas pendidikan vokasi di Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <UserCheck className="text-blue-600" size={20} />
                  <h4 className="font-black text-black text-xs uppercase tracking-widest">Peneliti Utama</h4>
                </div>
                <p className="font-black text-lg text-black">Abdul Rohman</p>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-black"><Phone size={14} className="text-blue-600" /> 081320380402</div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black"><Mail size={14} className="text-blue-600" /> arassh89@upi.edu</div>
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
              <Award className="w-10 h-10 text-yellow-300 shrink-0" />
              <p className="text-xs md:text-sm font-bold">
                Tersedia <strong>Pulsa/E-Wallet Rp 100.000</strong> untuk 15 responden yang mengisi secara lengkap dan jujur.
              </p>
            </div>

            <button onClick={() => navigateStep(Step.RespondentInfo)} className="w-full bg-black text-white py-5 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all">
              Mulai Kuesioner <ArrowRight size={24} />
            </button>
          </div>
        )}

        {/* STEP 2: RESPONDENT INFO */}
        {step === Step.RespondentInfo && (
          <div className="p-6 md:p-10 space-y-6 animate-in slide-in-from-right duration-500">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <User className="text-blue-700" size={24} />
              <h3 className="text-xl font-black text-black">Identitas Responden</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="fullName" label="Nama Lengkap & Gelar" value={state.respondent.fullName} onChange={handleRespondentChange} placeholder="Contoh: Budi, S.Pd" />
              <Input name="schoolName" label="Asal SMK" value={state.respondent.schoolName} onChange={handleRespondentChange} placeholder="Contoh: SMKN 1 Bandung" />
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black text-black uppercase tracking-widest">Kota/Kabupaten</label>
                <select name="regency" value={state.respondent.regency} onChange={handleRespondentChange} className="p-3 border-2 border-slate-200 rounded-xl text-sm font-bold text-black bg-white outline-none focus:border-blue-600">
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
              <button onClick={() => navigateStep(Step.Welcome)} className="flex-1 py-4 rounded-2xl font-black border-2 border-slate-100 hover:bg-slate-50 transition-all">Kembali</button>
              <button disabled={!isFormValid} onClick={() => navigateStep(Step.JobCraftingIntro)} className={`flex-[2] py-4 rounded-2xl font-black text-white shadow-lg ${isFormValid ? 'bg-blue-700' : 'bg-slate-300'}`}>Lanjut</button>
            </div>
          </div>
        )}

        {/* STEP 3-6: INTROS */}
        {step === Step.JobCraftingIntro && (
          <SectionIntro title="Bagian A: Job Crafting" description="Penyesuaian inisiatif pekerjaan secara mandiri." instruction="Gunakan skala 1-5 sesuai tindakan Anda." icon={<Settings className="text-blue-600" size={32} />} onBack={() => navigateStep(Step.RespondentInfo)} onNext={() => navigateStep(Step.JobCrafting)} />
        )}
        {step === Step.AiImplementationIntro && (
          <SectionIntro title="Bagian B: Implementasi AI" description="Penerapan alat AI dalam pembelajaran." instruction="Pilih frekuensi penggunaan yang jujur." icon={<BrainCircuit className="text-purple-600" size={32} />} onBack={() => navigateStep(Step.JobCrafting)} onNext={() => navigateStep(Step.AiImplementation)} />
        )}
        {step === Step.AiLiteracyIntro && (
          <SectionIntro title="Bagian C: Literasi AI" description="Pemahaman, etika, dan kesiapan AI." instruction="Gunakan skala 1-5 sesuai tingkat pemahaman." icon={<ShieldCheck className="text-emerald-600" size={32} />} onBack={() => navigateStep(Step.AiImplementation)} onNext={() => navigateStep(Step.AiLiteracy)} />
        )}
        {step === Step.PerformanceBasedIntro && (
          <SectionIntro title="Bagian D: Performance Test" description="Skenario pengambilan keputusan AI." instruction="Pilih opsi terbaik dan tentukan keyakinan Anda." icon={<Target className="text-orange-600" size={32} />} onBack={() => navigateStep(Step.AiLiteracy)} onNext={() => navigateStep(Step.PerformanceBased)} />
        )}

        {/* STEP 7: LIKERT QUESTIONS */}
        {[Step.JobCrafting, Step.AiImplementation, Step.AiLiteracy].includes(step) && (
          <QuestionWizard 
            step={step}
            items={step === Step.JobCrafting ? JOB_CRAFTING_ITEMS : step === Step.AiImplementation ? AI_IMPLEMENTATION_ITEMS : AI_LITERACY_ITEMS}
            answers={step === Step.JobCrafting ? state.jobCraftingAnswers : step === Step.AiImplementation ? state.aiImplementationAnswers : state.aiLiteracyAnswers}
            onAnswer={(id, val) => setLikertAnswer(step === Step.JobCrafting ? 'jobCraftingAnswers' : step === Step.AiImplementation ? 'aiImplementationAnswers' : 'aiLiteracyAnswers', id, val)}
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

        {/* STEP 8: PERFORMANCE QUESTIONS */}
        {step === Step.PerformanceBased && (
          <PerformanceWizard scenarios={PERFORMANCE_SCENARIOS} answers={state.performanceAnswers} onAnswer={setPerformanceAnswer} submitError={submitError} onBack={() => navigateStep(Step.PerformanceBasedIntro)} onComplete={handleSubmit} />
        )}

        {/* STEP 9: SUMMARY */}
        {step === Step.Summary && (
          <div className="p-12 text-center space-y-6 animate-in zoom-in-95 duration-500">
            <CheckCircle className="w-20 h-20 text-emerald-600 mx-auto" />
            <h2 className="text-3xl font-black text-black uppercase tracking-tight">Terima Kasih!</h2>
            <p className="text-slate-900 font-bold max-w-md mx-auto leading-relaxed">
              Hatur nuhun Bapak/Ibu <strong>{state.respondent.fullName}</strong>. Data Anda telah terekam dalam database penelitian kami.
            </p>
            <button onClick={() => window.location.reload()} className="bg-black text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl">Selesai</button>
          </div>
        )}
      </div>

      <footer className="mt-8 text-center text-black font-black text-[9px] uppercase tracking-[0.4em] opacity-60">
        <p>© 2026 SEKOLAH PASCASARJANA PTK - UNIVERSITAS PENDIDIKAN INDONESIA</p>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function SectionIntro({ title, description, instruction, icon, onBack, onNext }: any) {
  return (
    <div className="p-8 md:p-12 space-y-8 animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center">
      <div className="bg-slate-50 p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-inner">{icon}</div>
      <h2 className="text-2xl md:text-3xl font-black text-black text-center">{title}</h2>
      <div className="space-y-6 max-w-2xl text-center">
        <p className="text-slate-900 font-bold leading-relaxed italic">"{description}"</p>
        <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
          <p className="text-slate-700 font-medium text-sm leading-relaxed">{instruction}</p>
        </div>
      </div>
      <div className="flex gap-4 pt-6 w-full max-w-md">
        <button onClick={onBack} className="flex-1 py-4 rounded-2xl font-black border-2 border-slate-100">Kembali</button>
        <button onClick={onNext} className="flex-[2] py-4 bg-blue-700 rounded-2xl font-black text-white shadow-xl flex items-center justify-center gap-2">
          Mulai Bagian Ini <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function QuestionWizard({ items, answers, onAnswer, onComplete, onBack }: any) {
  const [idx, setIdx] = useState(0);
  const currentItem = items[idx];
  const isLast = idx === items.length - 1;
  const currentAnswer = answers[currentItem.id];
  const labels = getLikertLabels(currentItem.text);
  const progress = ((idx + 1) / items.length) * 100;

  return (
    <div className="flex-1 flex flex-col p-6 md:p-10">
      <div className="mb-8">
        <div className="flex justify-between text-[10px] font-black uppercase text-blue-800 mb-2">
          <span>{idx + 1} / {items.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 transition-all" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center text-center space-y-8">
        <h4 className="text-xl md:text-2xl font-black italic">"{currentItem.text}"</h4>
        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {[1, 2, 3, 4, 5].map((v) => (
            <button key={v} onClick={() => onAnswer(currentItem.id, v)} className={`py-6 rounded-2xl border-2 transition-all ${currentAnswer === v ? 'bg-blue-700 border-blue-700 text-white scale-105' : 'bg-white border-slate-200 hover:border-blue-300'}`}>
              <span className="text-xl font-black">{v}</span>
              <p className="text-[7px] font-black uppercase tracking-tighter mt-1">{labels[v-1]}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-between">
        <button onClick={() => idx === 0 ? onBack() : setIdx(idx - 1)} className="px-6 py-3 font-black border-2 rounded-xl">Sebelumnya</button>
        <button disabled={!currentAnswer} onClick={() => isLast ? onComplete() : setIdx(idx + 1)} className={`px-10 py-3 rounded-xl font-black text-white shadow-lg ${currentAnswer ? 'bg-blue-700' : 'bg-slate-200'}`}>
          {isLast ? 'Selesai' : 'Berikutnya'}
        </button>
      </div>
    </div>
  );
}

function PerformanceWizard({ scenarios, answers, onAnswer, onBack, onComplete, submitError }: any) {
  const [idx, setIdx] = useState(0);
  const scenario = scenarios[idx];
  const isLast = idx === scenarios.length - 1;
  const current = answers[scenario.id] || { choice: null, confidence: 0 };

  return (
    <div className="p-6 md:p-10 space-y-8 flex flex-col min-h-[500px]">
      <div className="text-center space-y-3">
        <div className="text-[10px] font-black text-orange-700 uppercase">Skenario {idx + 1} / {scenarios.length}</div>
        <h4 className="text-lg font-black italic">"{scenario.text}"</h4>
      </div>
      <div className="space-y-3">
        {scenario.options.map((opt: any) => (
          <button key={opt.id} onClick={() => onAnswer(scenario.id, opt.id, current.confidence)} className={`w-full p-4 rounded-2xl border-2 text-left text-sm font-bold transition-all ${current.choice === opt.id ? 'bg-orange-600 border-orange-600 text-white' : 'bg-white border-slate-200'}`}>
            <span className="font-black mr-3">{opt.id}.</span> {opt.text}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        <p className="text-[10px] font-black uppercase text-center">Tingkat Keyakinan (1-5):</p>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map(v => (
            <button key={v} onClick={() => onAnswer(scenario.id, current.choice, v)} className={`w-12 h-12 rounded-2xl font-black border-2 ${current.confidence === v ? 'bg-black text-white' : 'bg-white'}`}>{v}</button>
          ))}
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <button onClick={() => idx === 0 ? onBack() : setIdx(idx - 1)} className="px-6 py-3 font-black border-2 rounded-xl">Kembali</button>
        <button disabled={!current.choice || !current.confidence} onClick={() => isLast ? onComplete() : setIdx(idx + 1)} className={`px-10 py-3 rounded-xl font-black text-white ${current.choice && current.confidence ? 'bg-blue-700' : 'bg-slate-200'}`}>
          {isLast ? 'Kirim Data' : 'Berikutnya'}
        </button>
      </div>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-black uppercase ml-1">{label}</label>
      <input className="p-3.5 border-2 border-slate-200 rounded-xl text-sm font-bold outline-none focus:border-blue-600" {...props} />
    </div>
  );
}