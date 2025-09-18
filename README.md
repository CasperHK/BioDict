# BioDict

BioDict is a modern, internationalized biology dictionary web application. It enables users to search for detailed information about organisms, including related 3D models, similar to a specialized Wikipedia for biology.

## Features
- **Comprehensive Organism Database:** Search and explore detailed information about various organisms.
- **3D Model Integration:** View and interact with 3D models related to each organism.
- **Internationalization (i18n):**
  - English (default)
  - Traditional Chinese
  - Simplified Chinese
  - Japanese
  - Korean
  - (More languages coming soon)
- **User-Friendly Interface:** Built with Next.js for a fast, responsive, and accessible frontend experience.
- **Robust Backend:** Powered by Go Fiber and GORM for high performance and scalability.

## Tech Stack
- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend:** [Go Fiber](https://gofiber.io/), [GORM](https://gorm.io/)
- **Database:** (Your choice, e.g., PostgreSQL, MySQL, SQLite)
- **3D Models:** Integration with 3D model viewers (e.g., Three.js)
- **Internationalization:** Next.js i18n, with support for multiple languages

## Getting Started
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/biodict.git
   cd biodict
   ```
2. **Install dependencies:**
   - Frontend:
     ```sh
     cd src/frontend
     pnpm install
     ```
   - Backend:
     ```sh
     cd ../backend
     go mod tidy
     ```
3. **Run the development servers:**
   - Frontend:
     ```sh
     pnpm dev
     ```
   - Backend:
     ```sh
     go run main.go
     ```

## Contributing
Contributions are welcome! Please open issues or submit pull requests for new features, bug fixes, or translations.

## License
This project is licensed under the MIT License.
