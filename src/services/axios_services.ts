import axios from 'axios';

export const GET = async (api: string, params?: any, header?: any) => {
  return await axios.get(api, { headers: header });
};
