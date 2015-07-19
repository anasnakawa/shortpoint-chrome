// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {

    if( request.type === 'changelog' ) {
      // var delay = Math.ceil( Math.random() * 60 );
      notify( 'Reminder', 'Don\'t forget to update the change log!' );
    } else {
      chrome.pageAction.show(sender.tab.id);
    }
    sendResponse();
  }
);

// generic notification api wrapper
//
// @param {string} title
// @param {string} message
// @param {number} delay
function notify( title, message, delay ) {
  setTimeout(function() {
    chrome.notifications.create( Date.now().toString(), {
      type: 'basic',
      title: title,
      message: message,
      iconUrl: '../../icons/icon128.png'
    }, function() {
      console.log( 'notification is created' );
    })
  }, delay || 1);
}
