import { useState } from 'react';

function useWindowResizeObserve(width) {
	const [isTriggered, setIsTriggered] = useState();
	window.onresize = () => {
		if (window.innerWidth <= width) {
			setIsTriggered(true);
		} else {
			setIsTriggered(false);
		}
	};

	return isTriggered;
}

export default useWindowResizeObserve;
