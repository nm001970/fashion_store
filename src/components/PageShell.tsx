import Link from 'next/link';
import { ArrowLeft } from './Icons';

export function PageShell({ eyebrow, title, description, children }: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="breadcrumb"><Link href="/">خانه</Link><span>/</span><span>{title}</span></div>
        <header className="page-head">
          <div><div className="section-kicker">{eyebrow}</div><h1 className="page-title">{title}</h1></div>
          {description ? <p className="page-description">{description}</p> : null}
        </header>
        {children}
      </div>
    </main>
  );
}

export function SectionHeader({ title, eyebrow, href = '/shop' }: { title: string; eyebrow?: string; href?: string }) {
  return <div className="section-head"><div><div className="section-kicker">{eyebrow ?? 'Selected'}</div><h2 className="section-title">{title}</h2></div><Link className="section-link with-icon" href={href}>مشاهده همه <ArrowLeft width={15} height={15} /></Link></div>;
}
