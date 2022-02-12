import { useState } from "react"

import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  const handleTextChange = ({ target: { value } }) => {
    if (value === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (value.trim().length < 10) {
      setBtnDisabled(true)
      setMessage("Text must be at least 10 characters")
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim().length > 9) {
      const newFeedback = {
        text,
        rating
      }
      handleAdd(newFeedback)
      setText("")
      setBtnDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your serice with us?</h2>
        <RatingSelect select={setRating} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
