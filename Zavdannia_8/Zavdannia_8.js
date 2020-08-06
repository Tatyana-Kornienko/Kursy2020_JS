var groupNumber1 =[91,13,28,54,67,21,93,89,100,4];

document.write("Група 1 <br \/> <br \/> ")
document.write(groupNumber1)

var groupNumber2 =[95,85,76,98,68,73,77,58,23,96];

document.write("<hr> Група 2 <br \/> <br \/>")
document.write(groupNumber2);

var groupNumber3 =[55,52,68,97,13,92,97,75,90,45];

document.write("<hr> Група 3 <br \/> <br \/>")
document.write(groupNumber3);


allStudentMarks(groupNumber1, groupNumber2, groupNumber3 );

function allStudentMarks(){
   	var allMarks = [].concat(...arguments);
    var levelStudents = sortMarks( allMarks);
    displayResults(levelStudents);
}

function sortMarks(marks){
	var highLevel=[], middleLevel = [], lowLevel= [];
	for(let someMark of marks){
        if(someMark >= 89){
            levelStudents(someMark, highLevel)  
        }else if(someMark >= 65 && someMark< 89){
            levelStudents(someMark, middleLevel) 
        }else{
            levelStudents(someMark, lowLevel) 
        }
    }
    return [].concat([highLevel], [middleLevel], [lowLevel]) 
}

function levelStudents(someMark, array){
  return array.push(someMark)
}

function displayResults(levelStudents){
	for(let i = 0; i < levelStudents.length; i++){
        if(i == 0) document.write("<br><br> Високий рівень <hr>")
        else if(i == 1) document.write("<br><br> Середній рівень <hr>")
        else if(i == 2) document.write("<br><br> Низький рівень <hr>")
        for(let j = 0; j < levelStudents[i].length; j++){
      	    document.write(` ${j+1}) ${levelStudents[i][j]}<br>`)
        }
    }
}