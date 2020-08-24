require('dotenv').config(); // to be able to access the process.env

module.exports = {
  "development": {
    "username": process.env.MY_SQL_USER,
    "password": process.env.MY_SQL_PASSWORD,
    "database": "stella_vybz_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.JAWSDB_USER,
    "password": process.env.JAWSDB_PASS,
    "database": process.env.JAWSDB_DB,
    "host": process.env.JAWSDB_HOST,
    "dialect": "mysql"
  },
};