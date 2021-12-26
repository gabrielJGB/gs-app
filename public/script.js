 const players = document.querySelectorAll('.player');
  const playersList = document.querySelector('.player-list');
  const gaps = document.querySelectorAll('.player-gap');
  let drag = ''


  var el = document.querySelector('.player-list');

// var match = document.querySelectorAll('.player-gap')



 
Sortable.create(el, {
    sort: true,
    animation: 0,
    // removeCloneOnHide: true, 
    // swap: true, // Enable swap plugin
    // swapClass: 'highlight', // The class applied to the hovered swap item
    // ghostClass: "sortable-ghost",  // Class name for the drop placeholder
  chosenClass: "sortable-chosen",  // Class name for the chosen item
  // dragClass: "sortable-drag",
  easing: "cubic-bezier(1, 0, 0, 1)",

  // onMove: function (/**Event*/evt, /**Event*/originalEvent) {
    
  // },

});


// let playerGap = document.querySelectorAll('.player-gap');




// playerGap.forEach(gap=>{
//   let item = Sortable.create(gap,{
//       animation: 0,
//       group:"items",
//       ghostClass: "sortable-ghost",
      
//       // onAdd: function (/**Event*/evt) {
//       //   evt.target.dataset.occupied = "true";
       

//       //   // var state = gap.option("disabled"); // get
//       //   // gap.option("disabled", !state);
//       //   item.option('disabled',true)

//       // },
//       // onRemove: function (/**Event*/evt) {
//       //  evt.target.dataset.occupied = "false";
//       //  item.option('disabled',false);
//       // },

//   })
// })



  // players.forEach(player=>{
  //   player.addEventListener('dragstart', dragStart);
  //   player.addEventListener('dragend', dragEnd);
  // })



  players.forEach(player=>{
      // gap.addEventListener('dragover', dragOver);
      // player.addEventListener('dragenter', dragEnter);
      // gap.addEventListener('dragleave', dragLeave);
      player.addEventListener('drop', dragDrop);
      
    })


  // function dragOver(e){
  //   e.preventDefault();
    
  // }

  function dragEnter(e){
    e.preventDefault();
    this.style['background-color'] = 'red';
  }

  function dragLeave(e){
    e.preventDefault();
    this.style['background-color'] = '';
    
  }

function dragDrop(e){
  e.preventDefault();

    console.log(this,e.target);
}


  // function dragDrop(e){
  //   this.style['background-color'] = '';
  //   this.appendChild(drag)
  //   console.log(this)
  //   }
  //   this.style['background-color'] = '';

  //   if(this.parentNode.classList.contains('player-list')){
  //     console.log(this)
  //   }
  //   else if(this.parentNode.classList.contains('match')){
  //     console.log(this.parentNode.classList,this,e.target)
  //   }

    // if(this.parentNode.classList.contains('player-list')){
    //     // playersList.textContent += drag;

    // }


    // // if(e.target.className != 'player'){
    // //   this.append(drag);
    // // }

    

    // if(drag.parentElement.classList.contains('draw-gap')){      
    //   drag.style['background-color'] = '';
    //   drag.style.color = 'white';
    //   drag.style['border-bottom'] = 'solid 2px #060606';
    //   drag.style.padding = '9px 7px';
    //   drag.style['font-size'] = '15px'
    // }
    // else{
      
    //   drag.style['background-color'] = '#ffffff00';
    //   drag.style.color = 'black';
    //   drag.style['border-bottom'] = 0;
    //   drag.style.padding = '4px 36px 3px 2px';
    //   drag.style['font-size'] = '14px';
    //   this.append(drag);
    // }

  // }

  // function dragStart(){
  //   // setTimeout(()=>{
  //     // this.className = 'invisible'
  //   // },100);
    
    
  // }

  // function dragEnd(e){
  //   // this.className = 'player'
    
  // }





