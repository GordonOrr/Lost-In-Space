const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'sid.shankar',
    email: 'sid.shanker@geemail.com',
    password: 'password123'
  },
  {
    username: 'allen.helton',
    email: 'allen.helton@geemail.com',
    password: 'password123'
  },
  {
    username: 'jennifer.fu',
    email: 'jennifer.fu@geemail.com',
    password: 'password123'
  },
  {
    username: 'mariia.kovalivska',
    email: 'mariia.kovalivska@geemail.com',
    password: 'password123'
  },
  {
    username: 'henri.ben.amor',
    email: 'henri.ben.amor@geemail.com',
    password: 'password123'
  },
  {
    username: 'christian.schuller',
    email: 'christian.schuller@geemail.com',
    password: 'password123'
  },
  {
    username: 'wenqi.glantz',
    email: 'wendi.glantz@geemail.com',
    password: 'password123'
  },
  {
    username: 'martin.heinz',
    email: 'martin.heinz@geemail.com',
    password: 'password123'
  },
  {
    username: 'noam.ephrat',
    email: 'noam.ephrat@geemail.com',
    password: 'password123'
  },
  {
    username: 'aiden.tilgner',
    email: 'aiden.tilgner@geemail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
