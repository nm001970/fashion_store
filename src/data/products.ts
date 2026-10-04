export type Product = {
  brand: string;
  name: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  swatches: number;
};

export const products: Product[] = [
  { brand: 'NOIR STUDIO', name: 'کت پشمی اورسایز', price: 'تومان189', oldPrice: 'تومان229', badge: 'جدید', swatches: 3 },
  { brand: 'ATELIER 09', name: 'ژاکت روزمره ساختارمند', price: 'تومان129', swatches: 4 },
  { brand: 'FORME', name: 'پیراهن لینن مینیمال', price: 'تومان115', swatches: 3 },
  { brand: 'NOVA', name: 'کت کوتاه شهری', price: 'تومان149', badge: 'ترند', swatches: 2 },
  { brand: 'ÉLAN', name: 'ترنچ‌کت کلاسیک', price: 'تومان219', oldPrice: 'تومان269', swatches: 4 },
];

export const categories = [
  ['زنانه', '۴۸۰۰+ محصول'],
  ['مردانه', '۳۹۰۰+ محصول'],
  ['کفش', '۲۲۰۰+ محصول'],
  ['اکسسوری', '۱۸۰۰+ محصول'],
  ['استریت‌ویر', '۱۵۰۰+ محصول'],
];

export const brands = ['NIKE', 'ADIDAS', 'ZARA', 'COS', 'LEVI’S', 'NEW BALANCE'];
