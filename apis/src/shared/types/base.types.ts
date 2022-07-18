export interface IHotel {
  id: number;
  name: string;
  price: number;
  country: string;
  city: string;
  availability: boolean;
  roomType: RoomType;
  from: string;
  to: string;
}

export interface IFilterParams {
  destination: string;
  fromDate: string;
  toDate: string;
  roomType: RoomType | 'ALL' ;
}

export enum RoomType {
  oneRoom = 'ONE_ROOM',
  oneAdultsOneRoom = 'ONE_ADULTS_ONE_ROOM',
  twoAdultsOneRoom = 'TWO_ADULTS_ONE_ROOM',
}