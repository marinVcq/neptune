import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

// IMPORT ASSETS
import Cloud from '../assets/icons/cloud.png'

const Numeros = () => {

  // Useful State
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [numeros, setNumeros] = useState([])

  // Fetch numeros
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/numeros`)
        setNumeros(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();

  },[])

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  return (
    <div className='nums-page'>
      <h1>Tous les numéros</h1>
      <div className='nums-container'>
        {numeros.map((num, index) => {
          return(
            <div className='num' key={index}>
              <img className='cover' src={`../upload/${num.img}`} alt="magazine cover"></img>
              <h3 className='title'>{num.title}</h3>
              <p className='desc'>{num.desc}</p>
              <a className='dwnld' href={`../upload/${num.data}`} download={`Neptune Magazine: ${num.title}`}>
                <img src={Cloud}></img>
              </a>
            </div>
          )

        })}
      </div>
    </div>
  )
}

export default Numeros