import React, {useState} from 'react'
import Forward from '../assets/icons/forward.png'
import asset1 from '../assets/images/asset1.jpg'
import asset2 from '../assets/images/asset2.png'
import asset3 from '../assets/images/asset3.jpg'
import Close from '../assets/icons/close.png'
import Download from '../assets/icons/download.png'

export const SliderData = [
  {
    image:
      asset1,
    titre: 'Numéro 1',
    path: 'http://localhost:3000/public/numeros/asset1.pdf',
    description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nam earum ratione cupiditate corrupti quo placeat recusandae odio, expedita, obcaecati corporis beatae! Repellat, exercitationem magnam!'
  },
  {
    image:
      asset2,
      titre: 'Numéro 2',
      path: '../../public/numeros/asset1.pdf',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorum voluptatibus commodi voluptas animi inventore, voluptates debitis ipsum qui blanditiis. Recusandae, dolore.'
  },
  {
    image:
      asset3,
      titre: 'Numéro 3',
      path: '../../public/numeros/asset1.pdf',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id aut laborum quo esse ratione rem blanditiis culpa?'
  }
];

const Slider = () => {

    // Function execute on download click
    const onDownloadClick = (path) =>{
      fetch(path).then(response =>{
        response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = path;
          alink.click();
        })
      })
    }
    function download(url, filename) {
    fetch(url).then(function(t) {
        return t.blob().then((b)=>{
            var a = document.createElement("a");
            a.href = URL.createObjectURL(b);
            a.setAttribute("download", filename);
            a.click();
        }
        );
    });
    }

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
      <h2 className='slider-title'>Nos derniers numeros</h2>
      <section className='slider'>
          <div className='prevArrow' onClick={prevSlide}><img src={Forward} alt='previous arrow'></img></div>
          {SliderData.map((slide, index) => {
              return(
                <>
                  <div className={index === current ? 'slide active' : 'slide'} key={index}>
                      {index === current && (
                          <img src= {slide.image} alt='dernier numéro' className='image' loading="lazy"></img>
                      )}
                  </div>
                  {index === current && (<h1 className='slide-title' key={`${slide.titre} ${index}`}>{slide.titre}</h1>)}
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
            <>
              <div className='slide-desc' key={`slide ${index}`}>
                {index === current && (<p>{slide.description}</p>)}
              </div>
            </>            
          )

        })}
        <div className='download'>
          <h2>Télécharger au format PDF</h2>
          {SliderData.map((slide, index) =>{
            return(
              <>
                {index === current && (
                  <div className='download-btn' key={`download-btn ${index}`}>
                    <a href="./numeros/asset1.pdf" download={`Neptune Magazine: ${slide.titre}`}><span><img src={Download} alt="download button"></img></span></a>
                  </div>
                )}
              </>            
            )

          })}
        </div>
      </section>

    </div>
  )
}

export default Slider