


//Part 1
let csv = "ID, Name, Occupation, Age\n42,Bruce, Knight, 41\n57, Bob, Fry cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"


const newArr = csv.trim().split('\n')
// console.log(newArr)

 const result = newArr.map((element) => {
      return element.split(",")
 });

// console.log(result)



//part 2

const header = result[0].map(element => element.toLowerCase());


const  final = []
for(let i = 1; i < result.length; i++){
    const row = result[i];
    const obj = {};

    header.forEach((element, index) => {
        obj[element] = row[index];
    });

    final.push(obj)
    
}

// console.log(final)



//Remove the last element from the sorted array.


// Insert the following object at index 1:

const newobj = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
final.splice(1, 0, newobj)
// console.log(final)
// Add the following object to the end of the array:
const obj2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" }

final.push(obj2)

// console.log(final)


// const remove = final.pop()


let sum = 0;

for(let i = 0; i < final.length; i++){
     sum +=  parseInt(final[i].age)
}

 let avgAge = sum / final.length

 console.log(avgAge)








