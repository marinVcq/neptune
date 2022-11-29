import React, {useState, useEffect} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import NavbarDesktop from '../components/NavbarDesktop'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import moment from 'moment'


const Write = () => {

  const state = useLocation().state
  const [desc, setDesc] = useState(state ? state.desc : "");
  const [content, setContent] = useState(state ? state.content: "");
  const [title, setTitle] = useState(state ? state.title : "");
  const [img, setImg] = useState(null);
  const [cat, setCat] = useState(state ? state.cat : "");

  // Upload image on server 
  const upload = async () => {
    try{
      const formData = new FormData();
      formData.append('file', img)
      const res = await axios.post("/upload", formData);
      return res.data
    }catch(err){
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const imgUrl = await upload()

    // edit in database if there is a state also create a new article 
    try{
      state ? await axios.put(`/articles/${state.id}`, {title, desc ,content, cat, img:null ? imgUrl : state.img})
      : await axios.post(`articles/`, {title, desc, cat,content, img: imgUrl, date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")} )
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <NavbarDesktop/>
      <div className='write-page'>

        <h2>Publier ou Modifier un article</h2>
        
        <div className='panel-container'>

          <div className="content">
            
            <h2>Titre</h2>
            <input type="text" placeholder='Titre' value={title} onChange={(e) => {setTitle(e.target.value)}}></input>

            <h2>Description</h2>
            <div className='editor-container' style={{height: "30rem"}}>
              <ReactQuill className='editor' theme="snow" value={desc} onChange={setDesc} />
            </div>

            <h2>Contenu</h2>
            <div className='editor-container'>
              <ReactQuill className='editor' theme="snow" value={content} onChange={setContent} />
            </div>
          </div>

          <div className="menu">

            <div className="item item1">
              <h1 className='item-title'>Publication</h1>
              <span><b>Status: </b>Brouillon</span>
              <span><b>visibilité: </b>Public</span>
              <input type='file' id='file'style={{display:"none"}} onChange={(e) => {setImg(e.target.files[0])}}></input>
              <label htmlFor='file'>Charger une image</label>
              <div className='publish-buttons'>
                <button>Sauvegarder le brouillon</button>
                <button onClick={handleSubmit}>Publier</button>
              </div>
            </div>

            <div className="item item2">
              <h1 className='item-title'>Categories</h1>
              <div className='cat'>
                <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={(e) => {setCat(e.target.value)}}></input>
                <label htmlFor='art'>Art</label>              
              </div>
              <div className='cat'>
                <input type="radio" checked={cat === "culture"}  name="cat" value="culture" id="culture" onChange={(e) => {setCat(e.target.value)}}></input>
                <label htmlFor='culture'>Culture</label>
              </div>
              <div className='cat'>
                <input type="radio" checked={cat === "science"}  name="cat" value="science" id="science" onChange={(e) => {setCat(e.target.value)}}></input>
                <label htmlFor='science'>Science</label>
              </div>
              <div className='cat'>
                <input type="radio" checked={cat === "societe"}  name="cat" value="societe" id="societe" onChange={(e) => {setCat(e.target.value)}}></input>
                <label htmlFor='societe'>Société</label>
              </div>
              <div className='cat'>
                <input type="radio" checked={cat === "technologie"}  name="cat" value="technologie" id="technologie" onChange={(e) => {setCat(e.target.value)}}></input>
                <label htmlFor='technologie'>Technologie</label>
              </div>
              <div className='cat'>
                <input type="radio" checked={cat === "cinema"}  name="cat" value="cinema" id="cinema" onChange={(e) => {setCat(e.target.value)}}></input>
                <label htmlFor='cinema'>Cinema</label>
              </div>
            </div>

            <div className='item item3'>
              <h1 className='item-title'>Aide</h1>
              <h4>Publier un article</h4>
              <p>Entrez un titre ainsi que le contenu de votre article. Vous Pouvez soit le sauvegarder comme
                brouillon et continuer la rédaction plus tard ou cliquer sur <i>Update</i> et publier l'article.
              </p>
              <h4>Editer un article</h4>
              <p>Vous avez cliquez sur l'icon <i>Edit</i>. Modifier l'article et cliquez 
                sur <i>Update</i> et publier l'article modifié.
              </p>
            </div>

          </div>

        </div>
      </div>    
    </>

  )
}

export default Write