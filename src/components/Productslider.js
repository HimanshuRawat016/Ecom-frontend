import {Carousel} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';



const Productslider = () => {
    const cursorP = {
        cursor : "pointer"
    }
    return(
    <Carousel>
      <Carousel.Item>
       <img crossOrigin='anonymous'
       className='d-block w-100'
       src='/images/carousel/carousel-1.png'
       alt='First Slide'
       style={{height:"300px",objectFit:"cover"}}
       />
       <Carousel.Caption>
        <LinkContainer style={cursorP}to="/product-details">
        <h3>Best Laptops</h3>
        </LinkContainer>
       
      </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
       <img crossOrigin='anonymous'
       className='d-block w-100'
       src='/images/carousel/carousel-2.png'
       alt='First Slide'
       style={{height:"300px",objectFit:"cover"}}
       />
       <Carousel.Caption>
       <LinkContainer style={cursorP}to="/product-details">
        <h3>Best Books</h3>
        </LinkContainer>
      </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
       <img crossOrigin='anonymous'
       className='d-block w-100'
       src='/images/carousel/carousel-3.png'
       alt='First Slide'
       style={{height:"300px",objectFit:"cover"}}
       />
       <Carousel.Caption>
       <LinkContainer style={cursorP}to="/product-details">
        <h3>Best Cameras</h3>
        </LinkContainer>
      </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}


export default Productslider;