import Link from 'next/link';
import { PageShell } from '../../components/PageShell';
import { BagIcon, ShieldIcon, TruckIcon } from '../../components/Icons';

export default function CartPage() {
  return (
    <PageShell eyebrow="Bag / Preview" title="سبد خرید" description="انتخاب‌هایت اینجا کنار هم می‌نشینند؛ بعد با خیال راحت تصمیم بگیر.">
      <div className="cart-layout">
        <section className="empty-state-card cart-empty">
          <div className="empty-state-mark"><BagIcon width={28} height={28} /></div>
          <div>
            <div className="section-kicker">Your bag</div>
            <h2>هنوز چیزی اینجا ننشسته.</h2>
            <p>هر چیزی که چشم‌ات را گرفت و گفتی «این مال من است»، از همین‌جا ادامه بده.</p>
          </div>
          <Link href="/shop" className="cta primary">شروع خرید</Link>
        </section>
        <aside className="cart-summary">
          <div className="summary-title">خلاصه سفارش</div>
          <div className="summary-row"><span>جمع محصولات</span><strong>۰ تومان</strong></div>
          <div className="summary-row"><span>ارسال</span><span>بعداً محاسبه می‌شود</span></div>
          <div className="summary-row total"><span>مجموع</span><strong>۰ تومان</strong></div>
          <div className="summary-services">
            <span><TruckIcon width={16} height={16} /> ارسال رایگان بالای ۱٬۵۰۰٬۰۰۰ تومان</span>
            <span><ShieldIcon width={16} height={16} /> پرداخت امن و بی‌حاشیه</span>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
