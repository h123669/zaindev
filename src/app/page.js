import Aboutus from "./_aboutUs/page";
import Cards from "./_cards/pages";
import Navbar from "./_navbar/page";
import Footer from "./_footer/page";

export default function Home() {
  return <>
  <div className="w-[90%] m-auto">
  <Navbar/>
  <section id="about">
        <Aboutus />
      </section>

      <section id="services">
        <Cards />
      </section>

      <section id="contact">
        <Footer />
      </section>
  </div>
  </>
}
