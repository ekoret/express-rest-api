# express-rest-api

---

### Learn
- Move routes into separate folders/files using Express.router.
- Try making a connection and using a MySQL database.


### Practice
- Make connection to a MongoDB database.
- Practice creating a database agnostic class (Facade Design Pattern). The class should work with any database that it's given.

---

#### To Do:

CORS whitelisting not working with localhost.\
Priority: **Low**
- May be an issue with browser.
- Try a proxy.


When hitting endpoint /api/users/[id], if params is "2adasdsds", it will still return the data for user 2. (Figure out why)\
Priority: **Medium**
- Maybe do a check of the params data type, length, or something before searching and retrieving the data.

