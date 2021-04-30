import { combineReducers} from "redux";
import SearchReducer from "./SearchReducer";
import WhatsPopularReducer from "./WhatsPopularReducer";
import GetTrendingReducer from "./GetTrendingReducers";
import GetPeopleReducer from './GetPeopleReducer'

export default combineReducers({
    movies: SearchReducer,
    whatsPopular: WhatsPopularReducer,
    trendingList: GetTrendingReducer,
    getPopularPeople: GetPeopleReducer,
})