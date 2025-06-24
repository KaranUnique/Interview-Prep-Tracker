import Leftsidebar from "./Leftsidebar";
function Myworkspace({ onBack }) {
    console.log("workspace display")
    return (
        <><div className="container">
            <Leftsidebar onWorkspaceClick={onBack} />
            <div className="right-section">
                <h1>My workspace</h1>
                <button onClick={onBack}>Back</button>
            </div>
        </div>
            
        </>
    );
}
export default Myworkspace;