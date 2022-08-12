import { createContext } from 'react';

const ScrollContext = createContext({
	scrollingElement: null,
	proportion: 0,
});
export default ScrollContext;
