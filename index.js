
function scuberGreetingForFeet(feet){
  // switch (feet) {
  //   case 400:
  //     return `This one is on me!`;
  //     case 2000:
  //       return `I will gladly take your thirty bucks.`;
  //       case 2500:
  //         return `No can do.`;
  // }
  if (feet<=199) {
    return `This one is on me!`;
   }if(feet>=2000){
    return `I will gladly take your thirty bucks.`;
   }if(feet>=2500){
      return `No can do.`;
    }
  }

 


function ternaryCheckCity(city){
  switch (city) {
    case "NYC":
      return'Ok, sounds good.';
      case "Pittsburgh":
        return'No go.';
        
     
  }
 
}

function switchOnCharmFromTip(G){
  switch (G) {
    case "generous":
      return'Thank you so much.';
      case "not as generous":
        return'Thank you.';
          default:
            return`Bye.`;
  
}
}