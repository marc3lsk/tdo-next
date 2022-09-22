export default function Article({ children }) {
  return (
    <>
      <hr className="mb-5"></hr>
      <article className="mx-auto max-w-3xl px-5 lg:px-0">{children}</article>
    </>
  );
}
