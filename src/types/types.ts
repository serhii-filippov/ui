export interface ListingItem {
  _id: string;
  address: Address;
  userData: UserData;
  zillowData: ZillowData;
}
export interface Listing {
    id: string;
    address: string;
    price: number;
    status: 'active' | 'sold';
    image: string;
    date: string;
  }
  
  export interface ListingsState {
    listings: ListingItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  export interface FiltersState {
    sortBy: 'newest' | 'oldest';
    statusFilter: 'all' | 'active' | 'sold' | 'other';
    searchQuery: string;
  }

  export interface Address {
    county: string;
    formattedAddress: string;
    friendlyUrl: string;
    googlePlaceId: string;
    kind: string;
    locality: string;
    location: [number, number];
    route: string;
    state: string;
    stateCode: string;
    streetNumber: string;
    zipcode: string;
  }

  export interface UserData {
    askingPrice: number;
    foundationIssues: boolean;
    hoaFee: number | null;
    hoaPeriod: string | null;
    inspectionAvailability: number[] | string[];
    linkToPhotos: string | undefined;
    updatedAskingPrice: number[];
    wastewaterType: string;
  }

  export interface ZillowData {
      yearBuilt: number;
      lotSize: number;
      zestimate: number;
      rentZestimate: number;
      livingAreaValue: number;
      homeType: string;
      bedrooms: number;
      bathrooms: null;
      homeStatus: 'FOR_SALE' | 'SOLD' | 'OTHER';
      hdpUrl: string;
      dateSold: string;
      listing_sub_type: {
          is_FSBA: boolean;
          is_newHome: boolean;
          is_FSBO: boolean;
          is_pending: boolean;
          is_bankOwned: boolean;
          is_openHouse: boolean;
          is_forAuction: boolean;
          is_comingSoon: boolean;
          is_foreclosure: boolean
      };
      hoaFee: number | null;
      schoolRating: number;
      parkingSpaces: number;
      hasPool: boolean | null;
  }