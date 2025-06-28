import UseFetch from "../UseFetch";
import { Link } from "react-router-dom";
import style from "./Sheets.module.css";
import { useState } from "react";

function SheetList({ type }) {
    const [SheetList, loading] = UseFetch('http://localhost:3001/sheets');
    const [showAll, setShowAll] = useState(false);

    if (loading) return <p>Loading sheets...</p>;
    if (!SheetList || !Array.isArray(SheetList)) return <p>No sheets available.</p>;

    let filteredSheet = [...SheetList];

    if (type === "popular") {
        filteredSheet = filteredSheet
            .sort((a, b) => b.followers - a.followers)
            .slice(0, 10);
    }

    // Show 7 or all (only for 'all')
    const displayedSheets = type === "popular"
        ? filteredSheet.slice(0, showAll ? 10 : 7)
        : showAll
            ? filteredSheet
            : filteredSheet.slice(0, 7);

    return (
        <div className={style.sheet_container}>
            <p>{type === "popular" ? "Popular Sheets" : "All Sheets"}</p>
            <div className={style.sheet_grid}>
                {displayedSheets.map((sheet) => (
                    <Link to={`/sheet/${sheet.id}`} key={sheet.id} className={style.sheet_card}>
                        <h3>{sheet.title}</h3>
                        <p>{sheet.description}</p>
                        <p>{sheet.questions} Questions</p>
                        <p>{sheet.followers} Followers</p>
                        <button>Follow</button>
                    </Link>
                ))}
            </div>

            {/* Toggle button only if type is not "popular" OR if it's popular but < 20 */}
            {(type !== "popular" || filteredSheet.length > 7) && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <p
                        onClick={() => setShowAll(!showAll)}
                        style={{
                            padding: '10px 20px',
                            color: 'black',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '17px'
                        }}
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </p>
                </div>
            )}
        </div>
    );
}

export default SheetList;
