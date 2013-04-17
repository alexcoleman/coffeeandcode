function set(name, value) {
  if (!(name in process.env)) {
    process.env[name] = value;
  }
}


// ---------------------- //
// --  Server Settings -- //
// ---------------------- //

Instagram = require('instagram-node-lib');

Instagram.set('client_id', '4395b59adbcb4f84a3b21de1ee7ee7c2');
Instagram.set('client_secret', '809ae16348bc486788403297860dc9c0');

set('NODE_ENV', 'development');

// The port for the HTTP server to listen on
set('PORT', 9000);

// HTTP
set('HTTP_DOMAIN', null);