// outsTracker checks for 3 outs.  When 3 outs happen, a new half inning is started
export const outsTracker = (outs) => {
	if (outs === 3) {
		return true;
	} else {
		return false;
	}
};

// Need to check when Innings get to 10, Extra innings is announced
