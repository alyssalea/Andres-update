var w;
var h;
var stories = [["Maxwell gazed at the deactivated robots","that clogged the avenue leading to the Capitol.","Strewn across the asphalt,","their placards proclaimed the slogan they’d chanted","until the army’s EMP generator terminated the march:","SLAVERY ISN’T WORKING!","It was Maxwell’s job to salvage the robots.", "Instead, she picked up a placard."],["I begin tucking him into bed and he tells me,",'“Daddy check for monsters under my bed.”',"I look underneath for his amusement", "and see him, another him, under the bed,", "staring back at me quivering and whispering,",'"Daddy there\'s somebody on my bed."'],['A father is laying in bed after just waking up,','he grabs the baby monitor and walks to his desk in his office at home,','he has his baby on the baby monitor and hears his wife singing to her,', 'he cracks a smile as he hears his wife','“Go to sleep… go to sleep…”','When suddenly the front door opens up', 'and his wife comes in with groceries.']]
var index = 0;
var storyNum = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  w = random(30,(width-500));
  h = random(50,height);
  storyNum = floor(random(0,stories.length));
  
}

function draw() {
  textAlign(LEFT);
  noCursor()
  background(0)
  noStroke()
  fill(153,153,0)
  ellipse(mouseX,mouseY,100,100)
  fill(204,204,0)
  ellipse(mouseX,mouseY,75,75)
  fill(255,255,102)
  ellipse(mouseX,mouseY,50,50)
  textSize(20)
  fill(0);
  text(stories[storyNum][index], w, h)
  
  
}
function mousePressed() {
  if(mouseX>=w && mouseX<=w+400 && mouseY<=h && mouseY>=h-100){
    w = random(30,(width-500));
    h = random(50,height);
    index += 1;
    if(index >= stories[storyNum].length){
      storyNum = floor(random(0,stories.length))
      index = 0;
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}