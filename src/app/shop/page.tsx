import { ProductGrid } from '../../components/ProductGrid';
import { FilterSidebar } from '../../components/FilterSidebar';
import { products } from '../../data/products';
import { ChevronDown, SlidersIcon } from '../../components/Icons';
import { PageShell } from '../../components/PageShell';

export default function ShopPage() {
  return (
    <PageShell eyebrow="Shop / New arrivals" title="فروشگاه" description="از تازه‌رسیده‌ها تا فرم های امتحان‌پس‌داده؛ اینجا برای هر حال‌وهوا چیزی پیدا می‌شود.">
      <div className="plp-toolbar"><div className="result-count">۱۲۴۸ محصول</div><div className="plp-controls"><button className="mobile-filter"><SlidersIcon width={17} height={17} /> فیلتر</button><button className="sort-button">مرتب‌سازی: جدیدترین <ChevronDown width={15} height={15} /></button></div></div>
      <div className="plp-layout"><FilterSidebar /><div className="plp-content"><div className="applied-filters"><span>زنانه</span><span>جدید</span><span>ارسال سریع</span></div><ProductGrid items={products} /></div></div>
    </PageShell>
  );
}
