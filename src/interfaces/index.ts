export interface IHotel {
  name: string;
  price: number;
  country: string;
  city: string;
  availability: boolean;
  photo: string;
}

export interface ISearchParam {
  destination?: string;
  fromDate?: string;
  toDate?: string;
  roomType?: string;
}
