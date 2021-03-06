# Pre-work - *Memory Game*

**Devin's Memory Test** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Devin Ling**

Time spent: **5** hours spent in total

Link to project: (https://glitch.com/edit/#!/curvy-melodic-plot?path=README.md+%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Y] Game buttons each light up and play a sound when clicked. 
* [Y] Computer plays back sequence of clues including sound and visual cue for each button
* [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Y] User wins the game after guessing a complete pattern
* [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Y] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [Y] Computer picks a different pattern each time the game is played
* [Y] Player only loses after 3 mistakes (instead of on the first mistake)
* [Y] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [Y] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![http://g.recordit.co/C1GhnMJ3Wp.gif]


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.youtube.com/watch?v=dJl9fzbg4_A, StackOverflow website, GeeksforGeeks website, https://www.w3schools.com/jsref/met_win_setinterval.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[One of the bigger challenges I faced was getting the user to have a limited amount of time to enter their guess on each turn. The first step was to determine a function to create that acts as a 
foundation for a ???waiting time.??? I created a function called slow(); however, I did not know how to initially go about setting this necessary waiting time. I wanted the waiting time to be 7 seconds 
until a try was lost (in my project, the user had 3 tries to complete the game). I first thought that setTimeout() would help to create a 7 second time constraint for the user. Coupling it with 
clearTimeout(), my slow() function only ran once, making the user only lose one try. If another 7 seconds occurred, nothing would happen. With this issue, I attempted to put setTimeout() in some 
sort of iterative loop, but the function became unnecessarily complex while still failing to work. At this point, I decided to do some research, and found its counterpart setInterval(). setInterval() 
does the same thing as setTimeout(), but repeats itself until told to stop with clearInterval(). Using setInterval(), I was able to iteratively lose a try if the user did not press a game button for 
every 7 seconds. I also made sure that if the user had no more tries left, the game would be over. One last touch I made sure to add was losing a try if the user did nothing for 7 seconds at any 
point during a sequence. For instance, if the sequence contained 4 buttons and the user was on his/her second button, the user could still lose a try if they did not choose a button for 7 seconds.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[After completing this pre-work, I realize that there is so much I could do with only a few basics. It makes me wonder how far I could go with the more knowledge I have. I have mentioned that my 
end goal is to work as a video game developer, so I also wonder how complex a game program can get with only this type of web development. Another big reason for why I want to participate in the 
SITE program is to explore the multitude of pathways in tech. Are there different types of web development, and if so, are there specific pathways that web developers can take depending on their interests? 
I will admit that my knowledge on web development is not as wide as it could be, but I have learned that the possibilities are certainly endless. From coding a simple memory game to the development of 
large businesses, web development has only furthered my passion for tech.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I did have a few more hours to work on this project, I would definitely add some sort of introduction with it. I know that small projects like these can be developed into something more aesthetically 
pleasing, so I would aim to have different scenes. For instance, the first scene would include the introduction, the author, the title, and a large button to enter the game. This button would go into the 
next scene, where the actual game is located. Assuming everything runs perfectly, there would be two more screens, one for losing and one for winning. Either screen would replace the game screen once the 
game is finished. This would be better instead of a small notification at the top that simply says ???Game Over,??? or something similar. There could also be a ???Retry??? button, which would allow users to play 
again, whether they won or lost. Aside from aesthetics, I would target the game???s design, adding transitions from scene to scene, or allowing an ???X??? to pop up if a try was lost. This would also affect the 
number of tries that they have, which could be represented in the corner of the game scene as three hearts. An ???X??? would overlay a heart when a try is lost.]



## License

    Copyright [Devin Ling]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
