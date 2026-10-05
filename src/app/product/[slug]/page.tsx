import { notFound } from 'next/navigation';
import { formatToman, products } from '../../../data/products';
import { ProductRail } from '../../../components/ProductRail';
import { PageShell, SectionHeader } from '../../../components/PageShell';
import { HeartIcon, ReturnIcon, ShieldIcon, TruckIcon } from '../../../components/Icons';

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return notFound();
  const related = products.filter((item) => item.slug !== slug).slice(0, 4);
  return (
    <PageShell eyebrow={`${product.brand} / Product`} title={product.name}>
      <div className="pdp">
        <div className="pdp-gallery">
          <div className="pdp-main-image"><div className="pdp-art pdp-art-a" /><span className="pdp-stamp">FORME / 01</span></div>
          <div className="pdp-thumbs"><div className="pdp-thumb thumb-a" /><div className="pdp-thumb thumb-b" /><div className="pdp-thumb thumb-c" /><div className="pdp-thumb thumb-d" /></div>
        </div>
        <div className="pdp-info">
          <div className="pdp-brand">{product.brand}</div><h1>{product.name}</h1>
          <div className="pdp-rating-row"><span className="pdp-rating-stars">★ ★ ★ ★ ★</span><strong>{product.rating.toFixed(1)}</strong><span>{product.reviewCount} نظر</span><span className="pdp-separator">•</span><span>اورجینال</span></div>
          <div className="pdp-price"><strong>{formatToman(product.price)}</strong>{product.oldPrice ? <><s>{formatToman(product.oldPrice)}</s><span className="pdp-discount">{Math.round((1 - product.price / product.oldPrice) * 100)}٪ تخفیف</span></> : null}<span className="pdp-note">شامل مالیات</span></div>
          <p className="pdp-copy">فرمی تمیز و پوشیدنی که راحت با کمد روزمره کنار می‌آید. جنس، افت و تناسب این قطعه طوری انتخاب شده که قبل از ترند، روی تن خوب به نظر برسد.</p>
          <div className="fit-summary"><div><span>فرم</span><strong>{product.fit}</strong></div><div><span>جنس</span><strong>{product.material}</strong></div><div><span>وضعیت</span><strong>موجود</strong></div></div>
          <div className="detail-block"><div className="detail-head"><strong>رنگ</strong><span>انتخاب: مشکی</span></div><div className="color-swatches">{product.colors.map((color) => <span style={{ backgroundColor: color }} className="large-swatch" key={color} />)}</div></div>
          <div className="detail-block"><div className="detail-head"><strong>سایز</strong><span className="size-guide">راهنمای سایز</span></div><div className="size-grid">{['XS', 'S', 'M', 'L', 'XL'].map((size, index) => <span className={index === 2 ? 'size-chip active' : 'size-chip'} key={size}>{size}</span>)}</div></div>
          <div className="purchase-row"><span className="qty-note">موجود · ارسال ۱ تا ۲ روز کاری</span><button className="purchase-button">افزودن به سبد</button><button className="pdp-heart" aria-label="افزودن به علاقه‌مندی"><HeartIcon width={20} height={20} /></button></div>
          <div className="service-grid"><div><TruckIcon width={19} height={19} /><strong>ارسال سریع</strong><span>تحویل زمان‌بندی‌شده</span></div><div><ReturnIcon width={19} height={19} /><strong>بازگشت ۳۰ روزه</strong><span>ساده و شفاف</span></div><div><ShieldIcon width={19} height={19} /><strong>پرداخت امن</strong><span>امن و بدون مرحله اضافه</span></div></div>
          <div className="product-specs"><div><span>جنس</span><strong>{product.material}</strong></div><div><span>فرم</span><strong>{product.fit}</strong></div><div><span>استایل</span><strong>{product.category}</strong></div></div>
        </div>
      </div>
      <section className="section pdp-related"><SectionHeader eyebrow="Complete the look" title="قطعات مکمل" /><ProductRail items={related} label="قطعات کامل‌کننده" /></section>
    </PageShell>
  );
}
