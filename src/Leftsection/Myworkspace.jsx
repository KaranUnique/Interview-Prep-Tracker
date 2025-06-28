import { Navigate, useNavigate } from "react-router-dom";
import Leftsidebar from "./Leftsidebar";
function Myworkspace() {
    const navigate = useNavigate();
    return (
        <><div className="container">
            <Leftsidebar/>
            <div className="right-section">
                <h1>My workspace</h1>
                <button onClick={()=> navigate(-1)}>Back</button>
            </div>
        </div>
            
        </>
    );
}
export default Myworkspace;