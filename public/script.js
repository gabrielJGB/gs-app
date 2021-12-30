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

	if(player1.textContent == ' ' || player2.textContent == ' '){
		alert('Agregar jugadores');
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
	const players =modalWindow.querySelectorAll('.player-option');

	players[0].children[2].textContent = name1;
	players[0].children[1].innerHTML = flag1.outerHTML;

	players[1].children[2].textContent = name2;
	players[1].children[1].innerHTML = flag2.outerHTML;

}

function hideModalWindow(){
	modalWindow.style.display = 'none';
}

function getWinner(){
	
	let selected = document.querySelector('input[name="radio1"]:checked');
	let id = selected.id;
	let winner;

	if(id=='player1'){
		winner = matchDiv.children[0];
	}
	else if(id=='player2'){
		winner = matchDiv.children[1];
	}

	positionWinner(winner);
	hideModalWindow();
}


function positionWinner(winner){
	// section

	switch (matchId) {
		case 1:
			
			break;
		case 2:
			
			break;
		case 3:
			
			break;
		case 4:
			
			break;
		case 5:
			
			break;
		case 6:
			
			break;
		case 7:
			
			break;
		case 8:
			
			break;
		case 9:
			
			break;
		case 10:
			
			break;
		case 11:
			
			break;
		case 12:
			
			break;
		case 13:
			
			break;
		case 14:
			
			break;
		case 15
			
			break;

		default:
			// statements_def
			break;
	}

}

