import Link from 'next/link';
import { PageShell } from '../../components/PageShell';
import { ProductGrid } from '../../components/ProductGrid';
import { products } from '../../data/products';

export default function WishlistPage() {
  return (
    <PageShell eyebrow="Saved / Wishlist" title="علاقه‌مندی‌ها" description="چیزهایی که هنوز بین «الان» و «بعداً» نگه‌شان داشته‌ای.">
      <div className="empty-state-card">
        <div className="empty-state-mark">♡</div>
        <div>
          <div className="section-kicker">Your edit</div>
          <h2>جایی برای انتخاب‌های بعدی.</h2>
          <p>محصولاتی که برای مقایسه یا خرید بعدی کنار می‌گذاری، اینجا جمع می‌شوند.</p>
        </div>
        <Link href="/shop" className="cta primary">رفتن به فروشگاه</Link>
      </div>
      <section className="section compact-section">
        <div className="section-head"><div><div className="section-kicker">Suggested</div><h2 className="section-title">برای شروع، این‌ها را ببین.</h2></div></div>
        <ProductGrid items={products.slice(0, 4)} />
      </section>
    </PageShell>
  );
}
