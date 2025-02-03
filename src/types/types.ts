export interface Listing {
    id: string;
    address: string;
    price: number;
    status: 'active' | 'sold';
    image: string;
    date: string;
  }
  
  export interface ListingsState {
    listings: Listing[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  export interface FiltersState {
    sortBy: 'newest' | 'oldest';
    statusFilter: 'all' | 'active' | 'sold';
    searchQuery: string;
  }