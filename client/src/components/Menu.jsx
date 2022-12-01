import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Menu = ({cat}) => {

  // Useful State
  const [articles, setArticles] = useState([])

  // Fectch articles by category
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/articles/?cat=${cat}`)
        setArticles(res.data)
      }catch(err){
        console.log(err)

      }
    }
    fetchData();

  }, [cat])

  return (
    <div className='menu'>
        <h2>Ces articles pourraient vous interesser...</h2>
        {articles.map((article) => (
            <div className='article-menu' key={article.id}>
                <img src={`../upload/${article.img}`} className="article-menu-img"></img>
                <h2 className='article-menu-title'>{article.title}</h2>
                <Link className='menu-btn' to={`/article/${article.id}`}>Voir Plus</Link>
            </div>
        ))}

    </div>
  )
}

export default Menu