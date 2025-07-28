import React from 'react';
import './SearchBar.css';
import { SUPPORTED_LANGUAGES } from '../../utils/constants';

function SearchBar({ query, setQuery, language, setLanguage }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title, description, or code..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <select
        value={language}
        onChange={e => setLanguage(e.target.value)}
        className="search-select"
      >
        <option value="">All Languages</option>
        {SUPPORTED_LANGUAGES.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
