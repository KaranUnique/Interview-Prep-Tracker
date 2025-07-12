import Leftsidebar from "./Leftsidebar";
import { Navigate ,useNavigate} from "react-router-dom";
function SheetLibrary() {
    const navigate = useNavigate();
    return (
        <><div className="container">
            <Leftsidebar/>
            <div className="right-section">
                <h1>SheetLibrary</h1>
                <button onClick={()=>navigate(-1)}>Back</button>
            </div>
        </div>
            
        </>
    );
}
export default SheetLibrary;