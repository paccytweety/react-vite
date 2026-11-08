import { useRef } from 'react';
// usato useRef per tenere traccia del valore precedente dell'input
// e per forzare il focus dopo la pulizia dell'input per accessibilità
// In alternativa si poteva anche usare useState e un inpunt controllato
// const [value, setValue] = useState('')

const SearchBox = ({ onSearch }) => {
  const inputRef = useRef(null);
  const previousValue = useRef('');
console.warn('SearchBox rendered');
  const handleChange = (e) => {
    const newValue = e.target.value;
    console.warn('Previous value:', previousValue.current, 'New value:', newValue);
    previousValue.current = newValue;
    onSearch(newValue);
  };

  const handleClear = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
    previousValue.current = '';
    onSearch('');
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Cerca per nome"
        onChange={handleChange}
      />
      <button type="button" onClick={handleClear}>Pulisci</button>
      {}
    </div>
  );
};

export default SearchBox;
