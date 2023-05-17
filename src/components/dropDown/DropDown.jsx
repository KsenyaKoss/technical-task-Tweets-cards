import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "../../redux/filter/selectors";
import { setFilter } from "../../redux/filter/slice";
import { StyledOption, StyledSelector, StyledWrapper } from "./StyledDropDown";

const DropDown = () => { 
    const dispatch = useDispatch();
    const option = useSelector(selectFilter);

   const handleOnChangeOption = (ev) => {
     dispatch(setFilter(ev.target.value))
   }

    return (
        <StyledWrapper>
           <StyledSelector value={option} onChange={handleOnChangeOption}>
            <StyledOption value="show all">Show all</StyledOption>
            <StyledOption value="follow">Follow</StyledOption>
            <StyledOption value="following">Following</StyledOption>
            </StyledSelector> 
        </StyledWrapper>
    )
};

export default DropDown