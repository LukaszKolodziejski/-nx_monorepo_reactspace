import { environment } from '../../environments/environment';

export const fetchList = async () => {
  const response = await fetch(`${environment.url}/list`);

  return response.json();
};
