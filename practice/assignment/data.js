const csv = require('csvtojson');

var fs = require('fs');



async function readAndPrint () {
    const students = await csv().fromFile('students.csv')
    return students;        
}

async function studentsOfStandard(studentsData,std) {
    const students = await csv().fromFile('students.csv')
    return students.filter(student =>  student.standard == std);    
}

async function dataToImport(fileName, data){
    fs.appendFile(fileName, JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
}

async function studentsofStdDiv(std, div) {
    let studentsData = await readAndPrint ();
    let studentof = await studentsOfStandard (studentsData, std)
    let dataOfStudents = studentof.filter(student =>  (student.division == div ));
    await dataToImport("data1.json", dataOfStudents)
}


//----------------------------------AGE calculation---------------------------------------//
async function studentsAge(std) {
    const students = await csv().fromFile('students.csv')
    let stud =students.filter(student =>  (student.standard == std))
    let studentAge = stud.map(student => {
        let DOB = student.dob;  
        const date1 = Date.parse(DOB)
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const year = Math.round(diffTime / (1000 * 60 * 60 * 24 * 365)); 
        student.age = year
        return student;
    })
    await dataToImport("data2.json", studentAge)
return studentAge;
}
//------------------------------------------------------------------------------
async function studentsAgeAbove15(std, age) {
    
    let students = await studentsAge(std)
    //console.log(students)
    let studentsAbove = students.filter(student => { 
        let DOB = student.dob;  
        const date1 = Date.parse(DOB)
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const year = Math.round(diffTime / (1000 * 60 * 60 * 24 * 365));
    if ( year > age) {
        return true;
    }
    else {
        return false;
    }
    })
    await dataToImport("data3.json", studentsAbove)
}
//--------------------------------age less than ------------
async function studentsAgeLessThan(std,age) {
    
let student = await studentsAge(std) 
let studentsbelow = student.filter(student => student.age < age)
console.log(studentsbelow);
await dataToImport("data4.json", studentsbelow)
return studentsbelow; 
}
    
async function averageOfSubject(subject,standard) {
    const students = await csv().fromFile('students.csv');
    let studentsof8th = students.filter(student =>  (student.standard == standard ))
     let totalmarks = 0
     studentsof8th.map(mark => totalmarks +=  parseFloat(mark[subject]))
     console.log(totalmarks);
     studentsAve = totalmarks / studentsof8th.length
    //  let student.average = studentAve;
     console.log(studentsAve)
     await dataToImport("data5.json", totalmarks, studentsAve)
     return studentsAve;
}



async function averageOfsubOfstdOfdiv(subject,standard,division) {
    const students = await csv().fromFile('students.csv');
    let studentsofdiv = students.filter(student =>  (student.standard == standard ) && (student.division == division))
     let totalmarks = 0
     studentsofdiv.map(mark => totalmarks +=  parseFloat(mark[subject]))
     console.log(totalmarks);
    let averageOfSub = (totalmarks / studentsofdiv.length);
    console.log(averageOfSub);
    await dataToImport("data6.json" , averageOfSub)
}

async function topperOfClass (standard) {
    const students = await csv(). fromFile ('students.csv')
    let stdOfDiv = students.filter(student => student.standard == standard);
    let total = stdOfDiv.map(student => 
    parseInt((parseInt(student.maths) + parseInt(student.english) + parseInt(student.chemistry))));
    let avg = total.map(total => parseInt(total / 3));
    let percentage = (total.map(total => parseInt((total / 300) * 100)));
    let names = stdOfDiv.map(student => student.name);
    console.log(names,avg,percentage); 
    topper = percentage[0]; 
    percentage.map(student => {
    if (student > topper) {
topper = student;
    }
});
    console.log("Topper",topper);
    await dataToImport("data7.json", topper)
return topper;
}


async function average(subject,standard,division) {
    const students = await csv().fromFile('students.csv');
    let studentsof8th = students.filter(student =>  (student.standard == standard ) && (division == "A"))
     let totalmarks = 0
     studentsof8th.map(mark => totalmarks +=  parseFloat(mark[subject]))
     console.log(totalmarks);
     console.log(totalmarks / studentsof8th.length)
}


//readAndPrint()
//studentsOfStandard(9)
//studentsofStdDiv(9, "A")
//studentsAge(10)
//studentsAgeAbove15(10, 14)
//studentsAgeLessThan(9,14)

//averageOfSubject("english", 9)
//averageOfsubOfstdOfdiv("maths",10,"C")

//average("maths",10,"B")
topperOfClass(10)
