import { useLocalStorage } from './useLocalStorage';
import { SNIPPETS_STORAGE_KEY } from '../utils/constants';
import { v4 as uuidv4 } from 'uuid';

export function useSnippets() {
  const [snippets, setSnippets] = useLocalStorage(SNIPPETS_STORAGE_KEY, []);

  function addSnippet(snippet) {
    const newSnippet = {
      ...snippet,
      id: uuidv4(),
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    setSnippets([...snippets, newSnippet]);
  }

  function updateSnippet(id, updatedFields) {
    setSnippets(snippets.map(s =>
      s.id === id ? { ...s, ...updatedFields, updatedAt: Date.now() } : s
    ));
  }

  function deleteSnippet(id) {
    setSnippets(snippets.filter(s => s.id !== id));
  }

  return {
    snippets,
    addSnippet,
    updateSnippet,
    deleteSnippet
  };
}
