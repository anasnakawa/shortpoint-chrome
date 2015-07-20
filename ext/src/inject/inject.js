chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
  	if (document.readyState === "complete") {
  		clearInterval(readyStateCheckInterval);

  		// ----------------------------------------------------------
  		// This part of the script triggers when page is done loading
  		console.log("Hello. This message was sent from scripts/inject.js");
  		// ----------------------------------------------------------
      hookCheckboxes();
  	}
	}, 10);
});



function hookCheckboxes() {
  $( 'body' ).on( 'change', 'input[type="checkbox"]', function() {
    if( $( this ).is( ':checked' ) && $( this ).closest( '.subscribers' ).length === 0 ) {
      chrome.extension.sendMessage({ type: 'changelog' });
    }
  })
}
