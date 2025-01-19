import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // enable sending form data from react
app.use(errorHandler);
import userRoutes from './routes/userRoutes.js';
import mongoose  from 'mongoose';
import cors from 'cors';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();
app.use(cookieParser());
app.use('/api/users', userRoutes)
app.use(notFound);
app.use(cors());
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:3000', 'your-frontend-vercel-url.vercel.app'],
  credentials: true
}));


mongoose.connect("mongodb://127.0.0.1:27017/coelsNguru2025", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
        .then(() => console.log("Connected to DB"))
        .catch(console.err);

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'frontend/dist')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
    
} else {
    app.get('/', (req, res) => res.send('Server is ready'));
    }



const port = process.env.PORT || 5000;





app.listen(port, () => console.log(`Server started on port ${port}`));


// Actual Routes Needed
// - ** POST /api/users** - Register a user
// - ** GET /api/users/auth** - Authenticate a user and get token
// - ** POST /api/users/logout** - Logout a user and clear cookie
// - ** GET /api/users/profile** - Get user profile
// - ** PUT /api/users/profile** - Update profile