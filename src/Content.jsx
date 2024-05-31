import React, { useEffect, useState } from 'react'

function Content() {

  const [country,setCountry]=useState('')
  const [flag,setFlag] = useState('') 
  const [data,setData] = useState([])
  useEffect( ()=>{
  
    fetch(`https://restcountries.com/v3.1/all`)
    .then((response)=>response.json())
    .then((data)=>{
    setData(data)
    setCountry(data[0].name.common)
    setFlag(data[0].flags.png)
    
  } )
    .catch( (error)=> console.log(error) )
  

  },[] )


  return (
    

    <>
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
     {data.map( (object)=> (
      <>
     
        <div className='flex flex-col items-center '>
          <h1 className='text-purple-50'>{object.name. common}
          </h1>
          <img src={`${object.flags.png}`} className='w-full h-auto' style={{ maxWidth: '300px' }} alt="" />
         </div>
       
       </>

    )  )}
      </div>
    </>
  


         );
}

export default Content
