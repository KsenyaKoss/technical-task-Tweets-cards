import { useEffect, useState } from "react";
import TweetsList from "../../components/cardList/TweetsList";
import { StyledDiv } from "./StyledTweetsPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/operations";
import { selectUsers } from "../../redux/users/selectors";
import Pagination from "../../components/pagination/Pagination";


const TweetsPage = () => {
    const[currentPage, setCurrentPage]=useState(1)
    const [usersPerPage] = useState(3);
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex -usersPerPage;
    const currentUsers = users.slice(firstUserIndex, lastUserIndex);

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])


    const handlePaginationClick = (i) =>{
         setCurrentPage(i)
    }

  return (
    <StyledDiv>
      <TweetsList users={currentUsers} />
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length}
      onClick={handlePaginationClick}/>
    </StyledDiv>
  );
};
export default TweetsPage;
