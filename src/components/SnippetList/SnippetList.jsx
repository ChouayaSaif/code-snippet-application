import React from 'react';
import SnippetCard from './SnippetCard';
import './SnippetList.css';

function SnippetList({ snippets, onEdit, onDelete }) {
  if (!snippets.length) {
    return <div className="snippet-list-empty">No snippets yet. Add your first one!</div>;
  }
  return (
    <div className="snippet-list">
      {snippets.map(snippet => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default SnippetList;
