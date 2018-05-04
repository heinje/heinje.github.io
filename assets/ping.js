self.addEventListener('message', function(message) {
    setTimeout(function() {
        self.postMessage('ping');
    }, 60 * 1000);
}, false);