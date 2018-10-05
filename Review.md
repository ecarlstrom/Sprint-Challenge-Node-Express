# Review Questions

## What is Node.js?

In simplest terms Node is a runtime environment, which means that it is used for running JavaScript applications outside of a browser. It is popular for web services that use JSON (JavaScript Object Notation) data to communicate with clients. This allows developers to use the same language for client- and server-side code, making it easy to share code between the two. Node is also asynchronous, a feature that we've already used quite often.

## What is Express?

Express is a framework for Node.js that makes web application creation easier, much like React did for our front end work. It is technically a module for Node.js but is incredibly powerful, allowing us to build web applications, single page applications, and RESTful web services.

## Mention two parts of Express that you learned about this week.

1. Express Routers are similar to what we've already seen in React; a way to split an otherwise confusing project into smaller sub-applications (like React Components) and connect those pieces together to form our application. This is not necessary for simpler projects, but as the list of requirements for an application grows it is important that we organize the code using Express Routers.

2. Express as a framework is bare-bones out of the box, but Express Middleware is an all-encompassing term for a wide variety of extra functionality that we can include in our Express applications. There are three different types of middleware: built-in, third-party, and custom. These modules and functions allow us to customized our applications to perform specific tasks that would otherwise have to be redone manually for each project.

## What is Middleware?

A large group of modules and custom functions that can be added to an Express application. Three types: built-in, third-party, and custom.

## What is a Resource?

A resource is anything that we use to operate on data in some way, and these resources are pointed to by routes. For example, in a link like "http:/localhost:8000/api/users", "/api/users" is the specific route that we use to point to the "users" resource. This allows us to interact with the data available in this resource.

## What can the API return to help clients know if a request was successful?

Status codes are helpful ways to return more information about a particular request beyond a simple sucess/failure message. Specific information about the type of issue a request is having, or a 200/201 etc. status code for a successful request, allows both developers and users to pinpoint problems more easily.

## How can we partition our application into sub-applications?

This is done via Express Routers.

## What is express.json() and why do we need it?

This is one of Express' built-in middleware functions, meaning the functionality exists but is not included by default; we have to manually add this to our code. It allows us to parse JSON information, which is one of the most important features of back end work. Without calling express.json(), our code won't be doing much of anything.
