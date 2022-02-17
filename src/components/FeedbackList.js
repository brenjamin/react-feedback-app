import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  if (!feedback || feedback.length === 0) {
    return <div>No Feedback</div>
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
