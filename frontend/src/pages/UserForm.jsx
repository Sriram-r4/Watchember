import React, { useEffect, useState } from 'react'
import BasicFormDetails from '../components/Form/BasicFormDetails'
import StatusForm from '../components/Form/StatusForm'
import DateForm from '../components/Form/DateForm'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './UserForm.css'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


function UserForm() {
    const titles = ["Basic Details", "Status", "Date"]
     const getState=useLocation();
     const update=getState.state.update;
     const navigate=useNavigate();
     const udata=getState.state.data;
     const anime_id=getState.state.id;
    const [page, setPage] = useState(0);
    const [data, setData] = useState(
        {
            // id: 0,
            anime_name: "",
            rating: 1.0,
            original_status: "",
            your_status: "",
            startdate: "",
            Enddate: ""
        }
    )
   
    useEffect(()=>{
        if(udata!=null){
          setData(udata)
        }
    },[])
   
    const PageDisplay = () => {
        if (page === 0) return <BasicFormDetails data={data} setData={setData} />
        else if (page === 1) return <StatusForm data={data} setData={setData} />
        else return <DateForm data={data} setData={setData} />
    }
    const handleUpdate=(e)=>{
        const {anime_name,rating,original_status,your_status,startdate,Enddate} = data;
        e.preventDefault();
        console.log(data);

        axios.patch('/api/anime/'+anime_id,{
            anime_id,
            anime_name,
            rating,
            original_status,
            your_status,
            startdate,
            Enddate
            })
            .then(res=>console.log(res))
            .catch(e=>{console.log(e)});
            setData( {
                anime_name: "",
                rating: 1.0,
                original_status: "",
                your_status: "",
                startdate: "",
                Enddate: ""
            })
    }
    const handleSubmit=async (e)=>{
        const {anime_name,rating,original_status,your_status,startdate,Enddate} = data;
        e.preventDefault();
        console.log(data);
        try{
            await axios.post("/api/anime",{
                anime_name,
                rating,
                original_status,
                your_status,
                startdate,
                Enddate
            })
            setData( {
                anime_name: "",
                rating: 1.0,
                original_status: "",
                your_status: "",
                startdate: "",
                Enddate: ""
            })
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <Header />
            <div className='userform-page-container'>
                <div className='userform-page-title-container'>
                    <div className='userform-page-title'>Enter <span className='title-color'>&nbsp;Details</span></div>
                    <div className='userform-page-title-desc'>Fill the form below to store your details. Click the submit button to create a new data.
                        The information you post is viewable only by you.</div>
                </div>
                <div className='userform-page-body-container'>
                    <div className='userform-page-form-container'>
                        <div className='form-body'>
                            <div className='form-element-title'>{titles[page]}</div>
                            <div>{PageDisplay()}</div>
                            <div className='form-group'>
                                <button onClick={(e) => {
                                    if (page === titles.length - 1) {
                                        console.log(data);
                                        if(data && data.anime_name  && data.rating &&
                                        data.original_status && data.your_status
                                        && data.startdate && data.Enddate){
                                        alert("Form Submitted");
                                        if(update){
                                            handleUpdate(e)
                                        }
                                        else{
                                            handleSubmit(e)
                                        }
                                        localStorage.setItem("data", JSON.stringify(data));
                                        navigate("/anime")
                                    }
                                    else{
                                        alert("Please fill out the form!")
                                    }
                                    }
                                    else {
                                        setPage((curPage) => curPage + 1)
                                    }
                                }}
                                   
                                    name='next'
                                    className='form-element-button'
                                    id='next'
                                   >{
                                        (page === titles.length - 1) ? update? "Update":"Submit" : "Next"
                                    }</button>

                                <input
                                    disabled={page === 0}
                                    onClick={() => {
                                        setPage((curPage) => curPage - 1)
                                    }}
                                    type='button'
                                    name='prev'
                                    className='form-element-button'
                                    id='prev'
                                    value={"Previous"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserForm