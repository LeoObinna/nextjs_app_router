nextjs_app_router

Overview

This project is a full-stack financial dashboard application built with Next.js App Router. It was developed as part of the Next.js Foundations course, designed to teach the main features of Next.js by building a real-world application.

What the App Does
- Public Home Page: A landing page accessible to everyone.
- Authentication: Secure login page using NextAuth.js and middleware for route protection.
- Dashboard: Authenticated users can access a dashboard with:
- Invoice Management: Add, edit, and delete invoices.
- Customer Management: View customer details and their invoices.
- Financial Overview: Visualize revenue and invoice status with charts and tables.
- Search & Pagination: Easily search and navigate through invoices and customers.
- Database Integration: Uses PostgreSQL for persistent data storage.

Screenshots
- Desktop and mobile versions are supported, with responsive layouts and optimized images.

Technologies Used

- Programming Languages:
1. TypeScript
2. JavaScript

Frameworks & Libraries:
1. Next.js (App Router)
2. React
3. Tailwind CSS (for styling)
4. NextAuth.js (authentication)
5. PostgreSQL (database)
6. Heroicons (icons)
7. clsx (conditional classnames)

Other Tools:
1. Vercel (deployment)
2. ESLint, Prettier (code quality)
3. PostCSS, Autoprefixer (CSS tooling)

- Features & Concepts Demonstrated
1. Styling: Multiple approaches using Tailwind CSS and custom CSS.
2. Optimizations: Image, link, and font optimization for performance.
3. Routing: Nested layouts and file-system-based routing with the App Router.
4. Data Fetching: Server-side fetching, streaming, and integration with PostgreSQL.
5. Search & Pagination: URL-based search params and paginated data tables.
6. Mutating Data: React Server Actions for creating, updating, and deleting data, with cache revalidation.
7. Error Handling: Custom error and 404 pages.
8. Form Validation & Accessibility: Server-side validation and accessible forms.
9. Authentication: NextAuth.js and middleware for secure, protected routes.
10. Metadata: SEO and social sharing metadata configuration.

Getting Started
1. Install dependencies: npm install or pnpm install

2. Set up environment variables:
Copy .env.example to .env and fill in your PostgreSQL connection string.

3. Run database seed (optional):
Visit /seed route to populate the database with sample data.

4. Start the development server: npm run dev or pnpm dev

Open the app:
Visit http://localhost:3000 in your browser.

Prerequisite Knowledge
You should have a basic understanding of React and JavaScript. Familiarity with TypeScript, SQL, and modern React features (like Server Components and Suspense) is helpful but not required.

Possible Improvements
- Role-based Access Control: Add user roles (admin, user) for more granular permissions.
- Unit & Integration Tests: Add automated tests for reliability.
- API Rate Limiting & Security: Harden endpoints for production.
- Internationalization (i18n): Support multiple languages.
- Dark Mode: Add theme switching.
- Notifications: Real-time updates or toast notifications for actions.
- Mobile App: Extend with React Native for mobile platforms.
- Analytics: Integrate analytics for usage tracking.

License
This project is for educational purposes as part of the Next.js Learn Course.

For more information, see the README.md and the Next.js documentation.
