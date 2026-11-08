import { useMemo, useState } from 'react';
import { countPrimes } from '../utils';

const MAX_LIMIT = 2000000;

const PrimesPlain = ({ limit }) => {
  console.warn('Calcolo primi SENZA useMemo');
  const total = countPrimes(limit);

  return <p>Senza useMemo: {total} numeri primi fino a {limit}</p>;
};

const PrimesMemo = ({ limit }) => {
  const total = useMemo(() => {
    console.warn('Calcolo primi CON useMemo');
    return countPrimes(limit);
  }, [limit]);

  return <p>Con useMemo: {total} numeri primi fino a {limit}</p>;
};

const PrimesDemo = () => {
  const [limit, setLimit] = useState(1000000);
  const [unrelatedCount, setUnrelatedCount] = useState(0);

  return (
    <section>
      <h2>useMemo: calcolo costoso</h2>
      <label>
        Limite:{' '}
        <input
          type="number"
          min="0"
          max={MAX_LIMIT}
          step="100000"
          value={limit}
          onChange={(e) => setLimit(Math.min(Number(e.target.value) || 0, MAX_LIMIT))}
        />
      </label>
      <button type="button" onClick={() => setUnrelatedCount((current) => current + 1)}>
        Stato non correlato: {unrelatedCount}
      </button>
      <PrimesPlain limit={limit} />
      <PrimesMemo limit={limit} />
    </section>
  );
};

export default PrimesDemo;
