import Link from 'next/link';
export default function NotFound() { return <main className="not-found"><div><div className="section-kicker">404 / Not found</div><h1>این صفحه فعلاً در ادیت ما نیست.</h1><p>برای ادامه به فروشگاه برگردید.</p><Link href="/shop" className="cta primary">رفتن به فروشگاه</Link></div></main>; }
