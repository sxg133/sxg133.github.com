(function() {

	function getKeyID(keyCode){
		var charstr = String.fromCharCode(keyCode);
		if (charstr 
			&& charstr.length > 0 
			&& keyCode >= 48 && keyCode <= 90
			&& !(keyCode > 57 && keyCode < 65)) {
			return 'char-' + charstr;
		}
		return 'keycode-' + keyCode;
	}

	function getKeys(keyEvent) {
		if (keyEvent.keyCode == 17) {
			return [
				document.getElementById('ctrl-right'),
				document.getElementById('ctrl-left')
			];
		} else if (keyEvent.keyCode == 16) {
			return [
				document.getElementById('shift-right'),
				document.getElementById('shift-left')
			];
		} else if (keyEvent.keyCode == 18) {
			return [
				document.getElementById('alt-right'),
				document.getElementById('alt-left')
			];
		} else {
			var keyID = getKeyID(keyEvent.keyCode);
			var key = document.getElementById(keyID);
			return [key];
		}
	}

	function highlightKey(key) {
		if (key && key.className.indexOf('pressed') == -1) {
			key.className = key.className.trim() + ' pressed';
		}
	}

	function clearKey(key) {
		if (key && key.className.indexOf('pressed') != -1) {
			key.className = key.className.replace(/pressed/g, '').trim();
		}
	}

	window.onkeydown = function(e) {
		var keys = getKeys(e);
		for (var i=0, ii=keys.length; i<ii; i++) {
			highlightKey(keys[i]);
		}
	}

	window.onkeyup = function(e) {
		var keys = getKeys(e);
		for (var i=0, ii=keys.length; i<ii; i++) {
			clearKey(keys[i]);
		}
	}

})();