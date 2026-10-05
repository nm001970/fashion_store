import { ChevronDown, SlidersIcon } from './Icons';

const groups = [
  ['دسته‌بندی', ['همه', 'کت و ژاکت', 'پیراهن', 'شلوار', 'کفش']],
  ['برند', ['FORME', 'NIKE', 'COS', 'ZARA', 'NEW BALANCE']],
  ['سایز', ['XS', 'S', 'M', 'L', 'XL']],
  ['رنگ', ['مشکی', 'کرم', 'قهوه‌ای', 'سبز', 'خاکستری']],
  ['محدوده قیمت', ['زیر ۱٬۰۰۰٬۰۰۰ تومان', '۱٬۰۰۰٬۰۰۰–۱٬۵۰۰٬۰۰۰ تومان', '۱٬۵۰۰٬۰۰۰–۲٬۵۰۰٬۰۰۰ تومان', 'بالای ۲٬۵۰۰٬۰۰۰ تومان']],
];

export function FilterSidebar() {
  return (
    <aside className="filter-sidebar" aria-label="فیلتر محصولات">
      <div className="filter-title"><span>فیلترها</span><SlidersIcon width={18} height={18} /></div>
      <div className="filter-clear">پاک‌کردن همه</div>
      {groups.map(([name, items]) => (
        <div className="filter-group" key={name as string}>
          <div className="filter-group-head"><strong>{name as string}</strong><ChevronDown width={15} height={15} /></div>
          <div className="filter-options">{(items as string[]).map((item, idx) => <span className={idx === 0 ? 'filter-option selected' : 'filter-option'} key={item}>{item}</span>)}</div>
        </div>
      ))}
    </aside>
  );
}
