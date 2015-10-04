(function () {

 //  function addList(selector, list) {
 //    var container = document.querySelector('#answer');
 //    var ul = document.createElement('ul');

 //   list.forEach(function(name){
 //     var li = document.createElement('li');
 //     var textNode = document.createTextNode(name);

 //     li.appendChild(textNode);
 //     ul.appendChild(li);
 //   });

 //   container.appendChild(ul);
 // };

//QUESTION 1
  // Create an array of just the prices
  var prices = items.map( function (item) {
    return item.price;
  });
  console.log(prices);

  // Add all of the prices together
  var sum = prices.reduce( function (prev, next) {
    return prev + next;
  });
  console.log(sum);

  // Divide by total number of items
  var avg = sum / prices.length;
  console.log(avg);

  // Convert it to 2 decimal places
  var converted = avg.toFixed(2);
  console.log(converted);

  // Make it a string
  var str = 'The average price is $' + converted;
  console.log(str);


  // Make it show up on the page
  
    // Find our answer element
  var answer1 = document.querySelector('#answer1');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
  answer1.appendChild(textNode);
  

//QUESTION 2 
    // filter items based on price
    var cost = items.filter(function(item){
    
      return item.price > 14 &&
             item.price < 18;
    });
      
      var y = cost.map(function(x){
        return x.title;
      })

      console.log(y);


        var item = y.forEach(function(name){

      //create unordered list
      var ul = document.createElement('ul');

      // Find our answer element

        var answer2 = document.querySelector('#answer2');
        // Create a node from our above answer ready for the DOM
        var textNode = document.createTextNode(name);
        //create list element
        var li = document.createElement('li');
        // Append newly created node to our answer element
        
        li.appendChild(textNode);
        ul.appendChild(li);

        console.log(name);
        answer2.appendChild(ul);
      });


//QUESTION 3
      //filter by currency-code
      var code = items.filter(function(item){

      return item.currency_code === 'GBP';

      }); 
    //get the name of the item
      var k = code.map(function(cur){

        return cur.title; 

      });
    //turn arrays to string values
      var name = k.toString();
      console.log(name);

      var j = code.map(function(cost){
        return cost.price;
       
      });
       var amount = j.toString();
       console.log(j);

    //forming sentence from variables
       var beer = name + ' cost '+ '£'  + amount;
       console.log(beer);

    //create unordered list
      var ul = document.createElement('ul');

      // Find our answer element
        var answer3 = document.querySelector('#answer3');

     // Create a node from our above answer ready for the DOM
        var textNode = document.createTextNode(beer);

    //create list element
        var li = document.createElement('li');

    // Append newly created node to our answer element 
        li.appendChild(textNode);
        ul.appendChild(li);
        answer3.appendChild(ul);
  
 
//QUESTION 4
      //filter items made of wood
      var mat = items.filter(function(wood){

        if((wood.materials.indexOf('wood')) !== (-1)){
          return wood.title;
        }

        });
       var woodMade = mat.map(function(mater){

          return mater.title + ' is made of wood.';
        
      });

      var material = woodMade.forEach(function(item){
      //create unordered list
      var ul = document.createElement('ul');

      // Find our answer element

        var answer4 = document.querySelector('#answer4');
        // Create a node from our above answer ready for the DOM
        var textNode = document.createTextNode(item);
        //create list element
        var li = document.createElement('li');
        // Append newly created node to our answer element
        
        li.appendChild(textNode);
        ul.appendChild(li);

        console.log(name);
        answer4.appendChild(ul);
      });
      
//QUESTION 5
 //Filter based on #of materials
    var mult = items.filter(function(k){
      if ((k.materials.length) >= (8)){
        return k.materials;
      }
        console.log(mult);

    });      
      var names = mult.map(function(qty){
        var type = qty.materials; 

        return qty.title +' has ' + qty.materials.length + ' materials:'
        + type;

      });

      var multiMaterial = names.forEach(function(item){

      //create unordered list
      //create list element
        var ul = document.createElement('ul');
        var li= document.createElement('li');
        
      // Find our answer element
      // Create a node from our above answer ready for the DOM
        var answer5 = document.querySelector('#answer5');
        var textNode = document.createTextNode(item);

       // Append newly created node to our answer element
         li.appendChild(textNode);
          ul.appendChild(li);
          answer5.appendChild(ul);
          
      });

               
//QUESTION 6
  // filter by self-made
  var self = items.map(function(test){
    return test.who_made === "i_did";
  });

  //getting total # for self-made
  sum = self.reduce(function(prev, next){
    return prev + next;
  });
  var total = sum + " were made by their sellers";

  //create unordered list
      //create list element
        var ul = document.createElement('ul');
        var li= document.createElement('li');
  // Find our answer element
      // Create a node from our above answer ready for the DOM
        var answer6 = document.querySelector('#answer6');
        var textNode = document.createTextNode(total);

       // Append newly created node to our answer element
         li.appendChild(textNode);
          ul.appendChild(li);
          answer6.appendChild(ul);

  
  

  
}());