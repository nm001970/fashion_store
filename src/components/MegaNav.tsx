import Link from 'next/link';

const navGroups = [
  {
    label: 'زنانه',
    items: ['تازه‌ها', 'پیراهن', 'کت و ژاکت', 'شلوار', 'بافت و knitwear', 'کفش'],
  },
  {
    label: 'مردانه',
    items: ['تازه‌ها', 'تی‌شرت و پیراهن', 'کت و اورشرت', 'شلوار', 'بافت و knitwear', 'کفش'],
  },
  {
    label: 'کفش و اکسسوری',
    items: ['Sneakers', 'Boots', 'Loafers', 'Bags', 'Jewelry', 'Belts'],
  },
];

export function MegaNav() {
  return (
    <section className="mega-nav" aria-label="دسته‌بندی‌های فروشگاه">
      <div className="container mega-nav-inner">
        {navGroups.map((group) => (
          <div className="mega-group" key={group.label}>
            <div className="mega-group-title">{group.label}</div>
            <div className="mega-group-links">
              {group.items.map((item) => <Link href="/shop" key={item}>{item}</Link>)}
            </div>
          </div>
        ))}
        <div className="mega-feature">
          <span className="mega-feature-kicker">DROP 02 / 2026</span>
          <strong>قطعات ساده،<br />تناسبات دقیق.</strong>
          <Link href="/collections">مشاهده ادیت <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}
