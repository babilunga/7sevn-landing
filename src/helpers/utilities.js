const LOWER_LIMIT = 0.333;
const UPPER_LIMIT = 0.666;

const SCROLL_DISTANCE = 200;
const firstStep = SCROLL_DISTANCE - 50;
const secondStep = SCROLL_DISTANCE + 50 + 30;

const DISAPPEAR_RANGE = 3.65;

const DEGREE = '20deg';

export function textContentChanger([first, second, third, ...rest], proportion) {
	if (proportion <= LOWER_LIMIT) {
		return first;
	} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
		return second;
	} else if (proportion >= UPPER_LIMIT) {
		return third;
	} else {
		// :)
		return rest[Math.floor(Math.random() * rest.length)];
	}
}

export function mediaIntersectionY([first, second, third], proportion) {
	if (proportion <= LOWER_LIMIT) {
		first.style.transform = `translateY(-50%) translateX(-50%) rotate(0deg)`;
		first.style.opacity = 1;
		first.style.filter = 'blur(0px)';

		second.style.transform = `translateY(calc(-50% + ${firstStep}%)) translateX(-50%) rotate(${DEGREE})`;
		second.style.filter = 'blur(5px)';
		second.style.opacity = 0.3;

		third.style.transform = `translateY(calc(-50% + ${secondStep}%)) translateX(-50%) rotate(${DEGREE})`;
		third.style.filter = 'blur(5px)';
		third.style.opacity = 0.3;
	} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
		first.style.transform = `translateY(calc(-50% - ${firstStep}%)) translateX(-50%) rotate(${DEGREE})`;
		first.style.filter = 'blur(5px)';
		first.style.opacity = 0.3;

		second.style.transform = `translateY(-50%) translateX(-50%) rotate(0deg)`;
		second.style.opacity = 1;
		second.style.filter = 'blur(0px)';

		third.style.transform = `translateY(calc(-50% + ${firstStep}%)) translateX(-50%) rotate(${DEGREE})`;
		third.style.filter = 'blur(5px)';
		third.style.opacity = 0.3;
	} else if (proportion >= UPPER_LIMIT) {
		first.style.transform = `translateY(calc(-50% - ${secondStep}%)) translateX(-50%) rotate(${DEGREE})`;
		first.style.filter = 'blur(5px)';
		first.style.opacity = 0.3;

		second.style.transform = `translateY(calc(-50% - ${firstStep}%)) translateX(-50%) rotate(${DEGREE})`;
		second.style.filter = 'blur(5px)';
		second.style.opacity = 0.3;

		third.style.transform = `translateY(-50%) translateX(-50%) rotate(0deg)`;
		third.style.opacity = 1;
		third.style.filter = 'blur(0px)';
	}
}

export function mediaIntersectionX([first, second, third], proportion) {
	if (proportion <= LOWER_LIMIT) {
		first.style.transform = `translateX(-50%) translateY(-50%) rotate(0deg)`;
		first.style.opacity = 1;
		first.style.filter = 'blur(0px)';

		second.style.transform = `translateX(calc(-50% + ${firstStep}%)) translateY(-50%) rotate(${DEGREE})`;
		second.style.filter = 'blur(5px)';
		second.style.opacity = 0.3;

		third.style.transform = `translateX(calc(-50% + ${secondStep}%)) translateY(-50%) rotate(${DEGREE})`;
		third.style.filter = 'blur(5px)';
		third.style.opacity = 0.3;
	} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
		first.style.transform = `translateX(calc(-50% - ${firstStep}%)) translateY(-50%) rotate(${DEGREE})`;
		first.style.filter = 'blur(5px)';
		first.style.opacity = 0.3;

		second.style.transform = `translateX(-50%) translateY(-50%) rotate(0deg)`;
		second.style.opacity = 1;
		second.style.filter = 'blur(0px)';

		third.style.transform = `translateX(calc(-50% + ${firstStep}%)) translateY(-50%) rotate(${DEGREE})`;
		third.style.filter = 'blur(5px)';
		third.style.opacity = 0.3;
	} else if (proportion >= UPPER_LIMIT) {
		first.style.transform = `translateX(calc(-50% - ${secondStep}%)) translateY(-50%) rotate(${DEGREE})`;
		first.style.filter = 'blur(5px)';
		first.style.opacity = 0.3;

		second.style.transform = `translateX(calc(-50% - ${firstStep}%)) translateY(-50%) rotate(${DEGREE})`;
		second.style.filter = 'blur(5px)';
		second.style.opacity = 0.3;

		third.style.transform = `translateX(-50%) translateY(-50%) rotate(0deg)`;
		third.style.opacity = 1;
		third.style.filter = 'blur(0px)';
	}
}

export function backgroundIntersection(layer, proportion) {
	const style = {};

	if (proportion > DISAPPEAR_RANGE) {
		return {
			display: 'none',
		};
	}

	switch (layer) {
		case 'front':
			style.transform = `translateY(-${proportion * 30}%) translateX(-50%)`;
			break;
		case 'middle':
			style.transform = `translateY(${proportion * 5}%) translateX(-50%)`;
			break;
		case 'back':
			style.transform = `translateY(${proportion * 20}%) translateX(-50%)`;
			break;
		default:
			style.transform = `translateY(-${proportion * 0.8}%) translateX(-50%)`;
			break;
	}

	if (proportion > 1.8 && layer !== 'front') {
		style.opacity = 0;
	}

	return style;
}

export function heroContentIntersection(proportion) {
	if (proportion > DISAPPEAR_RANGE) {
		return {
			display: 'none',
		};
	}
	return {
		transform: `translateY(-${proportion * 12}%)`,
	};
}

export function sectionNameIntersection(proportion) {
	if (proportion < 0) {
		return {
			opacity: 0,
		};
	} else if (proportion >= 0 && proportion < 0.9) {
		return {
			opacity: 1,
		};
	} else if (proportion >= 0.9) {
		return {
			opacity: 0,
		};
	}
}

export function disappearIntersection(proportion) {
	if (proportion > 1) {
		return {
			opacity: 1 - (proportion - 1),
		};
	}
}
export function roadmapIntersection(proportion) {
	const style = {};
	const width = window.innerWidth;

	if (width > 1440) {
		style.transform = `translateX(-${70 * proportion}%) translateY(-50%)`;
	} else if (width <= 1440 && width > 1250) {
		style.transform = `translateX(-${65 * proportion}%) translateY(-50%)`;
	} else if (width <= 1250 && width > 960) {
		style.transform = `translateX(-${75 * proportion}%) translateY(-50%)`;
	} else if (width <= 960 && width > 720) {
		style.transform = `translateX(-${83 * proportion}%) translateY(-50%)`;
	} else if (width <= 720) {
		style.transform = `translateY(-${50 * proportion}%) translateX(-50%)`;
	}

	return style;
}

export function isWindowWidthEqualOrLessThan(width) {
	if (window.innerWidth <= width) {
		return true;
	} else {
		return false;
	}
}
