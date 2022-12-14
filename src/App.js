import Feedbackitem from './components/Feedbackitem';
import Header from './components/Header';
import React from 'react';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  
  return (
    <>
      <Header text={'Feedback App'} />
      <div className='container'>
        < FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
