import { StyledContainer, StyledLink, StyledTitle } from "./StyledHomePage";

const HomePage = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        Tweet me if you wish <br />
        App{" "}
      </StyledTitle>
      <StyledLink to="/tweets">To Tweets</StyledLink>
    </StyledContainer>
  );
};

export default HomePage;
