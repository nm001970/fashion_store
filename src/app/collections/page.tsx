import Link from 'next/link';
import { editorialCards } from '../../data/products';
import { PageShell } from '../../components/PageShell';
import { ArrowUpRight } from '../../components/Icons';

export default function CollectionsPage() {
  return (
    <PageShell eyebrow="Editorial / Collections" title="کالکشن‌ها" description="پیشنهادهای فرمی برای وقت‌هایی که نمی‌خواهی از بین صدها انتخاب، تنها بمانی.">
      <div className="collection-list">
        {editorialCards.map((card, index) => <article className={`collection-feature feature-${index + 1}`} key={card.title}><div className={`collection-scene ${card.tone}`} /><div className="collection-copy"><div className="kicker"><span className="dot" /> {card.eyebrow}</div><h2>{card.title}</h2><p>{card.excerpt}</p><Link className="cta ghost" href="/shop">مشاهده ادیت <ArrowUpRight width={16} height={16} /></Link></div></article>)}
      </div>
    </PageShell>
  );
}
