import {useEffect,useState,useMemo} from 'react'
import {useTable } from 'react-table'
import { getColumns} from './columns'
import './Table.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Table() {
  
  const navigate=useNavigate();
  const columns=useMemo(()=> getColumns(navigate),[])

  const [data,setData]=useState([])
   const [del,setDel]=useState(false);

  const tableInstance= useTable({
    columns,
    data
  })
  const deleteCell=(id,name)=>{
    
    if (window.confirm(`Confirm to delete Anime ${name}`) === true){
    axios.delete('/api/anime/'+id)
    .then(res=>{
      console.log(res);
      setDel(!del);
    })
    .catch(e=>{console.log(e)})
  }
  }
 useEffect(() => {
  axios.get('/api/anime')
    .then((res)=>{
        
        setData(res.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  

 }, [del])
 
  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableInstance


  return (
    <div>
      {data.length===0?<div className='table-body-message'>No table data</div>:
      <table {...getTableProps()}>
        <thead>
          {
            headerGroups.map((headerGroup)=>(
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map((column)=>(
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))
              }             
            </tr>
             ))
          }         
        </thead>
        <tbody {...getTableBodyProps()}>
          {
           
            rows.map(row =>{
              prepareRow(row)
              return(
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell)=>{
                      const id=row.values.anime_id;
                      return <td {...cell.getCellProps()}>{cell.render("Cell",{id:id,data:row.values,delete:deleteCell})}</td>
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>}
    </div>
  )
}

export default Table