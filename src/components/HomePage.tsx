import { ArrowUpRight, SparkleIcon } from './Icons';
import { brands, categories, products } from '../data/products';
import { ProductCard } from './ProductCard';

export function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div className="container hero-grid">
          <article className="hero-main">
            <div className="editorial-art" aria-hidden="true"><span className="silhouette" /><span className="shape-1" /><span className="shape-2" /></div>
            <div className="hero-content">
              <div className="kicker"><span className="dot" /> پاییز / زمستان ۲۰۲۶</div>
              <h1 className="hero-title">فرم تازه‌ای<br />برای استایل تو.</h1>
              <p className="hero-copy">انتخابی از لباس‌ها و اکسسوری‌های معاصر؛ با تمرکز روی فرم، پارچه و جزئیات.</p>
              <div className="button-row"><a href="#new" className="cta primary">مشاهده کالکشن جدید <ArrowUpRight width={17} height={17} /></a><a href="#stories" className="cta ghost">استایل‌های منتخب</a></div>
            </div>
          </article>
          <article className="hero-side">
            <div>
              <div className="side-top">THE EDIT / 01</div>
              <h2 className="side-title">Minimal utility<br />for everyday life.</h2>
            </div>
            <div className="side-visual" aria-hidden="true" />
            <div className="side-label"><span>استایل های استریت</span><span>03 / 06</span></div>
          </article>
        </div>
      </section>

      <section className="section" id="new">
        <div className="container">
          <div className="section-head"><div><div className="section-kicker">Discover</div><h2 className="section-title">تازه‌رسیده‌ها</h2></div><a className="section-link" href="#products">مشاهده همه</a></div>
          <div className="rail" id="products">{products.map((product, index) => <ProductCard product={product} index={index} key={product.name} />)}</div>
        </div>
      </section>

      <section className="section" id="women">
        <div className="container">
          <div className="section-head"><div><div className="section-kicker">Shop by category</div><h2 className="section-title">دسته‌بندی‌ها</h2></div><a className="section-link" href="#top">همه دسته‌ها</a></div>
          <div className="category-grid">
            {categories.map(([title, meta]) => <a key={title} className="category-card" href="#products"><div className="category-art" aria-hidden="true" /><span className="category-meta">{meta}</span><span className="category-name">{title}</span></a>)}
          </div>
        </div>
      </section>

      <section className="section" id="collections">
        <div className="container">
          <div className="section-head"><div><div className="section-kicker">The edit</div><h2 className="section-title">استایل‌های منتخب</h2></div><span className="section-link">تنظیم‌شده برای فصل</span></div>
          <div className="editorial-grid">
            <article className="editorial-card"><div className="scene scene-a" /><div className="copy"><div className="kicker"><span className="dot" /> Urban tailoring</div><h3>ساختار، لایه‌سازی و فرم.</h3><p>برای روزهایی که می‌خواهی ظاهر دقیق باشد، بدون اینکه تلاش‌شده به نظر برسد.</p><a href="#products" className="cta ghost">مشاهده ادیت</a></div></article>
            <article className="editorial-card small"><div className="scene scene-b" /><div className="copy"><div className="kicker"><span className="dot" /> Weekend uniform</div><h3>Everyday, elevated.</h3><p>قطعات ساده با تناسبات بهتر و متریال قابل لمس.</p><a href="#products" className="cta primary">خرید استایل</a></div></article>
          </div>
        </div>
      </section>

      <section className="section" id="men">
        <div className="container">
          <div className="section-head"><div><div className="section-kicker">Top brands</div><h2 className="section-title">برندهای منتخب</h2></div><span className="section-link">۵۰۰+ برند در آینده</span></div>
          <div className="brands">{brands.map((brand) => <div className="brand-chip" key={brand}>{brand}</div>)}</div>
        </div>
      </section>

      <section className="trust" id="shoes">
        <div className="container" style={{display:'contents'}}>
          <div className="trust-item"><div className="trust-icon"><SparkleIcon width={22} height={22} /></div><div className="trust-title">انتخاب‌های دقیق</div><div className="trust-copy">دسته‌بندی و ادیت بر اساس سبک، فصل و موقعیت.</div></div>
          <div className="trust-item"><div className="trust-icon">↺</div><div className="trust-title">بازگشت ساده</div><div className="trust-copy">مسیر واضح برای تصمیم‌گیری بدون ریسک.</div></div>
          <div className="trust-item"><div className="trust-icon">⌁</div><div className="trust-title">ارسال سریع</div><div className="trust-copy">ساختار آماده برای نمایش شفاف وضعیت سفارش.</div></div>
          <div className="trust-item"><div className="trust-icon">◉</div><div className="trust-title">پرداخت امن</div><div className="trust-copy">در فاز بعد به سرویس پرداخت متصل خواهد شد.</div></div>
        </div>
      </section>

      <section className="section" id="stories">
        <div className="container">
          <div className="section-head"><div><div className="section-kicker">Journal</div><h2 className="section-title">استایل و مجله</h2></div><span className="section-link">Editorial</span></div>
          <div className="editorial-grid">
            <article className="editorial-card"><div className="scene scene-b" /><div className="copy"><div className="kicker"><span className="dot" /> Guide</div><h3>چطور یک کمد کپسولی بسازیم؟</h3><p>راهنمای انتخاب قطعاتی که بیشتر پوشیده می‌شوند و بهتر با هم ترکیب می‌شوند.</p></div></article>
            <article className="editorial-card small"><div className="scene scene-a" /><div className="copy"><div className="kicker"><span className="dot" /> Materials</div><h3>پارچه، قبل از ترند.</h3><p>چرا وزن، بافت و افت پارچه مهم‌تر از یک لوگوی بزرگ است.</p></div></article>
          </div>
        </div>
      </section>
    </main>
  );
}
