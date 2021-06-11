# Task 4

We have an API for address management

An address consists of the following fields:
id: number
firstname: string
lastname: string
email: string

1. Write a service that maintains all addresses (create, update, delete, read)
   it should work asynchronous (with promises)
   Hint: start with read and delete

   Delte Route: DELETE /address/1 => app.delete('/address/:id', (req, res) => req.params.id)

   for update and create: http://expressjs.com/de/api.html#express.json

2. Create an Express Router for the address management

```
const router = express.Router()
router.get...
app.use('/address', router);
```

3. extract the request handling function into a seprate "controller"

4. wire the controller and the service together
