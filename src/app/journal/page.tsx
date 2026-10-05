import Link from 'next/link';
import { editorialCards } from '../../data/products';
import { PageShell } from '../../components/PageShell';
import { ArrowUpRight } from '../../components/Icons';

export default function JournalPage() {
  return (
    <PageShell eyebrow="FORME Journal" title="استایل و مجله" description="داستان‌های کوتاه درباره لباس، متریال و راه‌هایی که یک قطعه را واقعاً مال خودت می‌کنی.">
      <div className="journal-feature"><div className="journal-hero-scene" /><div className="journal-hero-copy"><span className="eyebrow-pill">FEATURED STORY</span><h2>کمتر، اما دقیق‌تر: منطق یک کمد کپسولی</h2><p>وقتی هر قطعه دلیل مشخصی برای حضور در کمد داشته باشد، استایل روزمره سریع‌تر و شخصی‌تر شکل می‌گیرد.</p><Link className="cta primary" href="/shop">برویم سراغ قطعه‌ها <ArrowUpRight width={16} height={16} /></Link></div></div>
      <div className="journal-grid">{editorialCards.map((card, index) => <article className="journal-card" key={card.title}><div className={`journal-art tone-${index + 1}`} /><div className="journal-card-copy"><div className="section-kicker">{card.eyebrow}</div><h3>{card.title}</h3><p>{card.excerpt}</p><span>خواندن داستان <ArrowUpRight width={15} height={15} /></span></div></article>)}</div>
    </PageShell>
  );
}
