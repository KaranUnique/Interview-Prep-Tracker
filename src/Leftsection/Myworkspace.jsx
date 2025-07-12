import React from "react";
import styles from "./Myworkspacedesign.module.css";
import Leftsidebar from "./Leftsidebar";
import welcomeIllustration from "../assets/welcome-illustration.svg";
import rocket from "../assets/rocket.svg";

function Myworkspace() {
  return (
    <div className={styles.workspaceContainer}>
      {/* Fixed Sidebar wrapper */}
      <div className={styles.workspaceSidebar}>
        <Leftsidebar />
      </div>

      {/* Main content area */}
      <div className={styles.workspaceMain}>
        <div className={styles.workspaceHeader}>
          <div>
            <h1 className={styles.workspaceTitle}>👋 Welcome Back!</h1>
            <p className={styles.workspaceSubtitle}>Your interview prep dashboard</p>
          </div>
          <img src={welcomeIllustration} alt="Welcome" className={styles.welcomeImage} />
        </div>

        {/* Sections */}
        <div className={styles.workspaceSection}>
          <h2 className={styles.workspaceSectionTitle}>📌 Followed Sheets</h2>
          <div className={styles.workspaceSheetGrid}>
            <div className={styles.workspaceSheetCard}>
              <div className={styles.workspaceSheetTitle}>Striver SDE Sheet</div>
              <div className={styles.workspaceProgressBar}>
                <div className={styles.workspaceProgressFill} style={{ width: '68%' }}></div>
              </div>
              <div className={styles.workspaceProgressText}>68% completed</div>
            </div>
            <div className={styles.workspaceSheetCard}>
              <div className={styles.workspaceSheetTitle}>Love Babbar DSA Sheet</div>
              <div className={styles.workspaceProgressBar}>
                <div className={styles.workspaceProgressFill} style={{ width: '42%' }}></div>
              </div>
              <div className={styles.workspaceProgressText}>42% completed</div>
            </div>
          </div>
        </div>

        <div className={styles.workspaceSection}>
          <h2 className={styles.workspaceSectionTitle}>✅ Recently Completed</h2>
          <ul className={styles.workspaceTopicList}>
            <li className={styles.workspaceTopicItem}>
              <span className={styles.workspaceTopicTitle}>Binary Search on Rotated Array</span>
              <span className={styles.workspaceTopicDate}>2025-07-02</span>
            </li>
            <li className={styles.workspaceTopicItem}>
              <span className={styles.workspaceTopicTitle}>Detect Cycle in Directed Graph</span>
              <span className={styles.workspaceTopicDate}>2025-07-01</span>
            </li>
          </ul>
        </div>

        <div className={styles.workspaceSection}>
          <h2 className={styles.workspaceSectionTitle}>📚 Saved Resources</h2>
          <ul className={styles.workspaceTopicList}>
            <li className={styles.workspaceTopicItem}>
              <span className={styles.workspaceTopicTitle}>📌 Dynamic Programming Patterns</span>
            </li>
            <li className={styles.workspaceTopicItem}>
              <span className={styles.workspaceTopicTitle}>📌 Cracking the Coding Interview PDF</span>
            </li>
          </ul>
        </div>

        <div className={styles.workspaceSection}>
          <h2 className={styles.workspaceSectionTitle}>🚀 Quick Links</h2>
          <div className={styles.workspaceQuickLinks}>
            <a href="#" className={styles.quickLink}>📄 Resume Builder</a>
            <a href="#" className={styles.quickLink}>🧪 Mock Contests</a>
            <a href="#" className={styles.quickLink}>💡 System Design Prep</a>
            <a href="#" className={styles.quickLink}>🍭 CSES Practice Set</a>
          </div>
          <div className={styles.rocketIllustrationWrapper}>
            <img src={rocket} alt="rocket" className={styles.rocketImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myworkspace;
