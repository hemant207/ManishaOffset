import React from 'react'

function Img() {
  return (
    <>
    <div>
    <video autoPlay muted loop style={{ 'width': '100%', 'height':'100%' ,'objectFit':'contain'}}>
        <source type="video/mp4" src="press.mp4" />
      </video>
    </div>

   
    </>
  )
}

export default Img