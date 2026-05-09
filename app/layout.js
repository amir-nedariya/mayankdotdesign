import "./globals.css";

export const metadata = {
  title: "Mayank | Portfolio",
  description: "Web Design & Digital Strategy Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
