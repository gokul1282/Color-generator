import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'





function App() {

const [color,setColor] = useState('')
const [error,setError] = useState(false)
const [list,setList] = useState(new Values('#f15025').all(10))

const handleSubmit = (e) => {
e.preventDefault()
console.log("hello")
try{
let colors = new Values(color).all(10) 
setList(colors)
setError(false)
console.log(colors)
}
catch(err){
setError(true)
console.log(err)

}
}





  return <>
<section className = "conatiner" >
<h3> Color generator </h3>
<form onSubmit = {handleSubmit}>
<input type="text" value = {color} onChange = {(e) => setColor(e.target.value)} placeholder='#f15025'  className={`${error ? 'error' : null}`}/>
<button className = "btn">Submit</button>

</form>

</section>
<br/>
<section className = "colors">
{list.map((color,index)=> {
return (
<SingleColor key = {index}
rgb = {color.rgb}
weight = {color.weight}
index = {index}
/>


)
})}



</section>


</>
}

export default App
