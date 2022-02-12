import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = newFeedback => {
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = id => {
    if (window.confirm("Are you user you want to delete?")) {
      setFeedback(
        feedback.filter(item => {
          return item.id !== id
        })
      )
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
