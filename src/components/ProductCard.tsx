import type { Product } from '../data/products';
import { HeartIcon } from './Icons';

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="product-card" aria-label={product.name}>
      <div className={`product-media product-${index + 1}`}>
        <div className="product-art" aria-hidden="true" />
        {product.badge ? <span className="badge">{product.badge}</span> : null}
        <button className="heart" aria-label="افزودن به علاقه‌مندی‌ها"><HeartIcon width={17} height={17} /></button>
      </div>
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-row">
          <div><span className="price">{product.price}</span>{product.oldPrice ? <span className="old-price">{product.oldPrice}</span> : null}</div>
          <div className="swatches" aria-label={`${product.swatches} رنگ`}>
            {Array.from({ length: product.swatches }).map((_, i) => <span className="swatch" key={i} />)}
          </div>
        </div>
      </div>
    </article>
  );
}
