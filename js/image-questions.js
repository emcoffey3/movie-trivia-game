const imageQuestions = [
	{
		question: `<img src="../img/big-trouble-in-little-china-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Big Trouble in Little China`, correct: true },
			{ text: `Mortal Kombat`, correct: false },
			{ text: `Enter the Dragon`, correct: false },
			{ text: `Crouching Tiger Hidden Dragon`, correct: false },
		]
	},
	{
		question: `<img src="../img/big-trouble-in-little-china-01.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Lo Pan`, correct: true },
			{ text: `Shang Tsung`, correct: false },
			{ text: `Ra's al Ghul`, correct: false },
			{ text: `Chong Li`, correct: false },
		]
	},
	{
		question: `<img src="../img/mortal-kombat-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Mortal Kombat`, correct: true },
			{ text: `Big Trouble in Little China`, correct: false },
			{ text: `Enter the Dragon`, correct: false },
			{ text: `Crouching Tiger Hidden Dragon`, correct: false },
		]
	},
	{
		question: `<img src="../img/mortal-kombat-01.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Sub-Zero`, correct: true },
			{ text: `Scorpion`, correct: false },
			{ text: `Reptile`, correct: false },
			{ text: `Kano`, correct: false },
		]
	},
	{
		question: `<img src="../img/mortal-kombat-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Mortal Kombat`, correct: true },
			{ text: `Big Trouble in Little China`, correct: false },
			{ text: `Enter the Dragon`, correct: false },
			{ text: `Crouching Tiger Hidden Dragon`, correct: false },
		]
	},
	{
		question: `<img src="../img/mortal-kombat-02.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Shang Tsung`, correct: true },
			{ text: `Lo Pan`, correct: false },
			{ text: `Ra's al Ghul`, correct: false },
			{ text: `Chong Li`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-thing-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `The Thing`, correct: true },
			{ text: `Alien`, correct: false },
			{ text: `Escape From New York`, correct: false },
			{ text: `Big Trouble in Little China`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-thing-01.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `R.J. MacReady`, correct: true },
			{ text: `Snake Plissken`, correct: false },
			{ text: `Jack Burton`, correct: false },
			{ text: `Lt. Gabriel Cash`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-thing-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `The Thing`, correct: true },
			{ text: `Alien`, correct: false },
			{ text: `Eraserhead`, correct: false },
			{ text: `Re-Animator`, correct: false },
		]
	},
	{
		question: `<img src="../img/alien-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Alien`, correct: true },
			{ text: `The Thing`, correct: false },
			{ text: `Hellraiser`, correct: false },
			{ text: `The Abyss`, correct: false },
		]
	},
	{
		question: `<img src="../img/alien-01.jpg">The creature in the above image is commonly known as what?`,
		answers: [
			{ text: `Facehugger`, correct: true },
			{ text: `Skullgrabber`, correct: false },
			{ text: `Predator`, correct: false },
			{ text: `Cenobite`, correct: false },
		]
	},
	{
		question: `<img src="../img/aliens-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Aliens`, correct: true },
			{ text: `The Thing`, correct: false },
			{ text: `The Terminator`, correct: false },
			{ text: `The Abyss`, correct: false },
		]
	},
	{
		question: `<img src="../img/aliens-01.jpg">What is the name of the character in the foreground?`,
		answers: [
			{ text: `Cpl. Hicks`, correct: true },
			{ text: `PFC Hudson`, correct: false },
			{ text: `Kyle Reese`, correct: false },
			{ text: `Bishop`, correct: false },
		]
	},
	{
		question: `<img src="../img/aliens-01.jpg">What is the name of the actor in the foreground?`,
		answers: [
			{ text: `Michael Biehn`, correct: true },
			{ text: `Bill Paxton`, correct: false },
			{ text: `Kurt Russell`, correct: false },
			{ text: `Lance Henriksen`, correct: false },
		]
	},
	{
		question: `<img src="../img/goodfellas-01.jpg">What is the name of the character pictured on the left?`,
		answers: [
			{ text: `Jimmy Conway`, correct: true },
			{ text: `Ace Rothstein`, correct: false},
			{ text: `Henry Hill`, correct: false },
			{ text: `Tommy DeVito`, correct: false },
		]
	},
	{
		question: `<img src="../img/goodfellas-01.jpg">What is the name of the character pictured on the right?`,
		answers: [
			{ text: `Henry Hill`, correct: true },
			{ text: `Jimmy Conway`, correct: false },
			{ text: `Tommy DeVito`, correct: false },
			{ text: `Billy Batts`, correct: false },
		]
	},
	{
		question: `<img src="../img/goodfellas-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Goodfellas`, correct: true },
			{ text: `The Godfather`, correct: false },
			{ text: `Casino`, correct: false },
			{ text: `Reservoir Dogs`, correct: false },
		]
	},
	{
		question: `<img src="../img/goodfellas-02.jpg">Which of these actors is <em>not</em> pictured above?`,
		answers: [
			{ text: `Harvey Keitel`, correct: true },
			{ text: `Joe Pesci`, correct: false },
			{ text: `Ray Liotta`, correct: false },
			{ text: `Paul Sorvino`, correct: false },
		]
	},
	{
		question: `<img src="../img/heat-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Heat`, correct: true },
			{ text: `Ronin`, correct: false },
			{ text: `Casino`, correct: false },
			{ text: `Reservoir Dogs`, correct: false },
		]
	},
	{
		question: `<img src="../img/heat-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Heat`, correct: true },
			{ text: `Goodfellas`, correct: false },
			{ text: `Leon: The Professional`, correct: false },
			{ text: `Reservoir Dogs`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-godfather-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `The Godfather`, correct: true },
			{ text: `Goodfellas`, correct: false },
			{ text: `Casino`, correct: false },
			{ text: `A Bronx Tale`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-godfather-01.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Vito Corleone`, correct: true },
			{ text: `Michael Corleone`, correct: false },
			{ text: `Fredo Corleone`, correct: false },
			{ text: `Luca Brasi`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-godfather-part-2-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `The Godfather Part II`, correct: true },
			{ text: `The Godfather`, correct: false },
			{ text: `Scarface`, correct: false },
			{ text: `Carlito's Way`, correct: false },
		]
	},
	{
		question: `<img src="../img/scarface-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Scarface`, correct: true },
			{ text: `The Godfather Part II`, correct: false },
			{ text: `Heat`, correct: false },
			{ text: `Carlito's Way`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/the-big-lebowski-01.jpg">The image shown above is from what movie?`,
	// 	answers: [
	// 		{ text: `The Big Lebowski`, correct: true },
	// 		{ text: `The Big Easy`, correct: false },
	// 		{ text: `The Fisher King`, correct: false },
	// 		{ text: `Argo`, correct: false },
	// 	]
	// },
	// {
	// 	question: `<img src="../img/the-big-lebowski-01.jpg">What is the name of the character on the left?`,
	// 	answers: [
	// 		{ text: `The Dude`, correct: true },
	// 		{ text: `Walter Sobchak`, correct: false },
	// 		{ text: `Donny`, correct: false },
	// 		{ text: `The Stranger`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/the-big-lebowski-01.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Walter Sobchak`, correct: true },
			{ text: `Donny`, correct: false },
			{ text: `The Dude`, correct: false },
			{ text: `Jackie Treehorn`, correct: false },
		]
	},
	{
		question: `<img src="../img/full-metal-jacket-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Full Metal Jacket`, correct: true },
			{ text: `Apocalypse Now`, correct: false },
			{ text: `Platoon`, correct: false },
			{ text: `The Thin Red Line`, correct: false },
		]
	},
	{
		question: `<img src="../img/full-metal-jacket-01.jpg">What is the name of the actor on the left?`,
		answers: [
			{ text: `Vincent D'Onofrio`, correct: true },
			{ text: `Philip Seymour Hoffman`, correct: false },
			{ text: `Brian Dennehy`, correct: false },
			{ text: `Matthew Modine`, correct: false },
		]
	},
	{
		question: `<img src="../img/full-metal-jacket-01.jpg">What is the name of the actor on the right?`,
		answers: [
			{ text: `R. Lee Ermey`, correct: true },
			{ text: `George C. Scott`, correct: false },
			{ text: `Robert Forster`, correct: false },
			{ text: `John C. McGinley`, correct: false },
		]
	},
	{
		question: `<img src="../img/full-metal-jacket-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Full Metal Jacket`, correct: true },
			{ text: `Apocalypse Now`, correct: false },
			{ text: `Platoon`, correct: false },
			{ text: `The Thin Red Line`, correct: false },
		]
	},
	{
		question: `<img src="../img/full-metal-jacket-03.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Full Metal Jacket`, correct: true },
			{ text: `Apocalypse Now`, correct: false },
			{ text: `Platoon`, correct: false },
			{ text: `The Thin Red Line`, correct: false },
		]
	},
	{
		question: `<img src="../img/apocalypse-now-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Apocalypse Now`, correct: true },
			{ text: `Platoon`, correct: false },
			{ text: `The Thin Red Line`, correct: false },
			{ text: `Full Metal Jacket`, correct: false },
		]
	},
	{
		question: `<img src="../img/apocalypse-now-01.jpg">What is the name of the actor in the center wearing the hat?`,
		answers: [
			{ text: `Robert Duvall`, correct: true },
			{ text: `James Caan`, correct: false },
			{ text: `Richard Dreyfuss`, correct: false },
			{ text: `Dennis Hopper`, correct: false },
		]
	},
	{
		question: `<img src="../img/apocalypse-now-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Apocalypse Now`, correct: true },
			{ text: `Platoon`, correct: false },
			{ text: `The Thin Red Line`, correct: false },
			{ text: `Full Metal Jacket`, correct: false },
		]
	},
	{
		question: `<img src="../img/apocalypse-now-02.jpg">What is the name of the actor shown above?`,
		answers: [
			{ text: `Martin Sheen`, correct: true },
			{ text: `Charlie Sheen`, correct: false },
			{ text: `Emilio Estevez`, correct: false },
			{ text: `Jack Nicholson`, correct: false },
		]
	},
	{
		question: `<img src="../img/platoon-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Platoon`, correct: true },
			{ text: `Apocalypse Now`, correct: false },
			{ text: `The Thin Red Line`, correct: false },
			{ text: `Full Metal Jacket`, correct: false },
		]
	},
	{
		question: `<img src="../img/platoon-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Platoon`, correct: true },
			{ text: `Apocalypse Now`, correct: false },
			{ text: `The Thin Red Line`, correct: false },
			{ text: `Full Metal Jacket`, correct: false },
		]
	},
	{
		question: `<img src="../img/saving-private-ryan-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Saving Private Ryan`, correct: true },
			{ text: `The Thin Red Line`, correct: false },
			{ text: `Full Metal Jacket`, correct: false },
			{ text: `Platoon`, correct: true },
		]
	},
	{
		question: `<img src="../img/reservoir-dogs-01.jpg">What is the name of the character in the center?`,
		answers: [
			{ text: `Mr. White`, correct: true },
			{ text: `Mr. Pink`, correct: false },
			{ text: `Mr. Blonde`, correct: false },
			{ text: `Nice Guy Eddie`, correct: false },
		]
	},
	{
		question: `<img src="../img/reservoir-dogs-01.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Mr. Pink`, correct: true },
			{ text: `Mr. White`, correct: false },
			{ text: `Mr. Orange`, correct: false },
			{ text: `Freddy`, correct: false },
		]
	},
	{
		question: `<img src="../img/reservoir-dogs-01.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Mr. Blonde`, correct: true },
			{ text: `Mr. Blue`, correct: false },
			{ text: `Mr. Orange`, correct: false },
			{ text: `Mr. Pink`, correct: false },
		]
	},
	{
		question: `<img src="../img/reservoir-dogs-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Reservoir Dogs`, correct: true },
			{ text: `Pulp Fiction`, correct: false },
			{ text: `Jackie Brown`, correct: false },
			{ text: `Heat`, correct: false },
		]
	},
	{
		question: `<img src="../img/reservoir-dogs-03.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Nice Guy Eddie`, correct: true },
			{ text: `Mr. Blue`, correct: false },
			{ text: `Mr. White`, correct: false },
			{ text: `Mr. Orange`, correct: false },
		]
	},
	{
		question: `<img src="../img/pulp-fiction-01.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Vincent Vega`, correct: true },
			{ text: `Vic Vega`, correct: false },
			{ text: `Winston Wolfe`, correct: false },
			{ text: `Butch Coolidge`, correct: false },
		]
	},
	{
		question: `<img src="../img/pulp-fiction-01.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Jules Winnfield`, correct: true },
			{ text: `Vincent Vega`, correct: false },
			{ text: `Marsellus Wallace`, correct: false },
			{ text: `Winston Wolfe`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/pulp-fiction-02.jpg">The image shown above is from what movie?`,
	// 	answers: [
	// 		{ text: `Pulp Fiction`, correct: true },
	// 		{ text: `Reservoir Dogs`, correct: false },
	// 		{ text: `Jackie Brown`, correct: false },
	// 		{ text: `Heat`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/pulp-fiction-03.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Pulp Fiction`, correct: true },
			{ text: `Reservoir Dogs`, correct: false },
			{ text: `Jackie Brown`, correct: false },
			{ text: `Heat`, correct: false },
		]
	},
	{
		question: `<img src="../img/pulp-fiction-04.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Mia`, correct: true },
			{ text: `Yolanda`, correct: false },
			{ text: `Esmeralda`, correct: false },
			{ text: `Fabienne`, correct: false },
		]
	},
	{
		question: `<img src="../img/pulp-fiction-04.jpg">What is the name of the actress shown above?`,
		answers: [
			{ text: `Uma Thurman`, correct: true },
			{ text: `Amanda Seyfried`, correct: false },
			{ text: `Angelina Jolie`, correct: false },
			{ text: `Milla Jovovich`, correct: false },
		]
	},
	{
		question: `<img src="../img/pulp-fiction-05.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Pulp Fiction`, correct: true },
			{ text: `Jackie Brown`, correct: false },
			{ text: `Dirty Dancing`, correct: false },
			{ text: `Breakin'`, correct: false },
		]
	},
	{
		question: `<img src="../img/jackie-brown-01.jpg">What is the name of the actress shown above?`,
		answers: [
			{ text: `Pam Grier`, correct: true },
			{ text: `Marlene Clark`, correct: false },
			{ text: `Gloria Hendry`, correct: false },
			{ text: `Tina Turner`, correct: false },
		]
	},
	{
		question: `<img src="../img/jackie-brown-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Jackie Brown`, correct: true },
			{ text: `Pulp Fiction`, correct: false },
			{ text: `Goodfellas`, correct: false },
			{ text: `Heat`, correct: false },
		]
	},
	{
		question: `<img src="../img/monty-python-and-the-holy-grail-01.jpg">What do some call the enchanter pictured above?`,
		answers: [
			{ text: `Tim`, correct: true },
			{ text: `Tom`, correct: false },
			{ text: `Al`, correct: false },
			{ text: `Stewart`, correct: false },
		]
	},
	{
		question: `<img src="../img/monty-python-and-the-holy-grail-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Monty Python and the Holy Grail`, correct: true },
			{ text: `Life of Brian`, correct: false },
			{ text: `Excalibur`, correct: false },
			{ text: `King Arthur: Legend of the Sword`, correct: false },
		]
	},
	{
		question: `<img src="../img/monty-python-and-the-holy-grail-03.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Roger the Shrubber`, correct: true },
			{ text: `Stephen the Gardener`, correct: false },
			{ text: `Phillip the Farmer`, correct: false },
			{ text: `The Knight Who Says 'Ni!'`, correct: false },
		]
	},
	{
		question: `<img src="../img/office-space-01.webp">What is the name of the character pictured above?`,
		answers: [
			{ text: `Milton`, correct: true },
			{ text: `Dilbert`, correct: false },
			{ text: `Wally`, correct: false },
			{ text: `Stewart`, correct: false },
		]
	},
	{
		question: `<img src="../img/office-space-01.webp">What is the name of the actor pictured above?`,
		answers: [
			{ text: `Stephen Root`, correct: true },
			{ text: `John C. McGinley`, correct: false },
			{ text: `Brian Cox`, correct: false },
			{ text: `Gary Cole`, correct: false },
		]
	},
	{
		question: `<img src="../img/office-space-01.jpg">What is the name of the character pictured above?`,
		answers: [
			{ text: `Bill Lumbergh`, correct: true },
			{ text: `Peter Gibbons`, correct: false },
			{ text: `Michael Bolton`, correct: false },
			{ text: `Tom Smykowski`, correct: false },
		]
	},
	{
		question: `<img src="../img/office-space-01.jpg">What is the name of the actor pictured above?`,
		answers: [
			{ text: `Gary Cole`, correct: true },
			{ text: `Stephen Root`, correct: false },
			{ text: `John C. McGinley`, correct: false },
			{ text: `Brian Cox`, correct: false },
		]
	},
	{
		question: `<img src="../img/office-space-02.jpg">What is the name of the character pictured above?`,
		answers: [
			{ text: `Michael Bolton`, correct: true },
			{ text: `Bill Lumbergh`, correct: false },
			{ text: `Peter Gibbons`, correct: false },
			{ text: `Tom Smykowski`, correct: false },
		]
	},
	{
		question: `<img src="../img/braveheart-01.jpg">What is the name of the character pictured above?`,
		answers: [
			{ text: `William Wallace`, correct: true },
			{ text: `Robin Loxley`, correct: false },
			{ text: `Robert the Bruce`, correct: false },
			{ text: `Prince Edward`, correct: false },
		]
	},
	{
		question: `<img src="../img/braveheart-02.jpg">What is the name of the character pictured above?`,
		answers: [
			{ text: `Robert the Bruce`, correct: true },
			{ text: `Argyle Wallace`, correct: false },
			{ text: `King Edward "Longshanks"`, correct: false },
			{ text: `William Wallace`, correct: false },
		]
	},
	{
		question: `<img src="../img/braveheart-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Braveheart`, correct: true },
			{ text: `Robin Hood: Prince of Thieves`, correct: false },
			{ text: `King Arthur: Legend of the Sword`, correct: false },
			{ text: `Monty Python and the Holy Grail`, correct: false },
		]
	},
	{
		question: `<img src="../img/terminator-2-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Terminator 2: Judgement Day`, correct: true },
			{ text: `The Terminator`, correct: false },
			{ text: `Blade Runner`, correct: false },
			{ text: `Last Action Hero`, correct: false },
		]
	},
	{
		question: `<img src="../img/terminator-2-01.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `John Connor`, correct: true },
			{ text: `Jack Ryan`, correct: false },
			{ text: `Kyle Reese`, correct: false },
			{ text: `Miles Dyson`, correct: false },
		]
	},
	{
		question: `<img src="../img/terminator-2-01.jpg">What is the name of the actor on the left?`,
		answers: [
			{ text: `Edward Furlong`, correct: true },
			{ text: `Nick Stahl`, correct: false },
			{ text: `Jonathan Taylor Thomas`, correct: false },
			{ text: `Elijah Wood`, correct: false },
		]
	},
	{
		question: `<img src="../img/jurassic-park-01.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Ian Malcolm`, correct: true },
			{ text: `Alan Grant`, correct: false },
			{ text: `John Hammond`, correct: false },
			{ text: `Dennis Nedry`, correct: false },
		]
	},
	{
		question: `<img src="../img/jurassic-park-01.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Alan Grant`, correct: true },
			{ text: `Robert Muldoon`, correct: false },
			{ text: `John Hammond`, correct: false },
			{ text: `Sam Neill`, correct: false },
		]
	},
	{
		question: `<img src="../img/jurassic-park-01.jpg">What is the name of the actor on the right?`,
		answers: [
			{ text: `Sam Neill`, correct: true },
			{ text: `Alan Grant`, correct: false },
			{ text: `Wayne Knight`, correct: false },
			{ text: `John Glover`, correct: false },
		]
	},
	{
		question: `<img src="../img/spider-man-far-from-home-01.jpg">The above image is from what movie?`,
		answers: [
			{ text: `Spider-Man: Far From Home`, correct: true },
			{ text: `Spider-Man: No Way Home`, correct: false },
			{ text: `Avengers: Infinity War`, correct: false },
			{ text: `Captain America: Civil War`, correct: false },
		]
	},
	{
		question: `<img src="../img/spider-man-far-from-home-01.webp">What is the name of the character shown above?`,
		answers: [
			{ text: `Mysterio`, correct: true },
			{ text: `Magneto`, correct: false },
			{ text: `Electro`, correct: false },
			{ text: `Shocker`, correct: false },
		]
	},
	{
		question: `<img src="../img/spider-man-far-from-home-01.webp">What is the name of the actor shown above?`,
		answers: [
			{ text: `Jake Gyllenhaal`, correct: true },
			{ text: `Tobey Maguire`, correct: false },
			{ text: `Tom Holland`, correct: false },
			{ text: `Andrew Garfield`, correct: false },
		]
	},
	{
		question: `<img src="../img/avengers-infinity-war-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Avengers: Infinity War`, correct: true },
			{ text: `Avengers: Endgame`, correct: false },
			{ text: `Guardians of the Galaxy`, correct: false },
			{ text: `Spider-Man: Far From Home`, correct: false },
		]
	},
	{
		question: `<img src="../img/avengers-infinity-war-01.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Thanos`, correct: true },
			{ text: `Dr. Manhattan`, correct: false },
			{ text: `Apocalypse`, correct: false },
			{ text: `Darkseid`, correct: false },
		]
	},
	{
		question: `<img src="../img/watchmen-01.webp">What is the name of the character shown above?`,
		answers: [
			{ text: `Dr. Manhattan`, correct: true },
			{ text: `Apocalypse`, correct: false },
			{ text: `Thanos`, correct: false },
			{ text: `Darkseid`, correct: false },
		]
	},
	{
		question: `<img src="../img/watchmen-01.jpg">What is the name of the movie shown above?`,
		answers: [
			{ text: `Watchmen`, correct: true },
			{ text: `Batman v. Superman: Dawn of Justice`, correct: false },
			{ text: `Justice League`, correct: false },
			{ text: `The Dark Knight Rises`, correct: false },
		]
	},
	{
		question: `<img src="../img/watchmen-01.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Nite Owl`, correct: true },
			{ text: `Batman`, correct: false },
			{ text: `Hawkman`, correct: false },
			{ text: `Birdman`, correct: false },
		]
	},
	{
		question: `<img src="../img/watchmen-01.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Rorschach`, correct: true },
			{ text: `The Riddler`, correct: false },
			{ text: `The Question`, correct: false },
			{ text: `Mindfreak`, correct: false },
		]
	},
	{
		question: `<img src="../img/watchmen-01.jpg">What is the name of the character in the middle?`,
		answers: [
			{ text: `Silk Spectre`, correct: true },
			{ text: `Silhouette`, correct: false },
			{ text: `Twilight Lady`, correct: false },
			{ text: `Black Canary`, correct: false },
		]
	},
	{
		question: `<img src="../img/deadpool-01.jpg">What is the name of the character pictured above?`,
		answers: [
			{ text: `Negasonic Teenage Warhead`, correct: true },
			{ text: `Silk Spectre`, correct: false },
			{ text: `Kitty Pryde`, correct: false },
			{ text: `X-23`, correct: false },
		]
	},
	{
		question: `<img src="../img/birds-of-prey-01.jpg">What is the name of the character pictured on the left?`,
		answers: [
			{ text: `Black Canary`, correct: true },
			{ text: `Huntress`, correct: false },
			{ text: `Cassandra Cain`, correct: false },
			{ text: `Harley Quinn`, correct: false },
		]
	},
	{
		question: `<img src="../img/birds-of-prey-01.jpg">What is the name of the actress pictured on the left?`,
		answers: [
			{ text: `Jurnee Smollett-Bell`, correct: true },
			{ text: `Zoe Saldana`, correct: false },
			{ text: `Zoë Kravitz`, correct: false },
			{ text: `Zazie Beetz`, correct: false },
		]
	},
	{
		question: `<img src="../img/birds-of-prey-01.jpg">What is the name of the actress pictured on the right?`,
		answers: [
			{ text: `Margot Robbie`, correct: true },
			{ text: `Jaime Pressly`, correct: false },
			{ text: `Samara Weaving`, correct: false },
			{ text: `Anne Hathaway`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-shape-of-water-01.jpg">What is the name of the actress pictured on the left?`,
		answers: [
			{ text: `Sally Hawkins`, correct: true },
			{ text: `Audrey Tautou`, correct: false },
			{ text: `Selma Blair`, correct: false },
			{ text: `Parker Posey`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-shape-of-water-01.jpg">The above image is from what movie?`,
		answers: [
			{ text: `The Shape of Water`, correct: true },
			{ text: `Hellboy`, correct: false },
			{ text: `Pan's Labyrinth`, correct: false },
			{ text: `Creature from the Black Lagoon`, correct: false },
		]
	},
	{
		question: `<img src="../img/hellboy-01.jpg">The above image is from what movie?`,
		answers: [
			{ text: `Hellboy`, correct: true },
			{ text: `The Shape of Water`, correct: false },
			{ text: `Pan's Labyrinth`, correct: false },
			{ text: `Creature from the Black Lagoon`, correct: false },
		]
	},
	{
		question: `<img src="../img/morbius-01.jpg">The above image is from what movie?`,
		answers: [
			{ text: `Morbius`, correct: true },
			{ text: `Blade: Trinity`, correct: false },
			{ text: `Dracula Untold`, correct: false },
			{ text: `Dracula 2000`, correct: false },
		]
	},
	{
		question: `<img src="../img/morbius-01.jpg">What is the name of the actor pictured above?`,
		answers: [
			{ text: `Jared Leto`, correct: true },
			{ text: `Joaquin Phoenix`, correct: false },
			{ text: `Casey Affleck`, correct: false },
			{ text: `Robert Pattinson`, correct: false },
		]
	},
	{
		question: `<img src="../img/event-horizon-01.jpg">The above image is from what movie?`,
		answers: [
			{ text: `Event Horizon`, correct: true },
			{ text: `In the Mouth of Madness`, correct: false },
			{ text: `Hellraiser`, correct: false },
			{ text: `Star Trek: The Motion Picture`, correct: false },
		]
	},
	{
		question: `<img src="../img/a-few-good-men-01.jpg">The above image is from what movie?`,
		answers: [
			{ text: `A Few Good Men`, correct: true },
			{ text: `Born on the Fourth of July`, correct: false },
			{ text: `Top Gun`, correct: false },
			{ text: `Rules of Engagement`, correct: false },
		]
	},
	{
		question: `<img src="../img/a-few-good-men-01.jpg">What is the name of the character in the foreground?`,
		answers: [
			{ text: `Col. Nathan R. Jessup`, correct: true },
			{ text: `Cpt. Jack Ross`, correct: false },
			{ text: `Lt. Daniel Kaffee`, correct: false },
			{ text: `Lt. Cdr. Joe Galloway`, correct: false },
		]
	},
	{
		question: `<img src="../img/a-few-good-men-02.jpg">The above image is from what movie?`,
		answers: [
			{ text: `A Few Good Men`, correct: true },
			{ text: `Born on the Fourth of July`, correct: false },
			{ text: `Top Gun`, correct: false },
			{ text: `Rules of Engagement`, correct: false },
		]
	},
	{
		question: `<img src="../img/a-few-good-men-02.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Lt. Daniel Kaffee`, correct: true },
			{ text: `Col. Nathan R. Jessup`, correct: false },
			{ text: `Cpt. Jack Ross`, correct: false },
			{ text: `Lt. Cdr. Joe Galloway`, correct: false },
		]
	},
	{
		question: `<img src="../img/a-few-good-men-02.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Cpt. Jack Ross`, correct: true },
			{ text: `Lt. Daniel Kaffee`, correct: false },
			{ text: `Col. Nathan R. Jessup`, correct: false },
			{ text: `Lt. Cdr. Joe Galloway`, correct: false },
		]
	},
	{
		question: `<img src="../img/top-gun-01.jpg">The above image is from what movie?`,
		answers: [
			{ text: `Top Gun`, correct: true },
			{ text: `A Few Good Men`, correct: false },
			{ text: `Born on the Fourth of July`, correct: false },
			{ text: `Days of Thunder`, correct: false },
		]
	},
	{
		question: `<img src="../img/top-gun-01.jpg">What is the call sign of the character on the right (foreground)?`,
		answers: [
			{ text: `Maverick`, correct: true },
			{ text: `Goose`, correct: false },
			{ text: `Iceman`, correct: false },
			{ text: `Viper`, correct: false },
		]
	},
	{
		question: `<img src="../img/top-gun-01.jpg">What is the call sign of the character on the left (foreground)?`,
		answers: [
			{ text: `Iceman`, correct: true },
			{ text: `Maverick`, correct: false },
			{ text: `Goose`, correct: false },
			{ text: `Viper`, correct: false },
		]
	},
	{
		question: `<img src="../img/ghostbusters-01.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Gozer`, correct: true },
			{ text: `Zuul`, correct: false },
			{ text: `Vince Clortho`, correct: false },
			{ text: `Vigo the Carpathian`, correct: false },
		]
	},
	{
		question: `<img src="../img/ghostbusters-2-01.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Vigo the Carpathian`, correct: true },
			{ text: `Vince Clortho`, correct: false },
			{ text: `Zuul`, correct: false },
			{ text: `Gozer`, correct: false },
		]
	},
	{
		question: `<img src="../img/lethal-weapon-01.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Martin Riggs`, correct: true },
			{ text: `Roger Murtaugh`, correct: false },
			{ text: `John McClane`, correct: false },
			{ text: `Axel Foley`, correct: false },
		]
	},
	{
		question: `<img src="../img/lethal-weapon-01.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Roger Murtaugh`, correct: true },
			{ text: `Martin Riggs`, correct: false },
			{ text: `John McClane`, correct: false },
			{ text: `Axel Foley`, correct: false },
		]
	},
	{
		question: `<img src="../img/enter-the-dragon-01.webp">The image shown above is from what movie?`,
		answers: [
			{ text: `Enter the Dragon`, correct: true },
			{ text: `Big Trouble in Little China`, correct: false },
			{ text: `Mortal Kombat`, correct: false },
			{ text: `Bloodsport`, correct: false },
		]
	},
	{
		question: `<img src="../img/back-to-the-future-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Back to the Future`, correct: true },
			{ text: `Groundhog Day`, correct: false },
			{ text: `The Breakfast Club`, correct: false },
			{ text: `Happy Death Day`, correct: false },
		]
	},
	{
		question: `<img src="../img/inception-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Inception`, correct: true },
			{ text: `Tenet`, correct: false },
			{ text: `Knives Out`, correct: false },
			{ text: `Get Out`, correct: false },
		]
	},
	{
		question: `<img src="../img/inception-01.jpg">The spinning item near the corner of the table is referred to as what?`,
		answers: [
			{ text: `totem`, correct: true },
			{ text: `token`, correct: false },
			{ text: `glyph`, correct: false },
			{ text: `rune`, correct: false },
		]
	},
	{
		question: `<img src="../img/inception-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Inception`, correct: true },
			{ text: `Tenet`, correct: false },
			{ text: `The Dark Knight Rises`, correct: false },
			{ text: `Contagion`, correct: false },
		]
	},
	{
		question: `<img src="../img/inception-02.jpg">What is the name of the actor on the left?`,
		answers: [
			{ text: `Ken Watanabe`, correct: true },
			{ text: `Kenneth Choi`, correct: false },
			{ text: `Sung Kang`, correct: false },
			{ text: `Daniel Dae Kim`, correct: false },
		]
	},
	{
		question: `<img src="../img/inception-02.jpg">What is the name of the actress on the right?`,
		answers: [
			{ text: `Marion Cotilard`, correct: true },
			{ text: `Rachel Weisz`, correct: false },
			{ text: `Eva Green`, correct: false },
			{ text: `Charlotte Gainsbourg`, correct: false },
		]
	},
	{
		question: `<img src="../img/inception-02.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Mal Cobb`, correct: true },
			{ text: `Talia al Ghul`, correct: false },
			{ text: `Selina Kyle`, correct: false },
			{ text: `Bridget Gregory`, correct: false },
		]
	},
	{
		question: `<img src="../img/tropic-thunder-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Tropic Thunder`, correct: true },
			{ text: `Platoon`, correct: false },
			{ text: `The Thin Red Line`, correct: false },
			{ text: `Apocalypse Now`, correct: false },
		]
	},
	{
		question: `<img src="../img/tropic-thunder-01.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Tugg Speedman`, correct: true },
			{ text: `Kirk Lazarus`, correct: false },
			{ text: `Jeff Portnoy`, correct: false },
			{ text: `Les Grossman`, correct: false },
		]
	},
	{
		question: `<img src="../img/tropic-thunder-01.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Kirk Lazarus`, correct: true },
			{ text: `Tugg Speedman`, correct: false },
			{ text: `Jeff Portnoy`, correct: false },
			{ text: `Les Grossman`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/tropic-thunder-01.jpg">What is the name of the actor on the right?`,
	// 	answers: [
	// 		{ text: `Robert Downey Jr.`, correct: true },
	// 		{ text: `Cuba Gooding Jr.`, correct: false },
	// 		{ text: `Richard Roundtree`, correct: false },
	// 		{ text: `Jeffrey Dean Morgan`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/tropic-thunder-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Tropic Thunder`, correct: true },
			{ text: `The Big Short`, correct: false },
			{ text: `Draft Day`, correct: false },
			{ text: `Margin Call`, correct: false },
		]
	},
	{
		question: `<img src="../img/tropic-thunder-02.jpg">What is the name of the actor on the left?`,
		answers: [
			{ text: `Tom Cruise`, correct: true },
			{ text: `Jason Alexander`, correct: false },
			{ text: `Robert Downey Jr.`, correct: false },
			{ text: `John Travolta`, correct: false },
		]
	},
	{
		question: `<img src="../img/tropic-thunder-02.jpg">What is the name of the character on the left?`,
		answers: [
			{ text: `Les Grossman`, correct: true },
			{ text: `Kirk Lazarus`, correct: false },
			{ text: `Tugg Speedman`, correct: false },
			{ text: `Jeff Portnoy`, correct: false },
		]
	},
	{
		question: `<img src="../img/tropic-thunder-02.jpg">What is the name of the character on the right?`,
		answers: [
			{ text: `Rick Peck`, correct: true },
			{ text: `Les Grossman`, correct: false },
			{ text: `Tugg Speedman`, correct: false },
			{ text: `Kirk Lazarus`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-fifth-element-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `The Fifth Element`, correct: true },
			{ text: `Blade Runner`, correct: false },
			{ text: `Back to the Future Part II`, correct: false },
			{ text: `Dredd`, correct: false },
		]
	},
	{
		question: `<img src="../img/blade-runner-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Blade Runner`, correct: true },
			{ text: `The Fifth Element`, correct: false },
			{ text: `The Matrix`, correct: false },
			{ text: `Back to the Future`, correct: false },
		]
	},
	{
		question: `<img src="../img/leon-the-professional-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Léon: The Professional`, correct: true },
			{ text: `The Fifth Element`, correct: false },
			{ text: `Ronin`, correct: false },
			{ text: `Heat`, correct: false },
		]
	},
	{
		question: `<img src="../img/leon-the-professional-01.jpg">What is the name of the actor on the left?`,
		answers: [
			{ text: `Jean Reno`, correct: true },
			{ text: `Javier Bardem`, correct: false },
			{ text: `Liam Cunningham`, correct: false },
			{ text: `Vincent Cassel`, correct: false },
		]
	},
	{
		question: `<img src="../img/leon-the-professional-01.jpg">What is the name of the actress on the right?`,
		answers: [
			{ text: `Natalie Portman`, correct: true },
			{ text: `Keira Knightley`, correct: false },
			{ text: `Winona Ryder`, correct: false },
			{ text: `Olivia Wilde`, correct: false },
		]
	},
	{
		question: `<img src="../img/leon-the-professional-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Léon: The Professional`, correct: true },
			{ text: `The Fifth Element`, correct: false },
			{ text: `True Romance`, correct: false },
			{ text: `Heat`, correct: false },
		]
	},
	{
		question: `<img src="../img/leon-the-professional-02.jpg">What is the name of the actor shown above?`,
		answers: [
			{ text: `Gary Oldman`, correct: true },
			{ text: `Sam Rockwell`, correct: false },
			{ text: `John Hurt`, correct: false },
			{ text: `Hugo Weaving`, correct: false },
		]
	},
	{
		question: `<img src="../img/us-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Us`, correct: true },
			{ text: `Get Out`, correct: false },
			{ text: `Nope`, correct: false },
			{ text: `You're Next`, correct: false },
		]
	},
	{
		question: `<img src="../img/us-01.jpg">What is the name of the actress shown above?`,
		answers: [
			{ text: `Lupita Nyong'o`, correct: true },
			{ text: `Danai Gurira`, correct: false },
			{ text: `Letitia Wright`, correct: false },
			{ text: `Sonequa Martin-Green`, correct: false },
		]
	},
	{
		question: `<img src="../img/nightcrawler-01.webp">The image shown above is from what movie?`,
		answers: [
			{ text: `Nightcrawler`, correct: true },
			{ text: `Nocturnal Animals`, correct: false },
			{ text: `Drive`, correct: false },
			{ text: `Zodiac`, correct: false },
		]
	},
	{
		question: `<img src="../img/nightcrawler-01.jpg">What is the name of the actor pictured on the right?`,
		answers: [
			{ text: `Jake Gyllenhaal`, correct: true },
			{ text: `Tobey Maguire`, correct: false },
			{ text: `Jude Law`, correct: false },
			{ text: `Jared Leto`, correct: false },
		]
	},
	{
		question: `<img src="../img/nightcrawler-01.jpg">What is the name of the actor pictured on the left?`,
		answers: [
			{ text: `Riz Ahmed`, correct: true },
			{ text: `Dev Patel`, correct: false },
			{ text: `Rahul Kohli`, correct: false },
			{ text: `Rami Malek`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-social-network-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `The Social Network`, correct: true },
			{ text: `Steve Jobs`, correct: false },
			{ text: `Primer`, correct: false },
			{ text: `Sneakers`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-social-network-01.jpg">What is the name of the actor on the left (foreground)?`,
		answers: [
			{ text: `Andrew Garfield`, correct: true },
			{ text: `Andrew Lincoln`, correct: false },
			{ text: `Tom Holland`, correct: false },
			{ text: `Tom Hardy`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-social-network-01.jpg">What is the name of the actor on the right (foreground)?`,
		answers: [
			{ text: `Jesse Eisenberg`, correct: true },
			{ text: `Michael Cera`, correct: false },
			{ text: `Andy Samberg`, correct: false },
			{ text: `Aaron Paul`, correct: false },
		]
	},
	{
		question: `<img src="../img/pacific-rim-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Pacific Rim`, correct: true },
			{ text: `Mighty Morphin Power Rangers`, correct: false },
			{ text: `Transformers`, correct: false },
			{ text: `Transformers: Dark of the Moon`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/pacific-rim-02.jpg">The image shown above is from what movie?`,
	// 	answers: [
	// 		{ text: `Pacific Rim`, correct: true },
	// 		{ text: `Ghost in the Shell`, correct: false },
	// 		{ text: `Blade Runner 2049`, correct: false },
	// 		{ text: `The Matrix`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/pacific-rim-02.jpg">What is the name of the actor pictured on the left?`,
		answers: [
			{ text: `Ron Perlman`, correct: true },
			{ text: `Tom Waits`, correct: false },
			{ text: `Ray Liotta`, correct: false },
			{ text: `Benicio Del Toro`, correct: false },
		]
	},
	{
		question: `<img src="../img/pacific-rim-02.jpg">What is the name of the actor pictured on the right?`,
		answers: [
			{ text: `Charlie Day`, correct: true },
			{ text: `Rob McElhenney`, correct: false },
			{ text: `Glenn Howerton`, correct: false },
			{ text: `Jason Bateman`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/pacific-rim-03.jpg">The image shown above is from what movie?`,
	// 	answers: [
	// 		{ text: `Pacific Rim`, correct: true },
	// 		{ text: `The Rock`, correct: false },
	// 		{ text: `Top Gun`, correct: false },
	// 		{ text: `A Few Good Men`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/pacific-rim-03.jpg">What is the name of the actor shown above?`,
		answers: [
			{ text: `Idris Elba`, correct: true },
			{ text: `Terrence Howard`, correct: false },
			{ text: `Michael K. Williams`, correct: false },
			{ text: `Chiwetel Ejiofor`, correct: false },
		]
	},
	{
		question: `<img src="../img/pacific-rim-04.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Pacific Rim`, correct: true },
			{ text: `Godzilla: King of the Monsters`, correct: false },
			{ text: `Cloverfield`, correct: false },
			{ text: `The Mist`, correct: false },
		]
	},
	{
		question: `<img src="../img/pacific-rim-05.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Pacific Rim`, correct: true },
			{ text: `Edge of Darkness`, correct: false },
			{ text: `Prometheus`, correct: false },
			{ text: `Alien`, correct: false },
		]
	},
	{
		question: `<img src="../img/pacific-rim-05.jpg">What is the name of the actor shown above?`,
		answers: [
			{ text: `Charlie Day`, correct: true },
			{ text: `Rob McElhenney`, correct: false },
			{ text: `Glenn Howerton`, correct: false },
			{ text: `Jason Bateman`, correct: false },
		]
	},
	{
		question: `<img src="../img/pacific-rim-06.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Pacific Rim`, correct: true },
			{ text: `Edge of Darkness`, correct: false },
			{ text: `Battle: LA`, correct: false },
			{ text: `Starship Troopers`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-rock-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `The Rock`, correct: true },
			{ text: `Platoon`, correct: false },
			{ text: `Born on the Fourth of July`, correct: false },
			{ text: `Top Gun`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-rock-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `The Rock`, correct: true },
			{ text: `National Treasure`, correct: false },
			{ text: `Face/Off`, correct: false },
			{ text: `Con Air`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-rock-02.jpg">What is the name of the actor pictured on the left?`,
		answers: [
			{ text: `Sean Connery`, correct: true },
			{ text: `Ian McKellen`, correct: false },
			{ text: `Christopher Lee`, correct: false },
			{ text: `Brendan Gleeson`, correct: false },
		]
	},
	{
		question: `<img src="../img/the-rock-02.jpg">What is the name of the actor pictured on the right?`,
		answers: [
			{ text: `Nicolas Cage`, correct: true },
			{ text: `Tom Cruise`, correct: false },
			{ text: `Mark Wahlberg`, correct: false },
			{ text: `John Cusack`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/con-air-01.jpg">The image shown above is from what movie?`,
	// 	answers: [
	// 		{ text: `Con Air`, correct: true },
	// 		{ text: `In the Line of Fire`, correct: false },
	// 		{ text: `The Silence of the Lambs`, correct: false },
	// 		{ text: `Hannibal`, correct: false },
	// 	]
	// },
	// {
	// 	question: `<img src="../img/con-air-01.jpg">What is the name of the actor shown above?`,
	// 	answers: [
	// 		{ text: `John Malkovich`, correct: true },
	// 		{ text: `Steve Buscemi`, correct: false },
	// 		{ text: `Ron Perlman`, correct: false },
	// 		{ text: `Jackie Earle Haley`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/con-air-01.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Cyrus "The Virus" Grisson`, correct: true },
			{ text: `Hannibal "The Cannibal" Lector`, correct: false },
			{ text: `Garland "The Marietta Mangler" Greene`, correct: false },
			{ text: `Earl "Swamp Thing" Williams`, correct: false },
		]
	},
	{
		question: `<img src="../img/con-air-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Con Air`, correct: true },
			{ text: `Ghost Rider`, correct: false },
			{ text: `The Rock`, correct: false },
			{ text: `Face/Off`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/con-air-03.jpg">The image shown above is from what movie?`,
	// 	answers: [
	// 		{ text: `Con Air`, correct: true },
	// 		{ text: `Half Baked`, correct: false },
	// 		{ text: `The Rock`, correct: false },
	// 		{ text: `Live Free or Die Hard`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/con-air-03.jpg">What is the name of the actor shown above?`,
		answers: [
			{ text: `Dave Chappelle`, correct: true },
			{ text: `Lakeith Stanfield`, correct: false },
			{ text: `Malcolm Barrett`, correct: false },
			{ text: `Bokeem Woodbine`, correct: false },
		]
	},
	{
		question: `<img src="../img/con-air-04.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Con Air`, correct: true },
			{ text: `In the Line of Fire`, correct: false },
			{ text: `Rounders`, correct: false },
			{ text: `Red`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/con-air-04.jpg">What is the name of the actor shown above?`,
	// 	answers: [
	// 		{ text: `John Malkovich`, correct: true },
	// 		{ text: `Steve Buscemi`, correct: false },
	// 		{ text: `Ron Perlman`, correct: false },
	// 		{ text: `Jackie Earle Haley`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/con-air-04.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Cyrus "The Virus" Grisson`, correct: true },
			{ text: `Hannibal "The Cannibal" Lector`, correct: false },
			{ text: `Garland "The Marietta Mangler" Greene`, correct: false },
			{ text: `Earl "Swamp Thing" Williams`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/con-air-05.jpg">The image shown above is from what movie?`,
	// 	answers: [
	// 		{ text: `Con Air`, correct: true },
	// 		{ text: `The Rock`, correct: false },
	// 		{ text: `Face/Off`, correct: false },
	// 		{ text: `Ghost Rider`, correct: false },
	// 	]
	// },
	{
		question: `<img src="../img/con-air-05.jpg">What is the name of the actor shown above?`,
		answers: [
			{ text: `Nicolas Cage`, correct: true },
			{ text: `Tom Cruise`, correct: false },
			{ text: `Mark Wahlberg`, correct: false },
			{ text: `John Cusack`, correct: false },
		]
	},
	{
		question: `<img src="../img/con-air-04.jpg">What is the name of the character shown above?`,
		answers: [
			{ text: `Cameron Poe`, correct: true },
			{ text: `Stanley Goodspeed`, correct: false },
			{ text: `Memphis Raines`, correct: false },
			{ text: `Poe Dameron`, correct: false },
		]
	},
	{
		question: `<img src="../img/in-the-line-of-fire-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `In the Line of Fire`, correct: true },
			{ text: `Con Air`, correct: false },
			{ text: `Burn After Reading`, correct: false },
			{ text: `Of Mice and Men`, correct: false },
		]
	},
	{
		question: `<img src="../img/in-the-line-of-fire-01.jpg">What is the name of the actor pictured above?`,
		answers: [
			{ text: `John Malkovich`, correct: true },
			{ text: `Steve Buscemi`, correct: false },
			{ text: `Ron Perlman`, correct: false },
			{ text: `Jackie Earle Haley`, correct: false },
		]
	},
	{
		question: `<img src="../img/sorry-to-bother-you-01.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Sorry to Bother You`, correct: true },
			{ text: `Friday`, correct: false },
			{ text: `Get Out`, correct: false },
			{ text: `Knives Out`, correct: false },
		]
	},
	{
		question: `<img src="../img/sorry-to-bother-you-01.jpg">What is the name of the actor pictured on the left?`,
		answers: [
			{ text: `LaKeith Stanfield`, correct: true },
			{ text: `Daniel Kaluuya`, correct: false },
			{ text: `Michael B. Jordan`, correct: false },
			{ text: `Chadwick Boseman`, correct: false },
		]
	},
	{
		question: `<img src="../img/sorry-to-bother-you-01.jpg">What is the name of the actress pictured on the right?`,
		answers: [
			{ text: `Tessa Thompson`, correct: true },
			{ text: `Zoe Saldana`, correct: false },
			{ text: `Danai Gurira`, correct: false },
			{ text: `Lupita Nyong'o`, correct: false },
		]
	},
	{
		question: `<img src="../img/sorry-to-bother-you-02.jpg">The image shown above is from what movie?`,
		answers: [
			{ text: `Sorry to Bother You`, correct: true },
			{ text: `The Big Short`, correct: false },
			{ text: `Uncut Gems`, correct: false },
			{ text: `Knives Out`, correct: false },
		]
	},
	// {
	// 	question: `<img src="../img/groundhog-day-01.jpg">The image shown above is from what movie?`,
	// 	answers: [
	// 		{ text: `Groundhog Day`, correct: true },
	// 		{ text: `Back to the Future`, correct: false },
	// 		{ text: `The Breakfast Club`, correct: false },
	// 		{ text: `Happy Death Day`, correct: false },
	// 	]
	// },
	// {
	// 	question: `<img src="../img/enter-the-dragon-01.webp">What is the name of the actor in the above image?`,
	// 	answers: [
	// 		{ text: `Bruce Lee`, correct: true },
	// 		{ text: `Brandon Lee`, correct: false },
	// 		{ text: `Jackie Chan`, correct: false },
	// 		{ text: `Bolo Yeung`, correct: false },
	// 	]
	// },
];

const regex = /src="(.*?)"/;
const images = [...new Set(imageQuestions.map(iq => regex.exec(iq.question)[1]))];
images.forEach(image => {
	const preload = document.createElement('link');
	preload.rel = 'preload';
	preload.as = 'image';
	preload.href = image;
	document.querySelector('head').appendChild(preload);
});

export default imageQuestions;