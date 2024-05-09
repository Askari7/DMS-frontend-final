import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ChangePersonalProfileImagePage =  () => {
  const [image,setImage] = useState(null)
  const [user, setUser] = useState(JSON.parse(localStorage?.getItem("user")));
  const [profile,setProfile] = useState(null)

  const getprofile = async ()=>{
  const getProfile = await axios.post(`http://54.81.250.98:8083/getProfile`,{companyId:user?.user.companyId,userId:user?.user.id},{
    headers:{
      Authorization: user?.accessToken,
    }
  }) 
  console.log(getProfile.data.msg.image,"logo");
  setProfile(getProfile.data.msg.image)
}

  const onSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("image",image)
    formData.append("companyId",user?.user?.companyId)
    formData.append("userId",user?.user.id)

    const logo = await axios.put(`http://54.81.250.98:8083/profile`,formData,{
      headers:{
        "Content-Type":"multipart/form-data",
        Authorization: user?.accessToken,
      }
    })
    await getprofile()
    console.log(logo.data,"result");
  }

  const onChange = (e)=>{
    console.log(e.target.files[0]);
    const file = (e.target.files[0]);
    
      setImage(file)
  }
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Change Profile Image</h2>
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

export default ChangePersonalProfileImagePage