import explore from '../assets/explore.svg'
import notes from '../assets/note.svg'
import library from '../assets/library.png'
import workspace from '../assets/workspace.png'
import styles from './Leftsidebar.module.css';
import { Link, useLocation } from 'react-router-dom';
import ai_asistence from './AIHelper';
import Compiler from './Compiler';
function Leftsidebar({ closeSidebar }) {
  const location = useLocation();

  return (
    <div className="left-section">
      <Link
        to="/workspace"
        className={`${styles.sidebar} ${location.pathname === '/workspace' ? styles.active : ''}`}
        onClick={closeSidebar}
      >
        <img src={workspace} />
        <h4>My Workspace</h4>
      </Link>

      <Link
        to="/sheetlibrary"
        className={`${styles.sidebar} ${location.pathname === '/sheetlibrary' ? styles.active : ''}`}
        onClick={closeSidebar}
      >
        <img src={library} alt="library" />
        <h4>Sheet Library</h4>
      </Link>

      <Link
        to="/Compiler"
        className={`${styles.sidebar} ${location.pathname === '/Compiler' ? styles.active : ''}`}
        onClick={closeSidebar}
      >
        <img src={explore} />
        <h4>Compiler</h4>
      </Link>
      <Link
        to="/ai_asistence"
        className={`${styles.sidebar} ${location.pathname === '/AIHelper' ? styles.active : ''}`}
        onClick={closeSidebar}
      >
        <img src={notes} />
        <h4>Ai-Asistence</h4>
      </Link>
    </div>
  );
}

export default Leftsidebar;
