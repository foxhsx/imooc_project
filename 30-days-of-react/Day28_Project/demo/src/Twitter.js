import React, { useRef, useState } from 'react'
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
  const editRef = useRef(null)

  const addPost = () => {
    const date = new Date();
    const id = date.getTime();
    const newContents = cloneDeep(contents)
    newContents.push({
      content,
      date: new Intl.DateTimeFormat('en-US', options).format(date),
      id,
      isEdit: false
    })
    setContents(newContents)
    setContent('')
  }

  const deletePost = (id) => {
    const deletedContents = contents.filter(c => c.id !== id)
    setContents(deletedContents)
  }

  const editPost = (id) => {
    setContents(cs => cs.map(c => {
      if (c.id === id) {
        c.isEdit = true;
      }
      return c
    }))
  }

  const cancelEdit = (id) => {
    setContents(cs => cs.map(c => {
      if (c.id === id) {
        c.isEdit = false;
      }
      return c
    }))
  }

  const saveEdit = (ct) => {
    setContents(cs => cs.map(c => {
      if (c.id === ct.id) {
        c.isEdit = false;
        c.content = editRef.current.value
      }
      return c
    }))
  }

  return (
    <div className='twitter-wrapper'>
      <div className='twitter-input m-3 row'>
        <div class="input-group col">
          <span class="input-group-text">With textarea</span>
          <textarea value={content} class="form-control" aria-label="With textarea" onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="button" className='btn btn-primary ms-2 col-md-auto' disabled={!content} onClick={addPost} style={{ lineHeight: '48px' }}>Add Post</button>
      </div>
      <div className='twitter-section row m-3'>
        {
          contents.map(c => (
            <div className='twitter-item col-4 border p-3 m-3 rounded shadow-sm' key={c.id}>
              <header className='fw-bold'>Cecil</header>
              {
                c.isEdit ? <div className='row'>
                  <textarea ref={editRef} defaultValue={c.content} class="form-control" aria-label="With textarea"></textarea>
                  <div className='row my-2 text-center'>
                    <button type='button' className='btn btn-primary col' onClick={() => saveEdit(c)}>Save</button>
                    <button type='button' className='btn btn-secondary col offset-1' onClick={() => cancelEdit(c.id)}>Cancel</button>
                  </div>
                </div> : <article className='py-3'>{c.content}</article>
              }
              <footer className='row'>
                <div className='actions col-3 row'>
                  <div className='col-md-auto pe-1' role="button" onClick={() => editPost(c.id)}>
                    <CiEdit />
                  </div>
                  <div className='col-md-auto px-1' onClick={() => deletePost(c.id)} role="button">
                    <MdOutlineDeleteForever />
                  </div>
                </div>
                <div className='post-activity col row justify-content-center'>
                  <div className='col-md-auto px-1' role="button">
                    <FaRegComment />
                  </div>
                  <div className='col-md-auto px-1' role="button">
                    <CiHeart />
                  </div>
                  <div className='col-md-auto px-1' role="button">
                    <FaRetweet />
                  </div>
                </div>
                <div className='date col text-end'>{c.date}</div>
              </footer>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Twitter