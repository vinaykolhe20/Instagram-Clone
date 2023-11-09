import React from 'react'
import "../../Styles/header.css";
import SavedStatus from './SavedStatus';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
const Header = ({myInfo}) => {
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',marginTop:'10vh'}}>
            <div style={{display:'flex',justifyContent:'flex-start',gap:'10vh',marginLeft:'10vh'}}>
            
            <img style={{width:'23vh',height:'23vh',borderRadius:'50%',objectFit:"cover"}} src={`${myInfo.profilePic}`} />
            <div>
            <div>
                <div style={{height:'80px',display:'flex',gap:'20px',alignItems:'center'}}>
                    <span style={{fontSize:'22px'}}>{myInfo.username}</span>
                    <span class="profile_header_buttons">Edit Profile</span>
                    <span class="profile_header_buttons">View Archieve</span>
                    {/* NOt Done */}
                    <span><img src="https://www.flaticon.com/free-icon/settings_2099058" alt="" /></span>
                </div>  
            </div>
            <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
                <span>{myInfo.post} Posts</span>
                <span>{myInfo.followers} Followers</span>
                <span>{myInfo.following} Following</span>
            </div>
            <div style={{marginTop:"20px",marginLeft:'20px'}}>
                {myInfo.name}
            </div>
            <p style={{marginInlineStart:'20px'}}>
                {myInfo.Bio}
            </p>
            </div>
            
                
            </div>
            
            <SavedStatus savedStatus={myInfo.savedStatus}/>
    </div>
    
  )
}

export default Header
