import { config } from '../features/utils';
import { ListingItem } from '../types/types';

export const fetchListings = async (): Promise<ListingItem[]> => {
  const response = await fetch(config.API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch listings');
  }
  const data = await response.json();

  if (data.deals && Array.isArray(data.deals)) {
    return data.deals as ListingItem[];
  } else {
    throw new Error('Invalid API response format');
  }
};