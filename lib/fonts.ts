import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "../public/assets/fonts/Montserrat-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
  weight: "100 900",
  display: "swap",
});
