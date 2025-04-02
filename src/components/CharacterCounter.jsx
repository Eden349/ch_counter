import React from 'react';
import useCharacterCount from '../hooks/useCharacterCount'; 
const CharacterCounter = () => {
  const { text, characterCount, handleTextChange } = useCharacterCount();

  return (
    <div className="character-counter">
      <textarea
        value={text}
        onChange={handleTextChange}
        rows={6}
        cols={40}
        placeholder="Start typing to count characters..."
      />
      <p>Character Count: {characterCount}</p>
    </div>
  );
};

export default CharacterCounter;
