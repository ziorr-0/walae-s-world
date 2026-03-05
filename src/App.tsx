import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useDragControls } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Volume2, VolumeX, X, Shuffle, Sparkles, Search } from 'lucide-react';
import { CARDS, CardData, Category } from './constants';

// --- Types ---
type ModalState = {
  isOpen: boolean;
  card: CardData | null;
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

const Modal = ({ isOpen, card, onClose }: { isOpen: boolean; card: CardData | null; onClose: () => void }) => {
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
      className="fixed bottom-6 right-6 z-50 glass-card bg-pink-500/80 hover:bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-md border-pink-400/50 transition-colors"
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

// --- Main App ---

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalState, setModalState] = useState<ModalState>({ isOpen: false, card: null });
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

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
      />
      
      {/* Audio Element */}
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/02/10/audio_fc06c23860.mp3?filename=piano-moment-11342.mp3" />

      {/* Music Toggle */}
      <button 
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 p-3 rounded-full glass-card text-pink-500 hover:text-pink-600 transition-colors"
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <motion.div 
          style={{ opacity, scale }}
          className="text-center z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-7xl sm:text-9xl font-cursive text-pink-500 mb-4 drop-shadow-sm"
          >
            Walae ♡
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-pink-400/80 text-lg sm:text-xl font-light tracking-widest uppercase"
          >
            My Favorite Person
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 text-pink-300"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll for love</span>
            <Heart size={16} fill="currentColor" />
          </div>
        </motion.div>
      </section>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16 relative z-10">
        
        {/* Intro Letter */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 sm:p-12 rounded-3xl text-center space-y-6"
        >
          <h2 className="text-3xl font-serif text-pink-600 italic">Walae...</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed font-light text-lg">
            <p>I didn’t make this because of a special day.</p>
            <p>I didn’t wait for Valentine’s.</p>
            <p>I didn’t wait for an anniversary.</p>
            <p className="font-medium text-pink-500">I made this just because you exist.</p>
            <p>
              Since March 1st, 2026, something in my life shifted.
              It’s only been a few days, but somehow it feels different.
              Softer. Warmer. Realer.
            </p>
            <p>
              This little space on the internet? <br/>
              It’s yours.
            </p>
            <p className="italic text-pink-400 text-base">
              Every tap, every card, every word I’ll write here…
              is just another way of saying
              you matter to me more than you think.
            </p>
          </div>
        </motion.section>

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

        {/* Footer */}
        <footer className="text-center py-12 text-pink-300 text-sm">
          <p>Made with ❤️ for Walae</p>
          <p className="mt-2 text-xs opacity-60">Forever & Always</p>
        </footer>
      </div>

      <WhatsAppButton />
      <SurpriseButton onClick={handleSurprise} />
    </div>
  );
}
