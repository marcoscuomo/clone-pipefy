import { createContext } from 'react';

const BoardContext = createContext({
  lists: [],
  move: () => {},
});

export default BoardContext;