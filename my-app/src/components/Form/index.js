import { useState } from 'react'
import './style.sass'

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        className="input"
      />
      <input type="submit" className="form-btn" />
    </form>
  )
}
