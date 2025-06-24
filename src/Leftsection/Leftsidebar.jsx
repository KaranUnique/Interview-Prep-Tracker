import explore from '../assets/explore.svg'
import notes from '../assets/note.svg'
import library from '../assets/library.png'
import workspace from '../assets/workspace.png'
import styles from './Leftsidebar.module.css';
import { Link, useLocation } from 'react-router-dom';
function Leftsidebar() {
    const location = useLocation();
    return (
        <div className="left-section">
            <Link to="/workspace"
                className={`${styles.sidebar} ${location.pathname === 'workspace' ? styles.active : ''}`}
            >
                <img src={workspace}></img>
                <h4>My Workspace</h4>
            </Link>
            <Link to="/sheetlibrary" className={`${styles.sidebar} ${location.pathname === '/sheetlibrary' ? styles.active : ''}`}>
                <img src={library} alt="library" />
                <h4>Sheet Library</h4>
            </Link>
            <div>
                <img src={explore}></img>
                <h4>My Plan</h4>
            </div>
            <div>
                <img src={notes}></img>
                <h4>Quick Notes</h4>

            </div>

        </div>
    );
}
export default Leftsidebar;