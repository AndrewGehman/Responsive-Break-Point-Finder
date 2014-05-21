// Notes: http://www.quirksmode.org/mobile/viewports.html
// Viewport.js - https://github.com/bjankord/viewportwidth.js/blob/master/README.md
// http://www.brettjankord.com/projects/viewportwidth/demo/



$(document).ready(function(){
	
	// appends a pair of empty divs with inline styles to body of document to display width & height of viewport
	$( 'body' ).append('<div id="first-display-title" style="position: fixed; top: 125px; right: 20px; z-index: 99999; color: #444; font-weight: bold;"> </div><br>' + 
						'<div id="window-width-iw" style="position: fixed; top: 150px; right: 20px; z-index: 99999; color: #444;"> </div><br>' + 
						'<div id="window-height-ih" style="position: fixed; top: 175px; right: 20px; z-index: 99999; color: #444;"> </div><br>' + 
						'<div id="second-display-title" style="position: fixed; top: 225px; right: 20px; z-index: 99999; color: #444;font-weight: bold;"> </div><br>' +
						'<div id="window-width-w" style="position: fixed; top: 245px; right: 20px; z-index: 99999; color: #444;"> </div><br>' + 
						'<div id="window-height-h" style="position: fixed; top: 270px; right: 20px; z-index: 99999; color: #444;"> </div>');
	
	
	// returns height & width of browser viewport on page load/refresh
		
		$( '#first-display-title' ).text(".innerWidth");
		$( '#window-height-ih' ).text("H: " + window.innerHeight);
		$( '#window-width-iw' ).text("W: " + window.innerWidth);
		
		
		$( '#second-display-title' ).text(".width");
		$( '#window-height-h' ).text("H: " + $( window ).height());
		$( '#window-width-w' ).text("W: " + $( window ).width());
	
	
		

$(window).on('resize', function () {

	//returns height & width of browser window on resize
		
		$( '#first-display-title' ).text(".innerWidth()");
		$( '#window-height-ih' ).text("H: " + window.innerHeight);
		$( '#window-width-iw' ).text("W: " + window.innerWidth);
	
	
		$( '#second-display-title' ).text(".width()");
		$( '#window-height-h' ).text("H: " + $( window ).height());
		$( '#window-width-w' ).text("W: " + $( window ).width());

	
	});

});