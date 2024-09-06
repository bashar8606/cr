import { Rubik } from "next/font/google";
import Footer from "@/widgets/Footer";
import "../style/global.scss";
import GlobalProviders from "@/components/GlobalProviders";

const fontPrimary = Rubik({
  subsets: ["latin"],
  variable: "--ff-primary",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Creo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontPrimary.variable}>
        <GlobalProviders>
          {children}
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  );
}
