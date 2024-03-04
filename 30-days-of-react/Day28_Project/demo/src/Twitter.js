import React, { useState } from 'react'
import { CiEdit, CiHeart } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { cloneDeep } from 'lodash';

const options = { 
  year: 'numeric', 
  month: 'short', 
  day: '2-digit', 
  hour: '2-digit', 
  minute: '2-digit', 
  hour12: true 
};

const Twitter = () => {
  const [content, setContent] = useState()
  const [contents, setContents] = useState([])

  const addPost = () => {
    const date = new Date();
    const id = date.getTime();
    const newContents = cloneDeep(contents)
    newContents.push({
      content,
      date: new Intl.DateTimeFormat('en-US', options).format(date),
      id,
    })
    setContents(newContents)
    setContent('')
  }

  const deletePost = (id) => {
    const deletedContents = contents.filter(c => c.id !== id)
    setContents(deletedContents)
  }

  return (
    <div className='twitter-wrapper'>
      <div className='twitter-input'>
        <input
          value={content}
          placeholder='Tweet about 30 Days Of React...'
          onChange={(e) => setContent(e.target.value)}
        />
        <button disabled={!content} onClick={addPost}>Add Post</button>
      </div>
      <div className='twitter-section'>
        {
          contents.map(c => (
            <div className='twitter-item' key={c.id}>
              <header>Cecil</header>
              <article>{c.content}</article>
              <footer>
                <div className='actions'>
                  <div>
                    <CiEdit />
                  </div>
                  <div onClick={() => deletePost(c.id)}>
                    <MdOutlineDeleteForever />
                  </div>
                </div>
                <div className='post-activity'>
                  <div>
                    <FaRegComment />
                  </div>
                  <div>
                    <CiHeart />
                  </div>
                  <div>
                    <FaRetweet />
                  </div>
                </div>
                <div className='date'>{c.date}</div>
              </footer>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Twitter