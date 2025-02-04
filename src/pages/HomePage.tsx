import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListingsAsync } from '../features/listingsSlice';
import { AppDispatch, RootState } from '../store';
import ListingCard from '../components/ListingCard';
import SearchBar from '../components/SearchBar';
import SortControls from '../components/SortControls';
import { mapStatusFilter } from '../features/utils';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { listings } = useSelector((state: RootState) => state.listings);
  const {
    sortBy,
    statusFilter,
    searchQuery,
} = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(fetchListingsAsync());
  }, [dispatch]);

  const filteredListings = listings
    .filter((listing) =>
        listing.address?.formattedAddress?.toLowerCase().includes(searchQuery?.toLowerCase())
    )
    .filter((listing) =>
      statusFilter === 'all' ?
        true :
        listing.zillowData?.homeStatus === mapStatusFilter(statusFilter)
    )
    .sort((a, b) => {
        let dateA = a?.zillowData?.dateSold;
        let dateB = b?.zillowData?.dateSold;
        if (dateA === null || dateA === undefined) {
            dateA = `${Date.now()}`;
        }
        if (dateB === null || dateB === undefined) {
            dateB = `${Date.now()}`;
        }
        
        if (sortBy === 'newest') {
            return new Date(dateB).getTime() - new Date(dateA).getTime();
        }

        return new Date(dateA).getTime() - new Date(dateB).getTime();
    });

  return (
    <div className="listings-container">
        <h1>Homes for sale in Tampa</h1>
        <h4>{filteredListings.length} listings found — Listed on the MLS. Provided by Opendoor Brokerage.</h4>
        <SearchBar />
        <SortControls />
        <div className="listings-grid">
            {filteredListings.map((listing, index) => (
                <React.Fragment key={listing._id}>
                <ListingCard listing={listing} />
                {index === 1 && (
                    <div className="offer-banner">
                        Make your strongest offer when you buy with Opendoor
                    </div>
                )}
                </React.Fragment>
            ))}
        </div>
    </div>
  );
};

export default HomePage;