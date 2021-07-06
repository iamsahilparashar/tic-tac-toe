function playWithComputer(){
    alert(`😥sorry computer is not ready! \n     please play with Human Being`);
}
function playWithHB(){
    // document.getElementById('playersname').style.display="none";
    document.getElementById('human').style.display="flex";


}
// {
    //     var player1=document.form.player1.value;
    //     var player2=document.form.player2.value;
    //     console.log(player1);
    //     console.log(player2);
    // }
    
    // function playername(){
        //     document.getElementById('form').style.display="none";
        //     document.getElementById('human').style.display="flex";
        // }
        
        
        // document.getElementById('player1name').innerHTML=player1;
        // document.getElementById('player2name').innerHTML=player2;
        
    document.getElementById("img1").style.display="none";
	document.getElementById("img2").style.display="none";
	document.getElementById("img3").style.display="none";
	document.getElementById("img4").style.display="none";
	document.getElementById("img5").style.display="none";
	document.getElementById("img6").style.display="none";
	document.getElementById("img7").style.display="none";
	document.getElementById("img8").style.display="none";
	document.getElementById("img9").style.display="none";
    document.getElementById('demo').style.display="none";


    var cross_src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
    var zero_src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";

function result() {
	var img1, img1, img3, img4, img5, img6, img7, img8, img9;
	img1 = document.getElementById("img1").src;
	img2 = document.getElementById("img2").src;
	img3 = document.getElementById("img3").src;
	img4 = document.getElementById("img4").src;
	img5 = document.getElementById("img5").src;
	img6 = document.getElementById("img6").src;
	img7 = document.getElementById("img7").src;
	img8 = document.getElementById("img8").src;
	img9 = document.getElementById("img9").src;
    document.getElementById('demo').style.display="block";

	console.log(img1);
	console.log(img2);
	
	if ((img1 == cross_src) && (img2 == cross_src) && (img3 == cross_src)) {
		document.getElementById('demo').innerHTML = "Player X won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player X won');
	}
	else if ((img1 == cross_src) && (img4 == cross_src) && (img7 == cross_src)) {
		document.getElementById('demo').innerHTML = "Player X won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player X won');
	}
	else if ((img7 == cross_src) && (img8 == cross_src) && (img9 == cross_src)){
		document.getElementById('demo').innerHTML = "Player X won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player X won');
	}
	else if ((img3 == cross_src) && (img6 == cross_src) && (img9 == cross_src)) {
		document.getElementById('demo').innerHTML = "Player X won";
        document.getElementById('turny').style.display="none";     
	    document.getElementById('turnx').style.display="none"; 
		alert('Player X won');
	}
	else if ((img1 == cross_src) && (img5 == cross_src) && (img9 == cross_src)) {
		document.getElementById('demo').innerHTML = "Player X won";
        document.getElementById('turny').style.display="none";     
	    document.getElementById('turnx').style.display="none"; 
		alert('Player X won');
	}
	else if ((img3 == cross_src) && (img5 == cross_src) && (img7 == cross_src)){
		document.getElementById('demo').innerHTML = "Player X won";
        document.getElementById('turny').style.display="none";     
       	document.getElementById('turnx').style.display="none"; 
		alert('Player X won');
	}
	else if ((img2 == cross_src) && (img5 == cross_src) && (img8 == cross_src)) {
		document.getElementById('demo').innerHTML = "Player X won";
        document.getElementById('turny').style.display="none";     
	    document.getElementById('turnx').style.display="none"; 
		alert('Player X won');
	}
	else if ((img4 == cross_src) && (img5 == cross_src) && (img6 == cross_src)) {
		document.getElementById('demo').innerHTML = "Player X won";
        document.getElementById('turny').style.display="none";     
	    document.getElementById('turnx').style.display="none"; 
		alert('Player X won');
	}

   
	else if ((img1 == zero_src) && (img2 == zero_src) && (img3 == zero_src)) {
		document.getElementById('demo').innerHTML = "Player 0 won";
        document.getElementById('turny').style.display="none";     
	    document.getElementById('turnx').style.display="none"; 
		alert('Player 0 won');
	}
	else if ((img1 == zero_src) && (img4 == zero_src) && (img7 == zero_src)) {
		document.getElementById('demo').innerHTML = "Player 0 won";
        document.getElementById('turny').style.display="none";     
    	document.getElementById('turnx').style.display="none"; 
		alert('Player 0 won');
	}
	else if ((img7 == zero_src) && (img8 == zero_src) && (img9 == zero_src)){
		document.getElementById('demo').innerHTML = "Player 0 won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player 0 won');
	}
	else if ((img3 == zero_src) && (img6 == zero_src) && (img9 == zero_src)) {
		document.getElementById('demo').innerHTML = "Player 0 won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player 0 won');
	}
	else if ((img1 == zero_src) && (img5 == zero_src) && (img9 == zero_src)) {
		document.getElementById('demo').innerHTML = "Player 0 won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player 0 won');
	}
	else if ((img3 == zero_src) && (img5 == zero_src) && (img7 == zero_src)){
		document.getElementById('demo').innerHTML = "Player 0 won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player 0 won');
	}
	else if ((img2 == zero_src) && (img5 == zero_src) && (img8 == zero_src)) {
		document.getElementById('demo').innerHTML = "Player 0 won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player 0 won');
	}
	else if ((img4 == zero_src) && (img5 == zero_src) && (img6 == zero_src)) {
		document.getElementById('demo').innerHTML = "Player 0 won";
        document.getElementById('turny').style.display="none";     
		document.getElementById('turnx').style.display="none"; 
		alert('Player 0 won');
	}

	// Checking of Player 0 finsh
	// Here, Checking about Tie
	else if ((img1 == cross_src || img1 == zero_src) && (img2 == cross_src
		|| img2 == zero_src) && (img3 == cross_src || img3 == zero_src) &&
		(img4 == cross_src || img4 == zero_src) && (img5 == cross_src ||
		img5 == zero_src) && (img6 == cross_src || img6 == zero_src) &&
		(img7 == cross_src || img7 == zero_src) && (img8 == cross_src ||
		img8 == zero_src) && (img9 == cross_src || img9 == zero_src)) {
			document.getElementById('demo').innerHTML = "Match Tie";
			alert('Match Tie');
	}
	else {
		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('turnx').innerHTML = "Player X Turn";     
			document.getElementById('turny').style.display="none";     
			document.getElementById('turnx').style.display="block";     
		}
		else {
			document.getElementById('turny').innerHTML = "Player 0 Turn";
            document.getElementById('turnx').style.display="none";     
			document.getElementById('turny').style.display="block";  
		}
	}
}

// Function to reset game
function playagain() {
	location.reload();
    document.getElementById('demo').style.display="none";
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function func1() {
	if (flag == 1) {
		document.getElementById("img1").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img1").style.display="block";
		flag = 0;
	}
	else {
        document.getElementById("img1").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img1").style.display="block";		
		flag = 1;
	}
}

function func2() {
	if (flag == 1) {
		document.getElementById("img2").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img2").style.display="block";
		flag = 0;
	}
	else {
		document.getElementById("img2").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img2").style.display="block";
		flag = 1;
	}
}

function func3() {
	if (flag == 1) {
		document.getElementById("img3").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img3").style.display="block";
		flag = 0;
	}
	else {
		document.getElementById("img3").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img3").style.display="block";
		flag = 1;
	}
}

function func4(){
	if (flag == 1) {
		document.getElementById("img4").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img4").style.display="block";
		flag = 0;
	}
	else {
		document.getElementById("img4").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img4").style.display="block";
		flag = 1;
	}
}

function func5() {
	if (flag == 1) {
		document.getElementById("img5").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img5").style.display="block";
		flag = 0;
	}
	else {
		document.getElementById("img5").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img5").style.display="block";
		flag = 1;
	}
}

function func6() {
	if (flag == 1) {
		document.getElementById("img6").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img6").style.display="block";
		flag = 0;
	}
	else {
		document.getElementById("img6").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img6").style.display="block";
		flag = 1;
	}
}

function func7() {
	if (flag == 1) {
		document.getElementById("img7").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img7").style.display="block";
		flag = 0;
	}
	else {
		document.getElementById("img7").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img7").style.display="block";
		flag = 1;
	}
}

function func8() {
	if (flag == 1) {
		document.getElementById("img8").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img8").style.display="block";
		flag = 0;
	}
	else {
		document.getElementById("img8").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img8").style.display="block";
		flag = 1;
	}
}

function func9() {
	if (flag == 1) {
		document.getElementById("img9").src="https://iamsahilparashar.github.io/tic-tac-toe/cross.png";
		document.getElementById("img9").style.display="block";
		flag = 0;
	}
	else {
		document.getElementById("img9").src="https://iamsahilparashar.github.io/tic-tac-toe/zero.png";
		document.getElementById("img9").style.display="block";
		flag = 1;
	}
}
