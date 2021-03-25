//Global Consts
const clueHoldTime = 500;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Vars
var pattern = new Array(5);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var tries = 2;
var slowFunction;



// Start and Stop Game Functions
function startGame() {
  tries=3;
  progress=0;
  gamePlaying=true;
  
  //hide Start button but show Stop button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  //random pattern each time
  for (let i=0; i<5; i++) {
    pattern[i]=Math.ceil(Math.random()*5);
  }
  playClueSequence();
}
function stopGame() {
  gamePlaying=false;
  clearInterval(slowFunction);
  
  //hide Stop button but show Start button
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}



// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 275,
  3: 300,
  4: 325,
  5: 350
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}
//Page Initialization
//Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)



//Clue Sequence Functions
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter=0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  slow();
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("You Passed Devin's Memory Test!");
}


function slow() {
  slowFunction = setInterval(function() { 
    if (tries>1) {
      tries--;
      alert("Too slow. Try again. Tries remaining: "+tries);
    }else{
      loseGame();
    }
  }, 7000);
}




function guess(btn){
  console.log("user guessed: " + btn);
  clearInterval(slowFunction);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length-1){
        //win game
        winGame();
      }else{
        //correct pattern, add next sequence
        progress++;
        playClueSequence();
      }
    }else{
      //continue checking
      slow();
      guessCounter++;
    }
  }else{
    //lose game
    if (tries<2){
      loseGame();
    }else{
      tries--;
      alert("Try again. Tries remaining: "+tries);
      playClueSequence();
    }
  }
}