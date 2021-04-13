import { combineReducers} from "redux";
import FetchReducers from "./FetchReducers";

export default combineReducers({
    movies: FetchReducers
})