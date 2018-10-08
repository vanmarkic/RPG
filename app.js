function randomAge() {
	let result = Math.floor(Math.random()*90);
	return result;
} 

function makeName() {
  var text = "";
  var consonnes = "BCDFGHJKLMNPQRSTVWXZ";
  var voyelles = "AEIOUY"

  for (var i = 0; i < 5; i++)
    text += consonnes.charAt(Math.floor(Math.random() * consonnes.length));

  return text;
}


class soldat {
	constructor(age, prenom){
		this.age = randomAge() - 100 ;
		this.prenom = makeName();

	}
}

let armee = [];

for (i=0; i < 100; i++) {
	armee[i] = new soldat();
}





