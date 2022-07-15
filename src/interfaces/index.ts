export interface IHotel {
  name: string;
  price: number;
  country: string;
  city: string;
  availability: boolean;
}

export interface ISearchParam {
  destination?: string;
  fromDate?: string;
  toDate?: string;
  room?: string;
}

export enum RoomType {
  OneAdultOneRoom = 'ONE_ADULT_ONE_ROOM',
  twoAdultsOneRoom = 'TWO_ADULTS_ONE_ROOM',
}