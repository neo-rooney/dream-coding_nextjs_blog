export default function Categories({
  categories,
  selected,
  onClick,
}: {
  categories: string[];
  selected: string;
  onClick: (selected: string) => void;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold border-b-2 border-sky-300">Catetory</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`cursor-pointer m-2 hover:text-sky-500 ${
              selected === category && "text-sky-600"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
