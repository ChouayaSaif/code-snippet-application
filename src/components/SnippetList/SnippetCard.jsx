import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './SnippetList.css';

function SnippetCard({ snippet, onEdit, onDelete }) {
  return (
    <div className="snippet-card">
      <div className="snippet-header">
        <h3>{snippet.title}</h3>
        <span className="snippet-lang">{snippet.language}</span>
      </div>
      <div className="snippet-description">{snippet.description}</div>
      <SyntaxHighlighter language={snippet.language} style={vscDarkPlus} wrapLines>
        {snippet.code}
      </SyntaxHighlighter>
      <div className="snippet-actions">
        <button onClick={() => onEdit(snippet)}>Edit</button>
        <button onClick={() => onDelete(snippet.id)} className="danger">Delete</button>
      </div>
    </div>
  );
}

export default SnippetCard;
