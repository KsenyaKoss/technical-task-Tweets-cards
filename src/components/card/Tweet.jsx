
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
    const newUser =  {...user, isSubscribed: !user.isSubscribed, }
    console.log(newUser);
     dispatch(updateUser(user.id))
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
        src={require("../../assets/images/avatar/Boy_desk@1x.png")}
        alt="avatar"
      />

      <div>
        <StyledP>{user.tweets} TWEETS</StyledP>
        <StyledP>{formatFollowersWithComma(user.followers)} FOLLOWERS</StyledP>
        <StyledButton onClick={()=>handleSubscribe(user)}> Follow
        </StyledButton>
      </div>
    </StyledTweet>
  );
};

export default Tweet;

// {!subscribed? 'Follow' : 'Following'}
