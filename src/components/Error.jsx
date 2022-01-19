import React from 'react'

function Error({mensaje}) {
    return (
        <div className='bg-red-800 text-white text-center p-3 uppercase font-bold rounded-md mx-5 my-5' >
            <p>{mensaje}</p>
        </div>
    )
}

export default Error
