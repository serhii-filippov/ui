import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, setStatusFilter } from '../features/filtersSlice';
import { RootState } from '../store';

const SortControls: React.FC = () => {
  const dispatch = useDispatch();
  const { sortBy, statusFilter } = useSelector((state: RootState) => state.filters);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortBy(e.target.value as 'newest' | 'oldest'));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setStatusFilter(e.target.value as 'all' | 'active' | 'sold'));
  };

  return (
    <div className="sort-controls">
      <label>
        Sort by:
        <select value={sortBy} onChange={handleSortChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </label>

      <label>
        Filter by status:
        <select value={statusFilter} onChange={handleStatusChange}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="sold">Sold</option>
        </select>
      </label>
    </div>
  );
};

export default SortControls;