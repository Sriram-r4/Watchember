


function editColumn(data,navigate) {
   const {anime_id,anime_name,rating,original_status,your_status,startdate,Enddate}=data;

   const udata={
    anime_id,
    anime_name,
    rating,
    original_status,
    your_status,
    startdate,
    Enddate
   }
        console.log(udata);
           navigate("/userform",{state:{update:true,id:anime_id,data:udata}})
}

export default editColumn