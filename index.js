
const nou = [{
 title:'oui',
 description:'oui oui',
 status:'oui',
 id: 14
}];
/* preparation des donnees*/
const database = [];
database.cours = [];
database.profs = [];

/* ajout de donner */
cours = database.cours = [];
profs  = database.profs = []; 

cours.push({
 "squadName": "Super hero squad",
 "homeTown": "Metro City",
 "formed": 2016,
 "secretBase": "Super tower",
 "active": true,
 "members": [
   {
     "name": "Molecule Man",
     "age": 29,
     "secretIdentity": "Dan Jukes",
     "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
   },
   {
     "name": "Madame Uppercut",
     "age": 39,
     "secretIdentity": "Jane Wilson",
     "powers": [
       "Million tonne punch",
       "Damage resistance",
       "Superhuman reflexes"
     ]
   },
   {
     "name": "Eternal Flame",
     "age": 1000000,
     "secretIdentity": "Unknown",
     "powers": [
       "Immortality",
       "Heat Immunity",
       "Inferno",
       "Teleportation",
       "Interdimensional travel"
     ]
   }
 ]
});
console.log("cours",JSON.stringify(cours));
console.log("nou",JSON.stringify(nou));
console.log('hello');