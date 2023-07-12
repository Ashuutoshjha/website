function add(a,b){
    var a = parseInt(document.getElementById('num1').value)
    var b = parseInt(document.getElementById('num2').value)
    let val = a + b
    document.getElementById('result').innerText = val
}

console.log(document.getElementById('result').innerHTML)

            
const arr = ["Apple","Banana","Mango"]




//for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

//for in loop

for(let i in arr){
    console.log(arr[i])
}


console.log(arr)

const obj = {
    car:"BMW",
    color: "red"
}

console.log(obj.color)

console.log(Math.floor(Math.random() * 10))



