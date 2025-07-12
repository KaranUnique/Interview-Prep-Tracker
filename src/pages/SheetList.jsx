import { Link } from "react-router-dom";
import style from "./Sheets.module.css";
import { useState, useEffect } from "react";
import sheetsData from "../pages/sheets.json";

function SheetList({ type }) {
  const [sheetList, setSheetList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    setSheetList(sheetsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    const checkUpdate = () => {
      const latest = localStorage.getItem("sheet-last-update");
      if (latest && parseInt(latest) > timestamp) {
        setTimestamp(parseInt(latest));
      }
    };
    const interval = setInterval(checkUpdate, 1000);
    return () => clearInterval(interval);
  }, [timestamp]);

  const getProgress = (sheetId) => {
    const data = JSON.parse(localStorage.getItem(`${sheetId}-progress`));
    if (!data || typeof data !== "object") return 0;

    const completedTopics = data.completedTopics || {};
    const completedCount = Object.values(completedTopics).filter(Boolean).length;

    const sheet = sheetsData.find(s => s.id === sheetId);
    if (!sheet || !sheet.sections) return 0;

    let total = 0;
    for (const section of sheet.sections) {
      for (const topic of section.topics) {
        total += topic.subtopics?.length || 0;
      }
    }

    return total > 0 ? Math.floor((completedCount / total) * 100) : 0;
  };

  if (loading) return <p>Loading sheets...</p>;
  if (!Array.isArray(sheetList)) return <p>No sheets available.</p>;

  let filteredSheet = [];
  if (type === "popular") {
    filteredSheet = [...sheetList].sort((a, b) => b.followers - a.followers).slice(0, 10);
  } else if (type === "all") {
    filteredSheet = [...sheetList];
  } else {
    filteredSheet = sheetList.filter(sheet => sheet.category === type);
  }

  const displayedSheets = showAll ? filteredSheet : filteredSheet.slice(0, 7);

  return (
    <div className={style.sheet_container}>
      <p>
        {type === "popular"
          ? "Popular Sheets"
          : type === "all"
          ? "All Sheets"
          : `${type.toUpperCase()} Sheets`}
      </p>

      <div className={style.sheet_grid}>
        {displayedSheets.map((sheet) => {
          const progress = getProgress(sheet.id);
          return (
            <Link
              to={`/sheet/${sheet.id}`}
              key={sheet.id}
              className={style.sheet_card}
              data-percentage={`${progress}%`}
            >
              <h3>{sheet.title}</h3>
              <p>{sheet.description}</p>
              <p>{sheet.questions} Questions</p>
              <p>{sheet.followers} Followers</p>
              <button>Follow</button>
            </Link>
          );
        })}
      </div>

      {filteredSheet.length > 7 && (
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
