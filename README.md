# Music Player App

A modern, feature-rich music player application built with cutting-edge web technologies. Enjoy seamless audio playback, playlist management, and an intuitive user interface.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development Setup](#development-setup)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Contributing Guidelines](#contributing-guidelines)
- [License](#license)

## ✨ Features

### Core Playback Features
- **Audio Playback**: High-quality audio streaming with multiple format support (MP3, WAV, FLAC, OGG)
- **Playlist Management**: Create, edit, and organize playlists with ease
- **Queue System**: Intuitive queue management with drag-and-drop reordering
- **Shuffle & Repeat**: Multiple repeat modes (no repeat, repeat all, repeat one) and shuffle functionality

### User Interface
- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Built-in dark mode for comfortable listening sessions
- **Album Artwork Display**: Automatic album artwork fetching and display
- **Real-time Playback Visualization**: Dynamic visualizer with spectrum analyzer

### Advanced Features
- **Search & Filter**: Advanced search functionality with filters for artists, albums, and genres
- **Favorites & Bookmarks**: Mark your favorite tracks and albums for quick access
- **Playback History**: Track your listening history with timestamps
- **Volume Control**: Precise volume control with normalization options
- **Keyboard Shortcuts**: Comprehensive keyboard shortcut support for power users
- **Equalizer**: 10-band equalizer with preset configurations

## 📁 Project Structure

```
music-player-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Player.vue
│   │   ├── Playlist.vue
│   │   ├── Queue.vue
│   │   ├── SearchBar.vue
│   │   ├── Visualizer.vue
│   │   └── Settings.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Library.vue
│   │   ├── Playlists.vue
│   │   └── Settings.vue
│   ├── services/
│   │   ├── audioService.js
│   │   ├── storageService.js
│   │   ├── apiService.js
│   │   └── playlistService.js
│   ├── store/
│   │   └── index.js (Vuex store configuration)
│   ├── styles/
│   │   ├── main.css
│   │   ├── variables.css
│   │   └── responsive.css
│   ├── utils/
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   └── helpers.js
│   ├── App.vue
│   └── main.js
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   ├── API.md
│   ├── ARCHITECTURE.md
│   └── DEVELOPMENT.md
├── .env.example
├── .env.local (local only, not in repo)
├── package.json
├── vue.config.js
├── babel.config.js
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14.0 or higher)
- npm (v6.0 or higher) or yarn (v1.22 or higher)
- Git

### Clone the Repository

```bash
git clone https://github.com/zhenbah/music-player-app.git
cd music-player-app
```

### Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### Build for Production

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 🛠️ Development Setup

### Start Development Server

Using npm:
```bash
npm run serve
```

Or using yarn:
```bash
yarn serve
```

The application will be available at `http://localhost:8080/`

### Run Tests

Run all tests:
```bash
npm run test
```

Run unit tests:
```bash
npm run test:unit
```

Run integration tests:
```bash
npm run test:integration
```

Run end-to-end tests:
```bash
npm run test:e2e
```

### Linting and Code Quality

Check code quality:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

### Development Best Practices

1. **Create a feature branch** for new features:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Write tests** for new functionality before committing

3. **Follow the coding standards** defined in `.eslintrc.js`

4. **Keep commits atomic** - one logical change per commit

5. **Write descriptive commit messages**:
   ```
   feat: Add equalizer functionality
   fix: Correct playlist sorting issue
   docs: Update API documentation
   ```

## 🔐 Environment Variables

Create a `.env.local` file in the project root directory. Do not commit this file to version control.

### Available Variables

```env
# API Configuration
VUE_APP_API_BASE_URL=http://localhost:3000/api
VUE_APP_API_TIMEOUT=30000

# Authentication
VUE_APP_AUTH_ENABLED=true
VUE_APP_JWT_TOKEN_KEY=auth_token

# Feature Flags
VUE_APP_ENABLE_VISUALIZER=true
VUE_APP_ENABLE_EQUALIZER=true
VUE_APP_ENABLE_OFFLINE_MODE=true

# Analytics
VUE_APP_ANALYTICS_ENABLED=false
VUE_APP_ANALYTICS_ID=

# Audio Configuration
VUE_APP_AUDIO_BUFFER_SIZE=4096
VUE_APP_DEFAULT_VOLUME=0.8

# UI Configuration
VUE_APP_THEME=dark
VUE_APP_LANGUAGE=en

# Development
VUE_APP_DEBUG_MODE=false
VUE_APP_LOG_LEVEL=info
```

### Example Configuration

```env
VUE_APP_API_BASE_URL=http://localhost:3000/api
VUE_APP_AUTH_ENABLED=true
VUE_APP_JWT_TOKEN_KEY=music_player_token
VUE_APP_ENABLE_VISUALIZER=true
VUE_APP_ENABLE_EQUALIZER=true
VUE_APP_ENABLE_OFFLINE_MODE=true
VUE_APP_THEME=dark
VUE_APP_DEBUG_MODE=true
```

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Authentication
All API requests (except login/register) require a Bearer token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

### Endpoints

#### Tracks

**Get All Tracks**
```
GET /tracks
Query Parameters:
  - limit: number (default: 20)
  - offset: number (default: 0)
  - sort: string (default: 'name')

Response:
{
  "data": [
    {
      "id": "track_123",
      "name": "Track Name",
      "artist": "Artist Name",
      "album": "Album Name",
      "duration": 240,
      "genre": "Pop",
      "url": "https://example.com/track.mp3"
    }
  ],
  "total": 150
}
```

**Get Track by ID**
```
GET /tracks/:id
Response:
{
  "id": "track_123",
  "name": "Track Name",
  "artist": "Artist Name",
  "album": "Album Name",
  "duration": 240,
  "genre": "Pop",
  "url": "https://example.com/track.mp3",
  "artwork": "https://example.com/artwork.jpg"
}
```

**Search Tracks**
```
GET /tracks/search?q=query
Query Parameters:
  - q: string (search query)
  - type: string (track|artist|album)

Response:
{
  "tracks": [...],
  "artists": [...],
  "albums": [...]
}
```

#### Playlists

**Get All Playlists**
```
GET /playlists
Response:
{
  "data": [
    {
      "id": "playlist_123",
      "name": "My Playlist",
      "description": "A collection of my favorite songs",
      "trackCount": 25,
      "createdAt": "2025-12-15T10:34:00Z"
    }
  ]
}
```

**Create Playlist**
```
POST /playlists
Body:
{
  "name": "New Playlist",
  "description": "Optional description"
}
Response:
{
  "id": "playlist_123",
  "name": "New Playlist",
  "description": "Optional description",
  "trackCount": 0
}
```

**Add Track to Playlist**
```
POST /playlists/:id/tracks
Body:
{
  "trackId": "track_123"
}
Response:
{
  "success": true,
  "message": "Track added to playlist"
}
```

**Remove Track from Playlist**
```
DELETE /playlists/:id/tracks/:trackId
Response:
{
  "success": true,
  "message": "Track removed from playlist"
}
```

#### User Preferences

**Get User Settings**
```
GET /user/settings
Response:
{
  "theme": "dark",
  "volume": 0.8,
  "language": "en",
  "autoPlay": true
}
```

**Update User Settings**
```
PUT /user/settings
Body:
{
  "theme": "dark",
  "volume": 0.8,
  "language": "en"
}
Response:
{
  "success": true,
  "settings": {...}
}
```

## 🤝 Contributing Guidelines

We welcome contributions to the Music Player App! Please follow these guidelines to ensure smooth collaboration.

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/music-player-app.git
   ```
3. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Code Standards

- **Language**: JavaScript/Vue.js
- **Linter**: ESLint (configured in `.eslintrc.js`)
- **Code Formatter**: Prettier
- **Testing Framework**: Jest + Vue Test Utils

### Before Submitting

1. **Write tests** for new functionality
2. **Run linting**: `npm run lint`
3. **Run tests**: `npm run test`
4. **Update documentation** if needed
5. **Ensure all tests pass** before pushing

### Commit Message Format

Follow the Conventional Commits format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples**:
```
feat(player): Add equalizer functionality
fix(playlist): Correct sorting order bug
docs(readme): Update installation instructions
test(visualizer): Add unit tests for spectrum analyzer
```

### Pull Request Process

1. **Update the README.md** if applicable
2. **Add tests** covering new functionality
3. **Ensure all CI/CD checks pass**
4. **Request review** from project maintainers
5. **Address feedback** and push updates
6. **Merge** once approved

### Reporting Issues

When reporting bugs, please include:
- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (OS, browser, version)
- Screenshots/recordings if applicable

### Feature Requests

When suggesting features:
- Describe the use case
- Explain the expected behavior
- Provide mockups or examples if possible
- Consider performance implications

### Questions & Support

- Check existing documentation in `/docs` directory
- Review existing issues and PRs
- Open a discussion for general questions
- Contact the maintainers via email

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Last Updated**: December 15, 2025

For more detailed information, see our [Architecture Guide](./docs/ARCHITECTURE.md) and [Development Guide](./docs/DEVELOPMENT.md).
