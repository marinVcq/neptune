import React from 'react'
import NavbarDesktop from '../components/NavbarDesktop'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

// USEFUL MODULE
import moment from 'moment'
import axios from 'axios'

// IMAGES IMPORT
import Ok from '../assets/icons/ok.png'
import Delete from '../assets/icons/delete.png'
import { Navigate } from 'react-router-dom'

const Add = () => {

    // Useful useState
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [cover, setCover] = useState(null)
    const [file, setFile] = useState(null)
    const [numeros, setNumeros] = useState([])
    const [error, setError] = useState("")
    const navigate = useNavigate();

    // Fetch numeros from database
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

    }, [numeros])

    // Upload Cover and File on server 
    const upload = async (f) => {
        try{
            const formData = new FormData();
            formData.append('file', f)
            const res = await axios.post("/upload", formData);
            return res.data
        }catch(err){
            console.log(err)
        }
    }

    // Add new numero to database
    const handleSubmit = async (e) => {
        e.preventDefault()

        //Check for empty input
        if(title.length > 0 && desc.length > 0 && cover && file){
            setError("")
        }else{
           return setError("Veuillez remplir tous les champs")
        }
        const coverUrl = await upload(cover)
        const fileUrl = await upload(file)
        
        console.log(title)
        console.log(desc)


        try{
            console.log("try")
            const res = await axios.post(`numeros/`, {title, desc, img:coverUrl, data:fileUrl, date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")} )
            console.log(res.data)
        }catch(err){
            console.log(err)
            setError("Une erreur est survenue!")
        }            
    }

    // Delete a numeros
    const handleDelete = async () => {
        // do some stuff
    }

  return (
    <>
    <NavbarDesktop/>
    <div className='add-page'>

        <div className='add-container'>
            <h2>Ajouter un numéro</h2>

            <div className='input-row'>
                <h3>Titre du numéro</h3>
                <input type="text" placeholder='Titre' value={title} onChange={(e) => {setTitle(e.target.value)}}></input>                
            </div>

            <div className='input-row'>
                <h3>Description</h3>
                <textarea type="text" placeholder='Description' value={desc} onChange={(e) => {setDesc(e.target.value)}} style={{height: "20rem"}}></textarea>                
            </div>

            <div className='input-row'>
                <h3>Image de couverture</h3>
                <input type='file' id='cover'style={{display:"none"}} onChange={(e) => {setCover(e.target.files[0])}}></input>
                <label htmlFor='cover'>Charger une image{cover && (<img src={Ok} className="loaded"></img>)}</label>
            </div>

            <div className='input-row'>
                <h3>Fichier au format PDF</h3>
                <input type='file' id='file'style={{display:"none"}} onChange={(e) => {setFile(e.target.files[0])}}></input>
                <label htmlFor='file'>Charger le magazine{file && (<img src={Ok} className="loaded"></img>)}</label>
            </div>

            <button onClick={handleSubmit}>Ajouter</button>

            <div className='info'>
                {error && (<p className='error'>{error}</p>)}
            </div>       
        </div>

        <div className='remove-container'>

            <h2>Supprimer un numéro</h2>

            <div className='nums-container'>
                <h3>Liste des numéros</h3>
                {numeros.length && (numeros.map((numero,index) => 
                    <div className='num' key={index}>
                        <p className='num-title'>{numero.title}</p>
                        <p className='num-date'>{moment(numero.date).format("MMMM Do YYYY")}</p>
                        <img src={Delete} onClick={handleDelete}></img>
                    </div>
                ))}                
            </div>


        </div>

    </div>    
    </>

  )
}

export default Add