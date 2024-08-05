import React from 'react'

const Button = (props) => {
    // const {bg, }
  return (
    <div>
         <button onClick={() => props.handler()} className="outline-none p-2 bg-indigo-600 text-white font-semibold rounded-md w-full hover:bg-indigo-500 transition duration-200">{props.name}</button>
    </div>
  )
}

export default Button