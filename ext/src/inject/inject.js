chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);

  		// ----------------------------------------------------------
  		// This part of the script triggers when page is done loading
  		console.log("Hello. This message was sent from scripts/inject.js");
  		// ----------------------------------------------------------
      if( $( 'input[type="checkbox"]' ).length ) {
        hookCheckboxes();
      }
  	}
	}, 10);
});



function hookCheckboxes() {
  $( 'body' ).on( 'change', 'input[type="checkbox"]', function() {
    if( $( this ).is( ':checked' ) ) {
      chrome.extension.sendMessage({ type: 'changelog' });
    }
  })
}
