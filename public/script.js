import {} from './ui.js';

const buttons = document.querySelectorAll('.button-info');
const modalWindow = document.querySelector('.modal-score');
const acceptButton = document.querySelector('.accept-button');
const cancelButton = document.querySelector('.cancel-button');
let matchId,matchDiv,section;


buttons.forEach(button=>{
	button.addEventListener('click',getMatchData);
});

acceptButton.addEventListener('click',getWinner);
cancelButton.addEventListener('click',hideModalWindow);

function getMatchData(){

	section = this.parentNode.parentNode.classList[1];
	matchId = this.classList[1].slice(2,4);

	matchDiv = document.querySelector(`.${section} .m${matchId}`);

	const player1 = matchDiv.children[0];
	const player2 = matchDiv.children[1];

	// if(player1.textContent == ' ' || player2.textContent == ' '){
	// 	alert('Completar jugadores');
	// }

	if(player1.textContent == ' ' || player2.textContent == ' ' ){
		player1.style['background-color'] = 'red';
		player2.style['background-color'] = 'red';
		setTimeout(()=>{
			player1.style['background-color'] = '';
			player2.style['background-color'] = '';		
		},200);

		setTimeout(()=>{
			player1.style['background-color'] = 'red';
			player2.style['background-color'] = 'red';
		},400);
		setTimeout(()=>{
			player1.style['background-color'] = '';
			player2.style['background-color'] = '';	
		},600);
	}
	else{

		let name1 = player1.querySelector('.player-name').textContent;
		let flag1 = player1.querySelector('.flag');		
		let name2 = player2.querySelector('.player-name').textContent;
		let flag2 = player2.querySelector('.flag');

		showModalWindow(name1,flag1,name2,flag2);

	}
}


function showModalWindow(name1,flag1,name2,flag2){
	modalWindow.style.display = 'block';
	const players = modalWindow.querySelectorAll('.player-option');

	players[0].children[2].textContent = name1;
	players[0].children[1].innerHTML = flag1.outerHTML;

	players[1].children[2].textContent = name2;
	players[1].children[1].innerHTML = flag2.outerHTML;

	modalWindow.querySelector('#player1').checked = false;
	modalWindow.querySelector('#player2').checked = false;


}

function hideModalWindow(){
	modalWindow.style.display = 'none';
}

function getWinner(){
	
	let selected = document.querySelector('input[name="radio1"]:checked');
	if(selected != null){
		let id = selected.id;
		let winnerDiv,winnerText;
		matchDiv.children[0].style['font-weight'] = ''; 
		matchDiv.children[1].style['font-weight'] = ''; 

		if(id=='player1'){
			console.log(matchDiv.children[1])
			matchDiv.children[1].style['font-weight'] = '100'; 
			winnerDiv = matchDiv.children[0];
			
			
		}
		else if(id=='player2'){
			console.log(matchDiv.children[0])
			matchDiv.children[0].style['font-weight'] = '100'; 
			winnerDiv = matchDiv.children[1];
			
		}
		
		winnerText = winnerDiv.outerHTML;
		winnerDiv.style['font-weight'] = 'bold';

		positionWinner(winnerText);
		hideModalWindow();
	
	}else{
		alert('Seleccionar ganador');
	}

}


function positionWinner(winner){
	
	switch (matchId) {
		case '1':	//el ganador del match 1 va a la posicion de arriba (p1) del match 9
			copyPasteWinner(winner,'.m9p1');
			break;
		case '2':	//el ganador del match 2 va a la posicion de abajo (p2) del match 9
			copyPasteWinner(winner,'.m9p2');
			break;
		case '3':
			copyPasteWinner(winner,'.m10p1');
			break;
		case '4':
			copyPasteWinner(winner,'.m10p2');
			break;
		case '5':
			copyPasteWinner(winner,'.m11p1');
			break;
		case '6':
			copyPasteWinner(winner,'.m11p2');
			break;
		case '7':
			copyPasteWinner(winner,'.m12p1');
			break;
		case '8':
			copyPasteWinner(winner,'.m12p2');
			break;
		case '9':
			copyPasteWinner(winner,'.m13p1');
			break;
		case '10':
			copyPasteWinner(winner,'.m13p2');
			break;
		case '11':
			copyPasteWinner(winner,'.m14p1');
			break;
		case '12':
			copyPasteWinner(winner,'.m14p2');
			break;
		case '13':
			if(section!='final-section'){
				copyPasteWinner(winner,'.m15p1');
			}
			break;
		case '14':
			copyPasteWinner(winner,'.m15p2');
			break;
		case '15':
			addPlayerToFinalDraw(winner);
			break;
	}

}

function copyPasteWinner(winner,placementClass){

	const sectionDiv = document.querySelector(`.${section}`);
	let placementDiv = sectionDiv.querySelector(placementClass);
	placementDiv.innerHTML = winner;
}


function addPlayerToFinalDraw(winner){
	const finalSection = document.querySelector('.final-section'); 
	let sectionId = section.slice(7,10);
	const cell = finalSection.querySelector(`.final-${sectionId}`);
	cell.innerHTML = winner;
}

/*

+reducir el espacio entre los .match usando grid area y row gap. (hacerlo en un un nuevo branch)
+que los jugadores no se puedan arrastrar a los cell de 2da 3ra y 4ta ronda. Con una clase especial en los de 1ra ronda. y uso esa clase en los add event drag y demas, asi no tienen el evento las que no tienen que tenerlo
+el radio button queda ya seleccionado.Sacarlo para que se pueda seleccionar cada vez que abro el modal. uncheck radio button js
+crear cuadro final.
+Los jugadores se agregan en orden 

-agregar campeon en un div abajo

-agregar marcador estatico

-ver lo de la api de paises para poder crear un jugador propio

-agregar buscador de apellidos.En tiempo real (ver ejercicio de frontendmentor.com api paises)

-que información guardo en la db?

-passport o firebase para el registro

*/