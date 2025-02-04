import { render, screen } from '@testing-library/react';
import ListingCard from '../components/ListingCard';
import { unitsMocks } from '../features/utils';

describe.skip('ListingCard', () => {
    const mockListing = unitsMocks.mockListings[0];

  // 1. Golden Path: Render listing card with all details
  it('should render listing card with all details', () => {
    render(<ListingCard listing={mockListing} />);

    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('$425,000')).toBeInTheDocument();
    expect(screen.getByText('Beds: 4 | Baths: 2 | sqft: 1956')).toBeInTheDocument();
  });

  // 2. Expected Error: Render fallback image when linkToPhotos is missing
  it('should render fallback image when linkToPhotos is missing', () => {
    const listingWithoutImage = { ...mockListing, userData: { ...mockListing.userData, linkToPhotos: undefined } };
    render(<ListingCard listing={listingWithoutImage} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://dummyimage.com/300x200/006df2/fb00ff.png&text=any+test+text');
  });

  // 3. Specific Use Case: Toggle like button
  it('should toggle like button', () => {
    render(<ListingCard listing={mockListing} />);

    const likeButton = screen.getByRole('button', { name: /🤍/ });
    likeButton.click();

    expect(screen.getByText('❤️')).toBeInTheDocument();
  });
});