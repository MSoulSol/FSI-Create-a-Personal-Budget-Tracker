let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0


for(i=0; i<weeklyExpenseQuestions.length; i++){let StringAnswer = window.prompt(weeklyExpenseQuestions[i])
let numberAnswer = parseFloat(StringAnswer)
console.log(numberAnswer)
weeklyExpenses = weeklyExpenses+numberAnswer 
}
