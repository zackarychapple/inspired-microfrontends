import { Navbar } from '@microfrontends-nx/acme-components';

export function App() {
  return (
    <div>
      <Navbar isDocsApp />
      <h1 className="mb-6">
        Docs
      </h1>
      <p className="mb-4">
        This is the index page in the docs app (<pre>apps/docs/app/docs/page.tsx</pre>).
      </p>
      <p>
        Navigations between <a href="/docs">Docs</a> and{' '}
        <a href="/docs/about">About Docs</a> are client-side transitions
        because they&apos;re part of the same Next.js app. Navigating to{' '}
        <a
          className="text-link hover:text-link-light transition-colors"
          href="/"
        >
          Home (Multi-Zones)
        </a>{' '}
        requires a page refresh because it lives in a different Next.js app.
      </p>
    </div>
  );
}

export default App;
