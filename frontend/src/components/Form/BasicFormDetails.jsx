import React from 'react'
import './MultistepForm.css'

function BasicFormDetails({data,setData}) {
    return (
        <div>
            <form className='form-multistep-body' >
                <div className='form-group'>
                    <label htmlFor='name' className='form-element-text'>Anime Name</label>
                    <input  onChange={(e)=> setData({...data,anime_name:e.target.value})}
                    value={data.anime_name}
                    type='text' name='name' className='form-element-input' id='name' required  autoFocus />
                </div>
                <div className='form-group'>
                    <label htmlFor='rating' className='form-element-text'>Rating : {data.rating}</label>
                    <input onChange={(e)=> setData({...data,rating:parseFloat(e.target.value)})}
                    value={data.rating} type='range' min="1" max="10" name='rating' className='form-element-input' id='rating' required  autoFocus />
                             
                </div>
            </form>
        </div>
    )
}

export default BasicFormDetails