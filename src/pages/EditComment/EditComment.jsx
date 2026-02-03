import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

import * as blogService from '../../services/blogService'

// css
import styles from './EditComment.module.css'

const EditComment = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { blogId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await blogService.updateComment(blogId, formData)
    navigate(`/blogs/${blogId}`)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Comment</h1>
        <label htmlFor="text-input">Text</label>
        <textarea 
          required
          type="text"
          name="text" 
          id="text-input"
          value={formData.text}
          placeholder="Text"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditComment