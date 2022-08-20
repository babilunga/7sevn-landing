const LOWER_LIMIT = 0.333;
const UPPER_LIMIT = 0.666;

const SCROLL_DISTANCE = 200;
const firstStep = SCROLL_DISTANCE - 50;
const secondStep = SCROLL_DISTANCE + 50 + 30;

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

export function mediaIntersection([first, second, third], proportion, direction) {
	const axis = direction.toUpperCase();

	if (proportion <= LOWER_LIMIT) {
		first.style.transform = `translate${axis}(-50%) rotate(0deg)`;
		first.style.opacity = 1;
		first.style.filter = 'saturate(1)';

		second.style.transform = `translate${axis}(calc(-50% + ${firstStep}%)) rotate(${DEGREE})`;
		second.style.filter = 'saturate(0.7)';
		second.style.opacity = 0.7;

		third.style.transform = `translate${axis}(calc(-50% + ${secondStep}%)) rotate(${DEGREE})`;
		third.style.filter = 'saturate(0.2)';
		third.style.opacity = 0.2;
	} else if (proportion > LOWER_LIMIT && proportion < UPPER_LIMIT) {
		first.style.transform = `translate${axis}(calc(-50% - ${firstStep}%)) rotate(${DEGREE})`;
		first.style.filter = 'saturate(0.7)';
		first.style.opacity = 0.7;

		second.style.transform = `translate${axis}(-50%) rotate(0deg)`;
		second.style.opacity = 1;
		second.style.filter = 'saturate(1)';

		third.style.transform = `translate${axis}(calc(-50% + ${firstStep}%)) rotate(${DEGREE})`;
		third.style.filter = 'saturate(0.7)';
		third.style.opacity = 0.7;
	} else if (proportion >= UPPER_LIMIT) {
		first.style.transform = `translate${axis}(calc(-50% - ${secondStep}%)) rotate(${DEGREE})`;
		first.style.filter = 'saturate(0.2)';
		first.style.opacity = 0.2;

		second.style.transform = `translate${axis}(calc(-50% - ${firstStep}%)) rotate(${DEGREE})`;
		second.style.filter = 'saturate(0.7)';
		second.style.opacity = 0.7;

		third.style.transform = `translate${axis}(-50%) rotate(0deg)`;
		third.style.opacity = 1;
		third.style.filter = 'saturate(1)';
	}
}

export function backgroundIntersection(layer, proportion) {
	const style = {};

	switch (layer) {
		case 'front':
			if (proportion > 2 && proportion < 2.5) {
				style.transform = `translateY(-${70 - proportion * 18}%) translateX(-50%)`;
			} else if (proportion >= 2.5) {
				style.transform = `translateY(-${60 - proportion * 18}%) translateX(-50%)`;
			} else if (proportion <= 2) {
				style.transform = `translateY(-${proportion * 18}%) translateX(-50%)`;
			}
			break;
		case 'middle':
			style.transform = `translateY(${proportion * 2}%) translateX(-50%)`;
			break;
		case 'back':
			style.transform = `translateY(${proportion * 15}%) translateX(-50%)`;
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
