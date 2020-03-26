const myName = 'Kelvin' ;
const courses = ['HTML', 'CSS', 'JavaScript',];
const output = [] ;

 for (let i=1; i<=200; i++) {
     if (courses.length%2===1 && i%2===1){
         output.push(i);
     }
     else if (courses.length%2===0 && i%2===0){
        output.push(i);
    }
 }
 console.log(myName +" "+ "studies" +" "+ courses)
 console.log(output); 
