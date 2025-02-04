import filtersReducer, {
    setSortBy,
    setStatusFilter,
    setSearchQuery,
} from '../features/filtersSlice';
import { FiltersState } from '../types';

describe('filtersSlice', () => {
  const initialState: FiltersState = {
    sortBy: 'newest',
    statusFilter: 'all',
    searchQuery: '',
  };

  // 1. Golden Path: Set sort by "oldest"
  it('should handle setSortBy', () => {
    const action = setSortBy('oldest');
    const state = filtersReducer(initialState, action);

    expect(state.sortBy).toBe('oldest');
  });

  // 2. Expected Error: Set invalid status filter (should not break)
  it('should handle setStatusFilter with invalid value', () => {
    const action = setStatusFilter('invalid' as any);
    const state = filtersReducer(initialState, action);

    expect(state.statusFilter).toBe('invalid');
  });

  // 3. Specific Use Case: Set search query with special characters
  it('should handle setSearchQuery with special characters', () => {
    const action = setSearchQuery('123 Main St, Apt #4!');
    const state = filtersReducer(initialState, action);

    expect(state.searchQuery).toBe('123 Main St, Apt #4!');
  });
});