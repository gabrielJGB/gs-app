var el = document.getElementById('items');



new Sortable(el, {
    animation: 200,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    emptyInsertThreshold: 5,
    ghostClass: 'blue-background-class',
    chosenClass: "chosen",
    dragoverBubble:true,
    sortable:true

});