# NetflixGPT

NetflixGPT is a dynamic movie recommendation web application built using ReactJS, Tailwind CSS, Redux Toolkit, and GPT APIs. It uses Firebase Authentication for user login, logout and added other features such as custom hooks, language change options, infinite scroll, memoization, modularity, protected routes, and code reusability.

## Features

### Custom Hook: 
We've implemented a custom hook to manage state and logic across components efficiently.

### Modal Popup
We have added the popup to see the movie detail video

### Google SignIn
Added the signin using Google SignIn provider using firebase

### Language Change Option: 
Users can easily switch between languages to enjoy movie suggestions in their preferred language.

### Infinite Scroll:
Add infinite scroll for a seamless browsing experience.

### Memoization:
We've optimized performance using memoization techniques to prevent unnecessary renders.

### Modularity: 
The project is organized into modular components, making it easy to maintain and extend.

### Protected Routes:
 Certain routes are protected and only accessible to authenticated users, enhancing security.

### Code Reusability:
We've prioritized code reusability, clean, maintainable code.

## Getting Started

### To get started with NetflixGPT, follow these steps:

#### Clone this repository to your local machine. 
#### Install dependencies using npm install.
#### Create a Firebase project and configure Firebase Authentication.
#### Add your GPT API credentials.
#### Run the app using npm start.


# Features
- Login/Sign Up
    - Sign in/ Sign up form
    - Redirect to Browse page
- Browse page comes (after authentication) 
    - Header
    - Main Movie
        - Trailer in background
        - Title and Description
        - Movie Suggestions
            - Movielist * N
- NetflixGPT using Open AI library
    - Search Bar
    - Movie Suggestions            