import { BagIcon, HeartIcon, SearchIcon, UserIcon } from './Icons';

export function Header() {
  return (
    <>
      <div className="announcement">ارسال رایگان برای سفارش‌های بالای 1.`000 تومان · بازگشت تا ۳۰ روز</div>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="خانه">
            <span className="brand-mark">F</span>
            <span>
              <span className="brand-name">FORME</span>
              <span className="brand-sub">FASHION / CULTURE</span>
            </span>
          </a>

          <nav className="nav" aria-label="ناوبری اصلی">
            <a href="#new">تازه‌ها</a>
            <a href="#women">زنانه</a>
            <a href="#men">مردانه</a>
            <a href="#shoes">کفش</a>
            <a href="#collections">کالکشن‌ها</a>
            <a href="#stories">استایل و مجله</a>
          </nav>

          <div className="header-actions">
            <label className="search-pill" aria-label="جستجو">
              <SearchIcon width={18} height={18} aria-hidden="true" />
              <input placeholder="جستجو در برندها و محصولات" readOnly />
            </label>
            <button className="icon-btn solid" aria-label="علاقه‌مندی‌ها"><HeartIcon width={18} height={18} /></button>
            <button className="icon-btn solid" aria-label="سبد خرید"><BagIcon width={18} height={18} /></button>
            <button className="icon-btn solid" aria-label="حساب کاربری"><UserIcon width={18} height={18} /></button>
          </div>
        </div>
      </header>
    </>
  );
}
