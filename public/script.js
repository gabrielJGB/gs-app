let players = document.querySelectorAll('.player');
let playerCells = document.querySelectorAll('.player-cell');
let playerList = document.querySelector('.player-list');
let playersArray = Array.from(players);
let playerAux,endIndex,startIndex,dragOrigin,dragAllowed;

players.forEach(player=>{
  player.addEventListener('dragover',dragOver);
  player.addEventListener('dragenter',dragOver);
  player.addEventListener('dragleave',dragLeave);
  player.addEventListener('dragstart',dragStart); 
  player.addEventListener('drop',dragDrop);
});

playerCells.forEach(cell=>{
  cell.addEventListener('dragover',dragOver);
  cell.addEventListener('dragenter',dragOver);
  cell.addEventListener('dragleave',dragLeave);
  cell.addEventListener('drop',dropCell);
});


function dragStart(e){
  
  if(this.parentNode.className == 'player-list'){
      dragOrigin = 'list';
  }
  else if(this.parentNode.classList.contains('player-cell')){
    dragOrigin = 'cell';
  }
  playerAux = this;
  startIndex = playersArray.indexOf(this);
}


function dragOver(e){
  e.preventDefault();
  // console.log(this,e.target)
  if(dragOrigin === 'list' && e.target.parentNode.classList.contains('player-cell') ){
    dragAllowed = false;
  }
  else{
    this.style['background-color'] = "#009345";
    endIndex = playersArray.indexOf(e.target);
    dragAllowed = true;
  }
}

function dragLeave(e){
  e.preventDefault();
    setTimeout(()=>{
      this.style['background-color'] = "";
    },10);
}

function dragDrop(e){
  e.preventDefault();
  // console.log(dragOrigin,dragAllowed);
  // console.log(this.parentNode.classList.contains('player-cell'),e.target.parentNode);

  if(dragAllowed){

    if(dragOrigin === "list"){
      endIndex = playersArray.indexOf(this);
      playersArray.splice(startIndex,1,this)
      playersArray.splice(endIndex,1,playerAux);
    }
    else if(dragOrigin === "cell" && !this.parentNode.classList.contains('player-cell')){
      addPlayerToList(playerAux,endIndex);
    }

    this.style['background-color'] = "";
    renderList();
  }
}


function dropCell(e){
  e.preventDefault(); 
  
  if(dragAllowed){
    this.style['background-color'] = '';
    this.append(playerAux);
    removePlayerFromList(playerAux);
    renderList();
  } 
}


function addPlayerToList(player,index){
  playersArray.splice(index,0,player)
}


function removePlayerFromList(player){
  playersArray.splice(startIndex,1)
}


function renderList(){
  playerList.replaceChildren();

  for(let i=0;i<playersArray.length;i++){
    playerList.append(playersArray[i])
  }
}

