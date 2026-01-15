import "./globals.css";

export const metadata = {
  title: "CampusConnect",
  description: "Connects students ,request and approves easily",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
