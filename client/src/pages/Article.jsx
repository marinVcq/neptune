import React from 'react'
import { Link } from 'react-router-dom'
import EditIcon from '../assets/icons/edit.png';
import DeleteIcon from '../assets/icons/delete.png';

import Menu from '../components/Menu';

const Article = () => {
  return (
    <div className='single-article-container'>


      <div className='content'>
        <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='article-image'></img>
        <div className='user'>
          
          <img src="https://thispersondoesnotexist.com/image"></img>
          
          <div className='info'>
            <span>John</span>
            <p>Publié il y'a 2 jours</p>
          </div>

          <div className='edit'>
            <Link className='link' to='/write?edit=2'>
              <img src={EditIcon} className="edit icon"></img>
            </Link>
              <img src={DeleteIcon} className="delete icon"></img>
          </div>
        </div>

        <div className='single-article'>
          <h2 className='article-title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, officiis.</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet iure sit corrupti, molestias, ducimus quidem reiciendis pariatur odit placeat adipisci aperiam tenetur! Rem repellendus aliquid voluptate maxime necessitatibus sit nam eligendi beatae consectetur velit omnis quod quae nulla, a illum, nemo doloribus sapiente sequi alias ea aspernatur labore tempora!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quibusdam eveniet error dolores atque molestiae cum iure! Maxime facilis perferendis natus dolorem ex, omnis ipsam impedit voluptas perspiciatis itaque similique sint, ea quas laboriosam ut laborum doloremque beatae cumque at reprehenderit distinctio odio velit minus! Est numquam provident nesciunt ipsa, obcaecati earum qui id ducimus beatae perferendis repellat sint doloribus asperiores! Dolores voluptatum molestiae sequi. Velit quis beatae officiis rem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eligendi suscipit a repudiandae ratione cum, eum blanditiis maxime odio repellat consequuntur atque inventore laboriosam beatae nobis temporibus laborum voluptatum aperiam magni amet? Laboriosam porro omnis eaque autem nemo est illum sapiente, voluptate at facere. Perferendis totam, tenetur neque autem, laboriosam eveniet iste libero quam provident animi eaque incidunt consequatur alias. Aperiam libero dignissimos assumenda illum, veritatis excepturi iusto velit distinctio hic fugit quaerat vero voluptatum maiores molestiae incidunt, officiis voluptatem praesentium ipsum quos. Sapiente atque odit impedit necessitatibus quis dolorem distinctio itaque, deserunt rerum voluptatem. Doloremque fugit non perferendis sunt molestias explicabo. Sed esse unde accusamus deleniti nemo officia doloribus ut error obcaecati quaerat eligendi suscipit reiciendis, culpa ipsam possimus laborum mollitia aliquid magnam neque distinctio necessitatibus, voluptatum voluptas. Adipisci necessitatibus deleniti, cum excepturi recusandae libero quod in pariatur voluptates at quidem laborum numquam magni fugit unde atque dicta praesentium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sint obcaecati libero ducimus, totam inventore sit tempore repudiandae, at dolor eaque rem est unde? Unde molestias cum placeat cumque, maxime alias ut quo provident quibusdam iusto, quos dicta inventore explicabo impedit at sequi libero quod?</p>
          <p>Harum esse, deserunt, dolorem dolore quis beatae laborum animi mollitia, pariatur delectus voluptatibus! Repellat harum magnam quam expedita, ratione quaerat voluptatem nisi rem atque eaque corporis! Suscipit ab asperiores iusto ratione, quidem at pariatur sequi dolorum deserunt quia magni repellendus eligendi sit architecto molestias neque.</p>
        </div>
      </div>


      <div className='menu'>
        <Menu />        
      </div>

    </div>
  )
}

export default Article