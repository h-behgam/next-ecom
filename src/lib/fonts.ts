import localfont from "next/font/local";

export const vaziri = localfont({
  src: "../../public/assets/fonts/ttf/vazirmatn-vf.ttf",
  style: "normal",
  weight: "400",
  variable: "--font-vazir",
});
export const iranSans = localfont({
  src: [
    {
      path: "../../public/assets/fonts/ttf/IRANSansWeb_UltraLight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ttf/IRANSansWeb_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ttf/IRANSansWeb_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ttf/IRANSansWeb_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ttf/IRANSansWeb_Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--IRANSans",
});
