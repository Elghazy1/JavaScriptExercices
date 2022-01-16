let arrayReviews = [10, 35, 34, 20, 8, 50];
let arrayDates = ['01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '05/01/2021', '06/01/2021'];


// 1) Function that sort arrayReviews in ascending order :
const sortArray = (Arr) => {
    return Arr.sort((a,b)=>{
        return a-b;
    });
};


// 2) Function that filter arrayReviews to have element above 30 only
const filterArray = (Arr) => {
    return Arr.filter(value => value>=30);
};


// 3) Function with reduce that makes the sum of all element in arrayReviews
const sumElements1 = (Arr) => {
    return Arr.reduce((value, acc)=> acc+value,0);
};


// 4) create a function that sum only array element above 30 in arrayReviews (result should be 35 + 34 + 50 = 119)
const sumElements2 = (Arr) => {
    return filterArray(arrayReviews).reduce((value, acc)=> acc+value,0);
};


// 5) replacing 20 by 55 in arrayReviews to get [10, 35, 34, 55, 8, 50]
arrayRev=arrayReviews.slice(0); // i made a new variable in order to save the same arrayReviews for other questions.
arrayRev.splice(3,1,55);


// 6) add 78 and 87 to arrayReviews without mutating it (use spread operator), to get [10, 35, 34, 20, 8, 50, 78; 87]
const result = [...arrayReviews,78,87]


// 7) destructuring and rest: how could you get [34, 20, 8, 50], the last 4 elements of arrayReviews, in a single line of code.
let a = arrayReviews.slice(2);
console.log(a); // [34, 20, 8, 50]