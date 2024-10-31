# Next-movieApp
A collabroratiive movie app

*frontend folder structure*
/movie-platform-frontend
│
├── /public
│   ├── /images          # Static assets (e.g., logos, banners, movie posters)
│   └── favicon.ico      # Favicon for the site
│
├── /src
│   ├── /components      # Reusable components (e.g., buttons, cards, modals)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MovieCard.tsx
│   │   └── Spinner.tsx
│   │
│   ├── /features        # Redux slices for managing state
│   │   ├── authSlice.ts  # Handles user authentication state
│   │   ├── movieSlice.ts # Manages movie list and search results
│   │   └── favoritesSlice.ts # Manages user's favorite movies
│   │
│   ├── /hooks           # Custom React hooks
│   │   ├── useAuth.ts    # Authentication-related logic
│   │   └── useFetch.ts   # Data fetching hook
│   │
│   ├── /pages           # Next.js pages for routing
│   │   ├── index.tsx      # Homepage (movie browsing)
│   │   ├── movie/[id].tsx # Movie details page (dynamic route)
│   │   ├── login.tsx      # Login and Signup page
│   │   └── _app.tsx       # Custom App component to wrap Redux and other providers
│   │
│   ├── /styles          # Tailwind CSS configuration and custom styles
│   │   ├── globals.css   # Global CSS imports and Tailwind setup
│   │   └── tailwind.css  # Tailwind utility classes (if needed)
│   │
│   ├── /types           # TypeScript type definitions and interfaces
│   │   ├── movie.ts      # Movie data types
│   │   ├── user.ts       # User and auth-related types
│   │   └── api.ts        # API response types
│   │
│   ├── /utils           # Utility functions (e.g., API calls, helpers)
│   │   ├── api.ts        # API service for fetching data from backend
│   │   ├── validate.ts   # Validation logic for forms
│   │   └── constants.ts  # Constants used across the app
│   │
│   └── /redux           # Redux store configuration
│       ├── store.ts      # Main Redux store setup
│       └── _app.ts        # Combine all reducers
│
├── .env.local           # Environment variables (e.g., API URL)
├── next.config.js       # Next.js configuration file
├── package.json         # Dependencies and scripts
├── postcss.config.js    # Tailwind/PostCSS configuration
├── tailwind.config.js   # Tailwind customization
└── tsconfig.json        # TypeScript configuration
