import { IHotel, RoomType } from '../types/base.types';

export const HOTELS: IHotel[] = [
  {
    id: 1,
    name: 'Hotel A',
    price: 1200,
    country: 'Germany',
    city: 'Berlin',
    availability: true,
    roomType: RoomType.oneAdultsOneRoom,
    from: '2022-01-01',
    to: '2022-12-31',
  },
  {
    id: 2,
    name: 'Hotel B',
    price: 800,
    country: 'Italy',
    city: 'Rome',
    availability: false,
    roomType: RoomType.oneRoom,
    from: '2022-01-01',
    to: '2022-12-31',
  },
  {
    id: 3,
    name: 'Hotel C',
    price: 700,
    country: 'Italy',
    city: 'Rome',
    availability: false,
    roomType: RoomType.twoAdultsOneRoom,
    from: '2022-01-01',
    to: '2022-12-31',
  },
  {
    id: 4,
    name: 'Hotel D',
    price: 1100,
    country: 'Germany',
    city: 'Berlin',
    availability: true,
    roomType: RoomType.twoAdultsOneRoom,
    from: '2022-01-01',
    to: '2022-12-31',
  },
  {
    id: 5,
    name: 'Hotel E',
    price: 200,
    country: 'Germany',
    city: 'Berlin',
    availability: true,
    roomType: RoomType.twoAdultsOneRoom,
    from: '2022-01-01',
    to: '2022-12-31',
  },
  {
    id: 6,
    name: 'Hotel F',
    price: 1000,
    country: 'Germany',
    city: 'Berlin',
    availability: true,
    roomType: RoomType.oneRoom,
    from: '2022-01-01',
    to: '2022-12-31',
  },
  {
    id: 7,
    name: 'Hotel G',
    price: 550,
    country: 'Germany',
    city: 'Berlin',
    availability: true,
    roomType: RoomType.oneAdultsOneRoom,
    from: '2022-01-01',
    to: '2022-12-31',
  },
];