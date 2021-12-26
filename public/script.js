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

players.forEach(player=>{
  player.addEventListener('dragover',dragOver)
  player.addEventListener('dragleave',dragLeave)
  player.addEventListener('drop',dragDrop)
})

let playersArray = Array.from(players)

playersArray.forEach(player=>{
  player.addEventListener('click',f)
})

function f(){
  let i = playersArray.indexOf(this);
  playersArray[i]
}

function dragOver(){
  
  this.style['background-color'] = "#009345"
}

function dragLeave(){
  setTimeout(()=>{
    this.style['background-color'] = ""
  },5)
}

function dragDrop(e){

  e.preventDefault();
  console.log(e)

}