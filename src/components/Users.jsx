
import { useState } from 'react';
import { flattenObject, getLastObjectKey } from '../utils';
// import SearchBoxuseRef from './SearchBoxuseRef';
import SearchBoxUseMemo from './SearchBoxUseMemo';

const Users = (props) => {
  const { userList } = props;
  const [query, setQuery] = useState('');
  
  const searchTerms = query.trim().toLowerCase().split(/\s+/)
  console.warn('Search terms:', searchTerms);
  const filteredUsers = userList.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    
    // Usare every se la ricerca deve includere entrambe le parole chiave
    // Esempio se esiste Mario Rossi e cerco "Mario Verdi" la ricerca mi dice
    // che non ci sono risultati perche sia nome che cognome devono corrispondere
    //return searchTerms.every((term) => fullName.includes(term));
    
    // Usare some invece sa basta che almeno una parola chiave corrisponda
    // Esempio se esiste Mario Rossi e cerco "Mario Verdi" la ricerca mi dice
    // che ci sono risultati perche il nome esiste
    return searchTerms.some((term) => fullName.includes(term));
  });
  const flattenedUsers = filteredUsers.map((user) => flattenObject(user));
  const tableColumnKeys = Object.keys(flattenedUsers[0] ?? {});
  const addressColumnKeys = tableColumnKeys
    .filter((key) => key.startsWith('address.'));

  return(
    <>
      {/* <SearchBoxuseRef onSearch={setQuery} /> */}
      <SearchBoxUseMemo onSearch={setQuery} />
      <ul>
        {filteredUsers.map((user) => {
          return <li key={user.id}>{user.firstName}, {user.id}</li>
        })
        }
      </ul>
      {query && filteredUsers.length === 0 ? <p>Nessun risultato</p> : null}

      {flattenedUsers && flattenedUsers.length > 0 ? (
        <table>
          <thead>
            <tr>
              {addressColumnKeys.map((key) => (
                <th key={key}>{getLastObjectKey(key)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {flattenedUsers.map((user) => (
              <tr key={user.id}>
                {addressColumnKeys.map((key) => (
                  <td key={key}>{user[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
     </>
  )
}

export default Users