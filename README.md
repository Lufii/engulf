Front end for a basic CRUD project, designed for handling  small warehouse stock.

Create - creates a product with the specified values for each field. Product name must be unique, otherwise it will return an error.

Search - returns the product details, or an error if the product is not found.

Update - updates the product with the newly introduced values. If values are omitted, they will be erased in the DB, so double check. If the product is not found, it will return an error.

Delete - deletes the specified product or returns an error if it is not found.

For a local copy:

"npm install"

"npm start"
