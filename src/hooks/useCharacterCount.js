import { useReducer, useCallback } from 'react';

const initialState = { text: '', characterCount: 0 };

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

export default useCharacterCount;
