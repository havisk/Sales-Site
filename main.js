(function () {
  //create paragraph 
  function addParagraph(selector, text) {
      var container = document.querySelector(selector);
      var p = document.createElement('p');
      var node = document.createTextNode(text);
      p.appendChild(node);
      container.appendChild(p);
    };
    // creates list
  function addList(selector, list) {
   var container = document.querySelector(selector);
   var ul = document.createElement('ul');
   list.forEach(function(item){
     var li = document.createElement('li');
     var node = document.createTextNode(item);

     li.appendChild(node);
     ul.appendChild(li);
   });

   container.appendChild(ul);
 };

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
      });

      addList('#answer2', y);


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
       var beer = name + ' cost '+ '\u00A3'  + amount;
       console.log(beer);

       addParagraph('#answer3', beer);
  
 
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
        addList('#answer4', woodMade);
      
//QUESTION 5
 //Filter based on #of materials
    var mult = items.filter(function(k){
      if ((k.materials.length) >= (8)){
        return k.materials;
      }

    });      
    
      var multiMaterial = mult.forEach(function(item){

      addParagraph('#answer5', item.title +' has ' + item.materials.length + ' materials:');
      addList('#answer5', item.materials);
    
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

  addParagraph('#answer6', total);

  
  

  
}());