import { CardCategorys } from "../components/CardCategorys"
import { CardProducts } from "../components/CardProducts"
import Footer from "../components/Footer"
import { Gallery } from "../components/Gallery"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { OfferCard } from "../components/OfferCard"
import { Testimonies } from "../components/Testimonies"
import { WhyUs } from "../components/WhyUs"

export const HomePage = () => {
  return (
    <>
        <Navbar/>
        <HeroSection/>
        <CardProducts/>
        <CardCategorys/>
        <WhyUs/>
        <Testimonies/>
        <OfferCard/>
        <Gallery/>
        <Footer/>
    </>
  )
}
