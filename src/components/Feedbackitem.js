import React from 'react';
import { useState } from "react"

const Feedbackitem = ({item}) => {
    return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  )
}

export default Feedbackitem
