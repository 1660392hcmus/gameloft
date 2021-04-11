import React from "react";
import SocialCard from './SocialCard';
import socialPost from '../assets/images/social-post.png';

const Posts = ({ postsToRender, component }) => { 
  return(
    <> 
      {postsToRender.map((post, index) => (
        <SocialCard src={socialPost} style={{ width: 100 }}></SocialCard>
      ))}
    </>
  )
  
};
export default Posts;