import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import EditIcon from '../assets/icons/edit.png';
import DeleteIcon from '../assets/icons/delete.png';
import {useState, useEffect} from 'react'
import axios from 'axios';
import moment from 'moment';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

import Menu from '../components/Menu';

const Article = () => {

  // Useful State
  const [article, setArticle] = useState({})
  const location = useLocation()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Useful variables
  const {currentUser }= useContext(AuthContext)
  const navigate = useNavigate()

  // Get the article ID
  const articleId = location.pathname.split("/")[2]

  // Check the viewport
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  // Fetch articles from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/articles/${articleId}`);
        setArticle(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [articleId]);

  // Delete article 
  const handleDelete = async () => {
    try {
      await axios.delete(`/articles/${articleId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  // Convert html to text/html
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent;
  }

  return (
    <div className='single-article-container'>


      <div className='content'>
        <img src={`../upload/${article.img}`} className='article-image'></img>
        <div className='user'>
           
          {article.userImage && (<img src={article.userImage}></img>)}
          
          <div className='info'>
            {article && (<span>{article.username}</span>)}
            <p>{moment(article.date).fromNow()}</p>
          </div>

          {currentUser !== null && currentUser.username === article.username && screenWidth > 800 &&
            (<div className='edit'>
              <Link className='link' to={`/write?edit=2`} state={article}>
                <img src={EditIcon} className="edit icon"></img>
              </Link>
                <img src={DeleteIcon} className="delete icon" onClick={handleDelete}></img>
            </div>)
          }
        </div>

        <div className='single-article'>
          <h2 className='article-title'>{article.title}</h2>
          {getText(article.content)}
        </div>
      </div>


      <div className='menu-by-cat'>
        <Menu cat={article.cat}/>        
      </div>

    </div>
  )
}

export default Article