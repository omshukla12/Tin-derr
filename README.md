# Tinder Clone Using MERN Stack
Overview-

This repository contains the code for a Tinder clone application built using the MERN stack. The MERN stack consists of MongoDB, Express.js, React.js, and Node.js, which together provide a powerful framework for developing full-stack web applications. This Tinder clone aims to replicate the core features of the popular dating app, allowing users to create profiles, swipe through potential matches, and connect with other users.

Features-

User Authentication: Secure user sign-up and login using JWT (JSON Web Tokens) and bcrypt for password hashing.
User Profiles: Users can create and update their profiles with personal information and photos.
Swipe Functionality: Implemented swipe left (dislike) and swipe right (like) functionality.
Matching System: Users can see their matches and chat with them in real-time.
Real-time Chat: Built with Socket.io to enable real-time messaging between matched users.
Responsive Design: A mobile-first design ensures a seamless experience on smartphones and tablets.
Technologies Used
Frontend: React.js, Redux (for state management), Bootstrap (for styling)
Backend: Node.js, Express.js
Database: MongoDB (using Mongoose for schema modeling)
Authentication: JWT (JSON Web Tokens), bcrypt (for password hashing)
Real-time Communication: Socket.io
Hosting: Deployed on Heroku or Vercel
Installation
To get a copy of this project up and running on your local machine, follow these steps:

Prerequisites
Node.js (>= 14.x)
MongoDB (running locally or a MongoDB Atlas account)
Clone the Repository
bash
cd tinder-clone-mern
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd backend
Install the backend dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and add your environment variables:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy code
npm start
Frontend Setup
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install the frontend dependencies:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000 to view the application.

Usage-

Sign Up / Login: Create a new account or log in with your existing credentials.
Create Profile: Set up your profile by adding personal details and photos.
Swipe Through Profiles: Swipe left to dislike or right to like other profiles.
View Matches: Check your matches and start chatting with them in real-time.
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the existing code style and write tests for new features.

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact-

For any inquiries or feedback, please reach out to omshukla2060@gmail.com .

Acknowledgements-

Inspired by the design and functionality of Tinder.
Thanks to the open-source community for providing tools and libraries that made this project possible.
