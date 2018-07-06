const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b3fa29df640af60e113b941')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b3e5ff75d4a0d15ff2223b0')
  }, {
    $inc: { age: -1},
    $set: {
      name: 'Mike'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // client.close();
});