import React, { useState } from 'react';
import './App.css';
import SnippetList from './components/SnippetList/SnippetList';
import SnippetEditor from './components/SnippetEditor/SnippetEditor';
import SearchBar from './components/SearchBar/SearchBar';
import { useSnippets } from './hooks/useSnippets';

function App() {
  const { snippets, addSnippet, updateSnippet, deleteSnippet } = useSnippets();
  const [editingSnippet, setEditingSnippet] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("");

  function handleAddClick() {
    setEditingSnippet(null);
    setShowEditor(true);
  }

  function handleEdit(snippet) {
    setEditingSnippet(snippet);
    setShowEditor(true);
  }

  function handleSave(snippet) {
    if (editingSnippet) {
      updateSnippet(editingSnippet.id, snippet);
    } else {
      addSnippet(snippet);
    }
    setShowEditor(false);
    setEditingSnippet(null);
  }

  function handleCancel() {
    setShowEditor(false);
    setEditingSnippet(null);
  }

  // Filtering logic
  const filteredSnippets = snippets.filter(snippet => {
    const matchesQuery =
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage = searchLanguage ? snippet.language === searchLanguage : true;
    return matchesQuery && matchesLanguage;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Snippet Manager</h1>
        <button onClick={handleAddClick} style={{marginTop: '1rem', padding: '0.5rem 1.5rem', fontSize: '1rem', borderRadius: '6px', background: '#1976d2', color: '#fff', border: 'none', cursor: 'pointer'}}>Add Snippet</button>
      </header>
      <SearchBar
        query={searchQuery}
        setQuery={setSearchQuery}
        language={searchLanguage}
        setLanguage={setSearchLanguage}
      />
      {showEditor && (
        <SnippetEditor
          onSave={handleSave}
          editingSnippet={editingSnippet}
          onCancel={handleCancel}
        />
      )}
      <SnippetList
        snippets={filteredSnippets}
        onEdit={handleEdit}
        onDelete={deleteSnippet}
      />
    </div>
  );
}

export default App;
