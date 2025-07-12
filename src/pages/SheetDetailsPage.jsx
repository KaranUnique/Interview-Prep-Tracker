import { useParams } from "react-router-dom";
import style from "./SheetDetail.module.css";
import gfg from "../assets/gfg.svg";
import leetcode from "../assets/leetcode.svg";
import youtube from "../assets/youtube.svg";
import { useState, useEffect } from "react";

function SheetDetail() {
  const { sheetId } = useParams();
  const [sheet, setSheet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completedTopics, setCompletedTopics] = useState({});
  const [followed, setFollowed] = useState(false);

  const sheetFiles = import.meta.glob("/src/pages/*.json");

  useEffect(() => {
    const loadSheet = async () => {
      const path = `/src/pages/${sheetId}.json`;
      if (sheetFiles[path]) {
        const module = await sheetFiles[path]();
        setSheet(module.sheets[0]);

        const saved = localStorage.getItem(`${sheetId}-progress`);
        if (saved) {
          const data = JSON.parse(saved);
          setFollowed(data.followed || false);
          setCompletedTopics(data.completedTopics || {});
        }
      }
      setLoading(false);
    };

    loadSheet();
  }, [sheetId]);

  const totalSubtopics = sheet?.sections?.reduce(
    (acc, section) =>
      acc +
      section.topics.reduce(
        (subAcc, topic) => subAcc + (topic.subtopics?.length || 0),
        0
      ),
    0
  ) || 0;

  const completedCount = Object.values(completedTopics).filter(Boolean).length;

  useEffect(() => {
    if (followed) {
      const percentage =
        totalSubtopics > 0
          ? Math.round((completedCount / totalSubtopics) * 100)
          : 0;

      localStorage.setItem(
        `${sheetId}-progress`,
        JSON.stringify({
          followed: true,
          completedTopics,
          percentage,
        })
      );

      localStorage.setItem("sheet-last-update", Date.now().toString());
    }
  }, [completedTopics, completedCount, followed, sheetId, totalSubtopics]);

  const handleCompleteToggle = (sectionIdx, topicIdx, subIdx) => {
    if (!followed) return;
    const key = `${sectionIdx}-${topicIdx}-${subIdx}`;
    setCompletedTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFollow = () => {
    if (followed) {
      localStorage.removeItem(`${sheetId}-progress`);
      setFollowed(false);
      setCompletedTopics({});
    } else {
      setFollowed(true);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!sheet) return <p>Sheet not found</p>;

  return (
    <div className={style.sheet_detail}>
      <h1>{sheet.title}</h1>
      <p>{sheet.description}</p>

      <div className={style.stats}>
        <p><strong>{sheet.questions}</strong> Questions</p>
        <p><strong>{sheet.followers}</strong> Followers</p>
        <p><strong>{completedCount}</strong> / {totalSubtopics} Completed</p>
      </div>

      <div className={style.followWrapper}>
        <button
          onClick={handleFollow}
          className={followed ? style.followedBtn : style.followBtn}
        >
          {followed ? "Unfollow" : "Follow"}
        </button>
        {!followed && (
          <span className={style.followNote}>
            *Follow to access questions & resources
          </span>
        )}
      </div>

      <div className={style.sections}>
        {sheet.sections?.map((section, sectionIdx) => (
          <div key={sectionIdx} className={style.sectionBlock}>
            <div className={style.sectionHeader}>
              <p>{section.title}</p>
            </div>
            {section.topics.map((topic, topicIdx) => (
              <div key={topicIdx} className={style.topics}>
                <div className={style.topicTitle}>{topic.title}</div>
                <ul className={style.subtopics}>
                  {topic.subtopics?.map((sub, subIdx) => {
                    const key = `${sectionIdx}-${topicIdx}-${subIdx}`;
                    const completed = completedTopics[key];
                    return (
                      <li key={subIdx} className={style.subtopicItem}>
                        <span
                          className={`${style.round} ${!followed ? style.disabled : ""}`}
                          data-completed={completed}
                          onClick={() =>
                            handleCompleteToggle(sectionIdx, topicIdx, subIdx)
                          }
                          title={followed ? "Click to mark solved" : "Follow to mark"}
                        ></span>
                        <span className={style.subTitle}>{sub.title}</span>
                        <span className={style.icons}>
                          {["gfg", "leetcode", "youtube"].map((platform) =>
                            sub.links?.[platform] ? (
                              followed ? (
                                <a
                                  key={platform}
                                  href={sub.links[platform]}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img
                                    src={
                                      platform === "gfg"
                                        ? gfg
                                        : platform === "leetcode"
                                        ? leetcode
                                        : youtube
                                    }
                                    alt={platform}
                                    className={style.icon}
                                  />
                                </a>
                              ) : (
                                <img
                                  key={platform}
                                  src={
                                    platform === "gfg"
                                      ? gfg
                                      : platform === "leetcode"
                                      ? leetcode
                                      : youtube
                                  }
                                  alt={platform}
                                  className={`${style.icon} ${style.disabledIcon}`}
                                />
                              )
                            ) : null
                          )}
                        </span>
                        <span className={style.difficultyTag}>
                          {sub.difficulty}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {completedCount === totalSubtopics && (
        <div className={style.completeMessage}>
          🎉 Congratulations! You’ve completed all the topics in this sheet!
        </div>
      )}
    </div>
  );
}

export default SheetDetail;
