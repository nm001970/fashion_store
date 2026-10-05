import Link from 'next/link';
import { ArrowUpRight, SparkleIcon } from './Icons';
import { brands, categories, editorialCards, fitProfiles, products } from '../data/products';
import { ProductRail } from './ProductRail';
import { SectionHeader } from './PageShell';

export function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div className="container hero-grid">
          <article className="hero-main">
            <div className="editorial-art" aria-hidden="true"><span className="silhouette" /><span className="shape-1" /><span className="shape-2" /><span className="hero-orbit" /></div>
            <div className="hero-content">
              <div className="kicker"><span className="dot" /> پاییز / زمستان ۲۰۲۶</div>
              <h1 className="hero-title">استایل خوب،<br />از انتخاب خوب شروع می‌شود.</h1>
              <p className="hero-copy">قطعه‌هایی که به‌خاطر کیفیت پوشیدن‌شان انتخاب شده‌اند؛ نه فقط برای اینکه امروز ترندند.</p>
              <div className="button-row"><Link href="/collections" className="cta primary">کالکشن این فصل را ببین <ArrowUpRight width={17} height={17} /></Link><Link href="/journal" className="cta ghost">پیشنهادهای فرمی</Link></div>
            </div>
            <div className="hero-meta"><span>FORME / 026</span><span>01 — 03</span></div>
          </article>
          <article className="hero-side">
            <div><div className="side-top">THE EDIT / 01</div><h2 className="side-title">کم‌حرف، دقیق،<br />برای هر روز.</h2></div>
            <div className="side-visual" aria-hidden="true" />
            <div className="side-label"><span>دوخت شهری، بدون اضافه‌کاری</span><span>۰۳ / ۰۶</span></div>
          </article>
        </div>
      </section>

      <section className="service-strip"><div className="container service-strip-inner"><span>ارسال رایگان بالای ۱٬۵۰۰٬۰۰۰ تومان</span><i /><span>بازگشت تا ۳۰ روز</span><i /><span>پشتیبانی ۷ روز هفته</span><i /><span>تضمین اصالت برند</span></div></section>

      <section className="section" id="new"><div className="container"><SectionHeader eyebrow="Discover / New" title="تازه از راه رسیده" href="/shop" /><ProductRail items={products.slice(0, 7)} label="تازه از راه رسیده" /></div></section>

      <section className="section" id="women"><div className="container"><SectionHeader eyebrow="Shop by category" title="از اینجا شروع کن" href="/shop" /><div className="category-grid">{categories.map((category, index) => <Link key={category.slug} href={`/category/${category.slug}`} className="category-card"><div className="category-art" aria-hidden="true" /><span className="category-meta">{category.meta}</span><span className="category-name">{category.title}</span><span className="category-note">{category.note}</span><span className="category-index">0{index + 1}</span></Link>)}</div></div></section>

      <section className="section"><div className="container"><SectionHeader eyebrow="Shop by fit" title="اول فرم را پیدا کن؛ بعد رنگ را" href="/shop" /><div className="fit-grid">{fitProfiles.map((fit, index) => <Link href="/shop" className={`fit-card fit-${fit.tone}`} key={fit.slug}><div className="fit-art" aria-hidden="true" /><span className="fit-index">0{index + 1}</span><div className="fit-copy"><span>{fit.title}</span><strong>{fit.fa}</strong><small>{fit.note}</small></div></Link>)}</div></div></section>

      <section className="section"><div className="container"><SectionHeader eyebrow="Limited / Sale edit" title="قطعه‌هایی که حالا ارزش بیشتری دارند" href="/shop" /><ProductRail items={products.filter((product) => product.oldPrice)} label="قطعه‌هایی که حالا ارزش بیشتری دارند" /></div></section>

      <section className="section" id="collections"><div className="container"><SectionHeader eyebrow="The edit" title="ادیت‌های سردبیر" href="/collections" /><div className="editorial-grid"><article className="editorial-card feature-wide"><div className="scene scene-a" /><div className="copy"><div className="kicker"><span className="dot" /> Urban tailoring</div><h3>لباس خوب، خودش را تحمیل نمی‌کند؛ درست می‌نشیند.</h3><p>برای روزهایی که می‌خواهی مرتب به نظر برسی، بدون اینکه معلوم باشد چقدر به آن فکر کرده‌ای.</p><Link href="/collections" className="cta ghost">مشاهده ادیت</Link></div></article><article className="editorial-card small"><div className="scene scene-b" /><div className="copy"><div className="kicker"><span className="dot" /> Weekend uniform</div><h3>Everyday, elevated.</h3><p>ساده‌اند، اما معمولی نیستند؛ تناسب بهتر و پارچه‌ای که فرقش را حس می‌کنی.</p><Link href="/shop" className="cta primary">خرید استایل</Link></div></article></div></div></section>

      <section className="section statement-section"><div className="container statement-wrap"><div className="statement-index">02 / 05</div><div><div className="section-kicker">FORME philosophy</div><h2>کمتر بردار.<br /><em>بهتر انتخاب کن.</em></h2><p>قرار نیست فقط بگوییم «این را بخر». می‌خواهیم بدانی چرا به تو می‌آید، با چه چیزی ست می‌شود و بعد از چند بار پوشیدن هنوز دوستش خواهی داشت.</p></div><Link href="/journal" className="statement-link">داستان FORME <ArrowUpRight width={17} height={17} /></Link></div></section>

      <section className="section look-section"><div className="container"><SectionHeader eyebrow="Shop the look" title="یک حال‌وهوا، چند راه برای پوشیدن." href="/shop" /><div className="look-grid"><article className="look-board look-board-main"><div className="look-art look-art-1" /><div className="look-overlay"><span className="section-kicker">LOOK 01 / CITY</span><h3>Tailoring after dark.</h3><p>یک کت ساختارمند، یک شلوار آزاد و جزئیاتی که کل ظاهر را جمع می‌کند.</p><Link href="/shop" className="cta ghost">مشاهده قطعات</Link></div></article><div className="look-products"><ProductRail items={products.slice(4,7)} label="قطعات کامل‌کننده استایل" /></div></div></div></section>

      <section className="section" id="men"><div className="container"><SectionHeader eyebrow="Brands worth knowing" title="برندهای منتخب" href="/shop" /><div className="brands">{brands.map((brand, index) => <Link href="/shop" className="brand-chip" key={brand}><span>{brand}</span><small>۰{index + 1}</small></Link>)}</div></div></section>

      <section className="section" id="stories"><div className="container"><SectionHeader eyebrow="Journal / Editorial" title="مجله FORME" href="/journal" /><div className="journal-preview">{editorialCards.map((card, index) => <Link href="/journal" className={`journal-preview-card tone-${index + 1}`} key={card.title}><div className="preview-art" /><div className="preview-copy"><div className="section-kicker">{card.eyebrow}</div><h3>{card.title}</h3><span>خواندن <ArrowUpRight width={14} height={14} /></span></div></Link>)}</div></div></section>

      <section className="trust"><div className="container trust-grid"><div className="trust-item"><div className="trust-icon"><SparkleIcon width={22} height={22} /></div><div className="trust-title">انتخاب با سلیقه</div><div className="trust-copy">هر ادیت با یک سؤال شروع می‌شود: «اگر خودم بودم، کدام را انتخاب می‌کردم؟»</div></div><div className="trust-item"><div className="trust-icon">↺</div><div className="trust-title">خرید بی‌دردسر</div><div className="trust-copy">سایز، جنس و شرایط بازگشت را روشن می‌گوییم تا با خیال راحت انتخاب کنی.</div></div><div className="trust-item"><div className="trust-icon">⌁</div><div className="trust-title">ارسال سریع</div><div className="trust-copy">اطلاعات را کوتاه و روشن می‌گذاریم؛ چیزی برای حدس‌زدن نمی‌ماند.</div></div><div className="trust-item"><div className="trust-icon">◉</div><div className="trust-title">پرداخت امن</div><div className="trust-copy">پرداخت امن، ساده و روشن؛ بدون مرحله‌های اضافه.</div></div></div></section>
    </main>
  );
}
