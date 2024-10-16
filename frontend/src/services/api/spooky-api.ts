import axios from 'axios';

import { PUBLIC_API } from '@/constants/exports';

const spookyApi = axios.create({
  baseURL: `${PUBLIC_API}`,
});

export default spookyApi; 
