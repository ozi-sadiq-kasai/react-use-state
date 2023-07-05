import {people} from './data'


const Persons = () => {
 
  return (
   <>
    {people.map((person)=>{
     const {id,name,age,hobby}=person
      return(
       <>
        <div key={id}>
         <h1>{name}</h1>
         <h2>{age}</h2>
         <p>{hobby}</p>
        </div>
       </>
      )
    })}
   </>
   
  )
}
export default Persons