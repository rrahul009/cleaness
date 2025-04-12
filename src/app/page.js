 import CleanesFeature from '@/components/CleanesFeature'
import CorporateBuilding from '@/components/CorporateBuilding'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import QualityProduct from '@/components/QualityProduct'
import Slider from '@/components/Slider'
import Testimonial from '@/components/Testimonial'
import WholeSale from '@/components/WholeSale'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
 
 const page = () => {
   return (
     <div> 
      <Navbar/>
      <Slider/>
      <WholeSale/>
      <CleanesFeature/>
      <CorporateBuilding/>
      <WhyChooseUs/>
      <QualityProduct/>
      <Testimonial/>
      <Footer/>
     </div>
   )
 }
 
 export default page