var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["dc201bca-37c6-48d3-9240-a4e5b08b4bfd","8da7e066-e982-440d-a470-f48aaedb7ee7"],"propsByKey":{"dc201bca-37c6-48d3-9240-a4e5b08b4bfd":{"name":"cuo.JPG_1","sourceUrl":null,"frameSize":{"x":79,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"qxx8vnN876S8cwIDpYpIKeFWwO09czZa","loadedFromSource":true,"saved":true,"sourceSize":{"x":79,"y":160},"rootRelativePath":"assets/dc201bca-37c6-48d3-9240-a4e5b08b4bfd.png"},"8da7e066-e982-440d-a470-f48aaedb7ee7":{"name":"Messi pro.JPG_1","sourceUrl":null,"frameSize":{"x":82,"y":85},"frameCount":1,"looping":true,"frameDelay":12,"version":"HJehHakBbJpxtyKXNugBpWNZKaDVwJke","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":85},"rootRelativePath":"assets/8da7e066-e982-440d-a470-f48aaedb7ee7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var lengendbox = createSprite(35, 310,50,10);
lengendbox.shapeColor='white';

var lengendbox2 = createSprite(185, 390,350,10);
lengendbox2.shapeColor='white';

var lengendbox3 = createSprite(245, 13,350,10);
lengendbox3.shapeColor='white';

var lengendbox4 = createSprite(6, 350,10,70);
lengendbox4.shapeColor='white';


var lengendbox5 = createSprite(64, 160,10,290);
lengendbox5.shapeColor='white';

var lengendbox9 = createSprite(356, 220,10,350);
lengendbox9.shapeColor='white';


var lengendbox6 = createSprite(376, 49,70,10);
lengendbox6.shapeColor='white';


var lengendbox7 = createSprite(180, 310,220,10);
lengendbox7.shapeColor='white';

var lengendbox8 = createSprite(240, 150,290,10);
lengendbox8.shapeColor='white';

var lengendbox10 = createSprite(180, 310,220,10);
lengendbox10.shapeColor='white';

var repawn = createSprite(33, 348,20,20);
repawn.shapeColor='green';

var cup = createSprite(389, 30,10,10);
cup.setAnimation("cuo.JPG_1");
cup.scale=0.2;

var player = createSprite(33, 348,15,15);
player.setAnimation("Messi pro.JPG_1");
player.scale=0.300000000;


 var laser1 = createSprite(97,330,10,55);
 laser1.shapeColor='blue';
 
 var laser2 = createSprite(157, 367,10,50);
laser2.shapeColor='blue';

 var laser3 = createSprite(217,330,10,55);
 laser3.shapeColor='blue';
 
 var laser4 = createSprite(269,367,10,50);
 laser4.shapeColor='blue';
   
   var ding = createSprite(105,290,10,10);
   ding.shapeColor='red';
   ding.velocityY=9;
   
   var dong = createSprite(250,167,10,10);
   dong.shapeColor='red';
   dong.velocityY=9;
   
   var ding2 = createSprite(150,170,10,10);
   ding2.shapeColor='red';
   ding2.velocityY=-9;
   
   
   var dong2 = createSprite(200,288,10,10);
   dong2.shapeColor='red'; 
   dong2.velocityY=-9;
 
 
   var ball = createSprite(208, 80,40,40);
   ball.shapeColor='yellow';
   ball.velocityY=20;
   var ball2 = createSprite(94, 72,10,10); 
   ball2.shapeColor='red';
      ball2.velocityX=20;

   var ball3 = createSprite(94, 132,10,10);  
   ball3.shapeColor='red';
      ball3.velocityX=20;

   var ball4 = createSprite(144, 110,10,10);
   ball4.shapeColor='red';
      ball4.velocityY=9;

   var ball5 = createSprite(261, 110,10,10);
   ball5.shapeColor='red';
      ball5.velocityY=-9;

  
var gameState = "serve";

var lifes = 0;

var blackbox = createSprite(320, 370,35,20);
blackbox.velocityY=5;
blackbox.velocityX=0;
blackbox.shapeColor='black';

function draw() {
background(173, 216, 230);

if (gameState === "serve") {
    text("Press keys,space to play",150,250);
}

  if (keyDown("space") &&  gameState === "serve") {
    serve();
    gameState = "play";
    player.setAnimation("Messi pro.JPG_1");
    
  } 
  

    if(keyDown(UP_ARROW)) {
    player.velocityX = 0;
    player.velocityY = -4;
  }
  if(keyDown(DOWN_ARROW)){
   player.velocityX=0;
   player.velocityY=4;
  }
  if(keyDown(LEFT_ARROW)){
   player.velocityX=-4;
   player.velocityY=0;
  }
  if(keyDown(RIGHT_ARROW)){
    player.velocityX=4;
    player.velocityY=0;
  }

createEdgeSprites();
blackbox.bounceOff(lengendbox2);
blackbox.bounceOff(lengendbox8);
 text(lifes,6,11);



  
player.collide(lengendbox);
player.collide(lengendbox2);
player.collide(lengendbox3);
player.collide(lengendbox4);
player.collide(lengendbox5);
player.collide(lengendbox6);
player.collide(lengendbox7);
player.collide(lengendbox9);
player.collide(lengendbox8);
 
ding.bounceOff(lengendbox8);
ding2.bounceOff(lengendbox8);
dong.bounceOff(lengendbox8);
dong2.bounceOff(lengendbox8);
ding.bounceOff(lengendbox7);
ding2.bounceOff(lengendbox7);
dong.bounceOff(lengendbox7);
dong2.bounceOff(lengendbox7);

ball.bounceOff(lengendbox8);
ball.bounceOff(lengendbox3);

ball2.bounceOff(lengendbox5);
ball2.bounceOff(lengendbox9);
ball3.bounceOff(lengendbox5);
ball3.bounceOff(lengendbox9);

ball4.bounceOff(lengendbox8);
ball5.bounceOff(lengendbox8);
ball4.bounceOff(lengendbox3);
ball5.bounceOff(lengendbox3);  

if (player.isTouching(laser1)||player.isTouching(laser2)||player.isTouching(laser3)||player.isTouching(laser4)||player.isTouching(blackbox)||player.isTouching(ding)||player.isTouching(ding2)||player.isTouching(dong)||player.isTouching(dong2)||player.isTouching(ball)||player.isTouching(ball2)||player.isTouching(ball3)||player.isTouching(ball4)||player.isTouching(ball5)) {
  lifes=lifes+1;
 player.x = 33;
 player.y = 348;
  
  reset();
  gameState = "serve";
}


  if (lifes === 15 ){
    gameState = "over";
    text("Game Over!",170,180);
    text("Press 'R' to Restart",150,190);
    reset();
  }
  
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    lifes = 0;
  }
 drawSprites();
}
function serve() {
  player.velocityX = 0;
  player.velocityY = 0;
}

function reset() {
  player.x = 33;
  player.y = 348;
  player.velocityX = 0;
  player.velocityY = 0;
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
