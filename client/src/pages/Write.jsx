import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const Write = () => {

  const [value, setValue] = useState('');

  return (
    <div className='write-page'>
      
      <div className="content">
        <h2 className='page-section-title'>Publier ou Modifier un article</h2>
        <input type="text" placeholder='Title'></input>
        <div className='editor-container'>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item1"></div>
        <div className="item2"></div>
      </div>
    </div>
  )
}

export default Write