# FSJS-Project-4-OOP-Game-Show-App
 Full Stack JavaScript Project 4 - OOP Game Show App

Hello! I've noted some customisations here. I've tried to stay similar to the original design, but put in a few custom colours and transitions. These are commented within the CSS.

I have adjusted the following: 

1. Added animated gradient text
1.1. Updated the css root variables
1.2. Implemented a background keyframe animation
1.3. Applied the animated gradient to the .show class and all h2 elements

2. Added button hover feedback. Buttons enlarge when hovered over.

3. Customised background colours.
3.1. Background on the body is made dark for contrast with the gradient text
3.2. Background for the .win class is darkened
3.3. Background for the .lose class is darkened

4. Space between words is increased for contrast.

These styles are all added at the bottom of the CSS file, instead of changing the source code. This allows the cascade to override the styles, and allows the additions to be deleted to restore it to its initial style.

Other additions:

5. I replaced the heart .png icons with some .svgs. I wanted to custom style the images with svg styling, but realised that may complicate things for my marker. So, now there's a funky little skull when you lose a life. 

6. I added an additional feature in the gameOver() method in the Game class that displays the phrase the player was asked to solve in the DOM.