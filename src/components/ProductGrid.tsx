import { ProductCard } from './ProductCard';
import type { Product } from '../data/products';

export function ProductGrid({ items }: { items: Product[] }) {
  return <div className="product-grid">{items.map((product, index) => <ProductCard product={product} index={index} key={product.slug} />)}</div>;
}
