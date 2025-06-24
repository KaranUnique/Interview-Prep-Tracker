import Leftsidebar from "./Leftsidebar";
function SheetLibrary( { onBack, setActivePage, activePage}) {
    console.log("workspace display")
    return (
        <><div className="container">
            <Leftsidebar setActivePage={onBack} />
            <div className="right-section">
                <h1>SheetLibrary</h1>
                <button onClick={onBack}>Back</button>
            </div>
        </div>
            
        </>
    );
}
export default SheetLibrary;