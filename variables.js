/*Réalisez les exercices suivants (vous n’avez pas le droit d’utiliser les boucles,
les conditions ou toute autre possiblité algorithmique de javascript hormis les variables).*/

//1-Réalisez un commentaire monoligne avec “My Digital School Forever”.

//My Digital School Forever


//2-Réalisez un commentaire multiligne avec ”My Digital School forever every day”.

/*My Digital School 
forever 
every day*/

/*3-Déclarez des variables avec un type string, number, float, boolean, array, date, objet,
 undefined et null.(sauf pour undefinied, null et boolean toutes les autres doivent avoir
 pour valeur 42).*/
 
  var a = "42" ;

  var b = 42 ;

  var c = parseFloat(b) ;

  var d = true;

  var e = [42] ;

  var f = Date (42);

  var g = {objet : "42"} ;

  var h ;

  var i = null ;
  
  //console.log(a,b,c,d,e,f,g,h,i);
  


/*4-Créer une variable “my42count” avec à l’intérieur le mot “quarante-deux” 
puis déterminez le nombre de caractères de la chaine.*/

var my42count = "quarante-deux" ;

var n = my42count.length ;

//console.log(n);


/* 5-Créer une variable qui détermine si une autre variable existe ou si elle 
n’existe pas elle prend la valeur de 42 à la place. (aucune condition accepté !)*/

var j ;
var k ;

/* 6-Créer un tableau dans une variable “myArray42” avec pour chaque index une
 lettre correspondant au mot suivant : “quarante-deux”.*/
 var myArray42 = ["q", "u", "a", "r" ,"a" ,"n", "t", "e", "d", "e", "u", "x"] ;
 //console.log(myArray42);


/* 7-Toujours avec votre variable “myArray42” comptez le nombre d’index dans
 une autre variable dénomer “myArray42Len”.*/
 var myArray42Len = myArray42.length ;
 //console.log(myArray42Len) ;


/* 8-Toujours avec  “myArray42” recomposez le mot dans une variable de type string
 et concaténez la avec la phrase “La grande réponse sur la vie, l’univers et le 
 reste !” (aucune boucle authorisé n’y de condition).*/
 var l = "Deux,quatre  "  + " La grande réponse sur la vie, l’univers et le reste" ;
 //console.log(l) ;

/* 9-Créer une variable “rand” et calculez un nombre aléatoire entre “1” et “42” 
si le chiffre est égal à “42” retourner “true”.*/
var  rand = Math.floor(Math.random() * 42) + 1 ;

/*if (rand === 42){
  return true ;
}


/* 10-Créer autant de variables que de types de variable en javascript avec “my42Type”
 et détectez leurs types. Par exemple pour une variable de valeur  “true” je dois
 retourner “boolean” en string.*/

 my42Type = [(typeof a),(typeof b),(typeof c),(typeof d),(typeof e),(typeof f),(typeof g),(typeof h),(typeof i)];
 //console.log(my42Type) ;


/* 11-Faites une mutliplication dans une variable “compute42” dont le résulat et “42” 
puis transformez là en string.*/

var compute42 = 7 * 6 ;
var computeString = compute42.toString();
//console.log(computeString);





/* 12-Dans une variable de type number écrivez “42424242”. Puis remplacez tous les 42
 par “quarante-deux ”.*/

 var m = 42424242 ;

 var n = m.toString().replace('42','quarante-deux')
                             +('42','quarante-deux')
                             +('42','quarante-deux')
                            +('42','quarante-deux');
 
    console.log(n);



/*13-Créer 2 variables “var a = 24” et “var b = 42”. Vous devez à présent transférer
 “a” vers “b” et “b” vers “a”.*/

 var o = 24 ;

 var p = 42 ;

 [o, p] = [p, o];

 //console.log(o,p);


