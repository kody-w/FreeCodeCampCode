//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    },
];


function lookUp(firstName, prop){
// Only change code below this line
  
//console.log(contacts[0]);
  
  var contactFlag = false;
  
  var propFlag = false;


  for(i=0;i<contacts.length;i++){
    
    if(contacts[i].firstName === firstName && contacts[i][prop] !== 0){
      
      //console.log(contacts[i].firstName);
      
      //contactFlag = true;

     console.log(contacts[i][prop]);
     if(typeof contacts[i][prop] == "undefined"){
        console.log("No such property");
        return "No such property";

     }else{

      return contacts[i][prop];

        }

    }else{

        return "No such contact";

    }
    
 
    
    
  }



  //if(contactFlag === false){
    
    //return "No such Contact.";
  //}

// Only change code above this line
}

// Change these values to test your function
//lookUp("Akira", "likes")


lookUp("Kristian", "lastName"); //should return "Vos"
lookUp("Sherlock", "likes"); //should return ["Intriguing Cases", "Violin"]
lookUp("Harry","likes"); //should return an array
lookUp("Bob", "number"); //should return "No such contact"
lookUp("Akira", "address"); //should return "No such property"
