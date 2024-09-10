import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ChangeProfileImagePage =  () => {
  const [image,setImage] = useState(null)
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [logo,setLogo] = useState()
  const [profile,setProfile] = useState(null)

  
  const getprofile = async ()=>{
    
    const getProfile = await axios.post(`http://127.0.0.1:8083/getProfile`,{companyId:user?.user.companyId,userId:user?.user.id},{
      headers:{
        Authorization: user?.accessToken,
      }
    }) 
    console.log(getProfile.data.msg.image,"logo");
    setProfile(getProfile.data.msg.image)
  }
  useEffect(()=>{
    getprofile() 
  },[profile])

  const getLogo = async ()=>{
    
    const getLogo = await axios.post(`http://127.0.0.1:8083/getLogo`,{companyId:user?.user.companyId},{
      headers:{
        Authorization: user?.accessToken,
      }
    }) 
    // console.log(getLogo.data.msg.logo,"logo");
    setLogo(getLogo.data.msg.logo)
  }
  useEffect(()=>{
    getLogo() 
  },[logo])

  const onSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("image",image)
    formData.append("companyId",user?.user.companyId)
    console.log(formData,"formData");

    const logo = await axios.put(`http://127.0.0.1:8083/logo`,formData,{
      headers:{
        "Content-Type":"multipart/form-data",
        Authorization: user?.accessToken,
      }
    })
    console.log(logo,"logo response");
    
    // await getLogo()
    // console.log(logo.data,"result");
  }

  const onChange = (e)=>{
    console.log(e.target.files[0],"file");
      setImage(e.target.files[0])
  }
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Change Company Logo</h2>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <input type="file" name="image" id="image" accept="image/*" onChange={onChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default ChangeProfileImagePage