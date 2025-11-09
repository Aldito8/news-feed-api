# News Feed API

A RESTful API for a social media news feed application built with Node.js, Express, TypeScript, and Prisma. This API handles user authentication, posting feeds, and following/unfollowing users.

## Features

- **User Authentication**: Register, login, and verify user sessions using JWT tokens.
- **Posts Management**: Create posts and retrieve a paginated feed of posts from followed users.
- **Follow System**: Follow/unfollow users, and retrieve lists of followers and followees.
- **Database Integration**: Uses PostgreSQL with Prisma ORM for data persistence.
- **Containerized Deployment**: Fully containerized with Docker and docker-compose for easy setup.

## Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Joi
- **Password Hashing**: bcrypt
- **Containerization**: Docker
- **Testing**: Postman Collection included

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Aldito8/news-feed-api.git
   cd api
   git checkout dev
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL= <POSTGRESQL URL DATABASE>
   JWT_SECRET=your-super-secret-jwt-key
   ORIGIN=http://localhost:5173
   PORT=3000
   ```

4. **Alternative: Run locally** (requires local PostgreSQL):
   - Ensure PostgreSQL is running and the database is created.
   - Run Prisma migrations:
     ```bash
     npx prisma migrate deploy
     ```
   - Generate Prisma client:
     ```bash
     npx prisma generate
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

5. frontend repository
   ```bash
   https://github.com/Aldito8/news-feed-ui.git
   ```

## Usage

The API is accessible at `http://localhost:3000/api`.

### Authentication

Authentication uses JWT tokens stored in HTTP-only cookies for security. After successful login, the token is automatically set in the `token` cookie.
 
All protected endpoints require a valid JWT token in the cookies. The middleware checks for the `token` cookie to authenticate requests.

### API Endpoints

#### Authentication

- **POST /api/login**

  - Body: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "jwt-token" }`

- **POST /api/register**

  - Body: `{ "username": "string", "password": "string" }`
  - Response: `{ "message": "success register" }`

- **GET /api/me** (Protected)
  - Response: User details

#### Posts

- **GET /api/feed** (Protected)

  - Query: `?page=1&limit=10`
  - Response: Paginated list of posts from followed users

- **POST /api/posts** (Protected)
  - Body: `{ "content": "string" }`
  - Response: Created post details

#### Follow

- **POST /api/follow/:userid** (Protected)
  - Follow a user by their ID

- **DELETE /api/follow/:userid** (Protected)
  - Unfollow a user by their ID

- **GET /api/follower** (Protected)
  - Response: List of users following the current user

- **GET /api/followee** (Protected)
  - Response: List of users the current user is following

### Testing with Postman

Import the `ganapatih.postman_collection.json` file into Postman to test the endpoints. The collection includes pre-configured requests for all API endpoints.

## Database Schema

The database consists of three main models:

- **users**: Stores user information (id, username, password_hash, created_at)
- **posts**: Stores posts (id, user_id, content, created_at)
- **follows**: Stores follow relationships (follower_id, followee_id, created_at)

Refer to `prisma/schema.prisma` for the complete schema definition.

## Scripts

- `npm run dev`: Start development server with hot reload

