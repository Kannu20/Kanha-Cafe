'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInstagram, FiYoutube, FiFacebook, FiArrowRight, FiBell } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';
import { GiCupcake } from 'react-icons/gi';
import Image from 'next/image';

/* ── Countdown target: 15 days from now ── */
const TARGET = new Date(Date.now() + 15 * 24 * 60 * 60 * 1000);

function useCountdown() {
  const [time, setTime] = useState({ d: 15, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        d: Math.floor(diff / 864e5),
        h: Math.floor((diff % 864e5) / 36e5),
        m: Math.floor((diff % 36e5) / 6e4),
        s: Math.floor((diff % 6e4) / 1e3),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ─── Data ─── */
const upcomingOffers = [
  { emoji:'🎂', title:'Birthday Bonanza',    desc:'FREE mini cake slice on your birthday month with any order above ₹299', tag:'Up to ₹150 OFF'  },
  { emoji:'🛵', title:'Free Delivery Week',  desc:'Zero delivery charges on all orders for 7 full days',                    tag:'Save ₹49 / order' },
  { emoji:'🍕', title:'Pizza + Shake Combo', desc:'Any pizza + any shake at flat ₹100 off. The ultimate meal deal',          tag:'₹100 OFF Combo'  },
  { emoji:'⭐', title:'Loyalty Rewards',     desc:'Earn Kanha Coins on every order. Redeem for free desserts & beverages',   tag:'Earn & Save'     },
];

const photos = [
  { src:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', label:'Chocolate Truffle' },
  { src:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',    label:'Fresh Croissants'  },
  { src:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop', label:'Kanha Special Pizza'},
  { src:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=400&fit=crop', label:'Butter Masala Dosa' },
  { src:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop', label:'Oreo Shake'         },
  { src:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=400&fit=crop', label:'Tandoor Platter'    },
];

const videos = [
  { thumb:'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=340&fit=crop', label:'Our Kitchen — Morning Rush'     },
  { thumb:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=340&fit=crop', label:'How We Make Cheesecake'          },
  { thumb:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=340&fit=crop', label:'Cheese Burst Pizza Drop 🍕'      },
  { thumb:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=340&fit=crop', label:'Shake Compilation — All Flavours' },
];

const socials = [
  {
    id:'ig', name:'Instagram', handle:'@kanhabakers',
    url:'https://www.instagram.com/kanh.abakers/',
    icon:<FiInstagram size={22} />,
    bg:'rgba(225,48,108,0.08)', border:'rgba(225,48,108,0.25)', iconBg:'linear-gradient(135deg,#E1306C,#C13584)',
  },
  {
    id:'yt', name:'YouTube', handle:'Kanha Bakers Reels',
    url:'https://youtube.com/@kanhabakers',
    icon:<FiYoutube size={22} />,
    bg:'rgba(255,0,0,0.07)', border:'rgba(255,0,0,0.22)', iconBg:'#FF0000',
  },
  {
    id:'fb', name:'Facebook', handle:'Kanha Bakers Official',
    url:'https://facebook.com/kanhabakers',
    icon:<FiFacebook size={22} />,
    bg:'rgba(24,119,242,0.07)', border:'rgba(24,119,242,0.22)', iconBg:'#1877F2',
  },
  {
    id:'wa', name:'WhatsApp', handle:'Join WhatsApp Channel for more updates',
    url:'https://whatsapp.com/channel/0029Vb8DJphLo4hWgMD9pG3N',
    icon:<BsWhatsapp size={22} />,
    bg:'rgba(37,211,102,0.07)', border:'rgba(37,211,102,0.22)', iconBg:'#25D366',
  },
];

/* ─── Sub-components ─── */
function CountBox({ val, label }: { val: number; label: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl border"
      style={{
        minWidth:72, padding:'16px 20px',
        background:'rgba(255,255,255,0.06)',
        borderColor:'rgba(198,124,78,0.28)',
      }}
    >
      <motion.span
        key={val}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="font-playfair font-extrabold text-white leading-none"
        style={{ fontSize:'2.4rem' }}
      >
        {String(val).padStart(2, '0')}
      </motion.span>
      <span className="font-nunito font-bold uppercase tracking-widest text-white/35 mt-1.5" style={{ fontSize:9 }}>
        {label}
      </span>
    </div>
  );
}

function SectionOrnament({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-4 mb-3">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-caramel/50" />
        <HiOutlineSparkles className="text-gold text-base" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-caramel/50" />
      </div>
      <h2 className="font-playfair font-bold text-white" style={{ fontSize:'clamp(1.5rem,4vw,2rem)' }}>{label}</h2>
      <p className="font-nunito text-white/35 text-xs font-bold tracking-widest uppercase mt-1">{sub}</p>
    </div>
  );
}

/* ─── Main Page ─── */
export default function OffersPage() {
  const time = useCountdown();
  const [mediaTab, setMediaTab]   = useState('photos');
  const [email, setEmail]         = useState('');
  const [notified, setNotified]   = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleNotify = () => {
    if (!email || !email.includes('@')) { setEmailError(true); return; }
    setEmailError(false);
    setNotified(true);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background:'linear-gradient(160deg, #1a0f06 0%, #2C1A0E 40%, #1a0f06 100%)' }}>

      {/* ── Background glows ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[700px] h-[700px] rounded-full -top-52 -left-52"
          style={{ background:'radial-gradient(circle, rgba(198,124,78,.26) 0%, transparent 65%)' }} />
        <div className="absolute w-[600px] h-[600px] rounded-full -bottom-40 -right-40"
          style={{ background:'radial-gradient(circle, rgba(212,168,83,.20) 0%, transparent 65%)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 pb-20">

        {/* ── Navbar ── */}
        <motion.div
          initial={{ y:-50, opacity:0 }}
          animate={{ y:0,   opacity:1 }}
          transition={{ duration:.65, ease:[.22,1,.36,1] }}
          className="flex items-center justify-between py-6 text-sm font-nunito font-bold"
        >
          <a href="/" className="flex items-center gap-2.5">
            
            
          </a>
         
        </motion.div>

        {/* ── Hero ── */}
        <div className="text-center py-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity:0, scale:.85 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:.55 }}
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-8 border"
            style={{ background:'rgba(198,124,78,.15)', borderColor:'rgba(198,124,78,.35)' }}
          >
            <motion.span
              animate={{ scale:[1,1.7,1], opacity:[1,.3,1] }}
              transition={{ repeat:Infinity, duration:1.8 }}
              className="w-2 h-2 rounded-full bg-caramel inline-block"
            />
            <span className="font-nunito font-extrabold text-amber text-white tracking-widest uppercase">Big Offers Coming Soon</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity:0, y:36 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.8, delay:.1, ease:[.22,1,.36,1] }}
            className="font-playfair font-extrabold text-white leading-[1.05] mb-5"
            style={{ fontSize:'clamp(3rem,10vw,6.5rem)' }}
          >
            Something<br />
            <span className="italic"
              style={{ background:'linear-gradient(135deg,#E8A87C,#D4A853)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              Delicious
            </span><br />
            is Brewing
          </motion.h1>

          <motion.p
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:.3 }}
            className="font-nunito text-white/55 text-base max-w-md mx-auto leading-relaxed mb-12 font-semibold"
          >
            We're baking up exclusive deals, combo offers and loyalty rewards.
            Be the first to know when the oven opens! 🎉
          </motion.p>

          {/* Countdown */}
          <motion.div
            initial={{ opacity:0, y:24 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:.4 }}
            className="flex items-center justify-center gap-3 flex-wrap mb-12"
          >
            <CountBox val={time.d} label="Days"  />
            <span className="font-playfair text-3xl font-bold pb-3" style={{ color:'rgba(198,124,78,.5)' }}>:</span>
            <CountBox val={time.h} label="Hours" />
            <span className="font-playfair text-3xl font-bold pb-3" style={{ color:'rgba(198,124,78,.5)' }}>:</span>
            <CountBox val={time.m} label="Mins"  />
            <span className="font-playfair text-3xl font-bold pb-3" style={{ color:'rgba(198,124,78,.5)' }}>:</span>
            <CountBox val={time.s} label="Secs"  />
          </motion.div>

          {/* Email notify */}
          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ delay:.55 }}
            className="max-w-sm mx-auto"
          >
            {notified ? (
              <motion.div
                initial={{ scale:.8, opacity:0 }}
                animate={{ scale:1, opacity:1 }}
                className="flex items-center justify-center gap-2 rounded-full py-4 px-6 font-nunito font-bold text-sm"
                style={{ background:'rgba(37,211,102,.12)', border:'1px solid rgba(37,211,102,.3)', color:'#4ade80' }}
              >
                🎉 You're on the list! Watch your inbox.
              </motion.div>
            ) : (
              <div className="flex rounded-full overflow-hidden border"
                style={{
                  background:'rgba(255,255,255,.08)',
                  borderColor: emailError ? 'rgba(198,124,78,.6)' : 'rgba(255,255,255,.15)',
                  padding:'6px 6px 6px 20px',
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setEmailError(false); }}
                  placeholder="Enter your email to get notified…"
                  className="flex-1 bg-transparent border-none outline-none font-nunito text-sm text-white font-semibold placeholder:text-white/30"
                />
                <motion.button
                  onClick={handleNotify}
                  whileTap={{ scale:.96 }}
                  whileHover={{ scale:1.03 }}
                  className="flex items-center gap-1.5 rounded-full px-5 py-3 font-nunito font-extrabold text-xs text-white"
                  style={{
                    background:'linear-gradient(135deg,#C67C4E,#D4A853)',
                    boxShadow:'0 4px 18px rgba(198,124,78,.45)',
                  }}
                >
                  <FiBell size={13} /> Notify Me
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>

        {/* ── Upcoming Offers ── */}
        <SectionOrnament label="Upcoming Offers" sub="Sneak Peek · Launching Soon" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
          {upcomingOffers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:24 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:'-40px' }}
              transition={{ delay:i*.08, duration:.5, ease:[.22,1,.36,1] }}
              whileHover={{ y:-4, borderColor:'rgba(198,124,78,.5)' }}
              className="relative rounded-2xl p-6 border overflow-hidden cursor-default group"
              style={{ background:'rgba(255,255,255,.045)', borderColor:'rgba(198,124,78,.2)' }}
            >
              {/* Subtle gradient fill */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background:'linear-gradient(135deg,rgba(198,124,78,.09) 0%,transparent 60%)' }} />

              <div className="absolute top-4 right-4 font-nunito font-extrabold text-[9px] tracking-widest uppercase rounded-full px-3 py-1 border"
                style={{ background:'rgba(212,168,83,.15)', borderColor:'rgba(212,168,83,.35)', color:'#D4A853' }}>
                Soon
              </div>
              <span className="text-3xl mb-3 block">{offer.emoji}</span>
              <h3 className="font-playfair font-bold text-white text-lg mb-1.5">{offer.title}</h3>
              <p className="font-nunito text-white/45 text-sm leading-relaxed mb-3 font-semibold">{offer.desc}</p>
              <span className="inline-block font-nunito font-bold text-xs rounded-full px-3 py-1.5 border"
                style={{ background:'rgba(198,124,78,.12)', borderColor:'rgba(198,124,78,.3)', color:'#E8A87C' }}>
                {offer.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── Media section ── */}
        <SectionOrnament label="Our Kitchen & Moments" sub="Photos & Reels · Updated Weekly" />
        <div className="mb-20">
          {/* Tabs */}
          <div className="flex justify-center gap-3 mb-6">
            {[['photos','📸 Photos'],['videos','🎬 Videos']].map(([tab, lbl]) => (
              <motion.button
                key={tab}
                onClick={() => setMediaTab(tab)}
                whileTap={{ scale:.95 }}
                className="rounded-full px-6 py-2.5 font-nunito font-extrabold text-sm border transition-all duration-250"
                style={mediaTab === tab ? {
                  background:'linear-gradient(135deg,#C67C4E,#D4A853)',
                  borderColor:'transparent',
                  color:'#fff',
                  boxShadow:'0 4px 18px rgba(198,124,78,.4)',
                } : {
                  background:'rgba(255,255,255,.06)',
                  borderColor:'rgba(255,255,255,.12)',
                  color:'rgba(255,255,255,.5)',
                }}
              >
                {lbl}
              </motion.button>
            ))}
          </div>

          {/* Photos */}
          <AnimatePresence mode="wait">
            {mediaTab === 'photos' && (
              <motion.div
                key="photos"
                initial={{ opacity:0, y:12 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y:-8 }}
                transition={{ duration:.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {photos.map((ph, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity:0, scale:.9 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{ delay:i*.05 }}
                    className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/8"
                    style={{ aspectRatio:'1' }}
                  >
                    <img src={ph.src} alt={ph.label} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <span className="font-nunito font-bold text-white text-xs">{ph.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Videos */}
            {mediaTab === 'videos' && (
              <motion.div
                key="videos"
                initial={{ opacity:0, y:12 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y:-8 }}
                transition={{ duration:.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {videos.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity:0, scale:.92 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{ delay:i*.07 }}
                    className="relative rounded-2xl overflow-hidden group cursor-pointer border border-white/8"
                    style={{ aspectRatio:'16/9' }}
                  >
                    <img src={v.thumb} alt={v.label} loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale:1.12 }}
                        className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl"
                        style={{ boxShadow:'0 4px 20px rgba(0,0,0,.35)' }}
                      >
                        <div style={{ width:0, height:0, borderStyle:'solid',
                          borderWidth:'9px 0 9px 18px',
                          borderColor:'transparent transparent transparent #C67C4E',
                          marginLeft:3 }} />
                      </motion.div>
                    </div>
                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3"
                      style={{ background:'linear-gradient(to top,rgba(20,10,4,.82) 0%,transparent 100%)' }}>
                      <span className="font-nunito font-bold text-white/88 text-xs">{v.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Social Links ── */}
        <SectionOrnament label="Follow & Stay Updated" sub="Offers · Reels · Behind the Scenes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-16">
          {socials.map((s, i) => (
            <motion.a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:i*.08 }}
              whileHover={{ y:-3 }}
              className="flex items-center gap-4 rounded-2xl p-4 border cursor-pointer group transition-all duration-300"
              style={{ background:s.bg, borderColor:s.border }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"
                style={{ background:s.iconBg }}>
                {s.icon}
              </div>
              <div className="flex-1">
                <span className="font-nunito font-extrabold text-white text-sm block">{s.name}</span>
                <span className="font-nunito text-white/45 text-xs font-semibold">{s.handle}</span>
              </div>
              <motion.span
                className="text-white/25 group-hover:text-white/55"
                whileHover={{ x:3 }}
              >
                <FiArrowRight size={18} />
              </motion.span>
            </motion.a>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="text-center py-6 border-t border-white/8">
          <p className="font-nunito text-white/30 text-xs font-semibold leading-loose">
            © 2025 <span className="text-gold">Kanha Bakers</span> · Ajmer, Rajasthan<br />
            Open 11:00 AM – 11:30 PM · <span className="text-gold">+91 8118866587</span>
          </p>
        </div>
      </div>
    </div>
  );
}