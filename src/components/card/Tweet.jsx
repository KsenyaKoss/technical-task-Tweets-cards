import { StyledAvatarImg, StyledButton, StyledHeroImg, StyledP, StyledTweet } from "./StyledTweet";

const Tweet = ({user}) => {
  return (
    <StyledTweet>
        <div>
        <img
          src={require("../../assets/images/logo/Logo_desk@1x.png")}
          alt="logo"
        />
        <StyledHeroImg
          src={require("../../assets/images/hero/picture2 1_desk@1x.png")}
          alt="hero"
        />
        </div>
        
     
           <StyledAvatarImg src={require('../../assets/images/avatar/Boy_desk@1x.png')} alt="avatar" />
      
     <div>
     <StyledP>{user.tweets} TWEETS</StyledP>
        <StyledP>{user.followers} FOLLOWERS</StyledP>
        <StyledButton >Follow</StyledButton>
     </div>
      
     
    </StyledTweet>
  );
};

export default Tweet;

// {!subscribed? 'Follow' : 'Following'}