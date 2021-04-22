import { combineReducers} from "redux";
import SearchReducer from "./SearchReducer";
import WhatsPopularReducer from "./WhatsPopularReducer";
import GetTrendingReducer from "./GetTrendingReducers";

export default combineReducers({
    movies: SearchReducer,
    whatsPopular: WhatsPopularReducer,
    trendingList: GetTrendingReducer
})