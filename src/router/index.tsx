// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// Component
import { Layout } from '../components/Layout';

// Constants
import { MAIN_ROUTES, ROUTES } from '../constants';

// Create app router
const AppRouter = () => {
  // Return app router
  return (
    <Router>
      <Routes>
        {MAIN_ROUTES.map(({ path, element: E }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <E />
              </Layout>
            }
          />
        ))}
        <Route path="*" element={<Navigate to={ROUTES.Home} />} />
      </Routes>
    </Router>
  );
};

// Export app routes
export default AppRouter;
