import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import grad from '../images/grad.jpg';
import grad1 from '../images/grad1.jpg';
import banner from '../images/banner.jpg';
export default function CarouselComponent(){
    return(
        <Carousel>
                <div>
                    <img src={grad} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={grad1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={banner} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}