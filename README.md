# back-ecomprojone

# CORE PARTS OF EXPRESS
========================
# MIDDLEWARE
The idea is pretty simple: rather than one monolithic request handler 
function, you call several request handler functions that each deal 
with a small chunk of the work.

# ROUTING
Like middleware, it breaks the one monolithic request handler function 
into smaller pieces. Unlike middleware, these request handlers are 
executed conditionally, depending on what URL and HTTP method a client 
sends.

# SUBAPPLICATIONS
Express applications can often be pretty small, even fitting in just one
file. As your applications get larger, though, you’ll want to break them up
into multiple folders and files.
ex. routers
compartmentalize your app into smaller pieces.

# Mongoose
=============== 
is a MongoDB object modeling tool that provides a schema-based solution to model application data. It includes built-in type casting, validation, query building, and business logic hooks. Using Mongoose with this backend stack provides a higher layer over MongoDB with more functionality, including mapping object
models to database documents.


# express.Router() 
is used to define route paths with the relevant HTTP methods and
assign the corresponding controller function that should be called when these
requests are received by the server.
ex. router.get('/sikwet', sikwet)

