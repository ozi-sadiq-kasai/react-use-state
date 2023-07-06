import { useState } from "react"

const StateValueGotcha = () => {
const[increase,setIncrease]=useState(0)

const handleAdd = () =>{
 setIncrease((currentState)=>{
   const newIncrease = currentState + 1
   console.log(newIncrease)
   return newIncrease
 })
}


  return (
    <div>
     <p>{increase}</p>
     <button type="button" onClick={handleAdd}>Add</button>
     
    </div>
  )
}
export default StateValueGotcha