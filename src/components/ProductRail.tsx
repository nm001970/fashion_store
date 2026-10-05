'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../data/products';

export function ProductRail({ items, label = 'محصولات منتخب' }: { items: Product[]; label?: string }) {
  const railRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [groupWidth, setGroupWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(3);

  useEffect(() => {
    const rail = railRef.current;
    const group = groupRef.current;
    if (!rail || !group) return;

    const updateMetrics = () => {
      const nextGroupWidth = Math.ceil(group.getBoundingClientRect().width);
      const nextRailWidth = Math.ceil(rail.getBoundingClientRect().width);

      if (!nextGroupWidth) return;

      setGroupWidth((current) => (current === nextGroupWidth ? current : nextGroupWidth));
      setRepeatCount(Math.max(3, Math.ceil(nextRailWidth / nextGroupWidth) + 2));
    };

    updateMetrics();

    const observer = new ResizeObserver(updateMetrics);
    observer.observe(rail);
    observer.observe(group);

    return () => observer.disconnect();
  }, [items.length]);

  if (!items.length) return null;

  const duration = groupWidth ? Math.min(60, Math.max(28, groupWidth / 24)) : 42;
  const railStyle = {
    '--rail-shift': groupWidth ? `-${groupWidth}px` : '0px',
    '--rail-duration': `${duration}s`,
  } as CSSProperties;

  return (
    <div ref={railRef} className="product-rail" data-label={label} aria-label={label}>
      <div
        className={`product-rail-track ${groupWidth ? 'is-ready' : 'is-measuring'}`}
        style={railStyle}
      >
        {Array.from({ length: repeatCount }).map((_, groupIndex) => (
          <div
            className="product-rail-group"
            key={`group-${groupIndex}`}
            ref={groupIndex === 0 ? groupRef : undefined}
            aria-hidden={groupIndex > 0 || undefined}
          >
            {items.map((product, index) => (
              <div className="product-rail-item" key={`${groupIndex}-${product.slug}`}>
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
