import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-zinc-900" lang="en">
      <body>{children}</body>
    </html>
  );
}
