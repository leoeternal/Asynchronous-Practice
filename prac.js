// const arr=[
//     {name:"Nikhil",subject:"English"},
//     {name:"Aryan",subject:"Hindi"}
// ];


// const enrollStudent=(student,getStudents)=>{
//     setTimeout(function(){
//         arr.push(student);
//         console.log("enroll student fun started");
//         getStudents();
//     },5000);
// }

// const getStudents=()=>{
//     setTimeout(()=>{
//         console.log("get students func started");
//         arr.forEach((student)=>{
//             console.log(student.name);
//         });
//     },2000);
// }

// let newStudent={name:"Sddharth",subject:"App Development"};

// enrollStudent(newStudent,getStudents);


const arr=[
    {name:"Nikhil",subject:"English"},
    {name:"Aryan",subject:"Hindi"}
];


const enrollStudent=(student)=>{
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        arr.push(student);
        console.log("Student has been enrolled");
        const error=false;
        if(!error){
            resolve();
        }
        else{
            reject();
        }
    },5000);
})
}

const getStudents=()=>{
    setTimeout(()=>{
        arr.forEach((student)=>{
            console.log(student.name);
        });
        console.log("students have been fetched");
    },2000);
}

let newStudent={name:"Sddharth",subject:"App Development"};
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("Sorry data cannot be printed");
})

// function test(x){
//     console.log(x);
// }

// function demo(){
//     console.log("demo called");
//     // return "returned";
// }

// test(demo);