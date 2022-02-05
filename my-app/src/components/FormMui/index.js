import { Button, TextField } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import './style.sass'

export const FormMui = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const textField = useRef()

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(value)
    setValue('')
  }

  useEffect(() => {
    textField.current?.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        value={value}
        inputR
        ef={textField}
        onChange={handleChange}
        label="Message"
        variant="outlined"
      />
      <Button variant="contained" className="form-btn" type="submit">
        Send
      </Button>
    </form>
  )
}
