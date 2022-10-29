#ROCK PAPER SCISSORS LIZARD SPOCK GAME

The Rock Paper Scissors Lizard Spock game is an extended version of an old, classic Rock Paper Scissors game that appeared first time on a TV Show named "The Big Bang Theory". This new version of the game has provided the players with much more choices, which means that it added some complexity and fun. 

In this version, the user will play against the computer which means that he will always be able to have an opponent available to play with. The user will be presented with and choose one of the five options- Rock, Paper, Scissors, Lizard, Spock - that he will be able to click on, while the opponent (computer) will throw out a random selection. Rock Paper Scissors Lizard Game game will bring the fun to the users, and perhaps help to settle a dispute instead of going with the old way of flipping a coin.

![](docs/amiresponsive.png)

Visit the deployed site: [Rock Paper Scissors Game](https://natasamiric.github.io/rock-papper-scissors/)

## Contents

* [User Stories](#User-Stories)

* [Design](#Design)
  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)  
  * [Wireframes](#Wireframes)

* [Features](#Features)
  * [Existing features](#existing-features)
  * [Future Implementations](#futute-implementations)
  
* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used) 

* [Testing](#Testing)
  * [Validator Testing](#validator-testing)
  * [Lighthouse](#lighthouse)
  * [Testing User Stories](#testing-user-stories)
      
 * [Deployment](#Deployment)

* [Credits](#Credits)
  * [Code Used](#Code-Used)
  * [Content](#Content)
  * [Media](#Media)
  * [Acknowledgments](#Acknowledgements)

---
## User Stories

* As a visiting user, I would like to be able to choose between rock, paper and scissors.
* As a visiting user, I would like to be able to see my choice and the computer's choice.
* As a visiting user, I would like to be able to see the outcome of our moves.
* As a visiting user, I would like to be able to follow the score of the game.

## Design

### Colour Scheme

![](docs/colorpalette.png)

The chosen colors for the buttons are vibrant and bright to add a positive character and playfulness to the website. The dark grey background color provides good contrast. 

### Typography

[Google Fonts](https://fonts.google.com/) was used for the following font: 

 * Font-family: 'Luckiest Guy', cursive;

 The emojis were imported from the [Get Emoji](https://getemoji.com/).

 ### Wireframes

 Wireframes were created for the desktop and mobile.

 ![Desktop and mobile wireframe](docs/wireframes/wireframes.png)

 ## Features

### Existing features

**Header**

* Featured on the top of the page and consisting the name of the game Rock Paper Scissors Game.
* Fun font and large size of the header clearly tells the user what game they are playing.

![](docs/wireframes/header.png)

**Rules**

* Beneath the header, rules of the game Rock Paper Scissors are displayed.
* This section is valuable to the user to understand how the game is played.  

![](docs/wireframes/rules.png)

**The Game Options**

* The Game Options includes an instruction for the user to make a move and an option of three clickable buttons presented in a form of emojis for rock, paper and scissors.
* This section provides and interactive buttons where the user can make a selection and play the game. 

![](docs/wireframes/gameoptions.png)


**The Game result**

* The Game result is positioned underneath the option buttons and shows the user's and computer's choice with the announcement if a user wins or loses, or is it a tie.
* When the user makes a selection, the Java Script code randomly generates the computer's choice and the announcement of the result is presented to the user.  
* The results are valuable to the user to know what computer has selected and if he won or lost the round.  

![](docs/wireframes/result.png)

**Score**

* The score is showing user's and computer's point and updating in each round depending on who is the winner. 
* It helps the user to keep updated who leads the game and who will be the winner.   

![](docs/wireframes/score.png)

**Footer**

* Footer is located at the bottom of the page and contains the GitHub and Linkedin page of the project creator. 
* It is valuable to the creator to present herself and her work and make new connections.  

![](docs/wireframes/footer.png)

### Future Implementations

## Technologies Used

### Languages Used

HTML, CSS and Java Script were used for creating this project. 

### Programs Used

Balsamiq- was used to create wireframes.

GitHub- was used to store the project and display it on GitHub Pages.

Git -was used for version control.

[Google Fonts](https://fonts.google.com/) - was used to import the fonts used on the website.

[Get Emoji](https://getemoji.com/) - was used for importing the emojis.

Google Dev Tools - to troubleshoot and test features, and solve issues with responsiveness and styling.

[Am I Responsive?](https://ui.dev/amiresponsive) - was used to show the website image on a range of devices.

[Adobe Color](https://color.adobe.com/create/color-wheel) - was used for creating a color palette.

## Testing

Testing was conducted throughout the website development with the help of Dev Tools. External links are tested on all browsers and they are opening in a new tab and lead to intended destination. 

* I confirmed that this project is responsive, looks good and functions on standard screen sizes using the devtools device toolbar. 
* The website has been checked on multiple browsers and mobile devices:

  * Google Chrome
  * Firefox
  * Opera
  * Microsoft Edge
  * Samsung Galaxy S10+
  * Galaxy Fold
  * Samsung Galaxy S8
  * Samsung Galaxy S20 Ultra
  * Iphone 5/6/7/8
  * Iphone 12 Pro
  * Ipad Pro
  * Ipad Mini

### Validator Testing

* HTML
  * No errors returned when passing through the official W3C validator.
* CSS
  * No errors found when passing through the official Jigsaw validator.
* Java Script
  * The code has passed through the JSHint validator. 

### Lighthouse

* I run the lighthouse test for desktop and mobile to confirm that the page has good accessibility and to check other important parameters.

![](docs/testing/desktoplighthouse.png)
![](docs/testing/mobilelighthouse.png)

### Testing User Stories

## Deployment

* via Gitpod
  * Log into GitHub.
  * Make a repository from Code Institute template
  * Click the green button close to the top of the page that says Gitpod.
  * After letting Gitpod load an alert pops up on the top of the screen, click cancel.
  * Then click the button that says More Actions.
  * Hereafter click Open in Browser.
  * Now right-click with your mouse over the big box on the left that has your repository name over it.
  * Click the new file.
  * Then make an index.html file.
  * Go to the top of the index file and click ! and enter. This will make a start template.
  * Make a basic structure for your index page.
  * Click on a terminal at the bottom of the page.
  * Write 'git add .'
  * Then for your first commit write 'git commit -m "Initial commit".
  * Hereafter write 'git push'.
  * Your code has now been pushed back and saved on your GitHub repository.

* via GitHub pages
  * Log into GitHub.
  * Go to the repositories.
  * Then take this project Rock Paper Scissors.
  * Go to the settings link.
  * Then click on the pages link that is found on the navigation bar on the left side.
  * Check the source section on the page, and choose main instead of none.
  * Then click Save. After a few minutes, you can see your live GitHub page site is now deployed and the URL is shown at the top of the page.

  Live GitHub page: https://natasamiric.github.io/rock-papper-scissors/


## Credits
### Code Used
###  Media
###  Acknowledgments
