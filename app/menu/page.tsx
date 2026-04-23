// 'use client';

// import { useState, useEffect, Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search, SlidersHorizontal } from 'lucide-react';
// import { products } from '@/data/products';
// import ProductCard from '@/components/ProductCard';
// import { ProductSkeleton } from '@/components/Skeleton';

// // type Category = 'All' | 'Cakes' | 'Pastries' | 'Snacks' | 'Beverages';
// type Category =
//   | 'All'
//   | 'Main Course'
//   | 'Breads'
//   | 'Rice'
//   | 'Raita'
//   | 'Papad'
//   | 'Ice Cream'
//   | 'Dessert'
//   | 'Beverages'
//   | 'Mocktails'
//   | 'Shakes'
//   | 'Pizza'
//   | 'Burger'
//   | 'Sandwich'
//   | 'Momos'
//   | 'Roll'
//   | 'Tandoor'
//   | 'South Indian'
//   | 'Pav Bhaji'
//   | 'North Indian'
//   | 'Paratha';
// const categories: Category[] = ['All', 'Main Course', 'Breads', 'Rice', 'Raita', 'Papad', 'Ice Cream', 'Dessert', 'Beverages', 'Mocktails', 'Shakes', 'Pizza', 'Burger', 'Sandwich', 'Momos', 'Roll', 'Tandoor', 'South Indian', 'Pav Bhaji', 'North Indian', 'Paratha'];

// const catEmojis: Record<string, string> = {
//   All: '✨', Cakes: '🎂', Pastries: '🥐', Snacks: '🥨', Beverages: '☕',
// };

// function MenuContent() {
//   const searchParams = useSearchParams();
//   const [activeCategory, setActiveCategory] = useState<Category>('All');
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const cat = searchParams.get('cat') as Category;
//     if (cat && categories.includes(cat)) setActiveCategory(cat);
//     setTimeout(() => setLoading(false), 600);
//   }, [searchParams]);

//   const filtered = products.filter(p => {
//     const matchCat = activeCategory === 'All' || p.category === activeCategory;
//     const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
//                         p.description.toLowerCase().includes(search.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   return (
//     <div className="min-h-screen bg-cream pt-24 pb-16">
//       {/* Header */}
//       <div className="bg-gradient-to-br from-mocha to-[#5a2f18] py-16 px-6 mb-10">
//         <div className="max-w-7xl mx-auto text-center">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-accent text-3xl text-caramel mb-2"
//           >
//             Freshly Baked
//           </motion.p>
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="font-display text-5xl md:text-6xl font-bold text-white"
//           >
//             Our Menu
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="font-body text-bakery-200 mt-4 max-w-xl mx-auto"
//           >
//             Every item crafted with care, baked fresh each morning in our newai kitchen.
//           </motion.p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Controls */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
//           {/* Search */}
//           <div className="relative w-full sm:w-72">
//             <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search items..."
//               value={search}
//               onChange={e => setSearch(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 bg-white border border-bakery-100 rounded-xl font-body text-sm focus:outline-none focus:border-bakery-400 focus:ring-2 focus:ring-bakery-100 shadow-sm"
//             />
//           </div>

//           {/* Category filters */}
//           <div className="flex gap-2 flex-wrap">
//             {categories.map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-4 py-2 rounded-xl font-body text-sm font-semibold transition-all duration-300 ${
//                   activeCategory === cat
//                     ? 'bg-bakery-600 text-white shadow-md shadow-bakery-600/30'
//                     : 'bg-white text-mocha border border-bakery-100 hover:border-bakery-400'
//                 }`}
//               >
//                 <span className="mr-1">{catEmojis[cat]}</span>{cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Results count */}
//         <p className="font-body text-sm text-gray-500 mb-6">
//           Showing <span className="font-semibold text-mocha">{filtered.length}</span> items
//           {activeCategory !== 'All' && <span> in <span className="text-bakery-600 font-semibold">{activeCategory}</span></span>}
//         </p>

//         {/* Grid */}
//         {loading ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)}
//           </div>
//         ) : filtered.length === 0 ? (
//           <div className="text-center py-24">
//             <p className="text-6xl mb-4">🔍</p>
//             <h3 className="font-display text-2xl font-bold text-mocha mb-2">Nothing found</h3>
//             <p className="font-body text-gray-500">Try a different search or category</p>
//           </div>
//         ) : (
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeCategory + search}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//             >
//               {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
//             </motion.div>
//           </AnimatePresence>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function MenuPage() {
//   return (
//     <Suspense fallback={
//       <div className="min-h-screen bg-cream pt-24 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
//           {Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)}
//         </div>
//       </div>
//     }>
//       <MenuContent />
//     </Suspense>
//   );
// }

'use client';

import { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FiSearch, FiX, FiShoppingCart, FiStar, FiFilter, FiChevronDown } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useCart } from '@/context/CartContext';
import { categories, catEmojis, Product, products, Category } from '@/data/products';


/* ─── Skeleton Card ─── */
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-warm/60 animate-pulse">
      <div className="h-44 skeleton" />
      <div className="p-4 space-y-3">
        <div className="h-4 skeleton rounded-lg w-3/4" />
        <div className="h-3 skeleton rounded-lg w-full" />
        <div className="h-3 skeleton rounded-lg w-2/3" />
        <div className="h-9 skeleton rounded-xl mt-4" />
      </div>
    </div>
  );
}

type ProductCardProps = {
  product: Product;
  index?: number;
};

/* ─── Single Product Card ─── */
function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: (index % 8) * 0.055, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, boxShadow: '0 20px 48px rgba(92,51,23,0.15)' }}
      className="group bg-white rounded-2xl overflow-hidden border border-warm/70 flex flex-col"
      style={{ boxShadow: '0 2px 16px rgba(92,51,23,0.07)' }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {product.badge && (
          <span
            className="absolute top-2.5 left-2.5 text-white text-[10px] font-bold font-nunito px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm"
            style={{ background: 'linear-gradient(135deg, #C67C4E, #D4A853)' }}
          >
            {product.badge}
          </span>
        )}

        {/* Quick-add on hover */}
        <button
          onClick={handleAdd}
          className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-250 bg-white rounded-full p-2 shadow-warm-md text-caramel hover:bg-caramel hover:text-white"
          aria-label="Quick add"
        >
          <FiShoppingCart size={14} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-playfair font-semibold text-espresso text-[0.95rem] leading-snug flex-1 line-clamp-2">
            {product.name}
          </h3>
          <span className="font-nunito font-extrabold text-caramel text-sm whitespace-nowrap">
            ₹{product.price}
          </span>
        </div>

        <p className="font-nunito text-mocha/60 text-xs leading-relaxed mb-2.5 flex-1 line-clamp-2">
          {product.description}
        </p>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              size={10}
              className={i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-warm'}
            />
          ))}
          <span className="font-nunito font-semibold text-espresso text-[10px] ml-0.5">{product.rating}</span>
          <span className="font-nunito text-mocha/40 text-[10px]">({product.reviews})</span>
        </div>

        {/* Add to Cart */}
        <motion.button
          onClick={handleAdd}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-nunito font-bold text-[0.78rem] tracking-wide transition-all duration-300 relative overflow-hidden group/btn"
          style={added ? {
            background: 'linear-gradient(135deg, #14532d, #16a34a)',
            color: 'white',
            boxShadow: '0 4px 14px rgba(22,163,74,0.40)',
          } : {
            background: 'linear-gradient(135deg, #7B3F00 0%, #C67C4E 45%, #E8A87C 100%)',
            color: 'white',
            boxShadow: '0 4px 18px rgba(123,63,0,0.45), 0 1px 3px rgba(0,0,0,0.15)',
          }}
        >
          {/* Shine sweep on hover */}
          {!added && (
            <span
              className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
              }}
            />
          )}
          <FiShoppingCart size={13} />
          {added ? '✓ Added to Cart!' : 'Add to Cart'}
        </motion.button>
      </div>
    </motion.article>
  );
}

// type Category =
//   | 'All'
//   | 'Main Course'
//   | 'Breads'
//   | 'Rice'
//   | 'Raita'
//   | 'Papad'
//   | 'Ice Cream'
//   | 'Dessert'
//   | 'Beverages'
//   | 'Mocktails'
//   | 'Shakes'
//   | 'Pizza'
//   | 'Burger'
//   | 'Sandwich'
//   | 'Momos'
//   | 'Roll'
//   | 'Tandoor'
//   | 'South Indian'
//   | 'Pav Bhaji'
//   | 'North Indian'
//   | 'Paratha';


type CategoryPillProps = {
  cat: Category;
  active: boolean;
  onClick: (cat: Category) => void;
};

/* ─── Category pill ─── */
function CategoryPill({ cat, active, onClick }: CategoryPillProps) {
  return (
    <motion.button
      onClick={() => onClick(cat)}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full font-nunito font-700 text-sm border transition-all duration-250 whitespace-nowrap"
      style={active ? {
        background: 'linear-gradient(135deg, #C67C4E, #D4A853)',
        color: 'white',
        border: 'transparent',
        boxShadow: '0 4px 16px rgba(198,124,78,0.38)',
      } : {
        background: 'rgba(255,255,255,0.85)',
        color: '#8B5E3C',
        borderColor: 'rgba(198,124,78,0.22)',
      }}
    >
      {/* <span>{catEmojis[cat] || '🍽'}</span> */}
      {cat}
    </motion.button>
  );
}

/* ─── Main Page ─── */
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search,         setSearch]         = useState('');
  const [loading,        setLoading]        = useState(true);
  const [showFilters,    setShowFilters]    = useState(false);
  const pillsRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat    = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = !search || (
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
      );
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  /* Group for display */
  // const grouped = useMemo(() => {
  //   if (activeCategory !== 'All' || search) return null;
  //   const map = {};
  //   products.forEach((p) => {
  //     if (!map[p.category]) map[p.category] = [];
  //     map[p.category].push(p);
  //   });
  //   return map;
  // }, [activeCategory, search]);
  type GroupedProducts = Record<Category, Product[]>;
  const grouped = useMemo<GroupedProducts | null>(() => {
  if (activeCategory !== 'All' || search) return null;

  const map: Partial<GroupedProducts> = {};

  // products.forEach((p) => {
  //   if (!map[p.category]) {
  //     map[p.category] = [];
  //   }
  //   map[p.category]!.push(p);
  // });
  products.forEach((p) => {
  const cat: Category = p.category; // force TS to lock type

  if (!map[cat]) {
    map[cat] = [];
  }

  map[cat]!.push(p);
});

  return map as GroupedProducts;
}, [activeCategory, search]);

  // const handleCategory = (cat) => {
  //   setActiveCategory(cat);
  //   setSearch('');
  //   setShowFilters(false);
  //   // Scroll pills to keep active in view
  //   if (pillsRef.current) {
  //     const btn = pillsRef.current.querySelector(`[data-cat="${cat}"]`);
  //     btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  //   }
  // };

  
  const handleCategory = (cat: Category) => {
    setActiveCategory(cat);
    setSearch('');
    setShowFilters(false);

    if (pillsRef.current) {
      const btn = pillsRef.current.querySelector<HTMLButtonElement>(
        `[data-cat="${cat}"]`
      );
      btn?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#FDF6EC' }}>

      {/* ── Hero Banner ── */}
      <div
        className="relative pt-28 pb-16 px-4 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2C1A0E 0%, #5C3317 55%, #8B5E3C 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4A853, transparent)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C67C4E, transparent)', transform: 'translate(-30%, 30%)' }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 mb-4 border border-white/20 text-amber-200 text-xs sm:text-sm font-nunito font-semibold max-w-full text-center"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
          >
            <HiOutlineSparkles className="text-gold flex-shrink-0" />
            <span>Open 11 AM – 11:30 PM · +91 8118866587</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-playfair font-bold text-white mb-3"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            Our{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, #E8A87C, #D4A853)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Menu
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
            className="font-nunito text-white/65 max-w-lg mx-auto text-sm sm:text-base px-4 sm:px-0"
          >
            {products.length} dishes across {categories.length - 1} categories — crafted fresh daily in our kitchen.
          </motion.p>

          {/* Search bar inside hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="relative max-w-md mx-auto mt-7"
          >
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              size={16}
              style={{ color: 'rgba(255,255,255,0.50)' }}
            />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setActiveCategory('All'); }}
              placeholder="Search dishes, categories…"
              className="w-full pl-10 pr-10 py-3.5 rounded-full font-nunito text-sm focus:outline-none"
              style={{
                background:           'rgba(255,255,255,0.13)',
                backdropFilter:       'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border:               '1px solid rgba(255,255,255,0.25)',
                color:                'white',
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
              >
                <FiX size={15} />
              </button>
            )}
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V20C1200 55 960 5 720 35C480 60 240 10 0 45V60Z" fill="#FDF6EC"/>
          </svg>
        </div>
      </div>

      {/* ── Category Filters ── */}
      <div className="sticky top-[64px] z-30 bg-cream/90 backdrop-blur-md border-b border-caramel/12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          {/* Mobile: active category label */}
          <div className="md:hidden flex items-center justify-between mb-2">
            <span className="font-nunito text-xs text-mocha/60 font-semibold uppercase tracking-wider truncate">
              {search ? `"${search}"` : activeCategory}
            </span>
            {(search || activeCategory !== 'All') && (
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="text-xs font-nunito font-semibold text-caramel hover:underline ml-2 flex-shrink-0"
              >
                Clear
              </button>
            )}
          </div>

          {/* Scrollable pills */}
          <AnimatePresence>
            {(showFilters || true) && (
              <div
                ref={pillsRef}
                className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {categories.map((cat) => (
                  <div key={cat} data-cat={cat}>
                    <CategoryPill
                      cat={cat}
                      active={activeCategory === cat && !search}
                      onClick={handleCategory}
                    />
                  </div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Count bar */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-nunito text-sm text-mocha/60">
            {search
              ? <>Showing <strong className="text-espresso">{filtered.length}</strong> results for <strong className="text-caramel">"{search}"</strong></>
              : activeCategory !== 'All'
                ? <><strong className="text-espresso">{filtered.length}</strong> items in <strong className="text-caramel">{activeCategory}</strong></>
                : <><strong className="text-espresso">{products.length}</strong> items across all categories</>
            }
          </p>
          {(search || activeCategory !== 'All') && (
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="text-xs font-nunito font-semibold text-caramel hover:underline flex items-center gap-1"
            >
              <FiX size={12} /> Clear
            </button>
          )}
        </div>

        {loading ? (
          /* ── Skeleton grid ── */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>

        ) : filtered.length === 0 ? (
          /* ── Empty state ── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-playfair text-2xl font-bold text-espresso mb-2">Nothing found</h3>
            <p className="font-nunito text-mocha/55 text-sm mb-5">
              Try a different keyword or browse a category
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              className="btn-primary text-sm py-3 px-7"
            >
              View All Items
            </button>
          </motion.div>

        ) : (search || activeCategory !== 'All') ? (
          /* ── Filtered flat grid ── */
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4"
            >
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

        ) : (
          /* ── All: grouped by category ── */
          <div className="space-y-14">
            {categories.slice(1).map((cat) => {
              const items = products.filter((p) => p.category === cat);
              if (!items.length) return null;
              return (
                <CategorySection
                  key={cat}
                  cat={cat}
                  items={items}
                  onFilterClick={handleCategory}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
type CategorySectionProps = {
  cat: Category;
  items: Product[];
  onFilterClick: (cat: Category) => void;
};

/* ─── Category Section (used in "All" view) ─── */
function CategorySection({ cat, items, onFilterClick }: CategorySectionProps) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Section heading */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-warm-sm"
            style={{ background: 'linear-gradient(135deg, #FDF6EC, #F5ECD7)', border: '1px solid rgba(198,124,78,0.2)' }}
          >
            {catEmojis[cat] || '🍽'}
          </div>
          <div>
            <h2 className="font-playfair font-bold text-espresso text-xl leading-none">{cat}</h2>
            <p className="font-nunito text-mocha/50 text-xs mt-0.5">{items.length} items</p>
          </div>
        </div>
        <button
          onClick={() => onFilterClick(cat)}
          className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-nunito font-semibold text-xs sm:text-sm text-caramel border border-caramel/40 hover:bg-caramel hover:text-white transition-all duration-250 whitespace-nowrap flex-shrink-0"
        >
          See all
          <span className="text-base leading-none">→</span>
        </button>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {items.slice(0, 5).map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      {items.length > 5 && (
        <div className="text-center mt-4">
          <button
            onClick={() => onFilterClick(cat)}
            className="font-nunito text-sm font-semibold text-caramel border border-caramel/35 rounded-full px-6 py-2 hover:bg-caramel hover:text-white transition-all duration-250"
          >
            + {items.length - 5} more in {cat}
          </button>
        </div>
      )}
    </motion.section>
  );
}