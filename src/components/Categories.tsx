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
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
