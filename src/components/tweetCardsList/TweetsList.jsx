import Tweet from "../tweetCard/Tweet"
import { StyledItem, StyledList } from "./StyledTweetsList"


const TweetsList = ({users})=>{
    return (
        <StyledList>
        {users.map(user=>
        <StyledItem key={user.id}>
            <Tweet user={user}/>
        </StyledItem>)}
        </StyledList>
    )
}

export default TweetsList