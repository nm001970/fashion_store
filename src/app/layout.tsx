import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';

export const metadata: Metadata = {
  title: 'FORME — Fashion / Culture',
  description: 'Editorial fashion storefront concept — frontend first.',
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
                <div><div className="brand"><span className="brand-mark">F</span><span><span className="brand-name">FORME</span><span className="brand-sub">FASHION / CULTURE</span></span></div><p style={{maxWidth: 320, marginTop: 14}}>یک فروشگاه مد با لایه‌ای از محتوای editorial؛ طراحی‌شده برای کشف سریع‌تر و تصمیم خرید بهتر.</p></div>
                <div><h4>خرید</h4><div className="footer-links"><a href="#women">زنانه</a><a href="#men">مردانه</a><a href="#shoes">کفش</a><a href="#collections">کالکشن‌ها</a></div></div>
                <div><h4>راهنما</h4><div className="footer-links"><a href="#stories">مجله</a><a href="#top">سؤالات متداول</a><a href="#top">سایزبندی</a><a href="#top">بازگشت</a></div></div>
                <div><h4>عضویت</h4><p>برای دریافت ادیت‌های فصلی و معرفی‌های جدید.</p><a href="#top" className="cta ghost" style={{marginTop: 10}}>عضویت در خبرنامه</a></div>
              </div>
              <div className="footer-bottom">© 2026 FORME · Frontend concept · UI only</div>
            </div>
          </footer>
          <nav className="mobile-nav" aria-label="ناوبری موبایل">
            <a className="active" href="#top"><span>⌂</span><span>خانه</span></a>
            <a href="#products"><span>⌕</span><span>جستجو</span></a>
            <a href="#collections"><span>✦</span><span>ادیت‌ها</span></a>
            <a href="#top"><span>◌</span><span>حساب</span></a>
          </nav>
        </div>
      </body>
    </html>
  );
}
