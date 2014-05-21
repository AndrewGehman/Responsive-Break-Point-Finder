Responsive-Break-Point-Finder
=============================

Displays browser dimensions to assist in finding break points for CSS media queries


To use this script file: 

1. simply link to both the jQuery library and the responsive_break_point_finder.js
2. The browser width and height will be displayed two sets of hieght & width on the right side of the broser window.
The first set uses .innerWidth and the second set uses .width. 

In most cases, the innerWidth (displayed first) is the width you'll want to consider when testing for media query 
break points. Durin.g my testing, this matched the CSS break points on all desktop browsers (Mac & PC) except for 
Safari on Mac, which matched the .width (displayed second). 

To change the location of the output display on the screen, edit the top and right position property in the
$( 'body' ).append section of code. 

NOTE: As of this commit, I have not done significant testing on mobile browsers.  
