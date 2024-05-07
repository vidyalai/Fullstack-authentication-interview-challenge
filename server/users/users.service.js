const axios = require('axios').default;

async function fetchDummyUsers() {
  const { data: users } = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  return users;
}

module.exports = { fetchDummyUsers };
