let object = {
    name: 'Elyazid', 
    brand: 'Glanceable'
    }
    
// 8) what are the 2 possible ways to get the object 'name' field value ? 
let a = object['name'];
let b = object.name;

console.log("Question 8 :\nFirst way   : "+a);
console.log("Secound way : "+b+'\n');


// 9) transform object to add a job field with value 'frontend engineer' like this, and without mutating it 
//    let object2 = {
//         name: 'Elyazid', 
//         job: 'frontend engineer',
//         brand: 'Glanceable'
//     }

let trans = Object.entries(object); // transform the object to an array
trans.push(['job','FrontEnd Engineer']); // add the key/value to array
let object2 = Object.fromEntries(trans); // retransform array to object

console.log("Question 9 :\n"+object.job) // undefined
console.log(object2.job+'\n') // 'frontend engineer'

// 10) how to get object2 all keys in an array ?
// We can use Object.values to get all values in array and Object.keys to get all keys in array
console.log("Question 10 : ");
console.log(Object.values(object2)); //['Elyazid','frontend engineer', 'Glanceable']


// // 11) how to transform object2 in {
//      name: '# Elyazid', 
//      job: '# frontend engineer',
//      brand: '# Glanceable'
// }
// We can do that using Object.entries(), and map()  as the following : 
let object3 = Object.fromEntries( // retransforming to an object
    Object.entries(object2).map(elt => [elt[0],elt[1]="#"+elt[1]]) // transform to array and calling map
);
console.log("\nQuestion 11 : ");
console.log(object3);

    