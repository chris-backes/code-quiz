# Code Quiz

## Website

https://chris-backes.github.io/code-quiz/

## Screenshot

![Code Quiz Screenshot](./assets/images/screencapture.png)

## Gif

<p align="center">
<img alt="gif of webpage" src="./assets/images/code-quiz.gif" />
</p>

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

## Components

The website is made up of two HTML files, a CSS file, and a JavaScript file. The file itself contains, in addition, this README, an image used for the favicon, and the image and gif used in this README.

### HTML

The HTML is two pages, whose elements, excluding those on the landing page of the index, are dynamically created in JavaScript. I've also added a favicon for the first time, peepoStudy, which is an emote frequently used on twitch.tv.

### CSS

The styling on this, while minimal, styles not just those images which populate the page when it first appears, but those elements dynamically created in the course of the quiz.

At the bottom of the sheet is the styling for the elements unique to the second page. While I could have made a second sheet to isolate the unique elements, minimal styling was needed.

### JavaScript

The Javascript is composed of functions which are called in succession after the user hits the start button. The start button calls the function throug onclick, while the remaining buttons use and addEventListener

The first function starts a timer and calls the first question. The three buttons populating the first question each call a function to check the answer, as well as call the next question. This is repeated until the fifth question, after which the function dynamically creating the end game content is called.

The high score page introduces a form for inputing initials. These initials will be stored with the score itself in the local storage.

The scoring page is displayed on a second page, which is linked both in the upper left of the index and is automatically produced upon completing the form submitting the score. The contents of the page are a table of all the scores stored in local storage.

## Final Remarks

Some of the JavaScript code is clunkier than it needs to be. Expecially with the questions, this was borne of the fact that I had originally intended to replace the event listeners each question (which had also originally called different functions depending on whether the response was correct or not). Since the eventlisterners were not being removed by the removeEventListener fucntion, I then tried to remove the button completely and re-add them. The event listerner still remained, so the code had to be re-written. As it stands, the question can be reworked to work as a single function in a recurisve loop after the elements have been put in place. Would that time were more on my side to do so.

The Local Storage function can have a variable reduced out in some fashion, but in the course of testing, attempts at doing so produced varied and incorrect results.

The concision of the styleScorePage function intimates at least the former improvement that could be made.

Early on, I had envisioned the scoring to be ordered from greatest to least, but I cannot, so far as I know, order objects by one of their respective property values.
