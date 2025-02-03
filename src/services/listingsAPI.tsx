import { config } from '../features/utils';
import { Listing } from '../types/types';

export const fetchListings = async (): Promise<Listing[]> => {
  const response = await fetch(config.API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch listings');
  }

  const data = await response.json();
  console.log('listings API. response:', data);

  if (Array.isArray(data)) {
    return data;
  } else if (data.listings && Array.isArray(data.listings)) {
    return data.listings;
  } else {
    throw new Error('Invalid API response format');
  }
};