import React from 'react'

const LoadingSpinner = () => {
  return (
    <div style={{marginTop:"100px", width:"300"}}>
        <progress className="progress w-56"></progress>
    </div>
  )
}

export default LoadingSpinner