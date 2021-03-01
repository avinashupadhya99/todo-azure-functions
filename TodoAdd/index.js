// Access the service from the serverless function
const dbService = require('../Service/TodoService');

module.exports = async function (context, req) {
    // Declare the response
    let response;

    try {
        // Get todo from request body
        const todo = req.body;
        // Add todo using the service
        const result = await dbService.addTodo(todo);
        // Return status 200 as reponse
        response = { body: result, status: 200 };
    } catch(err) {
        response = { body: err.message, status: 500 };
    }
    // Set the response to the context
    context.res = response;
}