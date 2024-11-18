import React from 'react'

const page = (props) => {

    
  return (
    <div className=' text-white'>
      i am dynamic meal page - {props.params.meal_id}
    </div>
  )
}

export default page
