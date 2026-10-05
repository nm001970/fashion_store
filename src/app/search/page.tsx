import Link from 'next/link';
import { PageShell, SectionHeader } from '../../components/PageShell';
import { ProductGrid } from '../../components/ProductGrid';
import { products } from '../../data/products';
import { SearchIcon } from '../../components/Icons';

const trends = ['کت اورسایز', 'کتانی سفید', 'Linen', 'Streetwear', 'کیف چرمی', 'پاییز ۲۰۲۶'];

export default function SearchPage() {
  return (
    <PageShell eyebrow="Search / Discovery" title="جستجو" description="گاهی اسم دقیق یک لباس را نمی‌دانی؛ چند کلمه درباره رنگ، فرم یا حال‌وهوایی که می‌خواهی کافی است.">
      <div className="search-stage">
        <div className="search-stage-input"><SearchIcon width={22} height={22} /><span>دنبال چه چیزی می‌گردی؟</span><kbd>⌘ K</kbd></div>
        <div className="search-trends"><span>جستجوهای محبوب</span>{trends.map((item) => <Link href="/shop" key={item}>{item}</Link>)}</div>
      </div>
      <section className="section compact-section"><div className="containerless"><SectionHeader eyebrow="Curated results" title="برای شروع، این انتخاب را ببین." href="/shop" /><ProductGrid items={products.slice(0, 6)} /></div></section>
    </PageShell>
  );
}
