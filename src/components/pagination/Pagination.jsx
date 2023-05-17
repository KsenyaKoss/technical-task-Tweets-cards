import { StyledItem, StyledList } from "./StyledPagination";

const Pagination = ({usersPerPage, totalUsers, onClick}) => {
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);  
    }
    return (
           <StyledList>
           { pageNumbers.map(page=>(
            <StyledItem key={page} onClick={()=> onClick(page)}>{page}</StyledItem>
           ))}
           </StyledList>

    )
}

export default Pagination