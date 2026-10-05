export type Product = {
  slug: string;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  swatches: number;
  category: 'زنانه' | 'مردانه' | 'کفش' | 'اکسسوری' | 'استریت‌ویر';
  material: string;
  fit: string;
  colors: string[];
  rating: number;
  reviewCount: number;
};

export const formatToman = (value: number) => `${new Intl.NumberFormat('fa-IR').format(value)} تومان`;

export const products: Product[] = [
  { slug: 'oversized-wool-coat', brand: 'NOIR STUDIO', name: 'کت پشمی اورسایز', price: 1890000, oldPrice: 2290000, badge: 'جدید', swatches: 3, category: 'زنانه', material: 'پشم ترکیبی', fit: 'Relaxed', colors: ['#202124', '#bdb7aa', '#6b5748'], rating: 4.8, reviewCount: 128},
  { slug: 'structured-daily-jacket', brand: 'ATELIER 09', name: 'ژاکت روزمره ساختارمند', price: 1290000, swatches: 4, category: 'مردانه', material: 'کتان سنگین', fit: 'Regular', colors: ['#25262a', '#d7cdbb', '#66706c', '#9b8a78'], rating: 4.7, reviewCount: 96},
  { slug: 'minimal-linen-shirt', brand: 'FORME', name: 'پیراهن لینن مینیمال', price: 1150000, swatches: 3, category: 'زنانه', material: 'لینن خالص', fit: 'Relaxed', colors: ['#ebe5d8', '#202124', '#6d766f'], rating: 4.9, reviewCount: 142},
  { slug: 'city-cropped-jacket', brand: 'NOVA', name: 'کت کوتاه خیابونی', price: 1490000, badge: 'ترند', swatches: 2, category: 'مردانه', material: 'نایلون مات', fit: 'Boxy', colors: ['#16191e', '#6f7570'], rating: 4.6, reviewCount: 71},
  { slug: 'classic-trench-coat', brand: 'ÉLAN', name: 'ترنچ‌کت کلاسیک', price: 2190000, oldPrice: 2690000, swatches: 4, category: 'زنانه', material: 'گاباردین', fit: 'Classic', colors: ['#b49b7e', '#242528', '#6d5a48', '#d5cbbd'], rating: 4.8, reviewCount: 84},
  { slug: 'wide-leg-trousers', brand: 'FORME', name: 'شلوار وایدلگ پارچه‌ای', price: 1090000, badge: 'پرفروش', swatches: 3, category: 'مردانه', material: 'ویسکوز', fit: 'Wide', colors: ['#1b1c1f', '#b8ad98', '#4d544f'], rating: 4.9, reviewCount: 188},
  { slug: 'leather-crossbody', brand: 'ARC 17', name: 'کیف کراس‌بادی چرمی', price: 1390000, swatches: 3, category: 'اکسسوری', material: 'چرم طبیعی', fit: 'Compact', colors: ['#1b1716', '#725746', '#d4cab7'], rating: 4.7, reviewCount: 62},
  { slug: 'minimal-runner', brand: 'NORTH / 01', name: 'کتانی مینیمال Runner', price: 1290000, badge: 'جدید', swatches: 4, category: 'کفش', material: 'چرم و مش', fit: 'True to size', colors: ['#f0eee7', '#26282c', '#9c9a92', '#6e706d'], rating: 4.8, reviewCount: 214},
  { slug: 'utility-overshirt', brand: 'NOVA', name: 'اورشرت Utility', price: 1190000, swatches: 3, category: 'استریت‌ویر', material: 'تویل پنبه', fit: 'Oversized', colors: ['#222428', '#89907f', '#b8a68d'], rating: 4.6, reviewCount: 54},
  { slug: 'silk-slip-dress', brand: 'ÉLAN', name: 'پیراهن ابریشمی Slip', price: 1590000, swatches: 3, category: 'زنانه', material: 'ابریشم', fit: 'Fluid', colors: ['#292b30', '#b9a59e', '#d7d0c0'], rating: 4.9, reviewCount: 77},
  { slug: 'retro-sneaker', brand: 'RIVET', name: 'کتانی Retro Court', price: 990000, oldPrice: 1190000, swatches: 5, category: 'کفش', material: 'چرم', fit: 'True to size', colors: ['#e8e1d3', '#77736a', '#323238', '#9e7460', '#4e665e'], rating: 4.7, reviewCount: 119},
  { slug: 'ribbed-beanie', brand: 'NOIR STUDIO', name: 'کلاه بافت Ribbed', price: 490000, badge: 'Essential', swatches: 4, category: 'اکسسوری', material: 'پشم مرینو', fit: 'One size', colors: ['#1c1d20', '#8d8a80', '#b49a78', '#677067'], rating: 4.8, reviewCount: 91},
];

export const categories = [
  { slug: 'women', title: 'زنانه', meta: '۴۸۰۰+ محصول', note: 'Tailoring · Knitwear · Dresses' },
  { slug: 'men', title: 'مردانه', meta: '۳۹۰۰+ محصول', note: 'Outerwear · Shirting · Trousers' },
  { slug: 'shoes', title: 'کفش', meta: '۲۲۰۰+ محصول', note: 'Sneakers · Boots · Loafers' },
  { slug: 'accessories', title: 'اکسسوری', meta: '۱۸۰۰+ محصول', note: 'Bags · Belts · Jewelry' },
  { slug: 'streetwear', title: 'استریت‌ویر', meta: '۱۵۰۰+ محصول', note: 'Utility · Denim · Layering' },
];

export const brands = ['NIKE', 'ADIDAS', 'ZARA', 'COS', 'LEVI’S', 'NEW BALANCE', 'ARCTERYX', 'ASICS'];

export const fitProfiles = [
  { slug: 'relaxed', title: 'Relaxed', fa: 'آزاد', note: 'برای لایه‌سازی و فرم نرم', tone: 'sand' },
  { slug: 'regular', title: 'Regular', fa: 'استاندارد', note: 'تعادل بین راحتی و ساختار', tone: 'blue' },
  { slug: 'boxy', title: 'Boxy', fa: 'باکسی', note: 'سیلوئت کوتاه و ساختارمند', tone: 'green' },
  { slug: 'wide', title: 'Wide', fa: 'واید', note: 'خطوط آزاد برای پایین‌تنه', tone: 'violet' },
];

export const editorialCards = [
  { eyebrow: 'The guide', title: 'ساخت یک کمد کپسولی برای پاییز', excerpt: 'هفت قطعه اصلی، چندین استایل؛ با تمرکز بر تناسب و جنس پارچه.', tone: 'sand' },
  { eyebrow: 'Materials', title: 'پارچه قبل از ترند', excerpt: 'چرا وزن، بافت و افت پارچه روی ظاهر روزمره بیشتر از لوگو اثر می‌گذارد.', tone: 'blue' },
  { eyebrow: 'Street notes', title: 'Utility، اما تمیزتر', excerpt: 'چطور جزئیات کاربردی را بدون شلوغ‌کردن استایل وارد کمد روزمره کنیم.', tone: 'green' },
];
