import React, { useState } from 'react'
import './AddForm.css'
// import Button from './Button'
import ErrorModel from './ErrorModel'

const AddForm = (props) => {
    const [name,setName]= useState('')
    const [age,setAge] = useState('')
 
    const [error,setError]=useState(null)
    const onHandler = (e)=>{
       e.preventDefault()
       if(name.trim().length===0 || age.trim().length===0){
        setError({
            title:'invalid input',
            message:'type somthing valid'
        })
        return
       }
       if(age<16){
        setError({
            title:'invalid input',
            message:'type somthing valid'
        })
        return
       }
       props.onAddList(name,age)
       setName('')
       setAge('')
    }

    const userNameChangeHandler = (e)=>{
        setName(e.target.value)
    }
    
    const ageChangeHandler = (e)=>{
        setAge(e.target.value)
    }

    const errorHandle = ()=>{
        setError(null)
    }
  return (
    <div>
{error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandle}/>}
   <div className='input'>
        <form onSubmit={onHandler}>
            <label htmlFor='username' className='input label' >Username:</label>
            <input type='text'
             value={name} 
             placeholder='enter user name'
            onChange={(e)=>setName(e.target.value)} 
             className='input input' ></input>
            
            <label htmlFor='age'>Age:</label>
            <input type='number' value={age} onChange={(e)=>setAge(e.target.value)}></input>
            
            <button type='submit' >Submit</button>
        </form>
    </div>
    </div>
  )
}

export default AddForm