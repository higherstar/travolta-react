import { ThunkDispatch } from 'redux-thunk';

import { HOTEL_ACTIONS } from '../action-types';
import { ISearchParam } from '../../interfaces';
import { ApiTypes } from '../../utils/apiTypes';
import { RootState } from '../store';

export const getHotels = (params: ISearchParam) =>
  async (
    dispatch: ThunkDispatch<any, any, any>,
    getState: RootState,
    api: ApiTypes
  ) => {
    const getPromise = async () => {
      dispatch({
        type: HOTEL_ACTIONS.GET_HOTEL_LIST_PENDING,
      });

      try {
        const res = await api.getHotels(params);
        return res.data;
      } catch (e) {
        dispatch({
          type: HOTEL_ACTIONS.GET_HOTEL_LIST_REJECTED,
        });
      }
    }

    return dispatch({
      type: HOTEL_ACTIONS.GET_HOTEL_LIST,
      payload: getPromise()
    });
  };

export const updateSearchParams =
  (param: any) => (dispatch: ThunkDispatch<any, any, any>) => {
    return dispatch({
      type: HOTEL_ACTIONS.UPDATE_SEARCH_PARAMS,
      payload: param,
    });
  };