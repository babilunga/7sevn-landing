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
