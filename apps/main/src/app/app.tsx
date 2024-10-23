import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Docs = React.lazy(() => import('docs/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="main" />} />

        <Route path="/docs" element={<Docs />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
