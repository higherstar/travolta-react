import { GET } from './axios_services';
import { APIS } from '../utils/urls';

const getHotels = async (params: any, headerData: any) => {
  return await GET(
    `${APIS.getHotels}`,
    params,
    headerData
  );
};

export {
  getHotels,
};
