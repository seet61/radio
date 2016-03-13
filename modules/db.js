var pg = require('pg');

function get_category(connect_string, categories) {
  //console.log('connect to db: ' + connect_string);
  //this initializes a connection pool
  //it will keep idle connections open for a (configurable) 30 seconds
  //and set a limit of 20 (also configurable)
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
      categories(result.rows);
    });
  });
}

function get_countries(connect_string, countries) {
  //this initializes a connection pool
  //it will keep idle connections open for a (configurable) 30 seconds
  //and set a limit of 20 (also configurable)
  pg.connect(connect_string, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('select code2, rus_name from country_codes where radio_stream = true', function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      //console.log(result.rows);
      countries(result.rows);
    });
  });
}

function get_streams(connect_string, cid, country_code, stations) {
  //this initializes a connection pool
  //it will keep idle connections open for a (configurable) 30 seconds
  //and set a limit of 20 (also configurable)
  if (country_code == undefined) {
    query = 'select title, country, url, img from radio_streams where cid = ' + cid
        + ' order by country, title';
  } else {
    query = 'select title, country, url, img from radio_streams where cid = ' + cid
        + ' and lower(country) = lower(\'' + country_code + '\')' + ' order by country, title';
  };
  //console.log('query ' + query);
  pg.connect(connect_string, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query(query, function(err, result) {
      //call `done()` to release the client back to the pool
      done();

      if(err) {
        return console.error('error running query', err);
      }
      //console.log(result.rows);
      stations(result.rows);
    });
  });
}

exports.get_category = get_category;
exports.get_countries = get_countries;
exports.get_streams = get_streams;
