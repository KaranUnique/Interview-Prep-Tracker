import React, { useState } from "react";

const Compiler = () => {
  const [language, setLanguage] = useState("62"); // Default Java
  const [code, setCode] = useState(`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`);
  const [output, setOutput] = useState("No output");

  const handleRun = async () => {
    setOutput("Running...");

    try {
      const response = await fetch(
        "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "647beea457msh40ed924c2784c11p1e5df3jsn0afbab6e5e34",
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
          body: JSON.stringify({
            language_id: parseInt(language),
            source_code: code,
            stdin: "",
          }),
        }
      );

      const result = await response.json();
      console.log(result);
      const finalOutput =
        result.stdout ||
        result.stderr ||
        result.compile_output ||
        "No output returned.";

      setOutput(finalOutput);
    } catch (error) {
      setOutput("Error running code: " + error.message);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.editorContainer}>
        <div style={styles.editorPane}>
          <div style={styles.topbar}>
            <div style={styles.languageSelectWrapper}>
              <label htmlFor="language" style={styles.languageLabel}>Language:</label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={styles.languageSelect}
              >
                <option value="54">C++</option>
                <option value="62">Java</option>
                <option value="71">Python</option>
                <option value="63">JavaScript</option>
              </select>
            </div>
            <button onClick={handleRun} style={styles.runButton}>Run</button>
          </div>

          <textarea
            style={styles.editor}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div style={styles.verticalDivider}></div>

        <div style={styles.outputPane}>
          <h3 style={styles.outputTitle}>Output</h3>
          <pre style={styles.outputBox}>{output}</pre>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#f3f8ff",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  editorContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    maxWidth: "1200px",
    margin: "auto",
    marginTop: "60px",
    alignItems: "flex-start",
  },
  editorPane: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  topbar: {
    backgroundColor: "#e0e7ff",
    padding: "12px 20px",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #cbd5e1",
  },
  languageSelectWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  languageLabel: {
    fontWeight: "bold",
    color: "#1e3a8a",
  },
  languageSelect: {
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
  },
  runButton: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    padding: "8px 18px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  editor: {
    height: "400px",
    width: "100%",
    padding: "16px",
    fontSize: "14px",
    fontFamily: "monospace",
    border: "none",
    outline: "none",
    backgroundColor: "#f9fafb",
    color: "#111827",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  verticalDivider: {
    width: "2px",
    backgroundColor: "#cbd5e1",
    height: "100%",
    borderRadius: "2px",
  },
  outputPane: {
    width: "40%",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  outputTitle: {
    fontSize: "18px",
    marginBottom: "12px",
    color: "#1e3a8a",
  },
  outputBox: {
    backgroundColor: "#f1f5f9",
    borderRadius: "8px",
    padding: "16px",
    minHeight: "360px",
    color: "#334155",
    whiteSpace: "pre-wrap",
    fontFamily: "monospace",
  },
};

export default Compiler;
