import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Initialize Express app
const app: Express = express();
const PORT = process.env.PORT || 3001;

// ===========================
// Middleware Setup
// ===========================

// Enable CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// HTTP request logging
app.use(morgan('combined'));

// Custom logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ===========================
// Health Check Endpoint
// ===========================

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// ===========================
// API Routes
// ===========================

// Authentication routes
app.post('/api/auth/register', (req: Request, res: Response) => {
  // TODO: Implement user registration
  res.status(501).json({
    message: 'User registration endpoint - not implemented yet',
  });
});

app.post('/api/auth/login', (req: Request, res: Response) => {
  // TODO: Implement user login
  res.status(501).json({
    message: 'User login endpoint - not implemented yet',
  });
});

app.post('/api/auth/logout', (req: Request, res: Response) => {
  // TODO: Implement user logout
  res.status(501).json({
    message: 'User logout endpoint - not implemented yet',
  });
});

app.post('/api/auth/refresh', (req: Request, res: Response) => {
  // TODO: Implement token refresh
  res.status(501).json({
    message: 'Token refresh endpoint - not implemented yet',
  });
});

// Tracks routes
app.get('/api/tracks', (req: Request, res: Response) => {
  // TODO: Get all tracks
  res.status(501).json({
    message: 'Get all tracks endpoint - not implemented yet',
  });
});

app.get('/api/tracks/:id', (req: Request, res: Response) => {
  // TODO: Get track by ID
  res.status(501).json({
    message: 'Get track by ID endpoint - not implemented yet',
  });
});

app.post('/api/tracks', (req: Request, res: Response) => {
  // TODO: Create new track
  res.status(501).json({
    message: 'Create track endpoint - not implemented yet',
  });
});

app.put('/api/tracks/:id', (req: Request, res: Response) => {
  // TODO: Update track
  res.status(501).json({
    message: 'Update track endpoint - not implemented yet',
  });
});

app.delete('/api/tracks/:id', (req: Request, res: Response) => {
  // TODO: Delete track
  res.status(501).json({
    message: 'Delete track endpoint - not implemented yet',
  });
});

// Playlists routes
app.get('/api/playlists', (req: Request, res: Response) => {
  // TODO: Get all playlists
  res.status(501).json({
    message: 'Get all playlists endpoint - not implemented yet',
  });
});

app.get('/api/playlists/:id', (req: Request, res: Response) => {
  // TODO: Get playlist by ID
  res.status(501).json({
    message: 'Get playlist by ID endpoint - not implemented yet',
  });
});

app.post('/api/playlists', (req: Request, res: Response) => {
  // TODO: Create new playlist
  res.status(501).json({
    message: 'Create playlist endpoint - not implemented yet',
  });
});

app.put('/api/playlists/:id', (req: Request, res: Response) => {
  // TODO: Update playlist
  res.status(501).json({
    message: 'Update playlist endpoint - not implemented yet',
  });
});

app.delete('/api/playlists/:id', (req: Request, res: Response) => {
  // TODO: Delete playlist
  res.status(501).json({
    message: 'Delete playlist endpoint - not implemented yet',
  });
});

app.post('/api/playlists/:id/tracks', (req: Request, res: Response) => {
  // TODO: Add track to playlist
  res.status(501).json({
    message: 'Add track to playlist endpoint - not implemented yet',
  });
});

app.delete('/api/playlists/:id/tracks/:trackId', (req: Request, res: Response) => {
  // TODO: Remove track from playlist
  res.status(501).json({
    message: 'Remove track from playlist endpoint - not implemented yet',
  });
});

// Users routes
app.get('/api/users/:id', (req: Request, res: Response) => {
  // TODO: Get user by ID
  res.status(501).json({
    message: 'Get user by ID endpoint - not implemented yet',
  });
});

app.get('/api/users/:id/playlists', (req: Request, res: Response) => {
  // TODO: Get user playlists
  res.status(501).json({
    message: 'Get user playlists endpoint - not implemented yet',
  });
});

app.put('/api/users/:id', (req: Request, res: Response) => {
  // TODO: Update user profile
  res.status(501).json({
    message: 'Update user profile endpoint - not implemented yet',
  });
});

app.delete('/api/users/:id', (req: Request, res: Response) => {
  // TODO: Delete user account
  res.status(501).json({
    message: 'Delete user account endpoint - not implemented yet',
  });
});

// ===========================
// Error Handling Middleware
// ===========================

// 404 Not Found handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
    timestamp: new Date().toISOString(),
  });
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message || 'An unexpected error occurred',
    timestamp: new Date().toISOString(),
  });
});

// ===========================
// Server Startup
// ===========================

app.listen(PORT, () => {
  console.log(`🎵 Music Player API Server is running on http://localhost:${PORT}`);
  console.log(`📊 Health check available at http://localhost:${PORT}/health`);
});

export default app;
