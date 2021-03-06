'use strict';

// **Weird...I don't think we changed the following. But his in the video is different, as newly inserted below...
// exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/jwt-auth-demo';
// exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/jwt-auth-demo';
exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  'mongodb://localhost/auth';

exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
