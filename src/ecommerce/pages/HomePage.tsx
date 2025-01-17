import { CardCategorys } from "../components/CardCategorys"
import { CardProducts } from "../components/CardProducts"

import { Gallery } from "../components/Gallery"
import { HeroSection } from "../components/HeroSection"

import { OfferCard } from "../components/OfferCard"
import { Testimonies } from "../components/Testimonies"
import { WhyUs } from "../components/WhyUs"
import { LayoutPage } from "../layout/LayoutPage"

export const HomePage = () => {
  return (
    <>
    <LayoutPage>
        <>
        <HeroSection/>
        <CardProducts/>
        <CardCategorys/>
        <WhyUs/>
        <Testimonies/>
        <OfferCard/>
        <Gallery/>
        
        </>

    </LayoutPage>
        
    </>
  )
}
