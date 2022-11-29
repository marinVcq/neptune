import React, {useState} from 'react'
import Forward from '../assets/icons/forward.png'
import asset1 from '../assets/images/asset1.jpg'
import asset2 from '../assets/images/asset2.png'
import asset3 from '../assets/images/asset3.jpg'
import Close from '../assets/icons/close.png'
import Download from '../assets/icons/download.png'
import { Link } from 'react-router-dom'

const Slider = ({SliderData}) => {

    // USEFUL STATE
    const [index, setIndex] = useState(0)

    const length = SliderData.length;

    // Slider index + 1 / Refresh CSS
    const nextSlide = () => {
        setIndex(index === length - 1 ? 0: index + 1);
        let img = document.getElementById('slider-image');
        img.classList.remove('display')
        setTimeout(() => {img.classList.add('display')},"100")
    }

    // Slider index - 1 / Refresh CSS
    const prevSlide = () => {
        setIndex(index === 0 ? length -1 : index - 1);
        let img = document.getElementById('slider-image');
        img.classList.remove('display')
        setTimeout(() => {img.classList.add('display')},"100")
    }

    // Check for empty data
    if(!Array.isArray(SliderData) || SliderData.length <= 0){
        return null
    }

  return (
    <div className='slider-container'>

      <div className='slider'>
        <div className='prevArrow' onClick={prevSlide}><img src={Forward} alt='previous arrow'></img></div>
          <img id='slider-image' src= {`../upload/${SliderData[index].img}`} alt='dernier numéro' className={`image ${SliderData[index] ? "display" : ""}`} loading="lazy"></img>
          <h1 className='title'>{SliderData[index].title}</h1>
        <div className='forArrow' onClick={nextSlide}><img src={Forward} alt='forward arrow'></img></div>        
      </div>


      <div className='slider-details'>
        <h2>Description</h2>
        <p className='description'>{SliderData[index].desc}</p>
        <a className='download' href={`../upload/${SliderData[index].data}`} download={`Neptune Magazine: ${SliderData[index].title}`}><p>Telecharger ce numéro</p><img src={Download} alt="download button"></img></a>
      </div>

    </div>
  )
}

export default Slider