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
  player.addEventListener('drop',dragDropMenu);
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

function dragDropMenu(e){
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

/*

pregunta: para poder soltar un elemento en un div, el mismo tiene que tener draggable=true ?

SOLTAR ELEMENTOS EN EL CUADRO:

si arrastro el player sobre un gap: cambiar color del fondo del gap

si suelto en ese gap: 
  -append el jugador el gap
  -elimino el jugador del array y renderizo denuevo la lista. va a estar sin ese player 

si lo suelto en cualquier lado no pasa nada (vuelve a la lista)

-------

si arrastro (drag over)un player sobre otro player Y el origen (drop start?) es un player que estaba en un gap (esto en la funcion dragover que ya esta (me fijo si la clase del this contiene draw gap)) entonces: 

  -array.splice(posicion en que se solto,0 [porque no hay que borrar], player arrastrado)  .Se va a agregar debajo del jugador en el que fue dropeado (Ver si durante drop over poner el border bottom rojo por ej)

  -renderizo de de nuevo la lista

*/

let playerGaps = document.querySelectorAll('.player-gap')

playerGaps.forEach(gap=>{
  gap.addEventListener('dragover',dragOverGap);
})

