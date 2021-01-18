// ### Questions

// 1. What is responsible for defining the routes of the `games` resource?

// Answer: The create_router.js file under the helpers section inside the server folder.

// 2. What do you notice about the folder structure?  Whats the client responsible for? Whats the server responsible for?

// Answer: The server looks to me to be responsible for the storing of the games themselves via sending the info on to the database.
// I think this as we have the games_hub linking to the mongodb, along with our example games stored below. The client side looks to
// be responsible for the front end as it has our HTML stored along with the javascript code needed for an interactive front-end.
// Although I could be completely wrong.

// 3. What are the the responsibilities of server.js?

// Answer: To link the client, server and database in one page? 

// 4. What are the responsibilities of the `gamesRouter`?

// Answer: To find any games that you are looking for as well as to provide your 'CRUD' functionality.

// 5. What process does the the client (front-end) use to communicate with the server?

// Answer: Need to comeback to this.

// 6. What optional second argument does the `fetch` method take? And what is it used for in this application? Hint: See [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) on the MDN docs

// Answer: An init object, is it used for the delete functionality under the GamesService.js?

// 7. Which of the games API routes does the front-end application consume (i.e. make requests to)?

// Answer: No clue.

// 8. What are we using the [MongoDB Driver](http://mongodb.github.io/node-mongodb-native/) for?

// Answer: For both call-back based and promise based interaction? Unlike SQL which was relational Mongodb is non-relational.

// ## Extension

// Why do we need to use [`ObjectId`](https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html) from the MongoDB driver?

// Answer: MongoDB supports multiple indexes on a single collection, you can query on many different fields, not just the "key" or "id", so you need an ObjectId?

// Add to your diagram the dataflow for removing a game.

// Answer:
