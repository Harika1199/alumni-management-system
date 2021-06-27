import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import grad from '../images/grad.jpg';
import grad1 from '../images/grad1.jpg';
import banner from '../images/banner.jpg';
import '../css/App.css';
export default function CarouselComponent(){
    return(
        <Carousel showThumbs={false} infiniteLoop={true} transitionTime="2000" autoPlay className="carousel" showStatus={false}>
                <div>
                    <img src={grad} alt="bannner1" className="home-banner"/>
                </div>
                <div>
                    <img src={grad1} alt="banner2" className="home-banner"/>
                </div>
                <div>
                    <img src={banner} alt="banner3" className="home-banner"/>
                </div>
            </Carousel>
    )
}