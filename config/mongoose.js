const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contact_db');
const db = mongoose.connection;
db.on('error', console.error.bind(console,'error connecting to db'));
db.once('open', function() {
  // we're connected!
  console.log('Successfully connected to mongodb');
});