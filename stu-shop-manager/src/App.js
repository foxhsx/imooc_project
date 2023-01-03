import './App.css';
import { Navigate, Outlet, useMatches, useNavigate } from 'react-router-dom';
import Frame from './components/Frame';
import { useEffect } from 'react';
import { isLogined } from './utils';

function App() {
  const matches = useMatches();
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = matches.some(match => match.pathname === '/admin/')
    if (isAdmin) {
      navigate('/admin/dashboard')
    }
  }, [matches, navigate])

  return isLogined() ? (
    <Frame>
      {/* 类似于 vue 的 router-view */}
      <Outlet />
    </Frame>
  ) : <Navigate to="/login" replace />;
}

export default App;
