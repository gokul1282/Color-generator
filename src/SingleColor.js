import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {

const [alert,setAlert] = useState(false)
const hex = rgbToHex(...rgb)
const rgb_dis = rgb.toString()


  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
<article className={`color ${index > 10 && 'color-light'}`} 
          style = {{backgroundColor : `rgb(${rgb_dis})`}}
          onClick = {()=> {
                  setAlert(true)
                  navigator.clipboard.writeText(hex)
}}

>

 <p className='percent-value'>{weight}%</p>
 <p className='color-value'>{hex}</p>
 {alert && <p className = "alert">COPIED TO CLIPBOARD!!</p>}

</article>

)
}

export default SingleColor
