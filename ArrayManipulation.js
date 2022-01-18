let arrayReviews = [10, 35, 34, 20, 8, 50];
let arrayDates = ['01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '05/01/2021', '06/01/2021'];


// 1) Function that sort arrayReviews in ascending order :
const sortArray = (Arr) => {
    return Arr.sort((a,b)=>{
        return a-b;
    });
};
// To test : console.log(sortArray(arrayReviews));





// 2) Function that filter arrayReviews to have element above 30 only
const filterArray = (Arr) => {
    return Arr.filter(value => value>=30);
};
// To test : console.log(filterArray(arrayReviews));




// 3) Function with reduce that makes the sum of all element in arrayReviews
const sumElements1 = (Arr) => {
    return Arr.reduce((acc, value)=> acc+value,0);
};
// To test : console.log(sumElements1(arrayReviews));





// 4) create a function that sum only array element above 30 in arrayReviews (result should be 35 + 34 + 50 = 119)
const sumElements2 = (Arr) => {
    return filterArray(arrayReviews).reduce((value, acc)=> acc+value,0);
};
// To test : console.log(sumElements2(arrayReviews));




// 5) replacing 20 by 55 in arrayReviews to get [10, 35, 34, 55, 8, 50]
arrayRev=arrayReviews.slice(0); // i made a new variable in order to save the same arrayReviews for other questions.
arrayRev.splice(3,1,55);
// To test : console.log(arrayRev);




// 6) add 78 and 87 to arrayReviews without mutating it (use spread operator), to get [10, 35, 34, 20, 8, 50, 78; 87]
const result = [...arrayReviews,78,87];
// To test : console.log(result);




// 7) destructuring and rest: how could you get [34, 20, 8, 50], the last 4 elements of arrayReviews, in a single line of code.
let a = arrayReviews.slice(2);
// to test : console.log(a); 



//#######################################"   Object manipulation    ##########################################


let object = {
    name: 'Elyazid', 
    brand: 'Glanceable'
    }
    
// 8) what are the 2 possible ways to get the object 'name' field value ? 
let x = object['name']; // The first way
let y = object.name;    // The secound way 






// 9) transform object to add a job field with value 'frontend engineer' like this, and without mutating it 
//    let object2 = {
//         name: 'Elyazid', 
//         job: 'frontend engineer',
//         brand: 'Glanceable'
//     }

let trans = Object.entries(object); // transform the object to an array
trans.push(['job','FrontEnd Engineer']); // add the key/value to the array
let object2 = Object.fromEntries(trans); // retransform array to object
// To test : console.log(object2);





// 10) how to get object2 all keys in an array ?
// We can use Object.values to get all values in array and Object.keys to get all keys in array
// Exemple :  console.log(Object.values(object2)); Output :  ['Elyazid','frontend engineer', 'Glanceable']





// // 11) how to transform object2 in {
//      name: '# Elyazid', 
//      job: '# frontend engineer',
//      brand: '# Glanceable'
// }
// We can do that using Object.entries(), and map()  as the following : 
let object3 = Object.fromEntries( // retransforming to an object
    Object.entries(object2).map(elt => [elt[0],elt[1]="#"+elt[1]]) // transform to array and call map
);
// To test : console.log(object3);




//#######################################"  Array of Object manipulation    ##########################################

// 12) code a function that creates the following array from arrayDates, without using a for loop (use map)

let arrayNew = [
    { day: '01/01/2021', brand: 'Glanceable' },
    { day: '02/01/2021', brand: 'Glanceable' },
    { day: '03/01/2021', brand: 'Glanceable' },
    { day: '04/01/2021', brand: 'Glanceable' },
    { day: '05/01/2021', brand: 'Glanceable' },
    { day: '06/01/2021', brand: 'Glanceable' },
];

const  createObjectArray = (Arr) =>{
    return Arr.map(elt=> {
        let element = {
            'day': elt, 
            'brand': 'Glanceable'
        };
        return element;
    });
}
// To test : console.log(createObjectArray(arrayDates));


  


// 13) code a function that build this array programmatically
let arrayNewWithReviews = [
    { day: '01/01/2021', reviews: 10 , brand: 'Glanceable'},
    { day: '02/01/2021', reviews: 35, brand: 'Glanceable' },
    { day: '03/01/2021', reviews: 34, brand: 'Glanceable' },
    { day: '04/01/2021', reviews: 20, brand: 'Glanceable' },
    { day: '05/01/2021', reviews: 8 , brand: 'Glanceable'},
    { day: '06/01/2021', reviews: 50, brand: 'Glanceable' },
];

const buildArray = (arrDates, arrRev)=>{
    let i=0;
    return arrDates.map(elt=>{
        const element = {
            day: elt,
            reviews : arrRev[i],
            brand : 'Glanceable'
        };
        i+=1;
        return element;
    })
}
// To test : console.log(buildArray(arrayDates,arrayReviews)); 
  



// 14) code a function that sort arrayNewWithReviews by reviews in ascending order
const sortByReviews = (Arr)=>{
    return Arr.sort((a,b)=>{
      return  a.reviews-b.reviews;
    })
}
//To test : console.log(sortByReviews(arrayNewWithReviews));





// 15) code a function that filter arrayNewWithReviews to have element with reviews above 10
const filterReviews = (Arr)=>{
    return Arr.filter(element => element.reviews>10);
}
//To test : console.log(filterReviews(arrayNewWithReviews));





// 16) code a function with reduce that makes the sum of all element in arrayNewWithReviews with reviews above 10
const sumArray = (Arr)=>{
    return filterReviews(Arr).reduce((acc,val)=> {
        const {reviews}=val;
        return reviews+acc;
    },0);
}
//To test : console.log(sumArray(arrayNewWithReviews));





//(Bracket notation, dynamically create keys)
// 17) code a function that creates the following array from array1 (more difficult one)
let array2 = [
  { dayOne: '01/01/2021', reviews: 10 },
  { dayTwo: '02/01/2021', reviews: 35 },
  { dayThree: '03/01/2021', reviews: 34 },
  { dayFour: '04/01/2021', reviews: 20 },
  { dayFive: '05/01/2021', reviews: 8 },
  { daySix: '06/01/2021', reviews: 50 },
];
// I didn't found array1, but i will try to do that using arrayNewWithReviews :
const CreateObjectArray = (Arr)=>{
    let i=0;
    const numbers = ['One','Two','Three','Four','Five','Six'];
    return Arr.map(elt =>{
        const element = {
            ['Day'+numbers[i]] : elt['day'],
            reviews : elt['reviews']
        }
        i+=1;
        return element;
    })
};  //   To test this function : console.log(CreateObjectArray(arrayNewWithReviews));
