import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import { BlogProvider } from './context/BlogContext';

// Layout wrapper to conditionally hide Navbar/Footer if needed, 
// though typically you want nav on all pages except maybe login.
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BlogProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </Router>
    </BlogProvider>
  );
};

export default App;
