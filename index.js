// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
No, type of a is String
No, type of b is object

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i = 0; i < a.length; i++){
    a[i] = a[i] * 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join());
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join("+"));
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(","));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (var i = 0; i < a.length; i++){
    for (var j = 0; j < a.length; j++){
        if (a[i] != a[j]){
            if(a[i]<a[j]){
                var tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
        }
    }
}
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var count = 0;
var result = [];
for (var i = 0; i < a.length; i++){
    var count = 0;
    for (var j = 0; j < a.length; j++){
        if (a[i] == a[j]){
            count++;
        }
    }
    result.push(count);
} 
for (var k = 0; k < a.length; k++){
    if(result[k] == Math.max(...result)){
        break;
    }
}
console.log(a[k]);
