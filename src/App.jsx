import React, { useState, useReducer, useCallback, useEffect } from 'react';
import './styles/characterCounter.css';


const textReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        text: action.payload,
        characterCount: action.payload.length,
      };
    default:
      return state;
  }
};


const useCharacterCount = () => {
  const initialState = { text: '', characterCount: 0 };
  const [state, dispatch] = useReducer(textReducer, initialState);

  const handleTextChange = useCallback((event) => {
    const updatedText = event.target.value;
    dispatch({ type: 'SET_TEXT', payload: updatedText });
  }, []);

  return {
    text: state.text,
    characterCount: state.characterCount,
    handleTextChange,
  };
};

const App = () => {
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

export default App;
