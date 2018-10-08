function randomAge() {
	let result = Math.floor(Math.random()*90);
	return result;
} 

function makeName() {
  var text = "";
  var consonnes = "BCDFGHJKLMNPQRSTVWXZ";
  var voyelles = "AEIOUY"

  for (var i = 0; i < 5; i++)
    if (i % 2 == 1) {
    	text += voyelles.charAt(Math.floor(Math.random() * voyelles.length));
		}
	else {
		text += consonnes.charAt(Math.floor(Math.random() * consonnes.length));
	}

  return text;
}


class soldat {
	constructor(age, name){
		this.age = randomAge() ;
		this.name = makeName();

	}
}

let armee = [];

for (i=0; i < 100; i++) {
	armee[i] = new soldat();
}

console.log(armee);





