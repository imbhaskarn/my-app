import Feedbackitem from "./Feedbackitem"


const FeedbackList = ({feedback}) => {
    if(!feedback || feedback.length === 0){
        return <p>No Feed Yet</p>
    }
    console.log(feedback[0].rating)
  return (
    <div className="feedback-list">
        
      {
        feedback.map((item) =>{
           return <Feedbackitem key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default FeedbackList
