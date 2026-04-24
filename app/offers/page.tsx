'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInstagram, FiYoutube, FiFacebook, FiArrowRight, FiBell } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';
import { GiCupcake } from 'react-icons/gi';

/* ── Keep TARGET stable across renders ── */
const TARGET_MS = Date.now() + 15 * 24 * 60 * 60 * 1000;

function useCountdown() {
    const calc = () => {
        const diff = TARGET_MS - Date.now();
        if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
        return {
            d: Math.floor(diff / 864e5),
            h: Math.floor((diff % 864e5) / 36e5),
            m: Math.floor((diff % 36e5) / 6e4),
            s: Math.floor((diff % 6e4) / 1e3),
        };
    };
    const [time, setTime] = useState({ d: 15, h: 0, m: 0, s: 0 });
    useEffect(() => {
        setTime(calc());
        const id = setInterval(() => setTime(calc()), 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

/* ─── Static data ─── */
const upcomingOffers = [
    { emoji: '🎂', title: 'Birthday Bonanza', desc: 'FREE mini cake slice on your birthday month with any order above ₹299', tag: 'Up to ₹150 OFF' },
    { emoji: '🛵', title: 'Free Delivery Week', desc: 'Zero delivery charges on all orders for 7 full days', tag: 'Save ₹49 / order' },
    { emoji: '🍕', title: 'Pizza + Shake Combo', desc: 'Any pizza + any shake at flat ₹100 off. The ultimate meal deal', tag: '₹100 OFF Combo' },
    { emoji: '⭐', title: 'Loyalty Rewards', desc: 'Earn Kanha Coins on every order. Redeem for free desserts & beverages', tag: 'Earn & Save' },
];

const photos = [
    { src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', label: 'Chocolate Truffle' },
    { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop', label: 'Fresh Croissants' },
    { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop', label: 'Kanha Special Pizza' },
    { src: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=400&fit=crop', label: 'Butter Masala Dosa' },
    { src: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop', label: 'Oreo Shake' },
    { src: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=400&fit=crop', label: 'Tandoor Platter' },
];

const videos = [
    { src: '/videos/video1.mp4', label: 'Our Kitchen — Morning Rush' },
    { src: '/videos/video2.mp4', label: 'Our Rooftop View' },
];

const socials = [
    {
        id: 'ig', name: 'Instagram', handle: '@kanha_bakers_',
        url: 'https://www.instagram.com/kanha_bakers_/',
        icon: <FiInstagram size={20} />, iconBg: 'linear-gradient(135deg,#E1306C,#C13584)',
        cardBg: 'rgba(225,48,108,0.09)', cardBorder: 'rgba(225,48,108,0.28)'
    },
    // {
    //     id: 'yt', name: 'YouTube', handle: 'Kanha Bakers Reels',
    //     url: 'https://youtube.com/@kanhabakers',
    //     icon: <FiYoutube size={20} />, iconBg: '#FF0000',
    //     cardBg: 'rgba(255,0,0,0.08)', cardBorder: 'rgba(255,0,0,0.25)'
    // },
    // {
    //     id: 'fb', name: 'Facebook', handle: 'Kanha Bakers Official',
    //     url: 'https://facebook.com/kanhabakers',
    //     icon: <FiFacebook size={20} />, iconBg: '#1877F2',
    //     cardBg: 'rgba(24,119,242,0.08)', cardBorder: 'rgba(24,119,242,0.25)'
    // },
    {
        id: 'wa', name: 'WhatsApp', handle: 'Join WhatsApp Channel',
        url: 'https://whatsapp.com/channel/0029Vb8DJphLo4hWgMD9pG3N',
        icon: <BsWhatsapp size={20} />, iconBg: '#25D366',
        cardBg: 'rgba(37,211,102,0.08)', cardBorder: 'rgba(37,211,102,0.25)'
    },
];

/* ─── CountBox ─── */
function CountBox({ val, label }: { val: number; label: string }) {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            flex: '1 1 0', minWidth: 0,
            padding: '14px 8px',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(198,124,78,0.30)',
            borderRadius: 16,
        }}>
            <motion.span
                key={val}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.22 }}
                style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
                    fontWeight: 800, color: '#fff', lineHeight: 1, display: 'block',
                }}
            >
                {String(val).padStart(2, '0')}
            </motion.span>
            <span style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 9, fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)', marginTop: 6, display: 'block',
            }}>
                {label}
            </span>
        </div>
    );
}

/* ─── Section heading ─── */
function SecHead({ title, sub }: { title: string; sub: string }) {
    return (
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 10 }}>
                <div style={{ height: 1, width: 64, background: 'linear-gradient(90deg,transparent,rgba(198,124,78,.55))' }} />
                <HiOutlineSparkles style={{ color: '#D4A853', fontSize: 14 }} />
                <div style={{ height: 1, width: 64, background: 'linear-gradient(90deg,rgba(198,124,78,.55),transparent)' }} />
            </div>
            <h2 style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700, color: '#fff',
                fontSize: 'clamp(1.4rem,4vw,1.9rem)', margin: 0,
            }}>{title}</h2>
            <p style={{
                fontFamily: 'Nunito, sans-serif',
                fontSize: 10, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.32)', marginTop: 6,
            }}>{sub}</p>
        </div>
    );
}

/* ─── Main ─── */
export default function OffersPage() {
    const time = useCountdown();
    const [tab, setTab] = useState('photos');
    const [email, setEmail] = useState('');

    const [emailErr, setEmailErr] = useState(false);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);

    return (
        /*
          KEY FIX: The root div is position:relative with overflow hidden on BOTH axes.
          width:100% + box-sizing:border-box prevents any child from pushing width beyond viewport.
          The fixed background glows use percentage-based positioning so they stay inside.
        */
        <div style={{
            width: '100%',
            minHeight: '100vh',
            boxSizing: 'border-box',
            overflowX: 'hidden',
            position: 'relative',
            background: 'linear-gradient(160deg, #140a03 0%, #2C1A0E 45%, #140a03 100%)',
            fontFamily: 'Nunito, sans-serif',
        }}>
            {/* ── Decorative glows — clamped inside viewport ── */}
            <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', width: 'min(700px, 90vw)', height: 'min(700px, 90vw)',
                    borderRadius: '50%', top: '-20%', left: '-15%',
                    background: 'radial-gradient(circle, rgba(198,124,78,.22) 0%, transparent 65%)',
                }} />
                <div style={{
                    position: 'absolute', width: 'min(600px, 80vw)', height: 'min(600px, 80vw)',
                    borderRadius: '50%', bottom: '-15%', right: '-15%',
                    background: 'radial-gradient(circle, rgba(212,168,83,.18) 0%, transparent 65%)',
                }} />
            </div>

            {/* ── Content ── */}
            <div style={{
                position: 'relative', zIndex: 2,
                width: '100%', maxWidth: 860,
                margin: '0 auto',
                padding: '0 16px 80px',
                boxSizing: 'border-box',
            }}>

                {/* ── Navbar ── */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .6, ease: [.22, 1, .36, 1] }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0' }}
                >
                    <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>


                    </a>

                </motion.div>

                {/* ── Hero ── */}
                <div style={{ textAlign: 'center', padding: '48px 0 52px' }}>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: .88 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            background: 'rgba(198,124,78,.15)', border: '1px solid rgba(198,124,78,.38)',
                            borderRadius: 50, padding: '8px 20px', marginBottom: 28,
                        }}
                    >
                        <motion.span
                            animate={{ scale: [1, 1.7, 1], opacity: [1, .3, 1] }}
                            transition={{ repeat: Infinity, duration: 1.8 }}
                            style={{ width: 7, height: 7, borderRadius: '50%', background: '#C67C4E', display: 'inline-block', flexShrink: 0 }}
                        />
                        <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 11, color: '#E8A87C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                            Big Offers Coming Soon
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .75, delay: .1, ease: [.22, 1, .36, 1] }}
                        style={{
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: 800, color: '#fff',
                            fontSize: 'clamp(2.6rem,9vw,6rem)',
                            lineHeight: 1.06, margin: '0 0 16px',
                        }}
                    >
                        Something<br />
                        <span style={{
                            fontStyle: 'italic',
                            background: 'linear-gradient(135deg,#E8A87C,#D4A853)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>Delicious</span><br />
                        is Brewing
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .3 }}
                        style={{
                            fontFamily: 'Nunito, sans-serif', fontSize: '0.95rem',
                            color: 'rgba(255,255,255,0.52)', maxWidth: 400, margin: '0 auto 40px',
                            lineHeight: 1.75, fontWeight: 600,
                        }}
                    >
                        We're baking up exclusive deals, combo offers and loyalty rewards.
                        Be the first to know when the oven opens! 🎉
                    </motion.p>

                    {/* ── Countdown — single row, flex, no wrap ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: .38 }}
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: 'clamp(4px, 2vw, 12px)',
                            maxWidth: 360, margin: '0 auto 36px',
                        }}
                    >
                        <CountBox val={time.d} label="Days" />
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.2rem,4vw,1.8rem)', fontWeight: 700, color: 'rgba(198,124,78,.55)', paddingBottom: 12, flexShrink: 0 }}>:</span>
                        <CountBox val={time.h} label="Hours" />
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.2rem,4vw,1.8rem)', fontWeight: 700, color: 'rgba(198,124,78,.55)', paddingBottom: 12, flexShrink: 0 }}>:</span>
                        <CountBox val={time.m} label="Mins" />
                        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.2rem,4vw,1.8rem)', fontWeight: 700, color: 'rgba(198,124,78,.55)', paddingBottom: 12, flexShrink: 0 }}>:</span>
                        <CountBox val={time.s} label="Secs" />
                    </motion.div>

                    {/* whatsapp notify */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.52 }}
                        style={{ maxWidth: 380, margin: '0 auto' }}
                    >
                        <a
                            href="https://whatsapp.com/channel/0029Vb8DJphLo4hWgMD9pG3N"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <motion.div
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 10,
                                    borderRadius: 50,
                                    padding: '14px 24px',
                                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                                    boxShadow: '0 4px 18px rgba(37,211,102,0.4)',
                                    fontFamily: 'Nunito, sans-serif',
                                    fontWeight: 800,
                                    fontSize: 13,
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                📢 Join WhatsApp Channel
                            </motion.div>
                        </a>
                    </motion.div>
                </div>

                {/* ── Upcoming Offers ── */}
                <SecHead title="Upcoming Offers" sub="Sneak Peek · Launching Soon" />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                    gap: 14, marginBottom: 72,
                }}>
                    {upcomingOffers.map((o, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-30px' }}
                            transition={{ delay: i * .07, duration: .48 }}
                            whileHover={{ y: -4 }}
                            style={{
                                position: 'relative', borderRadius: 20,
                                padding: '22px 20px', overflow: 'hidden', cursor: 'default',
                                background: 'rgba(255,255,255,0.045)',
                                border: '1px solid rgba(198,124,78,0.22)',
                                transition: 'border-color .3s',
                            }}
                        >
                            <span style={{
                                position: 'absolute', top: 12, right: 12,
                                background: 'rgba(212,168,83,.18)', border: '1px solid rgba(212,168,83,.38)',
                                borderRadius: 50, padding: '2px 10px',
                                fontFamily: 'Nunito, sans-serif', fontSize: 9, fontWeight: 800,
                                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#D4A853',
                            }}>Soon</span>

                            <span style={{ fontSize: '1.9rem', marginBottom: 12, display: 'block' }}>{o.emoji}</span>
                            <h3 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, color: '#fff', fontSize: '1.05rem', marginBottom: 8 }}>{o.title}</h3>
                            <p style={{ fontFamily: 'Nunito, sans-serif', color: 'rgba(255,255,255,.42)', fontSize: 12, lineHeight: 1.65, marginBottom: 12, fontWeight: 500 }}>{o.desc}</p>
                            <span style={{
                                display: 'inline-block', borderRadius: 50, padding: '5px 14px',
                                background: 'rgba(198,124,78,.12)', border: '1px solid rgba(198,124,78,.30)',
                                fontFamily: 'Nunito, sans-serif', fontSize: 11, fontWeight: 700, color: '#E8A87C',
                            }}>{o.tag}</span>
                        </motion.div>
                    ))}
                </div>

                {/* ── Media ── */}
                <SecHead title="Our Kitchen & Moments" sub="Photos & Reels · Updated Weekly" />

                {/* Tab pills */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 22 }}>
                    {[['photos', '📸 Photos'], ['videos', '🎬 Videos']].map(([t, lbl]) => (
                        <motion.button
                            key={t} onClick={() => setTab(t)} whileTap={{ scale: .94 }}
                            style={{
                                borderRadius: 50, padding: '10px 22px', border: 'none', cursor: 'pointer',
                                fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 13,
                                transition: 'all .25s',
                                ...(tab === t ? {
                                    background: 'linear-gradient(135deg,#C67C4E,#D4A853)',
                                    color: '#fff', boxShadow: '0 4px 18px rgba(198,124,78,.4)',
                                } : {
                                    background: 'rgba(255,255,255,.07)',
                                    border: '1px solid rgba(255,255,255,.13)',
                                    color: 'rgba(255,255,255,.5)',
                                }),
                            }}
                        >{lbl}</motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {tab === 'photos' ? (
                        <motion.div key="ph"
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .28 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 72 }}
                        >
                            {photos.map((ph, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * .04 }}
                                    className="group"
                                    style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '1', position: 'relative', cursor: 'pointer' }}
                                >
                                    <img src={ph.src} alt={ph.label} loading="lazy"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s', display: 'block' }}
                                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.09)'}
                                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div key="vd"
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .28 }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 12, marginBottom: 72 }}
                        >
                            {videos.map((v, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * .06 }}
                                    style={{
                                        borderRadius: 18, overflow: 'hidden', aspectRatio: '16/9', position: 'relative', cursor: 'pointer',
                                        border: '1px solid rgba(255,255,255,.08)'
                                    }}
                                >
                                    {/* <video
                                        src={v.src}
                                        controls
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    /> */}
                                    <video
                                        src={v.src}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '18px',
                                            cursor: 'pointer'
                                        }}
                                        onPlay={() => setPlayingIndex(i)}
                                        onPause={() => setPlayingIndex(null)}
                                        onClick={(e) => {
                                            const vid = e.currentTarget;
                                            if (vid.paused) vid.play();
                                            else vid.pause();
                                        }}
                                    />
                                    {/* Play btn */}
                                    {playingIndex !== i && (
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            pointerEvents: 'none'
                                        }}>
                                            <div style={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: '50%',
                                                background: 'rgba(255,255,255,.90)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: '0 4px 20px rgba(0,0,0,.38)',
                                            }}>
                                                <div style={{
                                                    width: 0,
                                                    height: 0,
                                                    borderStyle: 'solid',
                                                    borderWidth: '9px 0 9px 18px',
                                                    borderColor: 'transparent transparent transparent #C67C4E',
                                                    marginLeft: 3
                                                }} />
                                            </div>
                                        </div>
                                    )}
                                    {/* Label */}
                                    <div style={{
                                        position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 14px',
                                        background: 'linear-gradient(to top, rgba(15,8,2,.85) 0%, transparent 100%)',
                                    }}>
                                        <span style={{ fontFamily: 'Nunito, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.88)' }}>{v.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Social ── */}
                <SecHead title="Follow & Stay Updated" sub="Offers · Reels · Behind the Scenes" />

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                    gap: 12, marginBottom: 64,
                }}>
                    {socials.map((s, i) => (
                        <motion.a
                            key={s.id} href={s.url} target="_blank" rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * .07 }}
                            whileHover={{ y: -3 }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: 14,
                                borderRadius: 18, padding: '14px 16px',
                                background: s.cardBg, border: `1px solid ${s.cardBorder}`,
                                textDecoration: 'none', cursor: 'pointer', transition: 'transform .3s',
                            }}
                        >
                            <div style={{
                                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                                background: s.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,.25)',
                            }}>{s.icon}</div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, color: '#fff', fontSize: 13, display: 'block' }}>{s.name}</span>
                                <span style={{
                                    fontFamily: 'Nunito, sans-serif', color: 'rgba(255,255,255,.4)', fontSize: 11, fontWeight: 600, display: 'block',
                                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                                }}>{s.handle}</span>
                            </div>
                            <FiArrowRight size={17} style={{ color: 'rgba(255,255,255,.28)', flexShrink: 0 }} />
                        </motion.a>
                    ))}
                </div>

                {/* ── Footer ── */}


            </div>
        </div>
    );
}