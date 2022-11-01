import React, {useState} from 'react'
import DoubleDown from '../assets/icons/double_down.png'


const SliderLightBox = ({title, desc}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {isOpen ?
            <div className='lightbox active'>
                <h1 className='lightbox-title'>{title}</h1>
                <p className='lightbox-desc'>{desc}</p>
            </div> : null               
            }
            <p className='sub-text' onClick={toggleIsOpen}>Lire la description</p>
            <div className={`lightbox-btn ${isOpen ? " show" : ""}`} onClick={toggleIsOpen}>
                <img src={DoubleDown} alt="double down icon"></img>
            </div>
        </>
  )
}

export default SliderLightBox