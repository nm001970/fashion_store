import Link from 'next/link';
import { formatToman, type Product } from '../data/products';
import { HeartIcon } from './Icons';

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const hasSale = Boolean(product.oldPrice);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <article className="product-card" aria-label={product.name}>
      <Link href={`/product/${product.slug}`} className="product-media-link" aria-label={`مشاهده ${product.name}`}>
        <div className={`product-media product-${(index % 8) + 1}`}>
          <div className="product-art" aria-hidden="true" />
          <div className="product-noise" aria-hidden="true" />
          <span className="product-index">0{(index % 9) + 1}</span>
          {product.badge ? <span className="badge">{product.badge}</span> : null}
        </div>
      </Link>

      <div className="product-info">
        <div className="product-topline">
          <div className="product-copy">
            <div className="product-brand">{product.brand}</div>
            <Link href={`/product/${product.slug}`} className="product-name">{product.name}</Link>
            <div className="product-meta-line">{product.material} · {product.fit}</div>
          </div>
          <Link className="heart" href="/wishlist" aria-label="افزودن به علاقه‌مندی‌ها"><HeartIcon width={17} height={17} /></Link>
        </div>

        <div className="product-row">
          <div className="price-stack">
            {hasSale ? (
              <div className="sale-line">
                <span className="sale-note">{discount}% تخفیف</span>
                <span className="old-price">{formatToman(product.oldPrice!)}</span>
              </div>
            ) : null}
            <span className="price">{formatToman(product.price)}</span>
          </div>
          <div className="product-row-meta">
            <div className="product-rating" aria-label={`امتیاز ${product.rating} از ۵ بر اساس ${product.reviewCount} نظر`}>★ <span>{product.rating.toFixed(1)}</span><small>({product.reviewCount})</small></div>
            <div className="swatches" aria-label={`${product.swatches} رنگ`}>
              {product.colors.slice(0, product.swatches).map((color) => <span className="swatch" style={{ backgroundColor: color }} key={color} />)}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
