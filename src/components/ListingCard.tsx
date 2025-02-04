import React from 'react';
import { ListingItem } from '../types/types';

interface ListingCardProps {
  listing: ListingItem;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const imageUrl = listing.userData.linkToPhotos || 'https://via.placeholder.com/300x200';
  return (
    <div className="listing-card">
      <img src={imageUrl} alt={listing.address.formattedAddress} />
      <h3>{listing.address.formattedAddress}</h3>
      <p>Price: ${listing.userData.askingPrice}</p>
      <p>Status: {listing.zillowData?.homeStatus}</p>
      <p>Bedrooms: {listing.zillowData?.bedrooms}</p>
      <p>Bathrooms: {listing.zillowData?.bathrooms}</p>
      <p>Year Built: {listing.zillowData?.yearBuilt}</p>
      <p>Lot Size: {listing.zillowData?.lotSize} sqft</p>
      <p>Zestimate: ${listing.zillowData?.zestimate}</p>
    </div>
  );
};

export default ListingCard;