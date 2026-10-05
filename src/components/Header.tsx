import Link from 'next/link';
import { BagIcon, HeartIcon, SearchIcon, UserIcon } from './Icons';
import { MegaNav } from './MegaNav';

export function Header() {
  return (
    <>
      <div className="announcement">ارسال رایگان برای سفارش‌های بالای ۱٬۵۰۰٬۰۰۰ تومان · بازگشت تا ۳۰ روز · اصالت برند</div>
      <header className="header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="FORME — خانه">
            <span className="brand-mark">F</span>
            <span>
              <span className="brand-name">FORME</span>
              <span className="brand-sub">FASHION / CULTURE</span>
            </span>
          </Link>

          <nav className="nav" aria-label="ناوبری اصلی">
            <Link href="/shop">تازه‌ها</Link>
            <Link href="/category/women">زنانه</Link>
            <Link href="/category/men">مردانه</Link>
            <Link href="/category/shoes">کفش</Link>
            <Link href="/collections">کالکشن‌ها</Link>
            <Link href="/journal">مجله</Link>
          </nav>

          <div className="header-actions">
            <Link className="search-pill" href="/search" aria-label="جستجو در فروشگاه">
              <SearchIcon width={18} height={18} aria-hidden="true" />
              <span>جستجو در برندها و محصولات</span>
              <kbd>⌘ K</kbd>
            </Link>
            <Link className="icon-btn solid" href="/wishlist" aria-label="علاقه‌مندی‌ها"><HeartIcon width={18} height={18} /></Link>
            <Link className="icon-btn solid bag-btn" href="/cart" aria-label="سبد خرید"><BagIcon width={18} height={18} /><span>۰</span></Link>
            <Link className="icon-btn solid" href="/account" aria-label="حساب کاربری"><UserIcon width={18} height={18} /></Link>
          </div>
        </div>
        <MegaNav />
      </header>
    </>
  );
}
