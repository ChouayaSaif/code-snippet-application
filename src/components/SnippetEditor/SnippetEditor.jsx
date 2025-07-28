import React, { useState, useEffect } from 'react';
import { SUPPORTED_LANGUAGES } from '../../utils/constants';
import './SnippetEditor.css';

function SnippetEditor({ onSave, editingSnippet, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');

  useEffect(() => {
    if (editingSnippet) {
      setTitle(editingSnippet.title);
      setDescription(editingSnippet.description);
      setLanguage(editingSnippet.language);
      setCode(editingSnippet.code);
    } else {
      setTitle('');
      setDescription('');
      setLanguage('javascript');
      setCode('');
    }
  }, [editingSnippet]);

  function handleSubmit(e) {
    e.preventDefault();
    onSave({
      title,
      description,
      language,
      code
    });
  }

  return (
    <form className="snippet-editor" onSubmit={handleSubmit}>
      <h2>{editingSnippet ? 'Edit Snippet' : 'Add New Snippet'}</h2>
      <label>Title
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </label>
      <label>Description
        <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2} />
      </label>
      <label>Language
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          {SUPPORTED_LANGUAGES.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </label>
      <label>Code
        <textarea value={code} onChange={e => setCode(e.target.value)} rows={6} required />
      </label>
      <div className="snippet-editor-actions">
        <button type="submit">{editingSnippet ? 'Update' : 'Add'} Snippet</button>
        {editingSnippet && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}

export default SnippetEditor;
