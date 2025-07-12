// AIHelper.jsx
import React, { useState } from 'react';

const AIHelper = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    try {
      setResponse('Thinking...');

      const res = await fetch('https://api.cohere.ai/v1/generate', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_COHERE_API_KEY',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'command-light',
          prompt: prompt,
          max_tokens: 300,
          temperature: 0.7,
        }),
      });

      const data = await res.json();
      setResponse(data.generations?.[0]?.text || 'No response.');
    } catch (err) {
      setResponse('Error: Something went wrong. Try again later.');
    }
  };



  const tags = [
    'What is DP?',
    'Explain Java OOPs',
    'HR questions for freshers',
    'DSA roadmap',
    'Best resume tips',
    'Explain REST API'
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <h1 style={styles.title}>AI Interview Assistant 🤖</h1>
        <p style={styles.subtitle}>Ask anything – DSA, resume help, HR questions, or coding concepts.</p>

        <textarea
          placeholder="Ask a question like: 'Explain recursion with an example'"
          style={styles.input}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button style={styles.button} onClick={handleAsk}>Ask AI</button>

        <div style={styles.tagContainer}>
          {tags.map((tag, i) => (
            <span style={styles.tag} key={i} onClick={() => setPrompt(tag)}>{tag}</span>
          ))}
        </div>

        {response && <div style={styles.response}>{response}</div>}
      </div>
    </div>
  );
};
const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f4ff', // soft blue-gray background
    color: '#111827', // dark text
    fontFamily: 'Poppins, sans-serif',
  },
  box: {
    maxWidth: '700px',
    width: '100%',
      textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#1e3a8a', // darker blue
  },
  subtitle: {
    color: '#64748b',
    marginBottom: '28px',
    fontSize: '1rem',
  },
  input: {
    width: '100%',
    height: '110px',
    backgroundColor: '#f8fafc',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    padding: '14px',
    color: '#1f2937',
    fontSize: '1rem',
    resize: 'none',
    marginBottom: '16px',
  },
  button: {
    padding: '12px 25px',
    backgroundColor: '#3b82f6',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '24px',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '30px',
  },
  tag: {
    padding: '8px 14px',
    backgroundColor: '#e0f2fe', // light blue
    borderRadius: '20px',
    border: '1px solid #93c5fd', // blue border
    fontSize: '0.9rem',
    color: '#1d4ed8',
    cursor: 'pointer',
  },
  response: {
    backgroundColor: '#f1f5f9',
    padding: '16px',
    borderRadius: '8px',
    color: '#0f172a',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
  },
};

export default AIHelper;
