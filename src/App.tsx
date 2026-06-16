import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Brain, 
  Cpu, 
  MessageSquare, 
  Zap, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight, 
  Github, 
  Send, 
  Mail, 
  Phone, 
  ExternalLink,
  X,
  Smartphone,
  Layers,
  Sparkles,
  BarChart3,
  Clock,
  ShieldCheck
} from 'lucide-react';

// --- Constants ---
const TG_BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Replace with real token
const TG_CHAT_ID = 'YOUR_CHAT_ID'; // Replace with real chat ID

interface Project {
  id: string;
  name: string;
  type: string;
  description: string;
  fullDescription: string;
  features: { icon: any, text: string }[];
  stack: string[];
  results: { label: string, value: string }[];
  link: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 'chetra-gid',
    name: 'ЧЕТРА-ГИД - нейротехподдержка',
    type: 'AI-помощник сервисного инженера',
    description: 'Поиск информации в технической документации занимает много времени.',
    fullDescription: 'AI помогает быстро находить ответы в документации и базе знаний.',
    features: [
      { icon: CheckCircle2, text: 'Быстрый поиск информации' },
      { icon: CheckCircle2, text: 'Работа с документацией через чат' },
      { icon: CheckCircle2, text: 'Помощь инженерам и механикам' },
      { icon: CheckCircle2, text: 'Сокращение времени поиска данных' }
    ],
    stack: ['AI', 'React'],
    results: [
      { label: 'Результат', value: 'Быстрый доступ' }
    ],
    link: 'https://remix-316212518998.us-west1.run.app',
    image: 'https://drive.google.com/uc?export=view&id=19MZNPqulcVcSOBt87YXuNwP-8Fw6GBs-'
  },
  {
    id: 'service-chetra',
    name: 'Четра-нейроконсультант',
    type: 'AI-продавец спецтехники и запчастей',
    description: 'Клиенты вынуждены ждать ответа менеджера.',
    fullDescription: 'AI консультирует клиентов и помогает подобрать решение.',
    features: [
      { icon: CheckCircle2, text: 'Ответы 24/7' },
      { icon: CheckCircle2, text: 'Квалификация клиента' },
      { icon: CheckCircle2, text: 'Сбор заявок' },
      { icon: CheckCircle2, text: 'Поддержка менеджеров' }
    ],
    stack: ['AI', 'React'],
    results: [
      { label: 'Результат', value: 'Работа 24/7' }
    ],
    link: 'https://service-101984773144.us-west1.run.app',
    image: 'https://drive.google.com/uc?export=view&id=1OvtHsNFzI9CmwhlhNOKmuAGml8tC1WTt'
  },
  {
    id: 'sensorika-crm',
    name: 'Мини-CRM творческая студия "СЕНСОРИКА"',
    type: 'Единый центр обработки заявок',
    description: 'Сообщения поступают из разных каналов.',
    fullDescription: 'Все обращения собираются в одном окне.',
    features: [
      { icon: CheckCircle2, text: 'Telegram' },
      { icon: CheckCircle2, text: 'WhatsApp' },
      { icon: CheckCircle2, text: 'VK' },
      { icon: CheckCircle2, text: 'Единая история общения' }
    ],
    stack: ['AI', 'React'],
    results: [
      { label: 'Результат', value: 'Единое окно' }
    ],
    link: 'https://remix-104988877348.us-west1.run.app',
    image: 'https://drive.google.com/uc?export=view&id=127X2v4lbVI9T0kXq_JSGRz1u8xbYsxZS'
  }
];

export default function App() {
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [formData, setFormData] = useState({ name: '', contact: '', task: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.name.length < 2) {
      setFormStatus({ type: 'error', message: 'Минимум 2 символа в имени' });
      return;
    }
    
    const contactValid = formData.contact.includes('@') || /^\+?[0-9]{5,}$/.test(formData.contact.replace(/\s/g, ''));
    if (!formData.contact || !contactValid) {
      setFormStatus({ type: 'error', message: 'Введите корректный TG, телефон или email' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({ type: 'success', message: '✅ Заявка отправлена! Я свяжусь с вами в ближайшее время.' });
        setFormData({ name: '', contact: '', task: '' });
      } else {
        throw new Error(data.message || 'Ошибка отправки');
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Ошибка при отправке. Попробуйте еще раз.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent-cyan/30 bg-primary overflow-x-hidden text-white font-sans">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-cyan/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent-purple/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-primary/20 backdrop-blur-md rounded-2xl px-4 sm:px-6 py-3 border border-white/5">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-xl flex items-center justify-center font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] text-black text-sm sm:text-base">
              DR
            </div>
            <div>
              <h2 className="font-bold text-xs sm:text-sm tracking-tight leading-none">Дмитрий Родионов</h2>
              <p className="text-[8px] sm:text-[10px] text-slate-muted font-mono uppercase tracking-widest mt-1">Специалист по ИИ</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-muted">
            <a href="#expertise" className="hover:text-accent-cyan transition-colors">Экспертиза</a>
            <a href="#projects" className="hover:text-accent-cyan transition-colors">Кейсы</a>
            <a href="#contact" className="hover:text-accent-cyan transition-colors">Контакты</a>
          </div>
          <a href="#contact" className="btn-primary text-[10px] sm:text-xs px-4 sm:px-6 py-2">
            Обсудить
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 sm:pt-48 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card-large p-6 sm:p-12 relative overflow-hidden flex flex-col justify-center min-h-[400px] sm:min-h-[500px]"
          >
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05]">
                Автоматизируйте продажи, поддержку клиентов и обработку заявок с помощью AI
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-muted max-w-2xl mb-8 sm:mb-12 leading-relaxed">
                Помогаю компаниям отвечать клиентам быстрее, автоматизировать рутинные процессы и снижать нагрузку на сотрудников.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  '✓ Ответы клиентам 24/7',
                  '✓ Автоматизация рутинных задач',
                  '✓ Быстрая обработка заявок',
                  '✓ Снижение нагрузки на сотрудников',
                  '✓ Единое окно работы с клиентами'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-white">
                    <span className="text-accent-cyan">{item.split(' ')[0]}</span>
                    {item.split(' ').slice(1).join(' ')}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-6">
                <a href="#projects" className="btn-primary w-full sm:w-auto text-xs sm:text-sm">Посмотреть проекты</a>
                <a href="#contact" className="hover:text-accent-cyan font-bold transition-colors">Обсудить задачу</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <form onSubmit={handleFormSubmit} className="glass-card p-8 space-y-4">
              <h3 className="text-xl font-bold mb-4">Обсудить ваш проект</h3>
              <input 
                type="text" 
                placeholder="Имя *" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-accent-cyan outline-none transition-all placeholder:text-slate-600"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <input 
                type="text" 
                placeholder="Контакт *" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-accent-cyan outline-none transition-all placeholder:text-slate-600"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                required
              />
              <textarea 
                placeholder="Описание задачи"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-accent-cyan outline-none transition-all placeholder:text-slate-600 resize-none"
                value={formData.task}
                onChange={(e) => setFormData({...formData, task: e.target.value})}
              ></textarea>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full py-4 text-sm font-bold mt-2"
              >
                {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold">Дмитрий Родионов — AI Developer | Разработка AI-решений для бизнеса</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img src="https://drive.google.com/thumbnail?id=1MCAkwxrjATgHLDih85IzK7va2S2dk5OW&sz=w1000" alt="Дмитрий Родионов" className="rounded-3xl shadow-2xl w-full h-[500px] object-contain" referrerPolicy="no-referrer" />
          <div>
            <p className="text-slate-muted mb-6">Меня зовут Дмитрий Родионов. Занимаюсь разработкой и внедрением AI-решений для бизнеса.</p>
            <p className="text-slate-muted mb-6">Специализируюсь на автоматизации: продаж, клиентского сервиса, технической поддержки, обработки заявок, внутренних бизнес-процессов.</p>
            <p className="text-slate-muted mb-3 font-semibold">Практический опыт:</p>
            <p className="text-slate-muted mb-6">AI-консультанты, AI-продавцы, AI-техническая поддержка, омниканальные системы, отраслевые AI-помощники.</p>
            <p className="text-slate-muted mb-6">Главный принцип: Не внедрять AI ради AI. Каждое решение должно приносить измеримую пользу бизнесу.</p>
            <div className="text-sm text-slate-300">
               <p className="mb-2">✓ Практический опыт внедрения</p>
               <p className="mb-2">✓ Понимание бизнес-процессов</p>
               <p className="mb-2">✓ Быстрое создание MVP</p>
               <p className="mb-2">✓ Работа от идеи до запуска</p>
               <p>✓ Ориентация на результат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Почему компании теряют деньги каждый день</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Потеря заявок', 'Медленные ответы клиентам', 'Перегруженные сотрудники', 'Хаос в коммуникациях', 'Ручные процессы', 'Отсутствие автоматизации'].map((problem) => (
              <div key={problem} className="glass-card p-8 border-white/5">{problem}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Что получает бизнес после внедрения AI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Быстрая обработка запросов', 'Работа 24/7', 'Экономия времени сотрудников', 'Автоматизация рутины', 'Рост качества обслуживания', 'Единая точка работы с клиентами'].map((benefit) => (
              <div key={benefit} className="glass-card p-8 border-white/5">{benefit}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Cards Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12 px-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Реальные результаты для вашего бизнеса</h2>
              <p className="text-slate-muted text-sm tracking-tight">Посмотрите, как компании автоматизируют процессы и увеличивают прибыль</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group h-full"
              >
                <div className="glass-card flex flex-col h-full p-6 hover:bg-card hover:border-accent-cyan/30 transition-all">
                  <div className="mb-4">
                    <span className="text-[10px] font-bold px-2 py-1 bg-accent-purple/20 text-accent-purple rounded uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                  <p className="text-slate-muted text-sm leading-relaxed mb-6">{project.fullDescription}</p>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    {project.features.map((f, i) => (
                      <div key={i} className="flex gap-3 text-xs text-slate-300">
                        <span className="text-accent-cyan flex-shrink-0">✓</span>
                        <span>{f.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary w-full text-xs text-center flex items-center justify-center gap-2"
                    >
                      Открыть проект <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Bar */}
          <div className="glass-card p-6 flex flex-col md:flex-row items-center gap-8 border-white/5">
            <div className="text-[10px] font-black text-slate-deep uppercase tracking-[0.2em] whitespace-nowrap">Процесс работы</div>
            <div className="flex flex-1 justify-between w-full text-[11px] font-bold tracking-widest uppercase">
              <div className="flex items-center gap-3"><span className="text-accent-cyan">01</span> <span className="text-white">Аудит</span></div>
              <div className="hidden sm:flex items-center gap-3"><span className="w-8 lg:w-16 h-[1px] bg-white/10"></span><span className="text-accent-cyan">02</span> <span className="text-white">Прототип</span></div>
              <div className="hidden sm:flex items-center gap-3"><span className="w-8 lg:w-16 h-[1px] bg-white/10"></span><span className="text-accent-cyan">03</span> <span className="text-white">RAG-настройка</span></div>
              <div className="flex items-center gap-3"><span className="w-8 lg:w-16 h-[1px] bg-white/10"></span><span className="text-accent-cyan">04</span> <span className="text-white">Launch</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section: Chetra-Gid */}
      <section id="screenshots-gid" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">ЧЕТРА-ГИД - нейротехподдержка: Примеры интерфейса</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://drive.google.com/thumbnail?id=10DxoWbMZI2zA5y2knNypiSKM_Nxa1o-6&sz=w1000" alt="Скриншот Гид 4" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=10DxoWbMZI2zA5y2knNypiSKM_Nxa1o-6&sz=w1000')} referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=19MZNPqulcVcSOBt87YXuNwP-8Fw6GBs-&sz=w1000" alt="Скриншот Гид 1" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=19MZNPqulcVcSOBt87YXuNwP-8Fw6GBs-&sz=w1000')} referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=1sWxHDu_rmZdtkzqbDjVkQyEjsebRFnNm&sz=w1000" alt="Скриншот Гид 3" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=1sWxHDu_rmZdtkzqbDjVkQyEjsebRFnNm&sz=w1000')} referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Четра-нейроконсультант: Примеры интерфейса</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://drive.google.com/thumbnail?id=1OvtHsNFzI9CmwhlhNOKmuAGml8tC1WTt&sz=w1000" alt="Скриншот 1" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=1OvtHsNFzI9CmwhlhNOKmuAGml8tC1WTt&sz=w1000')} referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=1P0aj9CFD_VNCmuMeD8eq9kxpn_9lEFaC&sz=w1000" alt="Скриншот 2" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=1P0aj9CFD_VNCmuMeD8eq9kxpn_9lEFaC&sz=w1000')} referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=1FwxIkeoASUJ-FiPZpFpLpAggyQ0nFcuJ&sz=w1000" alt="Скриншот 3" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=1FwxIkeoASUJ-FiPZpFpLpAggyQ0nFcuJ&sz=w1000')} referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-primary/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <img src={selectedImage} alt="Увеличенное изображение" className="rounded-2xl max-w-full max-h-[90vh] object-contain" referrerPolicy="no-referrer" />
              <button
                className="absolute -top-12 right-0 text-white p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Screenshots Section: Sensorika */}
      <section id="screenshots-sensorika" className="py-20 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Мини-CRM творческая студия "СЕНСОРИКА": Примеры интерфейса</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://drive.google.com/thumbnail?id=127X2v4lbVI9T0kXq_JSGRz1u8xbYsxZS&sz=w1000" alt="Скриншот Сенсорика 1" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=127X2v4lbVI9T0kXq_JSGRz1u8xbYsxZS&sz=w1000')} referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=1gCcQrXGuBGrvz-kZJZvk1EezNYGCrSp2&sz=w1000" alt="Скриншот Сенсорика 2" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=1gCcQrXGuBGrvz-kZJZvk1EezNYGCrSp2&sz=w1000')} referrerPolicy="no-referrer" />
            <img src="https://drive.google.com/thumbnail?id=17eAaiVLg81WeEyk0wgeSj6a9nQKcTXpP&sz=w1000" alt="Скриншот Сенсорика 3" className="rounded-3xl shadow-2xl w-full h-[300px] object-cover cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=17eAaiVLg81WeEyk0wgeSj6a9nQKcTXpP&sz=w1000')} referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: 'Сколько занимает разработка?', a: 'От 2 недель до 2 месяцев в зависимости от сложности.' },
              { q: 'Можно ли подключить Telegram?', a: 'Да, конечно.' },
              { q: 'Можно ли подключить CRM?', a: 'Да, подключаем к основным CRM.' },
              { q: 'Сколько стоит проект?', a: 'Рассчитывается индивидуально после аудита.' },
              { q: 'Какие задачи можно автоматизировать?', a: 'Почти любые процессы обработки информации.' },
              { q: 'Что требуется от заказчика?', a: 'Понимание процессов и доступ к данным.' }
            ].map((faq, i) => (
              <details key={i} className="glass-card p-6 border-white/5">
                <summary className="font-bold cursor-pointer">{faq.q}</summary>
                <p className="text-slate-muted mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-12 sm:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-6 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-purple/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 italic leading-tight">Давайте создадим ваш <span className="text-accent-cyan">AI-актив</span></h2>
                <p className="text-sm sm:text-base text-slate-400 mb-10 sm:mb-12">Оставьте заявку, и я предложу несколько вариантов автоматизации на основе ваших текущих задач.</p>
                
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="space-y-4 sm:space-y-6 flex-1 w-full">
                    <a href="https://t.me/Jiming7" className="flex items-center gap-4 hover:translate-x-2 transition-transform group">
                      <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all"><Send className="w-5 h-5" /></div>
                      <span className="font-medium text-sm sm:text-base">@Jiming7</span>
                    </a>
                    <a href="mailto:d.rodionov-ai@mail.ru" className="flex items-center gap-4 hover:translate-x-2 transition-transform group">
                      <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-primary transition-all"><Mail className="w-5 h-5" /></div>
                      <span className="font-medium text-xs sm:text-sm">d.rodionov-ai@mail.ru</span>
                    </a>
                    <a href="tel:+79176611501" className="flex items-center gap-4 hover:translate-x-2 transition-transform group">
                      <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-primary transition-all"><Phone className="w-5 h-5" /></div>
                      <span className="font-medium text-sm sm:text-base">8-917-661-15-01</span>
                    </a>
                  </div>
                  <div className="flex-shrink-0">
                    <img 
                      src="https://drive.google.com/thumbnail?id=1RN-REm5Zkw8POx5EzMSXzbZ_PIP4xUp_&sz=w300" 
                      alt="QR-код" 
                      className="w-36 h-36 rounded-lg border border-white/10 cursor-pointer hover:opacity-80 transition-opacity" 
                      onClick={() => setSelectedImage('https://drive.google.com/thumbnail?id=1RN-REm5Zkw8POx5EzMSXzbZ_PIP4xUp_&sz=w300')}
                    />
                  </div>
                </div>

              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4 relative z-10">
                <input 
                  type="text" 
                  placeholder="Как к вам обращаться?" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-accent-cyan outline-none transition-all placeholder:text-slate-600"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input 
                  type="text" 
                  placeholder="@username или +7..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-accent-cyan outline-none transition-all placeholder:text-slate-600"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  required
                />
                <textarea 
                  placeholder="Опишите, какую задачу нужно решить..." 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:border-accent-cyan outline-none transition-all placeholder:text-slate-600 resize-none"
                  value={formData.task}
                  onChange={(e) => setFormData({...formData, task: e.target.value})}
                ></textarea>
                
                {formStatus.message && (
                  <div className={`text-sm font-semibold ${formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {formStatus.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg mt-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 sm:px-6 border-t border-white/5 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-12 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-deep">
            <a href="mailto:d.rodionov-ai@mail.ru" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
              <span className="text-accent-cyan">@</span> d.rodionov-ai@mail.ru
            </a>
            <a href="https://t.me/Jiming7" className="hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2">
              <span className="text-accent-purple">TG:</span> @Jiming7
            </a>
          </div>
          
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-deep">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
            Доступен для новых проектов
          </div>

          <div className="text-[10px] font-bold text-slate-deep uppercase tracking-widest italic opacity-50">© 2024 Rodionov.AI</div>
        </div>
      </footer>


      {/* Sticky CTA */}
      <a 
        href="#contact" 
        className="fixed bottom-4 right-4 z-[100] sm:bottom-10 sm:right-10 flex items-center gap-3 glass-card px-4 sm:px-6 py-3 sm:py-4 border-accent-cyan/50 bg-primary/40 backdrop-blur-lg hover:bg-accent-cyan hover:text-primary active:scale-95 transition-all shadow-2xl group"
      >
        <span className="font-extrabold text-[10px] sm:text-sm tracking-tight uppercase">Обсудить проект</span>
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </a>
    </div>
  );
}
