import { ISearchParam } from '../interfaces';

export interface ApiTypes {
  getHotels: (params: ISearchParam) => any;
}
