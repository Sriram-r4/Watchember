import React from 'react'
import './MultistepForm.css'

function StatusForm({data,setData}) {
  return (
    <div >
        <form className='form-multistep-body'>
    <div className='form-group'>
        <label htmlFor='orgstatus'  className='form-element-text'>Original Status</label>
        <select name="orgstatus" id="orgstatus" className='form-element-input-select'  onChange={(e)=> setData({...data,original_status:e.target.value})} defaultValue={data['original_status']}>
        <option value={""}>Please select</option>
            <option  value={"completed"}>Completed</option>
            <option  value={"running"}>Running</option>
            <option  value={"yet-to-release"}>Yet to Release</option>        
        </select>
    </div>
    <div className='form-group'>
        <label htmlFor='your_status' className='form-element-text'>Your Status</label>
        <select name="your_status" id="your_status" className='form-element-input-select'  onChange={(e)=> setData({...data,your_status:e.target.value})} defaultValue={data['your_status']}>
           <option value={""}>Please select</option>
            <option  value={"completed"}>Completed</option>
            <option  value={"watching"}>Watching</option>
            <option  value={"yet-to-watch"}>Yet to Watch</option>        
        </select>
    </div>
</form>
</div>
  )
}

export default StatusForm