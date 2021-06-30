function scuberGreetingForFeet(footage){
    if(footage <= 400){
    return 'This one is on me!'
  } else if (footage > 2000 && footage < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (footage > 2500) {
    return 'No can do.'
  }
}



function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
} 


// function switchOnCharmFromTip(tip){
//   if (tip === 'generous') {
//     return 'Thank you so much.';
//   } else if (tip === 'not as generous') {
//     return 'Thank you.';
//   } else if (tip === 'thanks for everything') {
//     return 'Bye.'
//   } 

// }

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
}
}