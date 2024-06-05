/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link, .smooth").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });

	$("#copy-mail").on('click', function() {
        var textToCopy = $(this).text();
        var $copyMessage = $(this).find('.copy-message');

        // Remove the copy message from the text to copy
        textToCopy = textToCopy.replace($copyMessage.text(), '').trim();

        // Check if the clipboard API is supported
        if (navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy).then(function() {
                showCopyMessage($copyMessage);
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
            });
        } else {
            // Fallback for older browsers
            var textArea = $('<textarea>').val(textToCopy);
            $('body').append(textArea);
            textArea.focus().select();
            try {
                document.execCommand('copy');
                showCopyMessage($copyMessage);
            } catch (err) {
                console.error('Could not copy text: ', err);
            }
            textArea.remove();
        }
    });

    function showCopyMessage($messageElement) {
        $messageElement.show();
        setTimeout(function() {
            $messageElement.fadeOut();
        }, 2000);
    }
});


