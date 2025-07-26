# HustleHub Marketplace

A modern marketplace platform connecting vendors and customers for seamless commerce experiences.

## 🚀 Project Overview

HustleHub is a full-stack marketplace application built with React (frontend) and Node.js/Express (backend), featuring MongoDB for data persistence. The platform enables vendors to showcase their products and services while providing customers with a seamless shopping experience.

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API
- **HTTP Client**: Axios

### Backend (Node.js + Express)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + bcrypt
- **Validation**: Built-in Express validation

## 📁 Project Structure

```
HustleHub/
├── Backend/                 # Node.js/Express backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API route handlers
│   ├── middleware/         # Express middleware
│   └── index.js           # Server entry point
├── src/                    # React frontend
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── API/               # API client configuration
│   ├── CartContext.tsx    # Global cart state management
│   └── index.tsx          # React app entry point
├── public/                # Static assets
└── package.json           # Frontend dependencies
```

## 🛠️ Key Features

### Customer Features
- **Product Browsing**: Explore products by category
- **Shopping Cart**: Add items with vendor restrictions
- **User Authentication**: Secure login/signup
- **Product Details**: View detailed product information
- **Store Pages**: Browse vendor-specific stores

### Vendor Features
- **Store Management**: Create and manage store profiles
- **Product Management**: Add/edit product listings
- **Order Management**: Track customer orders
- **Analytics**: View store performance metrics

### Platform Features
- **Leaderboard**: Vendor performance rankings
- **Loyalty System**: Customer reward programs
- **Search & Filter**: Advanced product discovery
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd Backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the Backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/hustlehub
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

### Frontend Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 🔧 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User authentication

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category

### Businesses
- `GET /api/businesses` - Get all businesses
- `POST /api/businesses` - Create new business
- `GET /api/businesses/:id` - Get business by ID

### User Management
- `GET /api/user` - Get user profile
- `PUT /api/user` - Update user profile
- `POST /api/user/become-vendor` - Convert to vendor

## 🛒 Cart System

The shopping cart implements a vendor restriction system:
- **Single Vendor Rule**: Cart can only contain items from one vendor at a time
- **Automatic Clearing**: Adding items from a different vendor clears the cart
- **Quantity Management**: Duplicate items increase quantity instead of creating new entries
- **Persistent State**: Cart state is managed globally using React Context

## 🔐 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive request validation
- **CORS Configuration**: Proper cross-origin resource sharing
- **Error Handling**: Secure error responses without sensitive data exposure

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch-Friendly**: Optimized for mobile interactions
- **Progressive Enhancement**: Core functionality works on all devices

## 🧪 Development Guidelines

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Comments**: JSDoc style documentation

### Git Workflow
- **Feature Branches**: Create branches for new features
- **Commit Messages**: Descriptive commit messages
- **Pull Requests**: Code review before merging

### Testing
- **Unit Tests**: Component and utility testing
- **Integration Tests**: API endpoint testing
- **E2E Tests**: User workflow testing

## 🚀 Deployment

### Backend Deployment
1. Set environment variables for production
2. Build and deploy to cloud platform (Heroku, AWS, etc.)
3. Configure MongoDB Atlas connection
4. Set up SSL certificates

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to static hosting (Netlify, Vercel, etc.)
3. Configure environment variables
4. Set up custom domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **HustleHub Team** - Development and maintenance

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Version**: 1.0.0  
**Last Updated**: July 2025