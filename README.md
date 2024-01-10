# Sportstore Backend

## Introduction
This repository contains the backend for an e-commerce application named Sportstore. 
It's designed for learning and training purposes, focusing on the use of TypeScript in backend development. 
The application is built using Node.js with TypeScript and integrates with MongoDB using Mongoose. 

This backend is intended to work in conjunction with the [Sportstore Frontend](https://github.com/stanvlv/sportstore-frontend), which is built using React.

## Technologies
- TypeScript
- MongoDB
- Mongoose
- Express.js
- Dotenv
- Cors
- Body-parser
- Nodemon

## Getting Started

### Prerequisites
- Node.js
- npm or Yarn
- MongoDB Cluster (local or cloud-based like MongoDB Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/sportstore-backend.git
   cd sportstore-backend
2. Install dependencies:
    ```
    npm install
3. Create a `.env` file in the root directory and add your MongoDB URI:
    ```
    MONGODB_URI=your_mongodb_uriRunning the Application
---
##### You can run the application using one of the following scripts:

 To run the application in development mode with Nodemon (automatic restarts on file changes):

- npm run dev

To start the application normally:

- npm start

To run tests (Note: tests are not yet specified):

- npm test

##### Deployment
You can deploy this application on a server or any cloud platform that supports Node.js applications. Ensure that your deployment environment includes the necessary environment variables, especially MONGODB_URI.

Contribution
Feel free to fork this project, make changes, and submit pull requests. This project is intended as a learning tool, and contributions for enhancements are welcome.


