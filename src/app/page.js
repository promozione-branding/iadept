import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Clientele from "@/components/Clientele";
import Categories from "@/components/Categories";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import MoreProducts from "@/components/MoreProducts";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
       <Clientele />
     <Categories />
        <Industries />
       <Testimonials />
    <ContactForm />
  <MoreProducts /> 
     <ContactBar />

    </main> 
  );
}
