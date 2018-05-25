var animals = [
    { name: 'FluffyKins' , species: 'rabbit'},
    { name: 'Carco', species: 'dog'},
    { name: 'Hamliton', species: 'dog'},
    { name: 'Harlod', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    { name: 'Jimmy', species: 'fish'}
]

 // var names = animals.map((x) => x.name);

 var names = animals.map( function(x){
 	return x.name;
 })

// var names = [];

// for(var i=0; i<animals.length; i++)
// 	names.push(animals[i].name);

// console.log('Hi there');

console.log(names);
