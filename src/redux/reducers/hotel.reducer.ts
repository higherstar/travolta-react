import { IHotel, ISearchParam } from '../../interfaces';
import { HOTEL_ACTIONS } from '../action-types';

export interface HotelReducerState {
  hotels: IHotel[];
  searchParams: ISearchParam;
}

const initialState: HotelReducerState = {
  hotels: [],
  searchParams: {},
};

const hotelReducer = (state: HotelReducerState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case HOTEL_ACTIONS.GET_HOTEL_LIST:
      return {
        ...state,
        hotels: payload,
      };

    case HOTEL_ACTIONS.UPDATE_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: payload,
      };
    default:
      return state;
  }
};

export default hotelReducer;
