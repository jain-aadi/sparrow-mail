# Sparrow

A modern email management application that rethinks how we handle conversations in our digital workflows. Built with React, TypeScript, and Vite.

## Features

- **Conversation-Focused Design**: Move beyond static inboxes to fluid, responsive email management
- **Smart Context Intelligence**: Automatically understand and organize your email threads
- **Unified Conversations**: Keep related messages together for better workflow
- **Priority Flow Controls**: Manage your email flow with advanced controls
- **Custom Workflows**: Tailor the app to your specific communication needs

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sparrow/my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Landing hero section
│   ├── Bento.tsx       # Feature showcase grid
│   ├── Intro.tsx       # Philosophy section
│   ├── Price.tsx       # Pricing plans
│   └── Footer.tsx      # Site footer
├── assets/             # Static assets
└── App.tsx            # Main application component
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
