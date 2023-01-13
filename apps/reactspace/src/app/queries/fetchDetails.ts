import { environment } from '../../environments/environment';

export const fetchDetails = async (id: number) => {
  const response = await fetch(`${environment.url}/details/${id}`);

  return response.json();
};
