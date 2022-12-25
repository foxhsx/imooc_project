import './App.css';
import { Outlet } from 'react-router-dom';
import Frame from './components/Frame';

function App() {
  return (
    <Frame>
      {/* 类似于 vue 的 router-view */}
      <Outlet />
    </Frame>
  );
}

export default App;
