(function() {

	String.prototype.contains = function(str) {
		return this.indexOf(str) !== -1;
	};

	function hasMatchingKeywords(sourceTerms, searchTerms) {
		var itemMap = {};
		for (var i = 0, sourceLen = sourceTerms.length; i < sourceLen; i++) {
			for (var j = 0, searchLen = searchTerms.length; j < searchLen; j++) {
				if (searchTerms[j] && sourceTerms[i].contains(searchTerms[j])) {
					return true;
				}
			}
		}
		
		return false;
	}

	var cardContainer = document.getElementById('card-container');
	var cards = cardContainer.getElementsByTagName('a');

	var searchInput = document.getElementById('search-input');
	searchInput.addEventListener('input', function() {
		var searchText = this.value.toLowerCase();
		var words = searchText.split(' ');
		for (var i = 0, numCards = cards.length; i < numCards; i++) {

			if (words.length === 0 || (words.length === 1 && words[0] === '')) {
				cards[i].style.display = 'inline-block';
				continue;
			}

			for (var j = 0, numWords = words.length; j < numWords; j++) {
				var tags = cards[i].dataset.tags.split(' ');
				if (hasMatchingKeywords(tags, words)) {
					cards[i].style.display = 'inline-block';
				} else {
					cards[i].style.display = 'none';
				}
			}
		}
	});

	searchInput.focus();
})();