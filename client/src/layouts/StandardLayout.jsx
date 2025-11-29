import Footer from "../components/Footer";

export default function StandardLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen px-10">
        <main className="grow">{children}</main>
         <Footer/>
    </div>
  );
}

