type Category =
  | 'All'
  | 'Main Course'
  | 'Breads'
  | 'Rice'
  | 'Raita'
  | 'Papad'
  | 'Ice Cream'
  | 'Dessert'
  | 'Beverages'
  | 'Mocktails'
  | 'Shakes'
  | 'Pizza'
  | 'Burger'
  | 'Sandwich'
  | 'Momos'
  | 'Roll'
  | 'Tandoor'
  | 'South Indian'
  | 'Pav Bhaji'
  | 'Chinese'
  | 'Chaat'
  | 'Pasta'
  | 'Chole'
  | 'Fries'
  | 'North Indian'
  | 'Paratha';
  
export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  badge?: string | null;
  rating: number;
  reviews: number;
}
// ─────────────────────────────────────────────────────────────
//  Kanha Bakers — Complete Product Data
//  Extracted from official menu cards (both images)
// ─────────────────────────────────────────────────────────────

export const categories = [
  'All',
  'Main Course', 'Breads', 'Rice', 'Raita', 'Papad',
  'Ice Cream', 'Dessert',
  'Beverages', 'Mocktails', 'Shakes',
  'Pizza', 'Burger', 'Sandwich', 'Momos', 'Roll',
  'Tandoor', 'South Indian', 'Pav Bhaji',
  'Chinese', 'Chaat', 'Pasta', 'Paratha', 'Chole', 'Fries',
];

export const catEmojis = {
  All:'✨','Main Course':'🍛',Breads:'🫓',Rice:'🍚',Raita:'🥛',Papad:'🥠',
  'Ice Cream':'🍦',Dessert:'🍮',Beverages:'☕',Mocktails:'🍹',Shakes:'🥤',
  Pizza:'🍕',Burger:'🍔',Sandwich:'🥪',Momos:'🥟',Roll:'🌯',
  Tandoor:'🔥','South Indian':'🫔','Pav Bhaji':'🧇',
  Chinese:'🍜',Chaat:'🍡',Pasta:'🍝',Paratha:'🫓',Chole:'🫘',Fries:'🍟',
};

export const products: Product[] = [

  // ── MAIN COURSE ──────────────────────────────────────────────
  { id:'mc1',  category:'Main Course', name:'Paneer Lababdar',       price:280, badge:'Popular',    rating:4.7, reviews:128, description:'Rich creamy paneer in a velvety tomato-onion gravy.',               image:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop' },
  { id:'mc2',  category:'Main Course', name:'Shahi Paneer',          price:280, badge:null,         rating:4.6, reviews:98,  description:'Royal Mughlai paneer curry with cashew-cream sauce.',               image:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=400&h=300&fit=crop' },
  { id:'mc3',  category:'Main Course', name:'Kadai Paneer',          price:280, badge:null,         rating:4.5, reviews:87,  description:'Paneer cooked in a robust kadai masala with capsicum.',              image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop' },
  { id:'mc4',  category:'Main Course', name:'Matar Paneer',          price:280, badge:null,         rating:4.4, reviews:65,  description:'Green peas and paneer in a spiced tomato gravy.',                    image:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop' },
  { id:'mc5',  category:'Main Course', name:'Paneer Butter Masala',  price:280, badge:'Bestseller', rating:4.8, reviews:210, description:'Buttery paneer chunks in a silky tomato-cream sauce.',               image:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop' },
  { id:'mc6',  category:'Main Course', name:'Paneer Do Pyaza',       price:280, badge:null,         rating:4.4, reviews:54,  description:'Paneer cooked with double the onion for deep flavor.',               image:'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop' },
  { id:'mc7',  category:'Main Course', name:'Mushroom Masala',       price:280, badge:null,         rating:4.3, reviews:47,  description:'Fresh mushrooms in a bold spiced masala gravy.',                     image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'mc8',  category:'Main Course', name:'Mix Veg',               price:220, badge:null,         rating:4.2, reviews:39,  description:'Seasonal vegetables slow-cooked in traditional masala.',             image:'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop' },
  { id:'mc9',  category:'Main Course', name:'Dal Fry',               price:160, badge:'Value',      rating:4.5, reviews:180, description:'Yellow lentils tempered with ghee, garlic and cumin.',               image:'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&h=300&fit=crop' },
  { id:'mc10', category:'Main Course', name:'Dal Tadka',             price:180, badge:null,         rating:4.4, reviews:120, description:'Slow-cooked lentils with a smoky tadka finish.',                     image:'https://images.unsplash.com/photo-1605769927692-b7a50e0a16f4?w=400&h=300&fit=crop' },

  // ── BREADS ───────────────────────────────────────────────────
  { id:'br1', category:'Breads', name:'Butter Tawa Roti',         price:15,  badge:null,        rating:4.3, reviews:220, description:'Soft whole-wheat roti cooked on tawa, finished with butter.',    image:'https://images.unsplash.com/photo-1604908176997-431f6b47c5e5?w=400&h=300&fit=crop' },
  { id:'br2', category:'Breads', name:'Butter Tandoori Roti',     price:25,  badge:'Charred ♨', rating:4.5, reviews:195, description:'Fluffy tandoori roti with a charred buttery finish.',             image:'https://images.unsplash.com/photo-1604908176997-431f6b47c5e5?w=400&h=300&fit=crop' },
  { id:'gb1', category:'Breads', name:'Cheese Supreme Garlic Bread',price:110,badge:null,       rating:4.5, reviews:148, description:'Cheesy garlic bread toasted to a golden crisp.',                image:'https://images.unsplash.com/photo-1619535860434-cf9b902b8531?w=400&h=300&fit=crop' },
  { id:'gb2', category:'Breads', name:'Spicy Garlic Bread',       price:120, badge:'Spicy 🌶',  rating:4.6, reviews:165, description:'Garlic bread loaded with chilli flakes and mixed herbs.',       image:'https://images.unsplash.com/photo-1619535860434-cf9b902b8531?w=400&h=300&fit=crop' },
  { id:'gb3', category:'Breads', name:'Exotica Garlic Bread',     price:150, badge:'Premium',   rating:4.7, reviews:112, description:'Garlic bread topped with exotic veggies and melted cheese.',    image:'https://images.unsplash.com/photo-1619535860434-cf9b902b8531?w=400&h=300&fit=crop' },

  // ── RICE ─────────────────────────────────────────────────────
  { id:'ri1', category:'Rice', name:'Jeera Rice',  price:120, badge:null,       rating:4.4, reviews:88,  description:'Fragrant basmati tempered with cumin seeds and ghee.',       image:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
  { id:'ri2', category:'Rice', name:'Tawa Pulav',  price:140, badge:null,       rating:4.3, reviews:62,  description:'Street-style tawa pulav with pav bhaji masala and veggies.', image:'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=400&h=300&fit=crop' },
  { id:'ri3', category:'Rice', name:'Veg Biryani', price:230, badge:'Special',  rating:4.7, reviews:145, description:'Layered basmati biryani with whole spices and vegetables.',   image:'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop' },

  // ── RAITA ────────────────────────────────────────────────────
  { id:'ra1', category:'Raita', name:'Plain Raita', price:120, badge:null, rating:4.2, reviews:30, description:'Cool yogurt with a pinch of cumin and black salt.',        image:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop' },
  { id:'ra2', category:'Raita', name:'Bundi Raita', price:140, badge:null, rating:4.3, reviews:28, description:'Chilled yogurt with crispy bundi and roasted cumin.',      image:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop' },
  { id:'ra3', category:'Raita', name:'Veg Raita',   price:160, badge:null, rating:4.4, reviews:35, description:'Yogurt loaded with fresh chopped vegetables and herbs.',  image:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop' },
  { id:'ra4', category:'Raita', name:'Chach',        price:50,  badge:null, rating:4.5, reviews:90, description:'Spiced buttermilk — the perfect digestive after a meal.', image:'https://images.unsplash.com/photo-1559181567-c3190bded94e?w=400&h=300&fit=crop' },

  // ── PAPAD ────────────────────────────────────────────────────
  { id:'pp1', category:'Papad', name:'Plain Papad',  price:25, badge:null, rating:4.1, reviews:22, description:'Crisp thin papad served alongside your meal.', image:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop' },
  { id:'pp2', category:'Papad', name:'Masala Papad', price:50, badge:null, rating:4.3, reviews:35, description:'Roasted papad topped with onion, tomato and chaat masala.', image:'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop' },

  // ── ICE CREAM ────────────────────────────────────────────────
  { id:'ic1', category:'Ice Cream', name:'Butter Scotch', price:40, badge:null,        rating:4.5, reviews:80,  description:'Classic butterscotch flavour with caramel crunch.', image:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
  { id:'ic2', category:'Ice Cream', name:'Vanilla',       price:40, badge:null,        rating:4.3, reviews:65,  description:'Creamy smooth vanilla bean ice cream.',             image:'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=300&fit=crop' },
  { id:'ic3', category:'Ice Cream', name:'Chocolate',     price:50, badge:'Favourite', rating:4.6, reviews:110, description:'Rich dark chocolate ice cream.',                     image:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop' },
  { id:'ic4', category:'Ice Cream', name:'Mango',         price:50, badge:'Seasonal',  rating:4.7, reviews:95,  description:'Fresh Alphonso mango flavour ice cream.',            image:'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop' },
  { id:'ic5', category:'Ice Cream', name:'Paan',          price:60, badge:'Unique',    rating:4.4, reviews:42,  description:'Betel leaf flavoured ice cream — a desi special.',  image:'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop' },

  // ── DESSERT ──────────────────────────────────────────────────
  { id:'ds1',  category:'Dessert', name:'Cheese Biscoff',         price:140, badge:'Trending',    rating:4.8, reviews:185, description:'Lotus Biscoff cheesecake served chilled.',                   image:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop' },
  { id:'ds2',  category:'Dessert', name:'Mango Cheese',           price:140, badge:null,          rating:4.7, reviews:130, description:'Smooth mango cheesecake with a biscuit crust.',              image:'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&h=300&fit=crop' },
  { id:'ds3',  category:'Dessert', name:'Blue Berry Cheese',      price:140, badge:null,          rating:4.6, reviews:98,  description:'Blueberry compote atop a silky cheesecake base.',            image:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop' },
  { id:'ds4',  category:'Dessert', name:'Oreo Cheese Cake',       price:140, badge:'Crowd Fav',   rating:4.9, reviews:260, description:'Oreo crust cheesecake with cookies-and-cream layers.',       image:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop' },
  { id:'ds5',  category:'Dessert', name:'Hot Choco Lava',         price:60,  badge:null,          rating:4.7, reviews:155, description:'Warm chocolate lava cake with a molten centre.',             image:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop' },
  { id:'ds6',  category:'Dessert', name:'Hot Brownie',            price:110, badge:'Bestseller',  rating:4.8, reviews:310, description:'Warm fudgy chocolate brownie served straight from oven.',   image:'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=300&fit=crop' },
  { id:'ds7',  category:'Dessert', name:'Brownie With Ice Cream', price:130, badge:'Must Try',    rating:4.9, reviews:390, description:'Hot brownie + cold vanilla ice cream — the perfect duo.',   image:'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&h=300&fit=crop' },
  { id:'ds8',  category:'Dessert', name:'Red Velvet',             price:110, badge:null,          rating:4.6, reviews:115, description:'Moist red velvet slice with cream cheese frosting.',         image:'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&h=300&fit=crop' },
  { id:'ds9',  category:'Dessert', name:'Hot Belgium',            price:120, badge:null,          rating:4.5, reviews:88,  description:'Belgium waffle served warm with toppings.',                 image:'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop' },
  { id:'ds10', category:'Dessert', name:'Belgium With Ice Cream', price:150, badge:'Premium',     rating:4.8, reviews:145, description:'Belgium waffle + two scoops of vanilla ice cream.',         image:'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=300&fit=crop' },

  // ── BEVERAGES ────────────────────────────────────────────────
  { id:'bv1', category:'Beverages', name:'Cold Coffee',             price:100, badge:'Cool',      rating:4.5, reviews:195, description:'Chilled blended coffee — smooth and creamy.',             image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop' },
  { id:'bv2', category:'Beverages', name:'Coffee With Ice Cream',   price:120, badge:'Indulgent', rating:4.7, reviews:148, description:'Cold coffee topped with a scoop of vanilla ice cream.',   image:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop' },
  { id:'bv3', category:'Beverages', name:'Hazelnut Coffee',         price:150, badge:'Signature', rating:4.8, reviews:132, description:'Hazelnut-infused cold coffee with frothy milk.',           image:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop' },
  { id:'bv4', category:'Beverages', name:'Hot Coffee',              price:40,  badge:null,        rating:4.2, reviews:78,  description:'Classic hot black coffee, freshly brewed.',               image:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop' },
  { id:'bv5', category:'Beverages', name:'Hazelnut Hot Coffee',     price:60,  badge:null,        rating:4.4, reviews:55,  description:'Warm coffee with rich hazelnut syrup.',                   image:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop' },
  { id:'bv6', category:'Beverages', name:'Chai',                    price:25,  badge:'Desi ☕',   rating:4.9, reviews:510, description:'Aromatic masala chai brewed with ginger and cardamom.',   image:'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=400&h=300&fit=crop' },
  { id:'bv7', category:'Beverages', name:'Special Lassi',           price:70,  badge:'Summer',    rating:4.6, reviews:145, description:'Thick creamy sweet lassi — ultimate summer refreshment.', image:'https://images.unsplash.com/photo-1559181567-c3190bded94e?w=400&h=300&fit=crop' },

  // ── MOCKTAILS ────────────────────────────────────────────────
  { id:'mk1',  category:'Mocktails', name:'Peach Mocktail',      price:120, badge:null,       rating:4.4, reviews:65,  description:'Peach purée blended with lime and sparkling water.',       image:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop' },
  { id:'mk2',  category:'Mocktails', name:'Hazelnut Mocktail',   price:130, badge:null,       rating:4.4, reviews:48,  description:'Hazelnut syrup with a cream float and crushed ice.',       image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop' },
  { id:'mk3',  category:'Mocktails', name:'Chilli Guava',        price:130, badge:'Spicy 🌶', rating:4.5, reviews:72,  description:'Guava juice with a sweet-spicy chilli kick.',              image:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop' },
  { id:'mk4',  category:'Mocktails', name:'Mojito Mint',         price:120, badge:'Fresh',    rating:4.6, reviews:130, description:'Classic mint mojito with lime and sparkling water.',        image:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop' },
  { id:'mk5',  category:'Mocktails', name:'Blue Berry Mocktail', price:130, badge:'Trending', rating:4.6, reviews:115, description:'Blueberry mocktail with mint leaves and crushed ice.',     image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop' },
  { id:'mk6',  category:'Mocktails', name:'Water Melon Mojito',  price:120, badge:'Summer',   rating:4.5, reviews:98,  description:'Refreshing watermelon mocktail with fresh mint.',          image:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop' },
  { id:'mk7',  category:'Mocktails', name:'Green Apple Soda',    price:130, badge:null,       rating:4.3, reviews:60,  description:'Tangy green apple flavour with a soda fizz.',              image:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop' },
  { id:'mk8',  category:'Mocktails', name:'Blue Curacao',        price:120, badge:'Popular',  rating:4.5, reviews:105, description:'Blue citrus mocktail with a tropical twist.',              image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop' },
  { id:'mk9',  category:'Mocktails', name:'Ice Tea',             price:120, badge:null,       rating:4.3, reviews:52,  description:'Chilled black tea sweetened and served over ice.',         image:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop' },
  { id:'mk10', category:'Mocktails', name:'Lemon Ice Tea',       price:130, badge:null,       rating:4.4, reviews:67,  description:'Refreshing lemon iced tea with a mint sprig.',             image:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop' },
  { id:'mk11', category:'Mocktails', name:'Orange Mocktail',     price:120, badge:null,       rating:4.2, reviews:38,  description:'Fresh orange mocktail, sweet and tangy.',                  image:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop' },
  { id:'mk12', category:'Mocktails', name:'Strawberry Mocktail', price:120, badge:null,       rating:4.4, reviews:80,  description:'Strawberry purée with lemon and soda fizz.',               image:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=300&fit=crop' },
  { id:'mk13', category:'Mocktails', name:'Vanilla Soda',        price:120, badge:null,       rating:4.1, reviews:30,  description:'Sweet vanilla cream soda with crushed ice.',               image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop' },
  { id:'mk14', category:'Mocktails', name:'Lime Juice',          price:120, badge:'Classic',  rating:4.5, reviews:190, description:'Freshly squeezed lime — salted, sweet or soda style.',     image:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop' },
  { id:'mk15', category:'Mocktails', name:'Coconut Mocktail',    price:130, badge:null,       rating:4.4, reviews:55,  description:'Coconut water blended with tropical fruit juices.',        image:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop' },

  // ── SHAKES ───────────────────────────────────────────────────
  { id:'sk1',  category:'Shakes', name:'Vanilla Shake',       price:120, badge:null,        rating:4.3, reviews:88,  description:'Classic creamy vanilla milkshake.',                      image:'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop' },
  { id:'sk2',  category:'Shakes', name:'Strawberry Shake',    price:120, badge:null,        rating:4.4, reviews:96,  description:'Fresh strawberry blended into a thick milkshake.',       image:'https://images.unsplash.com/photo-1553177595-4de2c3ef7f83?w=400&h=300&fit=crop' },
  { id:'sk3',  category:'Shakes', name:'Pineapple Shake',     price:120, badge:null,        rating:4.2, reviews:45,  description:'Tropical pineapple milkshake with a citrus edge.',       image:'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop' },
  { id:'sk4',  category:'Shakes', name:'Chocolate Shake',     price:130, badge:'Favourite', rating:4.7, reviews:198, description:'Rich dark chocolate milkshake — decadently thick.',      image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  { id:'sk5',  category:'Shakes', name:'Butter Scotch Shake', price:120, badge:null,        rating:4.5, reviews:112, description:'Butterscotch milkshake with caramel drizzle.',           image:'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop' },
  { id:'sk6',  category:'Shakes', name:'Blue Berry Shake',    price:130, badge:null,        rating:4.4, reviews:75,  description:'Fresh blueberry shake packed with antioxidants.',       image:'https://images.unsplash.com/photo-1553177595-4de2c3ef7f83?w=400&h=300&fit=crop' },
  { id:'sk7',  category:'Shakes', name:'Black Current Shake', price:130, badge:null,        rating:4.3, reviews:55,  description:'Deep purple black currant milkshake.',                  image:'https://images.unsplash.com/photo-1553177595-4de2c3ef7f83?w=400&h=300&fit=crop' },
  { id:'sk8',  category:'Shakes', name:'Oreo Shake',          price:130, badge:'Fan Fav',   rating:4.9, reviews:320, description:'Thick shake blended with Oreo cookies and cream.',      image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  { id:'sk9',  category:'Shakes', name:'KitKat Shake',        price:140, badge:'Trending',  rating:4.8, reviews:195, description:'KitKat chocolate wafer blended into a creamy shake.',   image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  { id:'sk10', category:'Shakes', name:'Five Star Shake',     price:140, badge:null,        rating:4.7, reviews:145, description:'Five Star chocolate bar milkshake.',                    image:'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop' },
  { id:'sk11', category:'Shakes', name:'Mango Shake',         price:150, badge:'Seasonal',  rating:4.8, reviews:180, description:'Thick Alphonso mango milkshake — summer must-have.',    image:'https://images.unsplash.com/photo-1553177595-4de2c3ef7f83?w=400&h=300&fit=crop' },
  { id:'sk12', category:'Shakes', name:'Apple Shake',         price:150, badge:null,        rating:4.3, reviews:62,  description:'Fresh apple milkshake with a hint of cinnamon.',       image:'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop' },
  { id:'sk13', category:'Shakes', name:'Choco Brownie Shake', price:160, badge:'Premium',   rating:4.9, reviews:285, description:'Brownie crumbles blended into a rich chocolate shake.', image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  { id:'sk14', category:'Shakes', name:'Paan Shake',          price:180, badge:'Desi',      rating:4.5, reviews:88,  description:'Betel leaf (paan) flavoured shake — uniquely desi.',   image:'https://images.unsplash.com/photo-1577805947697-89e18249d767?w=400&h=300&fit=crop' },
  { id:'sk15', category:'Shakes', name:'Biscoff Shake',       price:200, badge:'Luxe',      rating:4.9, reviews:195, description:'Lotus Biscoff cookie milkshake — rich and indulgent.', image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  { id:'sk16', category:'Shakes', name:'Nutella Shake',       price:200, badge:'Luxe',      rating:4.9, reviews:220, description:'Pure Nutella blended with milk and ice cream.',         image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },

  // ── PIZZA ────────────────────────────────────────────────────
  { id:'pz1', category:'Pizza', name:'Margherita',          price:170, badge:'Classic',     rating:4.5, reviews:210, description:'Simple, perfect — fresh tomato sauce and melted cheese.',         image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
  { id:'pz2', category:'Pizza', name:'OTC Pizza',           price:200, badge:null,          rating:4.4, reviews:88,  description:'Onion, tomato, capsicum pizza with mozzarella.',                  image:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop' },
  { id:'pz3', category:'Pizza', name:'Exotica Pizza',       price:220, badge:null,          rating:4.5, reviews:105, description:'Exotic veggies with herbs on a crispy thin crust.',               image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
  { id:'pz4', category:'Pizza', name:'Cheese Burst',        price:250, badge:'Cheesy 🧀',   rating:4.8, reviews:285, description:'Cheese-stuffed crust that oozes with every single bite.',         image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
  { id:'pz5', category:'Pizza', name:'Paneer Pizza',        price:250, badge:null,          rating:4.5, reviews:130, description:'Spiced paneer tikka chunks on a cheesy pizza base.',               image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
  { id:'pz6', category:'Pizza', name:'Kadai Paneer Pizza',  price:280, badge:'Desi Fusion', rating:4.6, reviews:98,  description:'Kadai paneer masala meets pizza — a bold desi fusion.',           image:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop' },
  { id:'pz7', category:'Pizza', name:'Mushroom Pizza',      price:280, badge:null,          rating:4.4, reviews:78,  description:'Sautéed mushrooms, mozzarella, and Italian herbs.',               image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
  { id:'pz8', category:'Pizza', name:'Cheese Overload',     price:300, badge:'Loaded',      rating:4.7, reviews:160, description:'Triple cheese — mozzarella, cheddar and processed cheese.',       image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
  { id:'pz9', category:'Pizza', name:'Kanha Special Pizza', price:400, badge:'House Fav ⭐', rating:4.9, reviews:305, description:'Our signature pizza loaded with all premium toppings.',           image:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },

  // ── BURGER ───────────────────────────────────────────────────
  { id:'bg1', category:'Burger', name:'Veg Burger',          price:80,  badge:'Value',   rating:4.3, reviews:145, description:'Classic crispy veg patty in a soft toasted bun.',          image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
  { id:'bg2', category:'Burger', name:'Veg Cheese Burger',   price:100, badge:null,      rating:4.4, reviews:118, description:'Veg patty with a generous slice of melted cheese.',         image:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop' },
  { id:'bg3', category:'Burger', name:'Crunchy Corn Burger', price:110, badge:'Crispy',  rating:4.5, reviews:132, description:'Crunchy corn-coated patty with fresh lettuce and sauce.',  image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
  { id:'bg4', category:'Burger', name:'Crunchy Corn Cheese', price:130, badge:null,      rating:4.5, reviews:105, description:'Corn patty with extra cheese — a cheesy crunch.',          image:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop' },
  { id:'bg5', category:'Burger', name:'Big Burger',          price:160, badge:'Loaded',  rating:4.7, reviews:178, description:'Double stacked patty burger with all the trimmings.',      image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop' },
  { id:'bg6', category:'Burger', name:'Cheese Blast Burger', price:180, badge:'🔥 Hot',  rating:4.8, reviews:220, description:'Cheese-stuffed patty that bursts with every single bite.', image:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop' },

  // ── SANDWICH ─────────────────────────────────────────────────
  { id:'sw1', category:'Sandwich', name:'Veg Sandwich',           price:80,  badge:null,        rating:4.2, reviews:88,  description:'Fresh veggies and spread in toasted bread.',              image:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
  { id:'sw2', category:'Sandwich', name:'Veg Cheese Sandwich',    price:120, badge:null,        rating:4.4, reviews:110, description:'Grilled sandwich oozing with melted cheese.',              image:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
  { id:'sw3', category:'Sandwich', name:'Aloo Cheese Sandwich',   price:120, badge:null,        rating:4.3, reviews:75,  description:'Spiced potato filling with cheese in toasted sandwich.',  image:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
  { id:'sw4', category:'Sandwich', name:'Paneer Tikka Sandwich',  price:120, badge:'Popular',   rating:4.6, reviews:148, description:'Grilled paneer tikka in a toasted herbed sandwich.',      image:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },
  { id:'sw5', category:'Sandwich', name:'Cheese Chutney Sandwich',price:150, badge:'Signature', rating:4.7, reviews:165, description:'Green chutney and cheese grilled to golden perfection.', image:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop' },

  // ── MOMOS ────────────────────────────────────────────────────
  { id:'mm1', category:'Momos', name:'Fried Momos',         price:80,  badge:'Crispy',   rating:4.6, reviews:205, description:'Golden fried veg momos served with red chutney.',          image:'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop' },
  { id:'mm2', category:'Momos', name:'Steam Momos',         price:100, badge:'Healthy',  rating:4.5, reviews:168, description:'Soft steamed veg momos — light and flavourful.',            image:'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop' },
  { id:'mm3', category:'Momos', name:'Tandoori Gravy Momos',price:110, badge:'Spicy 🌶', rating:4.7, reviews:188, description:'Tandoor-charred momos dunked in a spiced gravy.',          image:'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop' },
  { id:'mm4', category:'Momos', name:'Cheese Steam Momos',  price:150, badge:'Cheesy',   rating:4.7, reviews:142, description:'Steamed momos stuffed with cheese and veggies.',           image:'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop' },
  { id:'mm5', category:'Momos', name:'Cheese Crispy Momos', price:180, badge:'New',      rating:4.6, reviews:88,  description:'Crispy fried momos loaded with melted cheese.',            image:'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop' },
  { id:'mm6', category:'Momos', name:'Tandoori Roasted',    price:190, badge:'🔥 Best',  rating:4.8, reviews:220, description:'Roasted momos with tandoori spices and mint chutney.',     image:'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop' },

  // ── ROLL ─────────────────────────────────────────────────────
  { id:'rl1', category:'Roll', name:'Veg Roll',       price:100, badge:null,        rating:4.3, reviews:98,  description:'Crispy veg filling wrapped in a soft paratha roll.',      image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
  { id:'rl2', category:'Roll', name:'Aloo Roll',      price:120, badge:null,        rating:4.3, reviews:80,  description:'Spiced potato filling rolled in a soft layered paratha.', image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
  { id:'rl3', category:'Roll', name:'Paneer Roll',    price:140, badge:'Popular',   rating:4.7, reviews:195, description:'Paneer tikka with green chutney in a paratha roll.',      image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
  { id:'rl4', category:'Roll', name:'Kathi Roll',     price:160, badge:null,        rating:4.5, reviews:122, description:'Classic Kolkata-style kathi roll with paneer and onions.',image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },
  { id:'rl5', category:'Roll', name:'Signature Roll', price:160, badge:'Signature', rating:4.8, reviews:180, description:'Kanha special roll with secret masala and house sauce.',   image:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop' },

  // ── TANDOOR ──────────────────────────────────────────────────
  { id:'td1', category:'Tandoor', name:'Paneer Tikka',           price:280, badge:'Bestseller', rating:4.8, reviews:312, description:'Marinated paneer cubes grilled in tandoor — smoky and juicy.',  image:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
  { id:'td2', category:'Tandoor', name:'Soya Chaap Tikka',       price:230, badge:'Must Try',   rating:4.7, reviews:198, description:'Soya chaap in a tandoori marinade — meaty texture.',            image:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
  { id:'td3', category:'Tandoor', name:'Tandoori Roasted Momos', price:190, badge:null,         rating:4.6, reviews:148, description:'Momos finished in tandoor with a charred smoky crust.',       image:'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop' },
  { id:'td4', category:'Tandoor', name:'Hara Bhara Kabab',       price:200, badge:'Healthy',    rating:4.6, reviews:130, description:'Spinach & pea kabab — crisp outside, soft and herby inside.', image:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
  { id:'td5', category:'Tandoor', name:'Paneer Pakoda',          price:180, badge:null,         rating:4.5, reviews:115, description:'Soft paneer slices in a crispy spiced chickpea batter.',      image:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },
  { id:'td6', category:'Tandoor', name:'Veg Pakoda',             price:140, badge:'Value',      rating:4.4, reviews:188, description:'Mixed vegetable pakodas — crispy Indian street snack.',      image:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop' },

  // ── SOUTH INDIAN ─────────────────────────────────────────────
  { id:'si1',  category:'South Indian', name:'Plain Dosa',         price:100, badge:null,        rating:4.5, reviews:198, description:'Crispy golden dosa served with sambar and chutney.',        image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si2',  category:'South Indian', name:'Butter Masala Dosa', price:120, badge:'Bestseller', rating:4.8, reviews:290, description:'Crispy dosa stuffed with spiced potato masala and butter.', image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si3',  category:'South Indian', name:'Rawa Plain Dosa',    price:110, badge:null,        rating:4.4, reviews:112, description:'Thin crispy semolina dosa — light and lacy.',              image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si4',  category:'South Indian', name:'Rawa Masala Dosa',   price:130, badge:null,        rating:4.5, reviews:98,  description:'Semolina dosa with a spiced potato filling.',              image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si5',  category:'South Indian', name:'Paneer Dosa',        price:160, badge:null,        rating:4.6, reviews:88,  description:'Crispy dosa filled with spiced paneer bhurji.',            image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si6',  category:'South Indian', name:'Pizza Dosa',         price:220, badge:'Fusion',    rating:4.7, reviews:142, description:'Crispy dosa topped with pizza sauce and mozzarella.',      image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si7',  category:'South Indian', name:'Veg Uttapam',        price:150, badge:null,        rating:4.4, reviews:75,  description:'Thick rice pancake topped with fresh vegetables.',         image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si8',  category:'South Indian', name:'Tomato Uttapam',     price:150, badge:null,        rating:4.4, reviews:68,  description:'Uttapam topped with tomato, onion and green chilli.',      image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si9',  category:'South Indian', name:'Idli Sambar',        price:90,  badge:'Light',     rating:4.5, reviews:210, description:'Steamed soft idli with piping hot sambar and chutneys.',   image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si10', category:'South Indian', name:'Vada Sambar',        price:90,  badge:null,        rating:4.4, reviews:145, description:'Crispy medu vada with sambar and coconut chutney.',        image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si11', category:'South Indian', name:'Veg Chilla',         price:150, badge:null,        rating:4.3, reviews:60,  description:'Savoury besan chilla with veggies and green chutney.',     image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },
  { id:'si12', category:'South Indian', name:'Paneer Chilla',      price:180, badge:'Rich',      rating:4.6, reviews:88,  description:'Besan chilla stuffed with spiced paneer bhurji.',          image:'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop' },

  // ── PAV BHAJI ────────────────────────────────────────────────
  { id:'pb1', category:'Pav Bhaji', name:'Butter Pav Bhaji', price:120, badge:'Mumbai Style', rating:4.8, reviews:280, description:'Spiced mashed veggie bhaji with loads of butter and pav.',  image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },
  { id:'pb2', category:'Pav Bhaji', name:'Cheese Pav Bhaji', price:150, badge:'Loaded',       rating:4.9, reviews:318, description:'Classic pav bhaji topped with generous melted cheese.',      image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },
  { id:'pb3', category:'Pav Bhaji', name:'Extra Pav',        price:40,  badge:null,           rating:4.1, reviews:25,  description:'Extra toasted buttered pav on the side.',                  image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },
  { id:'pb4', category:'Pav Bhaji', name:'Extra Bhaji',      price:70,  badge:null,           rating:4.2, reviews:30,  description:'Extra portion of spiced bhaji masala.',                    image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },

  // ── CHINESE ──────────────────────────────────────────────────
  { id:'ch1',  category:'Chinese', name:'Veg Noodles',             price:120, badge:null,        rating:4.3, reviews:145, description:'Stir-fried noodles with fresh crunchy vegetables.',            image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch2',  category:'Chinese', name:'Hakka Noodles',           price:140, badge:'Popular',   rating:4.5, reviews:198, description:'Indo-Chinese hakka noodles with vegetables and sauces.',       image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch3',  category:'Chinese', name:'Chilly Garlic Noodles',   price:170, badge:'Spicy',     rating:4.6, reviews:165, description:'Fiery garlic noodles with chilli and spring onion.',          image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch4',  category:'Chinese', name:'Manchurian Noodles',      price:170, badge:null,        rating:4.4, reviews:112, description:'Noodles tossed in a tangy Manchurian sauce.',                 image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch5',  category:'Chinese', name:'Paneer Noodles',          price:200, badge:'Rich',      rating:4.5, reviews:88,  description:'Noodles with spiced paneer cubes in Indo-Chinese style.',    image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch6',  category:'Chinese', name:'Veg Manchurian',          price:160, badge:'Classic',   rating:4.5, reviews:220, description:'Deep fried veg balls in a sweet-tangy Manchurian gravy.',    image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch7',  category:'Chinese', name:'Veg Fried Rice',          price:120, badge:null,        rating:4.3, reviews:155, description:'Wok-tossed fried rice with fresh vegetables.',                image:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
  { id:'ch8',  category:'Chinese', name:'Chilly Garlic Rice',      price:150, badge:'Spicy',     rating:4.5, reviews:132, description:'Garlic fried rice with chilli and crispy veggies.',           image:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
  { id:'ch9',  category:'Chinese', name:'Manchurian Rice',         price:150, badge:null,        rating:4.4, reviews:98,  description:'Fried rice tossed with Manchurian gravy mix-in.',            image:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
  { id:'ch10', category:'Chinese', name:'Paneer Rice',             price:170, badge:null,        rating:4.4, reviews:75,  description:'Wok fried rice with spiced paneer chunks.',                  image:'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop' },
  { id:'ch11', category:'Chinese', name:'Chilly Potato',           price:120, badge:'Crispy',    rating:4.6, reviews:195, description:'Crispy fried potato strips in a spicy chilli sauce.',        image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch12', category:'Chinese', name:'Honey Chilly Potato',     price:150, badge:'Sweet-Hot', rating:4.7, reviews:210, description:'Crispy potatoes glazed in honey and chilli sauce.',          image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch13', category:'Chinese', name:'Veg Spring Roll',         price:120, badge:null,        rating:4.3, reviews:88,  description:'Crispy rolls stuffed with stir-fried vegetables.',           image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch14', category:'Chinese', name:'Cheese Corn Spring Roll', price:160, badge:'Loaded',    rating:4.6, reviews:132, description:'Spring rolls stuffed with sweet corn and cheese.',           image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch15', category:'Chinese', name:'Sweet Corn',              price:140, badge:null,        rating:4.3, reviews:65,  description:'Indo-Chinese sweet corn with butter and masala.',            image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch16', category:'Chinese', name:'Crispy Corn',             price:160, badge:'Crunchy',   rating:4.6, reviews:178, description:'Deep fried corn kernels tossed in salt and spice.',          image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch17', category:'Chinese', name:'Chilly Paneer',           price:240, badge:'Star Dish', rating:4.7, reviews:248, description:'Crispy paneer in a tangy-spicy Indo-Chinese chilli sauce.',  image:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop' },
  { id:'ch18', category:'Chinese', name:'Veg Kothe',               price:160, badge:null,        rating:4.4, reviews:55,  description:'Pan-fried vegetable dumplings with a crispy bottom.',       image:'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400&h=300&fit=crop' },

  // ── CHAAT ────────────────────────────────────────────────────
  { id:'ct1', category:'Chaat', name:'Dahi Papdi',       price:80,  badge:'Street',  rating:4.5, reviews:165, description:'Crispy papdi with yogurt, tamarind and green chutney.',    image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },
  { id:'ct2', category:'Chaat', name:'Dahi Puri',        price:80,  badge:'Street',  rating:4.6, reviews:195, description:'Hollow puris filled with dahi, chutneys and crispy sev.',   image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },
  { id:'ct3', category:'Chaat', name:'Aloo Tikki Chaat', price:100, badge:'Hot',     rating:4.6, reviews:145, description:'Crispy potato tikki topped with chaat chutneys and onion.', image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },
  { id:'ct4', category:'Chaat', name:'Vada Pav',         price:70,  badge:'Mumbai',  rating:4.7, reviews:245, description:'Spiced potato vada in a pav with garlic chutney.',           image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },
  { id:'ct5', category:'Chaat', name:'Dhokla',           price:90,  badge:'Gujju',   rating:4.4, reviews:88,  description:'Soft steamed fermented gram flour cake — tangy and spongy.', image:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop' },

  // ── PASTA ────────────────────────────────────────────────────
  { id:'pa1', category:'Pasta', name:'Red Sauce Pasta',   price:140, badge:'Classic', rating:4.5, reviews:132, description:'Penne in a tangy tomato-based arrabbiata sauce.', image:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop' },
  { id:'pa2', category:'Pasta', name:'White Sauce Pasta', price:180, badge:'Creamy',  rating:4.6, reviews:158, description:'Pasta tossed in a rich and creamy béchamel sauce.', image:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop' },

  // ── FRIES ────────────────────────────────────────────────────
  { id:'fr1', category:'Fries', name:'Plain Fries',     price:120, badge:'Classic', rating:4.3, reviews:210, description:'Golden crispy fries with ketchup on the side.', image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
  { id:'fr2', category:'Fries', name:'Peri Peri Fries', price:150, badge:'🌶 Spicy', rating:4.7, reviews:290, description:'Fries tossed in our house peri-peri spice mix.', image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },

  // ── PARATHA ──────────────────────────────────────────────────
  { id:'pr1', category:'Paratha', name:'Aloo Paratha',              price:140, badge:'Classic',     rating:4.7, reviews:285, description:'Stuffed whole-wheat paratha with spiced aloo filling.',       image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'pr2', category:'Paratha', name:'Paneer Paratha',            price:160, badge:'Favourite',   rating:4.8, reviews:248, description:'Flaky paratha stuffed with fresh crumbled paneer and herbs.',  image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'pr3', category:'Paratha', name:'Aloo Paneer Paratha',       price:160, badge:null,          rating:4.7, reviews:180, description:'Best of both worlds — aloo and paneer in one paratha.',       image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'pr4', category:'Paratha', name:'Soya Chaap Laccha Paratha', price:230, badge:'Signature ⭐', rating:4.9, reviews:165, description:'Soya chaap gravy served with flaky laccha paratha.',           image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },

  // ── CHOLE (Kulche + Bhature) ─────────────────────────────────
  { id:'ck1', category:'Chole', name:'Chole Kulche',    price:120, badge:'Classic',  rating:4.7, reviews:195, description:'Spiced chole served with soft baked kulche bread.',      image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'ck2', category:'Chole', name:'Extra Chole',     price:70,  badge:null,       rating:4.2, reviews:28,  description:'Extra portion of spiced chole masala.',                 image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'ck3', category:'Chole', name:'Extra Kulcha',    price:30,  badge:null,       rating:4.1, reviews:18,  description:'Additional soft kulcha on the side.',                   image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'ck4', category:'Chole', name:'Chole Bhature',   price:140, badge:'Punjabi',  rating:4.8, reviews:265, description:'Fluffy deep-fried bhatura with tangy spiced chole.',    image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'ck5', category:'Chole', name:'Extra Chole (B)', price:80,  badge:null,       rating:4.2, reviews:20,  description:'Extra bowl of bhature-style spiced chole.',             image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
  { id:'ck6', category:'Chole', name:'Extra Batura',    price:30,  badge:null,       rating:4.1, reviews:15,  description:'Extra bhatura on the side.',                            image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop' },
];
// export const products: Product[] = [
//   // Cakes

//   // ================= MAIN COURSE =================
//   {
//     id: 'mc1',
//     name: 'Paneer Lababdar',
//     category: 'Main Course',
//     price: 280,
//     image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
//     description: 'Rich creamy paneer curry with tomato gravy.',
//     badge: 'Popular',
//     rating: 4.5,
//     reviews: 120,
//   },
//   {
//     id: 'mc2',
//     name: 'Shahi Paneer',
//     category: 'Main Course',
//     price: 280,
//     image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
//     description: 'Royal Mughlai paneer curry with creamy texture.',
//     rating: 4.6,
//     reviews: 98,
//   },

//   // ================= BREADS =================
//   {
//     id: 'b1',
//     name: 'Butter Tawa Roti',
//     category: 'Breads',
//     price: 15,
//     image: 'https://images.unsplash.com/photo-1604908176997-431f6b47c5e5',
//     description: 'Soft roti cooked on tawa with butter.',
//     rating: 4.3,
//     reviews: 40,
//   },

//   // ================= RICE =================
//   {
//     id: 'r1',
//     name: 'Jeera Rice',
//     category: 'Rice',
//     price: 120,
//     image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
//     description: 'Basmati rice tempered with cumin seeds.',
//     rating: 4.4,
//     reviews: 60,
//   },

//   // ================= DESSERT =================
//   {
//     id: 'd1',
//     name: 'Hot Brownie',
//     category: 'Dessert',
//     price: 110,
//     image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e',
//     description: 'Warm chocolate brownie served fresh.',
//     badge: 'Best Seller',
//     rating: 4.8,
//     reviews: 210,
//   },

//   // ================= BEVERAGES =================
//   {
//     id: 'bev1',
//     name: 'Cold Coffee',
//     category: 'Beverages',
//     price: 100,
//     image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
//     description: 'Chilled coffee with creamy texture.',
//     rating: 4.5,
//     reviews: 150,
//   },

//   // ================= MOCKTAILS =================
//   {
//     id: 'm1',
//     name: 'Blue Curacao',
//     category: 'Mocktails',
//     price: 120,
//     image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
//     description: 'Refreshing citrus blue mocktail.',
//     rating: 4.4,
//     reviews: 90,
//   },

//   // ================= SHAKES =================
//   {
//     id: 'sh1',
//     name: 'Oreo Shake',
//     category: 'Shakes',
//     price: 130,
//     image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767',
//     description: 'Thick shake blended with Oreo cookies.',
//     badge: 'Fan Fav',
//     rating: 4.9,
//     reviews: 300,
//   },

//   // ================= PIZZA =================
//   {
//     id: 'pz1',
//     name: 'Margherita Pizza',
//     category: 'Pizza',
//     price: 170,
//     image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e',
//     description: 'Classic pizza with tomato and cheese.',
//     rating: 4.5,
//     reviews: 180,
//   },

//   // ================= BURGER =================
//   {
//     id: 'bg1',
//     name: 'Veg Burger',
//     category: 'Burger',
//     price: 80,
//     image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
//     description: 'Crispy veg patty burger.',
//     rating: 4.3,
//     reviews: 140,
//   },

//   // ================= MOMOS =================
//   {
//     id: 'mm1',
//     name: 'Fried Momos',
//     category: 'Momos',
//     price: 80,
//     image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
//     description: 'Crispy fried veg momos.',
//     rating: 4.6,
//     reviews: 200,
//   },

//   // ================= SOUTH INDIAN =================
//   {
//     id: 'si1',
//     name: 'Masala Dosa',
//     category: 'South Indian',
//     price: 120,
//     image: 'https://images.unsplash.com/photo-1630383249896-424e482df921',
//     description: 'Crispy dosa stuffed with potato masala.',
//     rating: 4.7,
//     reviews: 250,
//   },
// ];

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Jaipur',
    text: 'Kanha Bakers made my wedding cake and it was absolutely breathtaking. The Belgian Chocolate Truffle had our guests asking for seconds. Pure artistry!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=100&q=80',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    location: 'newai',
    text: 'The croissants here are flakier than Paris. I know because I\'ve been. Started my mornings with their almond croissant — it\'s non-negotiable now.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    id: 3,
    name: 'Ananya Joshi',
    location: 'Pushkar',
    text: 'The masala chai latte with cinnamon rolls is my Sunday ritual. Warm, cozy, and so perfectly spiced. Kanha Bakers is our family\'s happy place.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Beawar',
    text: 'Ordered birthday cakes three years in a row. Every time they exceed expectations. The packaging alone feels premium. Real craftsmanship.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
];
