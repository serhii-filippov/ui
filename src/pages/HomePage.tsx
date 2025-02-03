import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListingsAsync } from '../features/listingsSlice';
import { setSortBy, setStatusFilter } from '../features/filtersSlice';
import { AppDispatch, RootState } from '../store';
import ListingCard from '../components/ListingCard';
import SearchBar from '../components/SearchBar';
import SortControls from '../components/SortControls';

const HomePage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { listings, status } = useSelector((state: RootState) => state.listings);
  const { sortBy, statusFilter, searchQuery } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    dispatch(fetchListingsAsync());
  }, [dispatch]);

  const filteredListings = listings
    .filter((listing) =>
      listing.address.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((listing) =>
      statusFilter === 'all' ? true : listing.status === statusFilter
    )
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  return (
    <div>
      <SearchBar />
      <SortControls />
      <div className="listings-grid">
        {filteredListings.map((listing, index) => (
          <React.Fragment key={listing.id}>
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