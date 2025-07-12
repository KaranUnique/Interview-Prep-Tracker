import React from "react";
import styles from "./LeaderBoard.module.css";

const topUsers = [
  {
    name: "Pratham Lashkari",
    username: "@Pratham",
    avatar: "https://avatars.githubusercontent.com/u/1?v=4",
    cscore: 886.85,
    rank: 1,
    institution: "Sushila Devi Bansal College of Technology",
  },
  {
    name: "Rajat Joshi",
    username: "@Rajat.18",
    avatar: "https://avatars.githubusercontent.com/u/2?v=4",
    cscore: 885.38,
    rank: 2,
    institution: "IIT Delhi",
  },
  {
    name: "Anuj Singh",
    username: "@as828",
    avatar: "https://avatars.githubusercontent.com/u/3?v=4",
    cscore: 879.97,
    rank: 3,
    institution: "NIT Trichy",
  },
];

const LeaderBoard = () => {
  return (
    <div className={styles.leaderboardContainer}>
      <h1 className={styles.leaderboardTitle}>🏆 Leaderboard</h1>

      {/* Tabs */}
      <div className={styles.tabBar}>
        <button className={`${styles.tab} ${styles.tabActive}`}>C Score</button>
        <button className={styles.tab}>Total Questions</button>
        <button className={styles.tab}>Leetcode Rating</button>
        <button className={styles.tab}>Codeforces Rating</button>
      </div>

      {/* Top 3 Users */}
      <div className={styles.topUsers}>
        {topUsers
          .sort((a, b) => a.rank - b.rank)
          .map((user, idx) => (
            <div
              key={user.username}
              className={styles.topCard}
              style={
                user.rank === 1
                  ? { border: "2px solid #f59e0b", boxShadow: "0 0 15px rgba(245, 158, 11, 0.3)" }
                  : {}
              }
            >
              <img src={user.avatar} alt={user.name} />
              <h3>{user.name}</h3>
              <span>{user.username}</span>
              <div className={styles.scoreValue}>{user.cscore}</div>
              <div className={styles.rankLabel}>
                #{user.rank} {user.rank === 1 ? "🥇" : ""}
              </div>
            </div>
          ))}
      </div>

      {/* Alert */}
      <div className={styles.rankAlert}>
        Curious where you stand? <strong>Create your profile</strong> to view your rank and rise on
        the leaderboard.
      </div>

      {/* Full Table */}
      <table className={styles.rankingTable}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Institution</th>
            <th>Rank</th>
            <th>C Score</th>
          </tr>
        </thead>
        <tbody>
          {topUsers.map((user) => (
            <tr key={user.username}>
              <td>{user.name}</td>
              <td>{user.institution}</td>
              <td>
                #{user.rank} {user.rank === 1 ? "🥇" : ""}
              </td>
              <td>{user.cscore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
