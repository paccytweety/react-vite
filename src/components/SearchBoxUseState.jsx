import { useState } from 'react';

const SearchBoxUseState = ({ onSearch }) => {
  const [value, setValue] = useState('');
  // console.warn('render component SearchBoxUseState')

  const handleChange = (e) => {
    // console.warn('Previous value:', value, 'New value:', e.target.value);
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSearch = () => {
    // console.warn('Searching with value:', value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca useMemo"
        onChange={handleChange}
        value={value}
      />
      <button type="button" onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default SearchBoxUseState;