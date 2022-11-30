import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import Arrow from '../assets/icons/forward.png'

export const Articles = () => {

  const [articles, setArticles] = useState([])
  const [cat, setCat] = useState("Catégories")
  const [catDropdown, setCatDropdown] = useState(false)

  const handleDropdown = () =>{
    setCatDropdown(prev => !prev)
  }
  const handleCat = (category) => {
    setCat(category);
    setCatDropdown(prev => !prev)
    
  }

  const catLoc = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/articles${catLoc}`)
        setArticles(res.data)
      }catch(err){
        console.log(err)

      }
    }
    fetchData();

  }, [catLoc])

  return (
    <div className='articles-page'>
      <div className='catnav'>
        <h2 onClick={handleDropdown}>{cat}<span><img src={Arrow} className={`cat-arrow ${catDropdown ? "up" : "down"}`} ></img></span></h2>
        <div className={`cat-container ${catDropdown ? "display" : ""}`}>
          <Link className='link' to="/articles" onClick={() => handleCat("Tous les articles")}><h3>Tous les Articles</h3></Link>
          <Link className='link' to="/articles/?cat=art" onClick={() => handleCat("Art")}><h3>Art</h3></Link>
          <Link className='link' to="/articles/?cat=culture" onClick={ () =>handleCat("Culture")}><h3>Culture</h3></Link>
          <Link className='link' to="/articles/?cat=science" onClick={() => handleCat("Science")}><h3>Science</h3></Link>
          <Link className='link' to="/articles/?cat=societe" onClick={() => handleCat("Société")}><h3>Société</h3></Link>
          <Link className='link' to="/articles/?cat=technologie" onClick={() => handleCat("Technologie")}><h3>Technologie</h3></Link>
          <Link className='link' to="/articles/?cat=cinema" onClick={() => handleCat("Cinema")}><h3>Cinema</h3></Link>
        </div>

      </div>
      <div className='articles-container'>
        {articles.map(article =>(
          <div className='article' key={article.id}>
            <div className='article-img-container'>
              <img src={`../upload/${article.img}`}></img>
            </div>
            <div className='article-content'>
              <Link className='link' to={`/article/${article.id}`}>
                <h1 className='article-title'>{article.title}</h1>
              </Link>
              <p className='article-desc'>{article.desc}</p>
              <Link className='button' to={`/article/${article.id}`}>Voir Plus</Link>
            </div>
          </div>
        ))}
      </div>      
    </div>

  )
}

export default Articles