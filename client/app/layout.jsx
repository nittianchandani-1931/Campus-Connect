import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/footer";


export const metadata = {
  title: "CampusConnect",
  description: "Connects students and administration easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
