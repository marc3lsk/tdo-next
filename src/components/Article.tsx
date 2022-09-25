export default function Article({ children }) {
  return (
    <div className="w-full bg-white">
      <article className="mx-auto max-w-3xl bg-white p-12 text-gray-700">
        {children}
      </article>
    </div>
  );
}
