var gradebook = [];
var average = 0;
var sum = 0;
var letterGrade;

// Prompts the user for the student's name and ID
var studentName = prompt("Enter the students name:");
var studentID = prompt("Enter the students ID:");

// Prompts the user for a grade and converts it to a number
var grades = Number(prompt("Enter in the assignment grades as "
													 + "a percentage between 0 and 100: \n" 
													 + "Enter '-1' to quit."));

// Until the user enters -1, pushes the grades from the user into the array
while (grades !== -1)
{
	gradebook.push(grades);
	grades = Number(prompt("Enter in the students assignment grades as " 
												 + "a percentage between 0 and 100: \n" 
												 + "Enter '-1' to quit."));
}

// Outputs the grades entered by the user to the screen
document.write("These are the grades you entered:")
document.write("<ul>");
for (var i = 0; i < gradebook.length; i++)
{
	document.write("<li>" + gradebook[i] + "%</li>");
}
document.write("</ul>");

// Finds the sum of all the grades and averages them
for (i = 0; i < gradebook.length; i++)
{
	sum = sum + gradebook[i];
}
average = sum / gradebook.length;

// Sorts the grades into ascending order within the array
gradebook.sort(function(a, b) {return a-b});

//Displays the grades sorted loweste to highest
document.write("Here are the grades sorted lowest to highest:");
document.write("<ul>");
for (var i = 0; i < gradebook.length; i++)
{
	document.write("<li>" + gradebook[i] + "%</li>");
}
document.write("</ul>");

// If/Else statements to determine what the letter grade 
// is based on the average grade
if (93 <= average)
{
	letterGrade = "A";
}
else if (90 <= average && average < 93)
{
	letterGrade = "A-";
}
else if (87 <= average && average < 90)
{
	letterGrade = "B+";
}
else if (83 <= average && average < 87)
{
	letterGrade = "B";
}
else if (80 <= average && average < 83)
{
	letterGrade = "B-";
}
else if (77 <= average && average < 80)
{
	letterGrade = "C+";
}
else if (73 <= average && average < 77)
{
	letterGrade = "C";
}
else if (70 <= average && average < 73)
{
	letterGrade = "C-";
}
else if (67 <= average && average < 70)
{
	letterGrade = "D+";
}
else if (63 <= average && average < 67)
{
	letterGrade = "D";
}
else if (60 <= average && average < 63)
{
	letterGrade = "D-";
}
else
{
	letterGrade = "F";
}

// Outputs the average, lowest, highest, and letter grades to the screen
document.write("The average grade for " + studentName + " is : " 
							 + average + "%<br>");
document.write("The lowest grade for " + studentName + " is : " 
							 + gradebook[0] + "%<br>");
document.write("The highest grade for " + studentName + " is : " 
							 + gradebook[gradebook.length -1] 
							 + "%<br>");
document.write("The letter grade for " + studentName + " is : " 
							 + letterGrade + ".<br>");