var pg = require('pg');

function get_category(connect_string, data_categories) {
  console.log('connect to db: ' + connect_string);
  //this initializes a connection pool
  //it will keep idle connections open for a (configurable) 30 seconds
  //and set a limit of 20 (also configurable)
  var data = '';
  pg.connect(connect_string, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('select title, id from radio_cats', function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      //console.log(result.rows);
      data_categories(result.rows);
    });
  });
  //console.log(data[0]);
  //return data;
}

/*function get_category(connect_string) {
  var client = new pg.Client(connect_string);
  client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows[0].theTime);
      //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
      client.end();
    });
});

}
*/



exports.get_category = get_category;


