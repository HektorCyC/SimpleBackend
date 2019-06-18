# SimpleBackend
Boilerplate for NodeJS, ExpressJS, MongoDB with Mongoose Application.


Methods:

**GET**
Endpoint:  https://tratodemo.herokuapp.com/api
Description: List all the items stored at the collection

**GET Id Especifico**
Endpoint:  https://tratodemo.herokuapp.com/api/<ID>
Description: List a specific item that match the given ID.

**POST**
Endpoint:  https://tratodemo.herokuapp.com/api
Description: Add a new item to the collection.
Body: 
`{
	"user": "Hector",
	"postBody": "Note body"
}`

**PUT**
Endpoint:  https://tratodemo.herokuapp.com/api/<ID> 
Description: Uptade a specific item at the collection.
Body: 
`{
	"user": "Hector",
	"postBody": "New Note body"
}`

**DELETE**
Endpoint:  https://tratodemo.herokuapp.com/api/<ID> 
Description: Delete the item that match the given ID.
