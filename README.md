🎬 CineVault

A modern movie and TV-series discovery platform built with React.js, Firebase, Tailwind CSS and the TMDB ecosystem.

CineVault provides a clean and responsive interface for discovering movies and TV shows, searching and filtering entertainment content, viewing detailed information, managing personal lists, and exploring public lists.

✨ Overview

CineVault is a React-based entertainment discovery web application.

The platform is designed around a simple idea:

Discover → Explore → Organize → Enjoy

Users can browse popular and latest movies/series, search for specific titles, open detailed movie/series pages, authenticate with their account, create personal lists, and explore lists shared by the community.

Note: CineVault is a discovery and organization platform. It does not provide unauthorized movie or TV streaming.

🚀 Key Features

🎥 Movie Discovery

Browse popular movies.

Explore latest/trending content.

View movie details.

View ratings, release information and artwork.

Explore similar movies.

📺 TV Series Discovery

Dedicated TV-series section.

Browse latest series.

View series details.

Explore similar series.

View ratings and release information.

🔎 Search & Filtering

Search movies by title.

Search TV series by title.

Filter content according to available categories.

Dedicated search components for movies and TV shows.

👤 Authentication

Firebase-based authentication.

User registration and login.

User profile functionality.

Logout/settings functionality.

Personalized user experience.

📚 Personal Lists

Authenticated users can:

Create lists.

Edit lists.

Delete lists.

Add movies/series to lists.

Organize favorite content.

🌍 Public Lists

Users can publish lists and explore lists shared by the community.

🌓 Dark / Light Theme

Theme toggle.

Responsive styling.

Dark-mode compatible interface.

📱 Responsive UI

CineVault is designed to work across:

Desktop

Laptop

Tablet

Mobile

🏗️ Project Architecture

                         ┌─────────────────────────┐
                         │       CineVault UI      │
                         │       React.js          │
                         └────────────┬────────────┘
                                      │
                    ┌─────────────────┼─────────────────┐
                    │                 │                 │
                    ▼                 ▼                 ▼
             ┌─────────────┐   ┌─────────────┐   ┌──────────────┐
             │ React Router│   │ Tailwind CSS│   │ Firebase Auth│
             └──────┬──────┘   └─────────────┘   └──────┬───────┘
                    │                                   │
                    ▼                                   ▼
             ┌─────────────┐                     ┌──────────────┐
             │ Components  │                     │ User / Lists │
             └──────┬──────┘                     └──────┬───────┘
                    │                                   │
                    ▼                                   ▼
             ┌──────────────────────────────────────────────┐
             │              Data Fetching Layer             │
             │  allFetcher / oneFetcher / databaseFetcher   │
             └──────────────────────┬───────────────────────┘
                                    │
                       ┌────────────┴────────────┐
                       ▼                         ▼
                ┌─────────────┐          ┌──────────────┐
                │ Movie / TV  │          │   Firebase   │
                │ Data / API  │          │ Auth / Data  │
                └─────────────┘          └──────────────┘

📂 Project Structure

cinevault/
│
├── public/
│   ├── Brn.png
│   └── index.html
│
├── src/
│   │
│   ├── auth/
│   │   ├── firebase.js
│   │   ├── login.js
│   │   ├── profile.js
│   │   ├── register.js
│   │   └── sett&logout.js
│   │
│   ├── components/
│   │   ├── SearchBars/
│   │   │   ├── searchDivMovie.js
│   │   │   └── searchDivTv.js
│   │   │
│   │   ├── lists/
│   │   │   ├── Public/
│   │   │   ├── addList.js
│   │   │   ├── listCard.js
│   │   │   ├── listInside.js
│   │   │   ├── myLists.js
│   │   │   └── updList.js
│   │   │
│   │   ├── about.js
│   │   ├── carousel.js
│   │   ├── filter.js
│   │   ├── home.js
│   │   ├── lists.js
│   │   ├── movieDetails.js
│   │   ├── movies.js
│   │   ├── results.js
│   │   ├── smallCard.js
│   │   └── tvShows.js
│   │
│   ├── movie/
│   │   ├── allFetcher.js
│   │   ├── databaseFetcher.js
│   │   └── oneFetcher.js
│   │
│   ├── static/
│   │   ├── animations.js
│   │   ├── footer.js
│   │   ├── header.js
│   │   ├── loading.js
│   │   └── toast.js
│   │
│   ├── style/
│   │   ├── global.css
│   │   ├── themeBtn.js
│   │   └── useTheme.js
│   │
│   ├── App.js
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tailwind.config.js
└── README.md

🧩 Main Modules

src/auth/

Responsible for authentication and user-related functionality.

firebase.js       → Firebase configuration
login.js          → Login
register.js       → Registration
profile.js        → User profile
sett&logout.js    → Settings / logout

src/components/

Contains the primary UI components and application pages.

Important modules include:

home.js           → Homepage
movies.js         → Movies section
tvShows.js        → TV Shows section
movieDetails.js   → Movie/series details
about.js          → About / developer page
results.js        → Search results
filter.js         → Filtering
carousel.js       → Homepage carousel

src/components/lists/

Handles user-created and public lists.

addList.js        → Create list
updList.js        → Update list
listCard.js       → List preview
listInside.js     → List details
myLists.js        → Personal lists
Public/           → Public community lists

src/movie/

Contains data-fetching utilities.

allFetcher.js
oneFetcher.js
databaseFetcher.js

These modules separate data retrieval from the UI components.

src/static/

Contains reusable application-level UI utilities:

header.js
footer.js
animations.js
loading.js
toast.js

src/style/

Contains theme and global styling functionality.

🛠️ Technology Stack

Technology

Purpose

React.js

Frontend application

JavaScript

Application logic

React Router

Client-side navigation

Tailwind CSS

UI styling

Firebase

Authentication / application data

TMDB ecosystem

Movie and TV content

HTML5

Application structure

CSS3

Styling and animations

npm

Package management

Git & GitHub

Version control

⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/JayeshGujar327/cinevault.git

cd cinevault

2. Install dependencies

npm install

3. Configure environment variables

Create a .env file in the project root.

Example:

REACT_APP_API_KEY=YOUR_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
REACT_APP_DATABASE_URL=YOUR_FIREBASE_DATABASE_URL
REACT_APP_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_FIREBASE_APP_ID
REACT_APP_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
REACT_APP_COMPANY_NAME=CineVault

Never publish private credentials or secrets in a public repository.

4. Start the development server

This project uses Create React App, so run:

npm start

The application normally opens at:

http://localhost:3000

🧪 Production Build

Create an optimized production build:

npm run build

The production files will be generated inside:

build/

🔐 Environment Variables

CineVault uses environment variables for configuration.

The application name is controlled by:

REACT_APP_COMPANY_NAME=CineVault

This allows the interface to display CineVault consistently throughout reusable components.

🎨 UI & UX

The interface focuses on:

Clean movie-card layouts

Responsive navigation

Dark/light theme

Animated interactions

Movie posters and visual discovery

Search and filtering

Personalized lists

Responsive layouts

Reusable React components

👨‍💻 Developer

Jayesh Gujar

Developer & Maintainer

I am a Computer Science developer interested in building modern web applications, exploring full-stack development, and creating practical user-focused products.

Connect With Me

Platform

Link

GitHub

https://github.com/JayeshGujar327

LinkedIn

https://www.linkedin.com/in/jayesh-gujar-943626315/

Instagram

https://www.instagram.com/thejayesh327/

Email

gujarj327@gmail.com

🔗 Social Links

GitHub:
https://github.com/JayeshGujar327

LinkedIn:
https://www.linkedin.com/in/jayesh-gujar-943626315/

Instagram:
https://www.instagram.com/thejayesh327/

Email:
gujarj327@gmail.com

🙌 Credits & Attribution

CineVault is a customized version of the movie-library project from which this codebase was developed.

The original repository/project should be credited appropriately:

Original repository: YassineBenZriouil/Filmory

This version has been customized with the CineVault branding, UI/content updates, developer information, and additional presentation changes.

📌 Current Repository

GitHub:
https://github.com/JayeshGujar327/cinevault

📄 License

This repository contains a customized project based on an existing movie-library codebase.

Before redistributing the project commercially, review the original project's license and third-party API/service terms.

⭐ Support

If you find CineVault useful, consider starring the repository on GitHub.

Built with React.js ❤️ by Jayesh Gujar
