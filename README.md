# 🔐 Secure Password Generator

A modern, responsive React-based password generator that creates strong, random passwords with customizable options. Built with Vite for fast development and optimal performance.

![Password Generator](https://rokusuke69.github.io/Random-Password-Generator/)

## ✨ Features

- **🔐 Strong Password Generation**: Create cryptographically secure passwords
- **🎚️ Customizable Length**: Adjust password length from 4 to 32 characters
- **⚙️ Flexible Character Sets**:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&* etc.)
- **📊 Strength Meter**: Visual password strength indicator
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **🎨 Modern UI**: Beautiful gradient design with smooth animations
- **📋 One-Click Copy**: Easy copy to clipboard with visual feedback
- **♿ Accessible**: Fully keyboard navigable with proper ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/password-generator.git
   cd password-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
# Build the app
npm run build

# Preview the production build
npm run preview
```

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: SVG
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
password-generator/
├── public/
│   └── assets/
│       ├── copy.svg
│       └── favicon.ico
├── src/
│   ├── components/
│   │   └── PasswordGenerator.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 How to Use

1. **Adjust Password Length**: Use the slider to set your desired password length (4-32 characters)
2. **Select Character Types**: Choose which character sets to include in your password
3. **Generate Password**: Click the "Generate New Password" button
4. **Check Strength**: View the password strength indicator
5. **Copy to Clipboard**: Click the copy button to easily copy your password

## 🔒 Password Strength Criteria

The strength meter evaluates passwords based on:

- **Weak**: Short length or limited character variety
- **Medium**: Moderate length with mixed character types
- **Strong**: Long length with uppercase, lowercase, numbers, and symbols

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🐛 Bug Reports

If you encounter any bugs or have suggestions, please [open an issue](https://github.com/your-username/password-generator/issues).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI inspired by modern design principles
- Icons from [Heroicons](https://heroicons.com/)

---

<div align="center">

**Made with ❤️ and React**

[Report Bug](https://github.com/your-username/password-generator/issues) · [Request Feature](https://github.com/your-username/password-generator/issues)

</div>
