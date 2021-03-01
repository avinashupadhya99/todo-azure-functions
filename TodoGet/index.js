// Access the service from the serverless function
const dbService = require('../Service/TodoService');

module.exports = async function (context, req) {
    // Declare the response
    let response;

    try {
        // Fetch the todos from the service
        const result = await dbService.getAllTodos();
        context.log(`Found ${result.length} todos`);
        // Return the todos as a reponse
        response = { body: result, status: 200 };
    } catch(err) {
        response = { body: err.message, status: 500 };
    }
    // Set the response to the context
    context.res = response;
}