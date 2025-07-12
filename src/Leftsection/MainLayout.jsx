// Layout.jsx
import Leftsidebar from './Leftsidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-layout" style={{ display: 'flex' }}>
      <Leftsidebar />
      <div className="main-content" style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
