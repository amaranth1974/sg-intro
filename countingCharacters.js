function charCount(inputStr) {
	console.log(inputStr + " has " + inputStr.length + " characters.");
}

function charCount2(inputStr, targetChar) {
	var count = 0;
	for (var i = 0; i < inputStr.length; ++i) {
		if (inputStr[i] == targetChar) {
			++count;
		}
	}
	console.log("Search string: " + inputStr);
	console.log("Target character: " + targetChar);
	console.log("Occurances: " + count);
}

function charCount3(inputStr, targetStr) {
	var count = 0;
	var targetLength = targetStr.length;

	// this seems to prevent attempts to search through a remainder of insufficient length
	var lastIndex = inputStr.length - targetLength;
	for (var i = 0; i <= lastIndex; ++i) {
		var currentStr = inputStr.substring(i, i + targetLength);
		if (currentStr == targetStr) {
			++count;
		}
	} 
	return count;
}
