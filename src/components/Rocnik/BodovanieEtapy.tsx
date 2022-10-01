import React from "react";

export type BodovanieEtapyProps = {
  bodovanie: Array<{
    nazov: string;
    jazdci: Array<{
      meno: string;
      body: number;
    }>;
  }>;
};

export default function BodovanieEtapy({ bodovanie }: BodovanieEtapyProps) {
  const pocetRiadkov = bodovanie.reduce(
    (max, b) => Math.max(max, b.jazdci.length),
    0
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="mt-5">
        <thead>
          <tr>
            {bodovanie.map((b) => (
              <th
                key={b.nazov}
                className="border py-1 px-1 text-center"
                colSpan={2}
              >
                {b.nazov}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {new Array(pocetRiadkov).fill(0).map((_, riadok) => (
            <tr key={riadok}>
              {bodovanie.map((b) =>
                b.jazdci
                  .filter((_, i) => i == riadok)
                  .map((j) => (
                    <React.Fragment key={j.meno}>
                      <td className="border py-1 px-5 text-center">
                        {j.body}b
                      </td>
                      <td className="whitespace-nowrap border py-1 px-5 text-center">
                        {j.meno}
                      </td>
                    </React.Fragment>
                  ))
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
