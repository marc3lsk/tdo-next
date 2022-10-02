import { ImgHTMLAttributes } from "react";
import { Item } from "react-photoswipe-gallery";

export type ObrazokGalerieProps = {
  src: string;
  width: number;
  height: number;
} & Partial<ImgHTMLAttributes<HTMLImageElement>>;

const imgStyle: React.CSSProperties = {
  cursor: "pointer",
  width: "100%",
};

function MinSize({ width, height }) {
  if (typeof window == "undefined") return { width, height };
  const minWidth = window.innerWidth * 2;
  const multiplier = width / minWidth;

  if (multiplier < 1)
    return { width: width / multiplier, height: height / multiplier };

  return { width, height };
}

export default function ObrazokGalerie(obrazok: ObrazokGalerieProps) {
  const { src, width, height, alt, ...obrazokAttrs } = obrazok;

  return (
    <Item
      original={src}
      thumbnail={src}
      alt={alt}
      {...MinSize({ width, height })}
    >
      {({ ref, open }) => (
        <img
          style={{ ...imgStyle, ...obrazok.style }}
          src={src}
          alt={alt}
          ref={ref as React.MutableRefObject<HTMLImageElement>}
          onClick={open}
          {...obrazokAttrs}
        />
      )}
    </Item>
  );
}
