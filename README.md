# Books REST API Documentation

This documentation provides details about the Books REST API, including its endpoints, setup instructions, and development considerations.

## API Endpoints and Usage

### Create a New Book

- **Endpoint:** `POST /api/books`
- **Description:** Create a new book with specified details.
- **Request Body:**
  - `title` (string): The book's title.
  - `author` (string): The author's name.
  - `summary` (string): A brief summary of the book.
- **Response:** Returns the newly created book with a custom incremental `_id`.

### List All Books

- **Endpoint:** `GET /api/books`
- **Description:** Retrieve a list of all books in the database.
- **Response:** Provides an array of books with their details.

### Get Details of a Specific Book

- **Endpoint:** `GET /api/books/:id`
- **Description:** Retrieve specific book details by its unique `_id`.
- **Response:** Returns the book's details, or a "Book not found" error if the book doesn't exist.

### Update a Book's Details

- **Endpoint:** `PUT /api/books/:id`
- **Description:** Update specific book details by its unique `_id`.
- **Request Body:** Allows updating fields:
  - `title` (string): The book's title.
  - `author` (string): The author's name.
  - `summary` (string): A brief summary of the book.
- **Response:** Returns the updated book, or a "Book not found" error if the book doesn't exist.

### Delete a Book

- **Endpoint:** `DELETE /api/books/:id`
- **Description:** Delete a specific book by its unique `_id`.
- **Response:** Provides a success message after the book is deleted, or a "Book not found" error if the book doesn't exist.

## Instructions to Set Up and Run the Application Locally

To set up and run the Books REST API locally, follow these steps:

1. **Clone the Repository:**
   - Clone the project repository to your local machine.

2. **Install Dependencies:**
   - Navigate to the project directory and run the following command to install required dependencies:
     ```
     npm install
     ```

3. **Set Environment Variables:**
   - Create a `.env` file in the project directory to store your MongoDB connection string.
   - Add the MongoDB connection string to the `.env` file as follows:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Run the Application:**
   - Start the application by running the following command:
     ```
     npm start
     ```
   - Access the API at `http://localhost:3000`.

5. **Test the API:**
   - To test the API endpoints, run `npm run test` using Mocha and supertest. Ensure the API is running before testing.

## Host on Render.com

To host the Books REST API on Render.com, follow these steps:

1. **Sign Up on Render.com:**
   - If you don't already have an account, sign up for a Render.com account.

2. **Create a New Web Service:**
   - Log in to Render.com and click the "Add New" button to create a new web service.

3. **Configure Your Service:**
   - Choose a name for your service.
   - Connect your GitHub repository or deploy manually from your local machine.

4. **Add Environment Variables:**
   - In your Render.com dashboard, navigate to your service's settings.
   - Add environment variables, including the `MONGODB_URI` that you used locally.

5. **Deploy Your Service:**
   - Deploy your service on Render.com, and it will be accessible with a unique URL.

## Assumptions and Decisions

- Custom Incremental `_id`: We implemented custom incremental `_id` values for books by managing a separate counter collection.
- Error Handling: The API includes basic error handling, but it can be extended with more detailed error messages and codes.
- Security: This documentation doesn't cover security measures like authentication and authorization, which should be added for production readiness.
- Database Choice: The application uses MongoDB as the database. Replace `your_mongodb_connection_string` with your actual connection string.
