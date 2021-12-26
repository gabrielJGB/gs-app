/*
<div data-occupied="false" class="player-list draggable-item" >

    <% players.forEach(player=>{ %>


    
      <div data-occupied="false" class="player">
        <span data-occupied="false" class="player-ranking"><%=player.ranking%></span>.
        <img src="<%=player.flag%>" class="flag"> 
        <span data-occupied="false" class="player-name"><%=player.name%></span>
      </div>
    

    <%});%>

</div>
*/

let players = document.querySelectorAll('.player');
let playerList = document.querySelector('.player-list');

players.forEach(player=>{
  player.addEventListener('dragover',dragOver);
  player.addEventListener('dragenter',dragOver);
  player.addEventListener('dragleave',dragLeave);
  player.addEventListener('dragstart',dragStart); 
  player.addEventListener('drop',dragDrop);
})

let playersArray = Array.from(players);


playersArray.forEach(player=>{
  player.addEventListener('click',f)
})

function f(){
  let i = playersArray.indexOf(this);
  console.log(playersArray[i])
}

let playerAux,endIndex,startIndex;

function dragStart(e){
  playerAux = this;
  startIndex = playersArray.indexOf(this);
}


function dragOver(e){
  e.preventDefault();
  this.style['background-color'] = "#009345";
}

function dragLeave(e){
  e.preventDefault();
    setTimeout(()=>{
      this.style['background-color'] = "";
    },20)
}

function dragDrop(e){
  e.preventDefault();
  this.style['background-color'] = "";
  endIndex = playersArray.indexOf(this);

  playersArray.splice(startIndex,1,this)
  playersArray.splice(endIndex,1,playerAux)
  playerList.innerHTML = '';

  for(let i=0;i<playersArray.length;i++){
    playerList.append(playersArray[i])
  }
}