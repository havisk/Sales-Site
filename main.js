(function () {


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

      //
        




  
}());