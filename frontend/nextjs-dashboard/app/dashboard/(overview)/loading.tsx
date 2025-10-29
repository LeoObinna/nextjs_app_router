/**
 * Loading fallback for the dashboard (overview) route.
 *
 * The Next.js App Router automatically renders this component when the route
 * (segment) is suspended — e.g., during data fetching or lazy-loaded children.
 */

export default function Loading() {
    return <div>Loading...</div>;
  }