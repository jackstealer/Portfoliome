# 🚀 Modern Portfolio Website

A stunning, fully responsive full-stack portfolio website built with React, Node.js, and modern web technologies. Features a beautiful dark theme with animated starfield background, smooth animations, and a complete backend for contact form functionality.
![Uploading image.png…]()

![Portfolio Screenshot](./screenshots/hero-section.png)

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with smooth animations
- **🌙 Dark Mode Toggle**: Persistent theme switching with smooth transitions  
- **⭐ Animated Starfield**: Dynamic particle system with shooting stars
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop
- **🚀 Smooth Animations**: Framer Motion powered scroll animations
- **📧 Contact Form**: Full-stack contact form with email integration
- **🔒 Security**: Rate limiting, validation, and security headers
- **🎯 SEO Optimized**: Meta tags, structured data, and performance optimized
- **⚡ Fast Loading**: Optimized images and lazy loading
- **🎪 Interactive Elements**: Hover effects and micro-interactions

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and TypeScript
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Hot Toast** - Beautiful notifications
- **Heroicons** - Beautiful SVG icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for contact submissions
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending functionality
- **Express Validator** - Input validation and sanitization
- **Helmet** - Security middleware
- **Rate Limiting** - API protection

### Development & Deployment
- **Create React App** - React development environment
- **Concurrently** - Run multiple commands simultaneously
- **ESLint & Prettier** - Code formatting and linting
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install all dependencies (client + server)
   npm run install-all
   ```

3. **Environment Setup**
   ```bash
   # Copy environment example file
   cp server/.env.example server/.env
   ```

4. **Configure Environment Variables**
   
   Edit `server/.env` with your configuration:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   CLIENT_URL=http://localhost:3000
   
   # Email Configuration (Gmail example)
   EMAIL_SERVICE=gmail
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your.email@gmail.com
   ```

5. **Start Development Servers**
   ```bash
   # Start both client and server
   npm run dev
   ```

   Or start individually:
   ```bash
   # Start only client (port 3000)
   npm run client
   
   # Start only server (port 5000)
   npm run server
   ```

6. **Open in Browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
portfolio-website/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── hooks/         # Custom hooks
│   │   │   └── useDarkMode.ts
│   │   ├── utils/         # Utility functions
│   │   ├── App.tsx        # Main app component
│   │   └── index.tsx      # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── server/                # Node.js backend
│   ├── server.js         # Express server
│   ├── .env.example      # Environment variables template
│   └── package.json
├── package.json          # Root package file
└── README.md
```

## 🎨 Customization

### 1. Personal Information
Update the following files with your information:
- `client/src/components/Hero.tsx` - Name and introduction
- `client/src/components/About.tsx` - Personal description and stats
- `client/src/components/Contact.tsx` - Contact information
- `client/public/index.html` - SEO meta tags

### 2. Projects
Edit `client/src/components/Projects.tsx` to add your projects:
```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tech: ["React", "Node.js", "MongoDB"],
    liveDemo: "https://your-demo-link.com",
    github: "https://github.com/your-repo",
    featured: true
  },
  // Add more projects...
];
```

### 3. Skills
Modify `client/src/components/Skills.tsx` to reflect your tech stack:
```typescript
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", color: "text-blue-500" },
      // Add your skills...
    ]
  },
  // Add more categories...
];
```

### 4. Color Scheme
Update `client/tailwind.config.js` for custom colors:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom color palette
        }
      }
    }
  }
}
```

## 📧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in your `.env` file

### Custom SMTP
For other email providers, update the server configuration:
```env
EMAIL_SERVICE=smtp
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the client:
   ```bash
   cd client && npm run build
   ```
2. Deploy the `build` folder to your hosting provider

### Backend (Railway/Heroku/DigitalOcean)
1. Set up MongoDB Atlas or your preferred database
2. Configure environment variables on your hosting platform
3. Deploy the server directory

### Full-Stack Deployment
Consider using platforms like:
- **Railway** - Easy full-stack deployment
- **Heroku** - Popular platform as a service
- **DigitalOcean App Platform** - Simple app deployment
- **AWS** - Comprehensive cloud services

## 🔧 Scripts

```bash
# Development
npm run dev          # Start both client and server
npm run client       # Start only React client
npm run server       # Start only Express server

# Installation
npm run install-all  # Install all dependencies
npm run install-client
npm run install-server

# Production
npm run build        # Build client for production
```

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running locally or update MONGODB_URI
   - Check firewall settings for cloud databases

2. **Email Not Sending**
   - Verify email credentials in `.env`
   - Check Gmail app password setup
   - Ensure less secure app access is enabled

3. **Port Already in Use**
   - Change PORT in server/.env
   - Kill existing processes: `lsof -ti:5000 | xargs kill -9`

4. **Build Errors**
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check Node.js version compatibility

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Heroicons** - For beautiful icons
- **Create React App** - For the development setup

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/portfolio-website/issues) page
2. Create a new issue with detailed information
3. Contact me directly through the portfolio contact form

---

**Made with ❤️ by Atul Raj Gautam**

⭐ Star this repository if you found it helpful!
=======
# Portfoliome
This my portfolio
>>>>>>> e6fd24f9687ba6d52710cce292f9194d7d2f07ce
