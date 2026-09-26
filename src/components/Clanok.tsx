export default function Clanok({ children, className = "max-w-3xl" }) {
  return (
    <div className="w-full bg-white">
      <article className={`mx-auto ${className} bg-white px-5 pt-8 pb-12 text-gray-700 lg:px-5`}>{children}</article>
    </div>
  );
}
