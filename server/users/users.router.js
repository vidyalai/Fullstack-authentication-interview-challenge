const express = require('express');
const { fetchDummyUsers } = require('./users.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await fetchDummyUsers();

  res.json(users);
});

module.exports = router;
