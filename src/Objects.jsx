import {useState} from 'react'

const Objects = () => {
 
 const [names,setName]= useState('ozi')
 const [ages,setAges]= useState(30)
 const [hobby,setHobbies]= useState('watching tv')
 
 function handleUpdate(){
  setName('John')
  setAges(3)
  setHobbies('cooking')
 }
  return (
   
    <div>
      <h1>{names}</h1>
      <h2>{ages}</h2>
      <h3>{hobby}</h3>
      <button type='button' onClick={handleUpdate}>update</button>
    </div>
  )
}
export default Objects