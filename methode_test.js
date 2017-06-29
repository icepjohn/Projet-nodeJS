var fs = require('fs');

fs.open('mynewfile2.txt', 'this is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});