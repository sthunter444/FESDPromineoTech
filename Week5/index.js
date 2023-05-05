
// create menu app with at least one array and two classes


//Dessert class is defined with 2 parameters- cake and topping

class Dessert { 
  constructor (cake, topping) {
    this.cake= cake; 
    this.topping = topping; 
  }

 //  use the describe method to return a string with the cake and topping information

  describe () {
    return `${this.cake} will have ${this.topping}.`;
  }
}  

// Here the cake class is defined with the name parameterand initializes the empty desserts array
class Cake {
  constructor(name) {
    this.name= name; 
    this.desserts= []; 
   }

// adds a dessert object into array only if it is a "dessert" class otherwise throws an error

  addDessert(dessert) { 
    if (dessert instanceof Dessert) {
    this.desserts.push(dessert);
    } else {
    throw new Error (`You can only add an instance of Dessert. Argument is not a dessert: ${dessert}`);        
    }
  }
    
   describe() {
      return  `${this.name} has ${this.desserts.length} desserts.`;
   }  
}

//menu class defined with constructor that itializes the empty cakes array 
class Menu {
    constructor() {
        this.cakes = [];
        this.selectedCake = null;
    }

 // start method is where it displays the menu options 
start () {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case '1':
                this.createCake();
                break;
            case '2':
                this.viewCake();
                break;
            case '3':
                this.deleteCake();
                break;
            case '4':
                this.displayCakes();
                break;
            default:
                selection = 0  
            break;                              
         }
        selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
}

showMainMenuOptions() {
    return prompt (`
    0) exit
    1) add new cake
    2) view cake 
    3) delete cake
    4) display all cakes
 `);
}

showCakeMenuOptions(dessertInfo){
  return prompt(`
  0) back
  1) create dessert
  2) delete dessert
  --------------------
  ${dessertInfo}
  `);
}

////display cakes that will list the cakes in cakes array

displayCakes() {
    let cakeString = '';
    for (let i = 0; i < this.cakes.length; i++) {
        cakeString += i + ') ' + this.cakes[i].name + '\n';
    }
    alert(cakeString);
  }
/// create cake where you can add a new cake 
createCake() {
    let name = prompt ('Enter name for new cake:');
    this.cakes.push(new Cake(name));
   }
//view cake takes user to index of the cake they want to view and displays the description
viewCake(){
    let index = prompt ('Enter the index of the cake that you want to view:');
    if (index > -1 && index < this.cakes.length) {
        this.selectedCake = this.cakes[index];
    let description = 'Cake Name: ' + this.selectedCake.name + '\n';    
    for (let i = 0; i < this.selectedCake.desserts.length; i++) {
            description += i + ') ' + this.selectedCake.desserts[i].cake + ' ' + this.selectedCake.dessert[i].topping + '\n';
    }
        
        let selection = this.showCakeMenuOptions(description);
        switch (selection) {
            case'1' :
            this.createDessert();
            break;
            case'2' :
            this.deleteDessert();
            break;
        }
    }
}
  
    createDessert() {
      let cake= prompt (' Enter name for new dessert: ');
      let topping= prompt ('Enter topping for dessert; ');
      this.selectedCake.desserts.push(new Dessert(cake, topping));
    }

    deleteCake() {
      let index = prompt('Enter the cake that you wish to delete:');
      if (index > -1 && index < this.cakes.length) {
      this.cakes.splice(index,1);
      }
    }
}

let menu = new Menu();
menu.start();

















