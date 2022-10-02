import ImgZltyDres from "../../../public/dresy/zlty.jpg";
import ImgZelenyDres from "../../../public/dresy/zeleny.jpg";
import ImgBodkovanyDres from "../../../public/dresy/bodkovany.jpg";
import ImgBielyDres from "../../../public/dresy/biely.jpg";

export type CelkovePoradieProps = {
  rocnik: number;
  tabulka: Array<{
    meno: string;
    bodyHorske: number[];
    bodySprint: number[];
    bodyCelkovo: number;
    umiestnenie: number;
  }>;
  vitazi: {
    zltyDres?: string;
    zelenyDres?: string;
    bodkovanyDres?: string;
    bielyDres?: string;
  };
};

export default function CelkovePoradie({
  rocnik,
  tabulka,
  vitazi,
}: CelkovePoradieProps) {
  return (
    <>
      <h5 className="block font-bold">Celkové poradie</h5>
      {tabulka.some((_) => true) ? (
        <div className="mb-4 w-full overflow-x-auto">
          <table className="mt-5">
            <thead>
              <tr>
                <th className="border py-1 px-5 text-center"></th>
                <th className="border py-1 px-5 text-center">
                  <img
                    src={ImgBodkovanyDres.src}
                    alt="Bodkovaný dres"
                    className="w-12"
                  />
                </th>
                <th className="border py-1 px-5 text-center">
                  <img
                    src={ImgZelenyDres.src}
                    alt="Zelený dres"
                    className="w-12"
                  />
                </th>
                <th className="border py-1 px-5 text-center">
                  <img src={ImgZltyDres.src} alt="Žltý dres" className="w-12" />
                </th>
                <th className="border py-1 px-5 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {tabulka.map((jazdec) => (
                <tr key={jazdec.meno}>
                  <td className="whitespace-nowrap border py-1 px-5 text-center">
                    {jazdec.meno}
                  </td>
                  <td className="whitespace-nowrap border py-1 px-5 text-center">
                    {jazdec.bodyHorske.join(", ")}
                  </td>
                  <td className="whitespace-nowrap border py-1 px-5 text-center">
                    {jazdec.bodySprint.join(", ")}
                  </td>
                  <td className="whitespace-nowrap border py-1 px-5 text-center">
                    {jazdec.bodyCelkovo}
                  </td>
                  <td className="whitespace-nowrap border py-1 px-5 text-center">
                    {jazdec.umiestnenie}. miesto
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {vitazi.zltyDres ? (
        <div className="mt-8 flex space-x-5">
          <img
            src={ImgZltyDres.src}
            alt={`${rocnik}, Žltý dres, ${vitazi.zltyDres}`}
            className="w-24"
          />
          <p>{vitazi.zltyDres}</p>
        </div>
      ) : null}
      {vitazi.zelenyDres ? (
        <div className="mt-8 flex space-x-5">
          <img
            src={ImgZelenyDres.src}
            alt={`${rocnik}, Zelený dres, ${vitazi.zelenyDres}`}
            className="w-24"
          />
          <p>{vitazi.zelenyDres}</p>
        </div>
      ) : null}
      {vitazi.bodkovanyDres ? (
        <div className="mt-8 flex space-x-5">
          <img
            src={ImgBodkovanyDres.src}
            alt={`${rocnik}, Bodkovaný dres, ${vitazi.bodkovanyDres}`}
            className="w-24"
          />
          <p>{vitazi.bodkovanyDres}</p>
        </div>
      ) : null}
      {vitazi.bielyDres ? (
        <div className="mt-8 flex space-x-5">
          <img
            src={ImgBielyDres.src}
            alt={`${rocnik}, Biely dres, ${vitazi.bielyDres}`}
            className="w-24"
          />
          <p>{vitazi.bielyDres}</p>
        </div>
      ) : null}
    </>
  );
}
