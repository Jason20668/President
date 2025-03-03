var presidentQuotes = [
"I like the noise of democracy", 
"The ballot box is the surest arbiter of disputes among free men", 
"What is right and what is practicable are two different things",
"To avoid entangling alliances has been a maxim of our policy ever since the days of Washington",
"Worst President in US's History"
]

var randomNumber = Math.floor(Math.random() * presidentQuotes.length);
	document.getElementById('press-quote').textContent = '“' + presidentQuotes[randomNumber].split(' - ') + '"'

	// Define the function that generates random fun facts
	function getFunPresidentFact() {
	  let randomNumber = Math.floor(Math.random() * 30);
	  // All possible facts
	  switch (randomNumber) {
		case 0:
		  return '1. Had the nickname of “Old Buck”';
		case 1:
		  return '2. He’s dead';
		case 2:
		  return '3. I have planted a landmine at an undisclosed location in your house. Every step is now a gamble…good luck!';
		case 3:
		  return '4. He had 2 eyes';
		case 4:
		  return '5. His hair was white when he was old';
		case 5:
		  return '6. Only President to never marry';
		case 6:
		  return '7. Some drunk guy at Fireside told me he saw him yesterday';
		case 7:
		  return '8. He may have worn pants';
		case 8:
		  return '9. People think he’s the worst President ever';
		case 9:
		  return '10. He didn’t know what a computer was';
		case 10:
		  return '11. Believed slavery was a constitutional right';
		case 11:
		  return '12. His favorite food may have been steak';
		case 12:
		  return '13. He’s no longer president';
		case 13:
		  return '14. These facts aren’t worth your time';
		case 14:
		  return '15. He can’t serve a second term because he’s dead';
		case 15:
		  return '16. He once invited the Prince of Wales and so many guests came with him that he slept in the hallway';
		case 16:
		  return '17. He stalemated the federal government';
		case 17:
		  return '18. He had 10 fingers…probably';
		case 18:
		  return 'Have fun getting all 30—these facts can repeat';
		case 19:
		  return '20. Why are you here…this is a waste of your time';
		case 20:
		  return '21. He was Minister to Great Britain during Franklin Pierce’s presidency';
		case 21:
		  return '22. Seen as a key diplomat by many Presidents';
		case 22:
		  return '23. Hehe Johnson...wait wrong President';
		case 23:
		  return '24. He was elected 5 times to the House of Representatives';
		case 24:
		  return '25. His favorite drink may have been a Cosmopolitan';
		case 25:
		  return '26. He’s still dead';
		case 26:
		  return '27. He was buried in Lancaster';
		case 27:
		  return '28. He didn’t know about WW1 or WW2';
		case 28:
		  return '29. I watched Godzilla while doing this part of the code';
		case 29:
		  return '30. This is the last one…you don’t get a fact, loser!';
	  }
	}

	function displayRandomFact() {
		const fact = getFunPresidentFact();
		document.getElementById("funFacts").innerText = fact;
	  }


