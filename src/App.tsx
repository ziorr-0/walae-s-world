import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useDragControls } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, X, Shuffle, Sparkles, Search, Calendar, Plus, Camera } from 'lucide-react';
import { CARDS, CardData, Category, MEMORIES, Memory, HER_PHOTOS, HerPhoto } from './constants';

// --- Types ---
type ModalState = {
  isOpen: boolean;
  card: CardData | null;
};

type MemoryModalState = {
  isOpen: boolean;
  memory: Memory | null;
};

type HerPhotoModalState = {
  isOpen: boolean;
  photo: HerPhoto | null;
};

// --- Components ---

const WelcomeOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-pink-50 flex items-center justify-center pointer-events-none"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-cursive text-pink-500"
          >
            Welcome, Walae ♡
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FloatingHearts = () => {
  const hearts = useRef(Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: 15 + Math.random() * 10,
    size: 10 + Math.random() * 20,
  }))).current;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart absolute text-pink-300/40"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

const Timer = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startDate = new Date('2026-03-01T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <span className="text-2xl sm:text-4xl font-bold text-pink-500 font-serif tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-sm text-pink-400 uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-6 glass-card rounded-2xl max-w-md mx-auto mt-8">
      <TimeUnit value={time.days} label="Days" />
      <span className="text-2xl text-pink-300 -mt-6">:</span>
      <TimeUnit value={time.hours} label="Hrs" />
      <span className="text-2xl text-pink-300 -mt-6">:</span>
      <TimeUnit value={time.minutes} label="Mins" />
      <span className="text-2xl text-pink-300 -mt-6">:</span>
      <TimeUnit value={time.seconds} label="Secs" />
    </div>
  );
};

const Card: React.FC<{ data: CardData; onClick: (card: CardData) => void }> = ({ data, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const [isLongPressed, setIsLongPressed] = useState(false);
  const longPressTimer = useRef<NodeJS.Timeout | null>(null);

  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => {
      setIsLongPressed(true);
      if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
    }, 500);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
    setIsLongPressed(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (navigator.vibrate) navigator.vibrate(50);
    
    // Heart burst
    const rect = e.currentTarget.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x: originX, y: originY },
      colors: ['#ff8fb1', '#ffd6e7', '#ffffff'],
      shapes: ['heart' as any],
      disableForReducedMotion: true,
      zIndex: 100,
      ticks: 100,
    });

    onClick(data);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      className={`glass-card glass-card-hover p-6 rounded-[20px] flex items-center justify-center text-center cursor-pointer min-h-[140px] transition-all duration-300 group relative overflow-hidden preserve-3d ${isLongPressed ? 'animate-heartbeat border-pink-400 shadow-[0_0_20px_rgba(255,143,177,0.4)]' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Active Glow Border */}
      <div className="absolute inset-0 rounded-[20px] border-2 border-transparent group-active:border-pink-300/50 transition-colors duration-300 pointer-events-none" />

      <h3 className="text-pink-600 font-medium text-sm sm:text-base relative z-10 group-hover:scale-105 transition-transform duration-300 select-none">
        {data.title}
      </h3>
      
      <Heart className="absolute bottom-3 right-3 w-4 h-4 text-pink-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0" fill="currentColor" />
      
      {/* Category Tag (Optional, subtle) */}
      <span className="absolute top-2 left-3 text-[10px] text-pink-300/50 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
        {data.category}
      </span>
    </motion.div>
  );
};

const SearchBar = ({ searchQuery, onSearch }: { searchQuery: string; onSearch: (query: string) => void }) => {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-pink-100/50 shadow-sm mb-6 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="relative max-w-md mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search for a feeling..."
          className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-pink-100 focus:border-pink-300 focus:ring-2 focus:ring-pink-100 outline-none text-gray-600 placeholder-pink-300 transition-all shadow-sm"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300 w-5 h-5" />
        {searchQuery && (
          <button 
            onClick={() => onSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-300 hover:text-pink-500 transition-colors"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

const BoredMode = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const questions = [
    {
      question: "What do you think I love more about you?",
      options: ["Your heart", "Your personality", "Your physical appearance"],
      correctMessage: "Wrong! I love EVERYTHING about you! 💖"
    },
    {
      question: "Who is the boss in this relationship?",
      options: ["Me (Makram)", "You (Walae)"],
      correctMessage: (answer: string) => answer.includes("Makram") ? "Nice joke 😂 but we both know it's you." : "Correct! 👑 You rule my world."
    },
    {
      question: "If I could only eat one thing for the rest of my life, what would it be?",
      options: ["Pizza", "Burgers", "You"],
      correctMessage: (answer: string) => answer === "You" ? "You. Obviously. 😋" : "Nope. It's definitely YOU. 😋"
    },
    {
      question: "How much do I love you?",
      options: ["A lot", "To the moon", "Infinity"],
      correctMessage: "Trick question. It's way more than all of these combined. ♾️❤️"
    },
    {
      question: "What is my favorite view?",
      options: ["The sunset", "The ocean", "Your face"],
      correctMessage: (answer: string) => answer === "Your face" ? "Your face. Always. 😍" : "Nope. It's your face. Always. 😍"
    }
  ];

  const handleAnswer = (option: string) => {
    const q = questions[currentQuestion];
    let msg = "";
    if (typeof q.correctMessage === 'function') {
      msg = q.correctMessage(option);
    } else {
      msg = q.correctMessage;
    }
    setResultMessage(msg);
    setShowResult(true);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setResultMessage("");
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentQuestion(0);
    }
  };

  return (
    <div className="mt-8 p-6 bg-pink-50 rounded-2xl border border-pink-100">
      <h3 className="text-xl font-serif text-pink-600 mb-4">Let's kill the boredom...</h3>
      
      {!showResult ? (
        <div className="space-y-4">
          <p className="text-gray-700 font-medium text-lg">{questions[currentQuestion].question}</p>
          <div className="grid gap-3">
            {questions[currentQuestion].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                className="w-full py-3 px-4 bg-white border border-pink-200 rounded-xl text-pink-500 hover:bg-pink-100 transition-colors font-medium"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4 py-4">
          <p className="text-xl font-medium text-pink-600 animate-in fade-in zoom-in duration-300">
            {resultMessage}
          </p>
          <button
            onClick={nextQuestion}
            className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "Play Again"}
          </button>
        </div>
      )}
    </div>
  );
};

const Modal = ({ isOpen, card, onClose, onOpenCard }: { isOpen: boolean; card: CardData | null; onClose: () => void; onOpenCard: (card: CardData) => void }) => {
  const dragControls = useDragControls();

  if (!card) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] modal-backdrop"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100) onClose();
            }}
            className="fixed bottom-0 left-0 right-0 z-[70] bg-white/90 backdrop-blur-xl rounded-t-[30px] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-white/50 max-w-2xl mx-auto max-h-[85vh] flex flex-col"
          >
            {/* Drag Handle Area */}
            <div 
              className="w-full py-6 flex justify-center touch-none cursor-grab active:cursor-grabbing shrink-0"
              onPointerDown={(e) => dragControls.start(e)}
            >
              <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
            </div>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto px-8 pb-12 flex-1 overscroll-contain">
              <div className="text-center space-y-6">
                <span className="inline-block px-3 py-1 bg-pink-100 text-pink-500 text-xs rounded-full uppercase tracking-widest font-medium">
                  {card.category}
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 leading-tight">
                  {card.title}
                </h2>
                
                <div className="w-16 h-[1px] bg-pink-200 mx-auto" />
                
                <div className="text-gray-600 font-light text-lg leading-relaxed whitespace-pre-wrap text-left mx-auto max-w-lg pb-8">
                  {card.content || "Paste your content here..."}

                  {card.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-8 rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500 w-full"
                    >
                      <img 
                        src={card.image} 
                        alt="A special memory" 
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  )}
                  
                  {card.id === 12 && (
                    <div className="mt-8 text-center">
                      <a 
                        href="https://wa.me/212619040004?text=Let's%20fix%20this%20%F0%9F%92%94"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200"
                      >
                        <span>Let's fix this</span>
                        <Heart size={16} fill="currentColor" />
                      </a>
                    </div>
                  )}

                  {card.id === 9 && (
                    <div className="mt-8 text-center">
                      <button 
                        onClick={() => {
                          const loveCard = CARDS.find(c => c.id === 146);
                          if (loveCard) onOpenCard(loveCard);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-pink-400 text-white rounded-full font-medium hover:bg-pink-500 transition-colors shadow-lg shadow-pink-200"
                      >
                        <span>If you want love</span>
                        <Heart size={16} fill="currentColor" />
                      </button>
                    </div>
                  )}

                  {card.id === 15 && <BoredMode />}
                </div>

                <button 
                  onClick={onClose}
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400 hover:bg-gray-200 transition-colors shrink-0"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/212619040004?text=Miss%20me?%20%F0%9F%92%8C"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 glass-card bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-md border-pink-500/50 transition-colors"
    >
      <span>Miss me? 💌</span>
    </motion.a>
  );
};

const SurpriseButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 2.2, type: "spring" }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 left-6 z-50 glass-card bg-white/80 hover:bg-white text-pink-500 px-4 py-3 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-md border-pink-200 transition-colors"
  >
    <Sparkles size={18} />
    <span className="text-sm font-medium">Surprise Me</span>
  </motion.button>
);

const MemoryModal = ({ isOpen, memory, onClose }: { isOpen: boolean; memory: Memory | null; onClose: () => void }) => {
  if (!memory) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row pointer-events-auto max-h-[80vh]">
              {/* Image Section */}
              <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px]">
                {memory.image ? (
                  <img 
                    src={memory.image} 
                    alt="Memory" 
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-pink-50">
                    <Heart className="text-pink-200 w-20 h-20 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="space-y-6">
                  {memory.date && (
                    <div className="flex items-center gap-2 text-pink-500 font-medium">
                      <Calendar size={18} />
                      <span>{memory.date}</span>
                    </div>
                  )}
                  
                  <div className="w-12 h-1 bg-pink-200 rounded-full" />
                  
                  <p className="text-xl text-gray-700 font-light leading-relaxed whitespace-pre-wrap">
                    {memory.note}
                  </p>

                  {memory.isEmpty && (
                    <p className="text-sm text-pink-400 italic">
                      Waiting for this moment to happen... ♡
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const MemoryCard = ({ memory, onClick }: { memory: Memory; onClick: (m: Memory) => void }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(memory)}
      className="aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer relative group glass-card border-white/40 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {memory.image ? (
        <>
          <img 
            src={memory.image} 
            alt="Memory" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <p className="font-medium text-sm">{memory.date}</p>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-pink-50/50 gap-3 p-4 text-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-pink-300 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300">
            <Plus size={24} />
          </div>
          <p className="text-xs text-pink-400/70 font-medium uppercase tracking-wider">Add Memory</p>
        </div>
      )}
      
      {/* Interactive Heart Burst on Click */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 active:opacity-100 transition-opacity duration-200">
        <Heart className="text-white w-12 h-12 animate-ping" fill="currentColor" />
      </div>
    </motion.div>
  );
};

const CuteHero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden bg-[#fff5f7]">
      {/* Ethereal Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-3xl mx-auto z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl sm:text-8xl font-cursive text-pink-500/90 mb-4 drop-shadow-sm">for walae</h1>
          <div className="flex items-center justify-center gap-3 opacity-80">
            <div className="h-[1px] w-12 bg-pink-300" />
            <p className="text-pink-400 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
              my favorite person in the world
            </p>
            <div className="h-[1px] w-12 bg-pink-300" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          className="bg-white/60 backdrop-blur-md rounded-[40px] p-8 sm:p-12 shadow-[0_20px_60px_-15px_rgba(255,192,203,0.3)] border border-white/80 relative overflow-hidden"
        >
           {/* Decorative corner elements */}
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-50" />
           
           <div className="space-y-8 text-center relative z-10">
             <p className="text-gray-700 font-serif text-lg sm:text-xl leading-loose tracking-wide">
               i made this space for you because you are my favorite person in the whole world. every time i look at you, i realize how lucky i am. you bring so much light, warmth, and happiness into my life. this is a little corner of the internet just for us, filled with memories, thoughts, and all the reasons why i adore you. i want you to always have a place to go when you need a reminder of how special you are to me. you are my peace, my joy, and my everything.
             </p>

             <div className="pt-6">
               <Heart className="w-6 h-6 text-pink-300 mx-auto mb-4 animate-pulse" fill="currentColor" />
               <p className="text-pink-500 font-cursive text-2xl sm:text-3xl">
                 i love you more than words could ever say
               </p>
               <p className="text-pink-300/70 text-[10px] uppercase tracking-widest mt-4">
                 forever and always
               </p>
             </div>
           </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 text-pink-300/60"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce duration-[3s]">
          <span className="text-[10px] uppercase tracking-widest">scroll down</span>
          <Heart size={14} />
        </div>
      </motion.div>
    </section>
  );
};

const HerPhotoModal = ({ isOpen, photo, onClose }: { isOpen: boolean; photo: HerPhoto | null; onClose: () => void }) => {
  if (!photo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-pink-900/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden pointer-events-auto relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[3/4] w-full bg-gray-100">
                <img 
                  src={photo.url} 
                  alt="Her" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {photo.isFavorite && (
                  <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Heart size={12} fill="currentColor" />
                    <span>FAVORITE</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 text-center bg-white space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 text-pink-500 mb-2">
                  <Heart size={20} fill="currentColor" />
                </div>
                <p className="text-xl font-cursive text-pink-600 leading-relaxed">
                  "{photo.note}"
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const HerGallery = ({ onPhotoClick }: { onPhotoClick: (photo: HerPhoto) => void }) => {
  return (
    <section className="space-y-8 py-12 bg-pink-50/50 rounded-[40px] px-6 my-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center gap-2 bg-pink-100 px-4 py-1.5 rounded-full text-pink-500 text-sm font-medium mb-2">
          <Camera size={16} />
          <span>Her Gallery</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-cursive text-pink-600">The Muse</h2>
        <p className="text-pink-400/80 max-w-md mx-auto">
          Every picture of you is a work of art. Here are just a few reasons why I smile.
        </p>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {HER_PHOTOS.map((photo) => (
          <motion.div
            key={photo.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onPhotoClick(photo)}
            className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer relative group shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={photo.url} 
              alt="Her" 
              className="w-full h-auto object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Heart className="text-white w-8 h-8 drop-shadow-md transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100" fill="currentColor" />
            </div>
            {photo.isFavorite && (
              <div className="absolute top-2 right-2">
                <Heart className="text-pink-500 drop-shadow-md w-5 h-5" fill="currentColor" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalState, setModalState] = useState<ModalState>({ isOpen: false, card: null });
  const [memoryModalState, setMemoryModalState] = useState<MemoryModalState>({ isOpen: false, memory: null });
  const [herPhotoModalState, setHerPhotoModalState] = useState<HerPhotoModalState>({ isOpen: false, photo: null });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const filteredCards = useMemo(() => {
    if (!searchQuery) return CARDS;
    const query = searchQuery.toLowerCase();
    return CARDS.filter(card => 
      card.title.toLowerCase().includes(query) || 
      card.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);



  const handleCardClick = (card: CardData) => {
    setModalState({ isOpen: true, card });
  };

  const handleSurprise = () => {
    const randomCard = CARDS[Math.floor(Math.random() * CARDS.length)];
    setModalState({ isOpen: true, card: randomCard });
    if (navigator.vibrate) navigator.vibrate([50, 100, 50]);
  };

  return (
    <div className="min-h-screen relative pb-32">
      <WelcomeOverlay />
      <FloatingHearts />
      <Modal 
        isOpen={modalState.isOpen} 
        card={modalState.card} 
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))} 
        onOpenCard={(card) => setModalState({ isOpen: true, card })}
      />
      
      <MemoryModal
        isOpen={memoryModalState.isOpen}
        memory={memoryModalState.memory}
        onClose={() => setMemoryModalState({ isOpen: false, memory: null })}
      />

      <HerPhotoModal
        isOpen={herPhotoModalState.isOpen}
        photo={herPhotoModalState.photo}
        onClose={() => setHerPhotoModalState({ isOpen: false, photo: null })}
      />
      


      <CuteHero />

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16 relative z-10">
        


        {/* Relationship Counter */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-pink-600">Us, Since Day One ♡</h2>
          <p className="text-pink-400">Together since March 1st, 2026.<br/>And counting every second.</p>
          <Timer />
        </motion.section>

        {/* Filter & Card Grid */}
        <section className="space-y-6 min-h-[800px]">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-pink-500 italic mb-2">For You</h2>
            <p className="text-gray-400 text-sm">Tap a card to feel something</p>
          </div>

          <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
          
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCards.map((card) => (
                <Card key={card.id} data={card} onClick={handleCardClick} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredCards.length === 0 && (
            <div className="text-center py-20 text-gray-400 italic">
              No cards found matching "{searchQuery}"... yet ♡
            </div>
          )}
        </section>

        {/* Memory Gallery Section */}
        <section className="space-y-8 py-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-serif text-pink-600">Walae & Makram Memory Gallery 💖</h2>
            <p className="text-pink-400/80">Our story, one picture at a time</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2">
            {MEMORIES.map((memory) => (
              <MemoryCard 
                key={memory.id} 
                memory={memory} 
                onClick={(m) => setMemoryModalState({ isOpen: true, memory: m })} 
              />
            ))}
          </div>
        </section>

        {/* Her Gallery Section */}
        <HerGallery onPhotoClick={(photo) => setHerPhotoModalState({ isOpen: true, photo })} />

        {/* Footer */}
        <footer className="text-center py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-pink-100/50 to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              <Heart className="text-pink-400 animate-bounce" size={20} fill="currentColor" />
              <Heart className="text-pink-300 animate-bounce delay-100" size={20} fill="currentColor" />
              <Heart className="text-pink-200 animate-bounce delay-200" size={20} fill="currentColor" />
            </div>
            <p className="text-pink-600 font-medium text-lg">Made with all my love for Walae 🎀</p>
            <p className="text-pink-400 text-sm">You are my favorite notification.</p>
            <p className="text-xs text-pink-300 uppercase tracking-widest mt-4">Forever & Always, Makram ♡</p>
          </div>
        </footer>
      </div>

      <WhatsAppButton />
      <SurpriseButton onClick={handleSurprise} />
    </div>
  );
}
