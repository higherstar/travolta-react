import { ThunkDispatch } from 'redux-thunk';
import { HOTEL_ACTIONS } from '../action-types';


export const searchHotels =
  (param: any) => (dispatch: ThunkDispatch<any, any, any>) => {
    return dispatch({
      type: HOTEL_ACTIONS.GET_HOTEL_LIST,
      payload: param,
    });
  };

export const updateSearchParams =
  (param: any) => (dispatch: ThunkDispatch<any, any, any>) => {
    return dispatch({
      type: HOTEL_ACTIONS.UPDATE_SEARCH_PARAMS,
      payload: param,
    });
  };