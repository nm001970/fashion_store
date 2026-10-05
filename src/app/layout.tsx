import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { Header } from '../components/Header';
import { BagIcon, HeartIcon, SearchIcon, UserIcon } from '../components/Icons';

export const metadata: Metadata = {
  title: 'FORME — فروشگاه مد و پوشاک',
  description: 'فرم تازه‌ای برای استایل؛ فروشگاه مد با لایه‌ای از محتوای editorial.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="site-shell">
          <Header />
          {children}
          <footer className="footer">
            <div className="container">
              <div className="footer-grid">
                <div>
                  <div className="brand"><span className="brand-mark">F</span><span><span className="brand-name">FORME</span><span className="brand-sub">FASHION / CULTURE</span></span></div>
                  <p className="footer-intro">یک فروشگاه مد مستقل، با نگاه یک مجله؛ برای اینکه پیدا کردن چیز درست، خودش بخشی از لذت خرید باشد.</p>
                </div>
                <div><h4>خرید</h4><div className="footer-links"><Link href="/category/women">زنانه</Link><Link href="/category/men">مردانه</Link><Link href="/category/shoes">کفش</Link><Link href="/collections">کالکشن‌ها</Link></div></div>
                <div><h4>راهنما</h4><div className="footer-links"><Link href="/journal">مجله</Link><Link href="/shop">سایزبندی</Link><Link href="/shop">بازگشت</Link><Link href="/shop">سؤالات متداول</Link></div></div>
                <div><h4>عضویت</h4><p>برای وقت‌هایی که چیز تازه‌ای واقعاً ارزش دیدن دارد؛ نه برای پر کردن صندوق پیام‌ها.</p><span className="cta ghost">عضویت در خبرنامه</span></div>
              </div>
              <div className="footer-bottom"><span>© 2026 FORME</span><span>Frontend concept · UI only</span></div>
            </div>
          </footer>
          <nav className="mobile-nav" aria-label="ناوبری موبایل">
            <Link className="active" href="/"><span><span className="nav-icon">⌂</span></span><span>خانه</span></Link>
            <Link href="/shop"><SearchIcon width={19} height={19} /><span>فروشگاه</span></Link>
            <Link href="/collections"><BagIcon width={19} height={19} /><span>کالکشن</span></Link>
            <Link href="/shop"><UserIcon width={19} height={19} /><span>حساب</span></Link>
          </nav>
        </div>
      </body>
    </html>
  );
}
