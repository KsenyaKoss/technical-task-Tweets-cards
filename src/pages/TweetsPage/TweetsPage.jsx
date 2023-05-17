import { useEffect } from "react";
import TweetsList from "../../components/cardList/TweetsList";
import { StyledDiv } from "./StyledTweetsPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/operations";
import { selectUsers } from "../../redux/users/selectors";


const TweetsPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

  return (
    <StyledDiv>
      <TweetsList users={users} />
    </StyledDiv>
  );
};
export default TweetsPage;
