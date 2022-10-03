export default function Clanok({ children }) {
  return (
    <div className="w-full bg-white">
      <article className="mx-auto max-w-3xl bg-white px-5 pt-8 pb-12 text-gray-700 lg:px-5">
        {children}
      </article>
    </div>
  );
}
