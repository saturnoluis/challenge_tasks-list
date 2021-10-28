const BASE_URL = 'http://localhost:2700';

export const getTasks = (limit) => {
  const quantity = limit ? `/${limit}` : '';
  
  return fetch(`${BASE_URL}/tasks${quantity}`)
    .then((response) => response.json());
};