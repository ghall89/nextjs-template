export default function LinkBox({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="rounded-xl border-2 border-gray-200 bg-white px-3 py-6 text-black shadow-sm transition-transform hover:bg-gray-50 hover:text-gray-700 active:scale-95"
    >
      <h2>{label}</h2>
      <p>{description}</p>
    </a>
  );
}
