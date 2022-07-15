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
  roomType?: string;
}
