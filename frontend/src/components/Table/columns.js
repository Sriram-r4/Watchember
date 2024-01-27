import { dateConv } from "../dateConv";
import editColumn from "./editColumn";

export function getColumns(navigate){
   
    const COLUMNS =[
        {
            Header:"Id",
            accessor:"anime_id",
            Cell: (props) => {
                
                return (
                    <div>{parseInt(props.cell.row.id)+1}</div>
                )}
            
        },
        {
            Header:"Anime Name",
            accessor:"anime_name"
        },
        {
            Header:"Original Status",
            accessor:"original_status"
        },
        {
            Header:"Your Status",
            accessor:"your_status"
        },
        {
            Header:"Start Date",
            accessor:"startdate",
            Cell: (props) => {
                
                return (
                    <div>{dateConv(props.value)}</div>
                )}
        },
        {
            Header:"End Date",
            accessor:"Enddate",
            Cell: (props) => {
                
                return (
                    <div>{dateConv(props.value)}</div>
                )}
        },
        {
            Header:"Rating",
            accessor:"rating"
        },
        {
            Header:"Modify/Delete",
            accessor:"",
            Cell: (props) => {
                return (
                   <div className="table-icons">
                    <div onClick={()=>editColumn(props.data,navigate)}><i className="bi bi-pencil-square"></i></div>
                    <div onClick={()=>props.delete(props.id,props.data.anime_name)}><i className="bi bi-trash"></i>
                   </div>
                   </div>
                );
            }
        }
        
    ]
   return COLUMNS;    
} 
