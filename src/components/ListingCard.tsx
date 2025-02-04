import React, { useState } from 'react';
import { ListingItem } from '../types/types';

interface ListingCardProps {
  listing: ListingItem;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="listing-card">
      <div className="card-header">
        <div className="badge">Opendoor</div>
        <button className="like-button" onClick={toggleLike}>
          {isLiked ? '❤️' : '🤍'}
        </button>
      </div>
      <img src={listing.userData.linkToPhotos || 'https://dummyimage.com/300x200/006df2/fb00ff.png&text=any+test+text'} alt={listing.address.formattedAddress} />
      <div className="card-body">
        <h3>${`${listing.userData.askingPrice}`}</h3>
        <p>{listing.address.formattedAddress}</p>
        <p>Beds: {listing.zillowData?.bedrooms} | Baths: {listing.zillowData?.bathrooms} | sqft: {listing.zillowData?.livingAreaValue}</p>
      </div>
    </div>
  );
};

export default ListingCard;