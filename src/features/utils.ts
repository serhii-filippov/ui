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