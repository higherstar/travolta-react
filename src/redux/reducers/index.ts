import { combineReducers } from 'redux';

import hotelReducer, { HotelReducerState } from './hotel.reducer';

export interface RootState {
  hotelReducer: HotelReducerState
}

const rootReducer = combineReducers<RootState>({
  hotelReducer,
});

export default rootReducer;
