import { createStore, combineReducers } from 'redux';
import authorReducer from '../pages/LoginPage/authorReducer';
import dashboardReducer from '../pages/Dashboard/reducer';
import analysBrowserReducer from '../pages/Analystic/AnalysBrowser/reducer';
import analysCountryReducer from '../pages/Analystic/AnalysCountry/reducer';
import eventsAddToCartReducer from '../pages/MintyEvents/EventsAddToCard/reducer';
import eventsCheckOutReducer from '../pages/MintyEvents/EventsCheckOut/reducer';
import eventCheckOutSuccessReducer from '../pages/MintyEvents/EventsCOS/reducer';

const reducers = combineReducers({
    authorState: authorReducer,
    dashboardState: dashboardReducer,
    analysBrowserState: analysBrowserReducer,
    analysCountryState: analysCountryReducer,
    analysVisitorState: analysVisitorReducer,
    eventsAddToCardState: eventsAddToCartReducer,
    eventsCheckOutState: eventsCheckOutReducer,
    eventsCOSState: eventCheckOutSuccessReducer
});

export default createStore(reducers);
