import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
import { HOTELS } from '../shared/constants/global.constants';
import { IFilterParams, IHotel } from '../shared/types/base.types';

export class HotelController {
  constructor() {}

  public list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query: IFilterParams = req.query;
      let hotels = HOTELS;

      if (query.destination) {
        hotels = hotels.filter((hotel: IHotel) => {
          return query.destination.includes(hotel.country) || query.destination.includes(hotel.city);
        });
      }

      if (query.fromDate) {
        hotels = hotels.filter((hotel: IHotel) => {
          return moment(hotel.from).isBefore(moment(query.fromDate));
        });
      }

      if (query.toDate) {
        hotels = hotels.filter((hotel: IHotel) => {
          return moment(hotel.to).isAfter(moment(query.toDate));
        });
      }

      if (query.roomType !== 'ALL' && query.roomType) {
        hotels = hotels.filter((hotel: IHotel) => {
          return hotel.roomType === query.roomType;
        });
      }

      res.json(hotels);
    } catch (err) {
      next(err);
    }
  };
}

export const hotelController = new HotelController();

