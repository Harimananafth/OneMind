import Footer from "../components/Footer";
import Header from "../components/Header";

export default function StandardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-3 md:px-10">
      <Header />
      <main className="grow mt-18">{children}</main>
      <Footer />
    </div>
  );
}
