import React from 'react'

const MyPost = ({post}) => {
  return (
    <div>

        <div style={{borderTop:'1px solid grey',marginTop:'2vh',padding:'2vh 0vh',display:'flex',justifyContent:'center',gap:'5vh',textTransform:'uppercase'}}>
            <span>Posts</span>
            <span>Reels</span>
            <span>Saved</span>
            <span>Tagged</span>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'auto auto auto',columnGap:'2vh',rowGap:'1vh'}}>
      {post.map((ele)=>{
        return <img src={`${ele.postImages[0]}`} alt="" style={{width:'300px',height:'300px',objectFit:'cover'}}/>
      })}
        </div>
    </div>
  )
}

export default MyPost
