let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0


for(i=0; i<weeklyExpenseQuestions.length; i++){let StringAnswer = window.prompt(weeklyExpenseQuestions[i])
let numberAnswer = parseFloat(StringAnswer)
console.log(numberAnswer)
weeklyExpenses = weeklyExpenses+numberAnswer 
}

for(i=0; i<monthlyExpenseQuestions.length; i++){let StringAnswer = window.prompt(monthlyExpenseQuestions[i])
let numberAnswer = parseFloat(StringAnswer)
console.log(numberAnswer)
monthlyExpenses = monthlyExpenses + numberAnswer
}

for(i=0; i<annualExpenseQuestions.length; i++){let StringAnswer = window.prompt(annualExpenseQuestions[i])
    let numberAnswer = parseFloat(StringAnswer)
    console.log(numberAnswer)
    annualExpenses = annualExpenses + numberAnswer
    }