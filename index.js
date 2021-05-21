const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name){
    
    return drivers.filter(d => {
       return d.toLowerCase() === name.toLowerCase(); 
    })    
  }

function fuzzyMatch(drivers, name) {
    return drivers.filter(d => {
        return d.toLowerCase().slice(0, name.length) === name.toLowerCase(); 
     })    
   }

function matchName(drivers, name) {
  return drivers.filter(d => {
    return d.name.toLowerCase() === name.toLowerCase(); 
 })    
}




