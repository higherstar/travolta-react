import { IHotel, ISearchParam } from '../../interfaces';
import { HOTEL_ACTIONS } from '../action-types';

export interface HotelReducerState {
  hotels: IHotel[];
  searchParams: ISearchParam;
  loading: boolean;
}

const initialState: HotelReducerState = {
  hotels: [],
  searchParams: {},
  loading: false,
};

const hotelReducer = (state: HotelReducerState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case HOTEL_ACTIONS.GET_HOTEL_LIST_START:
      return {
        ...state,
        loading: true,
      };

    case HOTEL_ACTIONS.GET_HOTEL_LIST_ERROR:
      return {
        ...state,
        loading: false,
        hotels: [],
      };

    case HOTEL_ACTIONS.GET_HOTEL_LIST_SUCCESS:
      return {
        ...state,
        hotels: payload,
        loading: false,
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
