import React, {useState} from 'react'
import Forward from '../assets/icons/forward.png'
import asset1 from '../assets/images/asset1.jpg'
import asset2 from '../assets/images/asset2.png'
import asset3 from '../assets/images/asset3.jpg'
import Close from '../assets/icons/close.png'
import Download from '../assets/icons/download.png'
import { Link } from 'react-router-dom'

// export const SliderData = [
//   {
//     image: 'https://i.ibb.co/hfP9HFd/asset1.jpg',
//     titre: 'Numéro 1',
//     description:
//     'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nam earum ratione cupiditate corrupti quo placeat recusandae odio, expedita, obcaecati corporis beatae! Repellat, exercitationem magnam!'
//   },
//   {
//     image:'https://i.ibb.co/dDPXWh2/asset2.png',
//       titre: 'Numéro 2',
//     description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum voluptatibus commodi voluptas animi inventore, voluptates debitis ipsum qui blanditiis. Recusandae, dolore.'
//   },
//   {
//     image:'https://i.ibb.co/4ZwB5Cj/asset3.jpg',
//       titre: 'Numéro 3',
//     description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id aut laborum quo esse ratione rem blanditiis culpa?'
//   }
// ];
const Slider = ({SliderData}) => {

    const[current, setCurrent] = useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0: current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    if(!Array.isArray(SliderData) || SliderData.length <= 0){
        return null
    }

  return (
    <div className='slider-container'>
      <section className='slider'>
          <div className='prevArrow' onClick={prevSlide}><img src={Forward} alt='previous arrow'></img></div>
          {SliderData.map((slide, index) => {
              return(
                <>
                  <div className={index === current ? 'slide active' : 'slide'} key={index}>
                      {index === current && (
                          <img src= {slide.img} alt='dernier numéro' className='image' loading="lazy"></img>
                      )}
                  </div>
                  {index === current && (<h1 className='slide-title' key={`${slide.title} ${index}`}>{slide.title}</h1>)}
                </>
              )
          })}
          <div className='forArrow' onClick={nextSlide}><img src={Forward} alt='forward arrow'></img></div>
      </section>

      <section className='description'>
        <h2>Description</h2>
        <br/>
        {SliderData.map((slide, index) =>{
          return(
            <div className='slide-desc' key={`slide ${index}`}>
              {index === current && (<p>{slide.desc}</p>)}
            </div>
          )

        })}
          {SliderData.map((slide, index) =>{
            return(
              <>
                {index === current && (
                  <div className='download' key={`download-btn ${index}`}>
                    <a href="./numeros/asset1.pdf" download={`Neptune Magazine: ${slide.title}`}><p>Telecharger ce numéro</p><img src={Download} alt="download button"></img></a>
                  </div>
                )}
              </>            
            )

          })}
          <div className="ou">
          <p>ou</p>        
          </div>
  
          <div className="home-link">
            <Link className='link' to="/numeros"><h6>Voir tous les numéros</h6></Link>
          </div>

      </section>

    </div>
  )
}

export default Slider