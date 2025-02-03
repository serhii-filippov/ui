import React from 'react';
import { Listing } from '../types/types';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="listing-card">
      <img src={listing.image} alt={listing.address} />
      <h3>{listing.address}</h3>
      <p>Status: {listing.status}</p>
      <p>Price: ${listing.price}</p>
    </div>
  );
};

export default ListingCard;