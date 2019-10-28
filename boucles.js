/*Les boucles permettent de répéter des actions simplement et rapidement. 
Une boucle peut être vue comme une version informatique de « copier N lignes »
ou de « faire X fois quelque chose ». Il y a différents types de boucles mais 
elles se ressemblent toutes au sens où elles répètent une action un certain nombre
de fois (ce nombre peut éventuellement être zéro). Les différents types de boucles
permettent d'utiliser différentes façon de commencer et de terminer une boucle. 
Chaque type de boucle pourra être utilisé en fonction de la situation et du problème
que l'on cherche à résoudre.

Réalisez les exercices suivants (vous n’avez pas le droit d’utiliser les fonctions ou
toute autre possibilité algorithmique de javascript hormis les variables et les conditions).*/


/* 1-Vous devez réaliser les tables de multiplications de “1, 2, 3, 5” et “8”.

   var result = 'x',
         num1 = 1;
         num2 = 2;
         num3 = 3,
         num4 = 5,
         num5 = 8;

    if ( num1 == 1 && num2 == 2 && num3== 3 && num4== 5  && num5 == 8)
      {
        
        for (var j = 1; j < 11; j++) 
          {

            if(num1 == 0 && j>O && num2 == 0 && j > 0 && num3 == 0 && j > 0 && num4 == 0 && j > 0 && num1 == 5 && j > 0)
            {
              result += '[' + j + ']';
            } 
            else if(j == 0 && num1>0 && j == 0 && num2>0 && j == 0 && num3>0 && j == 0 && num4>0 && j == 0 && num5>0)
            {
              result += '[' + num1 + '] ';
              result += '[' + num2 + '] ';
              result += '[' + num3 + '] ';
              result += '[' + num4 + '] ';
              result += '[' + num5 + '] ';
            } 
            else if(num1>0 && j>0 && num2>0 && j>0 && num3>0 && j>0 && num4>0 && j>0 &&num5>0 && j>0){
            result += (num1*j) + ' ';
            result += (num2*j) + ' ';
            result += (num3*j) + ' ';
            result += (num4*j) + ' ';
            result += (num5*j) + ' ';
        }
      
          }

      } else {
            console.log(result) ;
        }

        console.log(result)
     





/* 2-Vous devez créer une liste html et intégrer les résultats de la table de “5” 
au document HTML (vous avez le droit d’utiliser que les String). Le résultat 
doit être le suivant :
1 x 5 = 5
2 x 5 = 10
...
resultat='x'
var num6 = 5;

if ( num6 == 5)
      {
        
        for (var j = 1; j < 11; j++) 
          {

            if(num6 == 0 && j>0 )
            {
              resultat += '[' + j + ']';
            } 
            else if(j == 0 && num6>0)
            {
              resultat += '[' + num6 + '] ';
              
            } 
            else if(num6>0 && j>0){
            resultat += (num6*j) + ' ';
            
        }
      
          }

      } else {
            console.log(resultat) ;
        }

        console.log(resultat);
        
        







/* 3-Vous devez créer une boucle “while” avec “true” comme valeur de condition. 
Faite une incrémentation dans un console.log() avec la table de multiplication 
par “5”. Vous devez observer le résultat et debugger votre script. Ecrivez en 
commentaire comment vous l’avez corrigé.*/


/* 4-Vous devez créer le tableau suivant “[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]” vous devez
ensuite utiliser la fonction “map” et retourner un nouveau tableau avec les résultats 
de la table de “5”.

var tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

const map1 = tab.map(x => x * 5);

console.log(map1);


/* 5-Vous devez créer une variable avec l’objet suivant “‘{name’: ‘42’, age: ‘42’}”.
 Vous devrez parcourir chaque keys et faire le calcul suivant : 42 * 42.*/


 var  string1 ;

 var monObjet = {name : "42", age : 42};
 array1 = [42,42];
 const reducer = (accumulator, currentValue) => accumulator * currentValue;

// reduce de 42*42
//console.log(array1.reduce(reducer));


/* 6-Vous devez réaliser un algo qui vous permettra de trier un tableau “nbr” par ordre
décroissant par exemple si j’ai “[5, 4, 3, 2, 1]” le résultat sera “[1, 2, 3, 4, 5]”.
Vous n’avez pas le droit d’utiliser de fonction.*/

/*var tabNombre = [5, 4, 3, 2, 1];
tabNombre.sort();
console.log(tabNombre);


/* 7-Vous devez parcourir un objet  avec une key “nameCloth” qui contient un tableau avec 
les tailles suivantes  “XS”, “S”, “L”, “M”, “XL”, “XXL” et calculer pour chacun d’eux 
la TVA. A la sortie un tableau à 3 dimension est attendu (aucune condition ou fonction). 
“Exemple : {“nameCloth”: [fj]”}*/

monObjet1 = {a: "XS" , b: "S" , c: "L" , d: "M" , e: "XL" , f: "XXL"};
nameCloth = ["XS", "S", "L", "M", "XL", "XXL"];



/* 8-Faite un input select en html et insérez à l’intérieur toutes les années depuis 1980 à
 nos jours. La dernière année devra être actualisé automatiquement avec “new Date”.*/

 var uneDate = new Date();
 console.log(uneDate);
