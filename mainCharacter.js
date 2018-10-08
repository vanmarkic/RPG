// let mainCharacter = {
// 	name : 'Largo',
// 	level : 120,
// 	life : 90,
// 	weapon : {name : 'sword', damage : 15},
// 	attack : function () {
// 		console.log(mainCharacter.name + " t'attaque avec " + mainCharacter.weapon.name + " et t'inflige un dégât de " + (mainCharacter.level * mainCharacter.weapon.damage) + " points");
// 	},
// 	receiveDam : function () {
// 		console.log(mainCharacter.name + " t'attaque avec " + mainCharacter.weapon.name + " et t'inflige un dégât de " + (mainCharacter.level * mainCharacter.weapon.damage) + " points");
// 	}
// }

// mainCharacter.attack.call();

function attack (a, b) {	
		console.log('attaquant: ' + a.name	);
		console.log('attaqué: ' + b.name);
		b.life = b.life - a.weapon.damage;
		console.log(a.name + ' vous a infligé ' + a.weapon.damage + ' points de dégâts.')
		console.log('Il vous reste ' + b.life + ' points de vie.')
	}	

var character = {
	name : this.name,
	level : this.level,
	life : this.life,
	weapon : {name : this.name, damage : this.damage},

}


var jean = Object.create(character);

jean.name = 'jean';
jean.level = 80;
jean.life = 120;
jean.weapon = {name : 'excalibur', damage : 40};

// console.log(jean);

var pierre = Object.create(character);

pierre.name = 'pierre';
pierre.level = 75;
pierre.life = 110;
pierre.weapon = {name : 'sabre laser', damage : 45};

// console.log(pierre);
attack(pierre, jean);

