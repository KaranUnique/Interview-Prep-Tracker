import explore from '../assets/explore.svg'
import notes from '../assets/note.svg'
import library from '../assets/library.png'
import workspace from '../assets/workspace.png'
import styles from './Leftsidebar.module.css';

function Leftsidebar({ setActivePage, activePage }) {
    return (
        <div className="left-section">
            <div onClick={() => setActivePage("workspace")}
               className={`${styles.sidebar} ${activePage === 'workspace' ? styles.active : ''}`}
            >
                <img src={workspace}></img>
                <h4>My Workspace</h4>
            </div>
            <div onClick={() => setActivePage("sheetlibrary")}
               className={`${styles.sidebar} ${activePage === 'sheetlibrary' ? styles.active : ''}`}
            >
                <img src={library}></img>
                <h4>Sheet Library</h4>
            </div>
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