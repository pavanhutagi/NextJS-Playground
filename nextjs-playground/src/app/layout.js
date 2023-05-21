import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/navbar/navbar-component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS Playground",
  description: "A playground to experiment and learn NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        <div>{children}</div>
      </body>
    </html>
  );
}
