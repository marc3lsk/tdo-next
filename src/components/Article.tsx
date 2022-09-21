export default function Article({ children }) {
  return (
    <>
      <hr className="my-5"></hr>
      <article className="max-w-3xl mx-auto lg:px-0 px-5">{children}</article>
    </>
  );
}
