// challenge 1: Your age in days


function ageInDays()
{
    var birthYear = prompt('When year you born?');
    var ageInDayss = (2020-birthYear) *365;
    var h1=document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss+' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
  
}

function reset ()
{
    document.getElementById('ageInDays').remove();
    
}

//challenge 2
function generateCat()
{
    var image = document.createElement('img');
    var div= document.getElementById('flex-cat-gen');
    image.src = "\cat.jpg";
    div.appendChild(image);
           
}

//challenge 3: Rock,paper,scissors

function rpsGame(yourChoice){
    console.log(yourChoice);
    
    var humanChoice,botChoice;
   humanChoice = yourChoice.id;
   botChoice = numberToChoice(randToRpsInt());
   results = decideWinner(humanChoice,botChoice);//[1,0]

  

  message = finalMessage(results);//{message:'You win'.color: green}
  rpsFrontEnd(yourChoice.id, botChoice, message);

}


function   randToRpsInt()
{
    return Math.floor(Math.random()*3);
}


function numberToChoice(number)
{
    return ['rock','paper','scissors'][number]
}



function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase = {
        'rock' : {'scissors':1,'rock':0.5,'paper':0},
        'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 },
    }

    var yourScore= rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice]; 
    

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore])
{
    if(yourScore===0)
       return {'message':'You lost!','color':'red'};
    else if(yourScore===0.5)
        return { 'message': 'You tied!', 'color': 'yellow' };
    else
        return { 'message': 'You Won!', 'color': 'green' };
    
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage)
{
    var imageDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src

    }
    // let's remove all the image

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();



    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');


       humanDiv.innerHTML = "<img src='"+imageDatabase[humanImageChoice] + "'>";

       document.getElementById('flex-box-rps-div').appendChild(humanDiv);




}
