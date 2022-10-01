import clsx from "clsx";

export default function Nadpis({
  prvy = undefined as undefined | boolean,
  children,
}) {
  return (
    <h5 className={clsx("block font-bold", !prvy && "mt-8")}>{children}</h5>
  );
}
