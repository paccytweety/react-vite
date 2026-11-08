
import { useState } from 'react';
import { flattenObject, getLastObjectKey } from '../utils';
import SearchBox from './SearchBox';

const Users = (props) => {
  const { userList } = props;
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const filteredUsers = userList.filter((user) =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(normalizedQuery)
  );
  const flattenedUsers = filteredUsers.map((user) => flattenObject(user));
  const tableColumnKeys = Object.keys(flattenedUsers[0] ?? {});
  const addressColumnKeys = tableColumnKeys
    .filter((key) => key.startsWith('address.'));

  return(
    <>
      <SearchBox onSearch={setQuery} />
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