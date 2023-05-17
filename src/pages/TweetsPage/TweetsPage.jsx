import { useEffect, useState } from "react";
import TweetsList from "../../components/tweetCardsList/TweetsList";
import { StyledButton, StyledDiv, StyledWrapper } from "./StyledTweetsPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/users/operations";
import { selectIsLoading} from "../../redux/users/selectors";
import Pagination from "../../components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import DropDown from "../../components/dropDown/DropDown";
import { selectUsersByOption } from "../../redux/filter/selectors";

const TweetsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const users = useSelector(selectUsersByOption);
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handlePaginationClick = (i) => {
    setCurrentPage(i);
  };

  return (
    <StyledDiv>
      <StyledWrapper>
      <StyledButton onClick={() => navigate("/")}>
        Back to HomePage
      </StyledButton>
      <DropDown/>
      </StyledWrapper>
   
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <TweetsList users={currentUsers} />
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            onClick={handlePaginationClick}
          />
        </>
      )}
    </StyledDiv>
  );
};
export default TweetsPage;
