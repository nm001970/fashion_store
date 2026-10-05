import Link from 'next/link';
import { PageShell } from '../../components/PageShell';
import { HeartIcon, UserIcon } from '../../components/Icons';

export default function AccountPage() {
  return (
    <PageShell eyebrow="Account / Preview" title="حساب کاربری" description="جای سفارش‌ها، علاقه‌مندی‌ها و انتخاب‌هایی که کم‌کم سبک شخصی تو را می‌سازند.">
      <div className="account-hero">
        <div className="account-mark"><UserIcon width={30} height={30} /></div>
        <div><div className="section-kicker">FORME member</div><h2>جایی برای چیزهایی که انتخاب کرده‌ای و دوست داری دوباره به آن‌ها برگردی.</h2><p>سفارش‌ها، علاقه‌مندی‌ها و آدرس‌ها را کنار هم داشته باش؛ تا دفعه بعد کمتر بگردی و بیشتر انتخاب کنی.</p></div>
        <Link href="/wishlist" className="cta ghost"><HeartIcon width={16} height={16} /> علاقه‌مندی‌ها</Link>
      </div>
      <div className="account-grid">
        {['سفارش‌ها', 'آدرس‌ها', 'روش‌های پرداخت', 'تنظیمات حساب'].map((item, index) => <div className="account-card" key={item}><span>۰{index + 1}</span><strong>{item}</strong><small>فعلاً جای آن را برای انتخاب‌های بعدی نگه داشته‌ایم</small></div>)}
      </div>
    </PageShell>
  );
}
