import { notFound } from 'next/navigation';
import { PageShell } from '../../../components/PageShell';
import { ProductGrid } from '../../../components/ProductGrid';
import { FilterSidebar } from '../../../components/FilterSidebar';
import { categories, products } from '../../../data/products';
import { ChevronDown, SlidersIcon } from '../../../components/Icons';

const categoryMap: Record<string, string> = Object.fromEntries(categories.map((category) => [category.slug, category.title]));

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = categoryMap[slug];
  if (!title) notFound();
  const categoryProducts = products.filter((product) => product.category === title || (slug === 'women' && product.category === 'زنانه') || (slug === 'men' && product.category === 'مردانه'));
  return (
    <PageShell eyebrow={`Category / ${title}`} title={title} description="استایل‌های منتخب و قطعات روزمره با ساختار ساده و قابلیت ترکیب بالا.">
      <div className="subcat-rail">{categories.map((category) => <span key={category.slug} className={category.slug === slug ? 'subcat active' : 'subcat'}>{category.title}<small>{category.meta}</small></span>)}</div>
      <div className="plp-toolbar"><div className="result-count">{categoryProducts.length * 104 + 200} محصول</div><div className="plp-controls"><button className="mobile-filter"><SlidersIcon width={17} height={17} /> فیلتر</button><button className="sort-button">مرتب‌سازی: پیشنهادی <ChevronDown width={15} height={15} /></button></div></div>
      <div className="plp-layout"><FilterSidebar /><div className="plp-content"><div className="applied-filters"><span>{title}</span><span>موجود</span></div><ProductGrid items={categoryProducts.length ? categoryProducts : products} /></div></div>
    </PageShell>
  );
}
