import { ListingItem } from "../types";

export const config = {
    API_URL: 'https://u2oyhiwlmc.execute-api.us-east-1.amazonaws.com/production/get-listings',
}

export const mapStatusFilter = (statusFilter: string): string => {
    switch (statusFilter) {
      case 'active':
        return 'FOR_SALE';
      case 'sold':
        return 'SOLD';
      case 'other':
        return 'OTHER';
      default:
        return '';
    }
};

export const unitsMocks = {
  mockListings: [
    {
      _id: '1',
      address: {
        formattedAddress: '123 Main St',
        location: [38.9023952, -121.0766068] as [number, number],
        googlePlaceId: 'ChIJHdlWeCsFm4ARyiKdZOH8Vaw',
        state: 'California',
        stateCode: 'CA',
        streetNumber: '123',
        route: 'Main St',
        locality: 'Auburn',
        county: 'Placer',
        zipcode: '95603',
        kind: 'house',
        friendlyUrl: '123-main-st-auburn-ca-95603',
      },
      userData: {
        askingPrice: 425000,
        foundationIssues: false,
        hoaFee: null,
        hoaPeriod: null,
        linkToPhotos: undefined,
        inspectionAvailability: [1, 2],
        updatedAskingPrice: [2, 3],
        wastewaterType: 'some',
      },
      zillowData: {
        yearBuilt: 1963,
        lotSize: 8015,
        zestimate: 521700,
        rentZestimate: 2918,
        livingAreaValue: 1956,
        homeType: 'SINGLE_FAMILY',
        bedrooms: 4,
        bathrooms: 2,
        homeStatus: 'FOR_SALE',
        hdpUrl: '/homedetails/123-Main-St-Auburn-CA-95603/17647025_zpid/',
        dateSold: '978912000000',
        schoolRating: 5,
        parkingSpaces: 0,
        hasPool: null,
        listing_sub_type: {
          is_FSBA: false,
          is_newHome: false,
          is_FSBO: false,
          is_pending: false,
          is_bankOwned: false,
          is_openHouse: false,
          is_forAuction: false,
          is_comingSoon: false,
          is_foreclosure: false
        },
        hoaFee: null
      },
    } as ListingItem,
  ],
}