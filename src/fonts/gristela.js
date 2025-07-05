import localFont from "next/font/local";

export const gristela = localFont({
  src: [
    {
      path: "../../public/fonts/gristela/gristela.otf",
      weight: "900",
      style: "bold",
    },
  ],
  display: "swap",
});
