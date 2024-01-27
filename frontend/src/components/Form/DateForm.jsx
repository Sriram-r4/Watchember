import React from 'react'
import './MultistepForm.css'

function DateForm({data,setData}) {
  return (
    <div> 
    <form className='form-multistep-body'>
    <div className='form-group'>
        <label htmlFor='startdate' className='form-element-text'>Start Date</label>
        <input onChange={(e)=> setData({...data,startdate:e.target.value})}
                    value={data.startdate} type='date'  name='startdate' className='form-element-input-date' id='startdate'   autoFocus />
    </div>
    <div className='form-group'>
        <label htmlFor='enddate' className='form-element-text'>End Date</label>
        <input  onChange={(e)=> setData({...data,Enddate:e.target.value})}
                    value={data.Enddate}
         type='date'  name='enddate' className='form-element-input-date' id='enddate'  autoFocus />
    </div>
</form>
</div>
  )
}

export default DateForm