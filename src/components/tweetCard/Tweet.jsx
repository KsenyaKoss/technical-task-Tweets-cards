import {
  StyledAvatarImg,
  StyledButton,
  StyledHeroImg,
  StyledP,
  StyledTweet,
} from "./StyledTweet";
import { useDispatch} from "react-redux";
import { updateUser } from "../../redux/users/operations";



const Tweet = ({ user }) => { 
  const dispatch = useDispatch();
  const formatFollowersWithComma = (number) =>
    number.toLocaleString().replace(" ", ",");

  const handleSubscribe = (user) => {
    const newUser =  {...user,
       isSubscribe: !user.isSubscribe,
       followers: user.isSubscribe? user.followers - 1 : user.followers + 1 }
     dispatch(updateUser(newUser))
  };

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

    <StyledAvatarImg
      src={`${user.avatar}`}
      alt="avatar"
    />

    <div>
      <StyledP>{user.tweets} TWEETS</StyledP>
      <StyledP>{formatFollowersWithComma(user.followers)} FOLLOWERS</StyledP>
      <StyledButton onClick={()=>handleSubscribe(user)} 
      subscribed={user.isSubscribe}> {!user.subscribed? 'Follow' : 'Following'}
      </StyledButton>
    </div>
  </StyledTweet> 
  )
};

export default Tweet;
