import CarouselVideo from "./carouselSection";
import AboutUs from "./aboutSection";
import TestimonialSlider from "./testimonialSection";
import Footer from "./footerSection";
export default function Homepage(){
    return(
        <div>
            <CarouselVideo/>
            <AboutUs/>
            <TestimonialSlider/>
            <Footer/>
        </div>
    )
}