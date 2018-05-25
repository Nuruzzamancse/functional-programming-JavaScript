var tripple = function(x){
    return x * 3;
}

var waffle = tripple;

console.log(waffle(30));

var animals = [
    { name: 'FluffyKins' , species: 'rabbit'},
    { name: 'Carco', species: 'dog'},
    { name: 'Hamliton', species: 'dog'},
    { name: 'Harlod', species: 'fish'},
    { name: 'Ursula', species: 'cat'},
    { name: 'Jimmy', species: 'fish'}
]
/*
var dogs = [];

for(var i=0; i<animals.length; i++)
    {
        if(animals[i].species === 'dog')
            dogs.push(animals[i]);
    }

console.log(dogs);*/
/*
var dogs = animals.filter(function(animal){
    return animal.species === 'dog';
})

console.log(dogs);
*/

var isDog = function(animal)
{
    return animal.species === 'dog';
}

var dogs = animals.filter(isDog);

console.log(dogs);

