

var voice, Blueline
var alphabet,letterA,letterB,letterC,letterD,letterE,letterF, letterG, letterH, letterI, letterJ, letterK, letterL, letteKTrM, letterN, letterO, letterP, letterQ, letterR, letterS, letterT, letterU, letterV, letterW, letterX, letterY, letterZ



function preload() {
    backgroundImg = loadImage ("../Images/alphabets/Background_image/Night.jpg")

    letterA = loadImage ("./Images/alphabets/letter_a.webp")

}

function setup(){
    var canvas = createCanvas(1200,400);
    
    letterA = createSprite(280,400,9,10);


}

function draw(){
    background(backgroundImg);
   drawSprites();
}
