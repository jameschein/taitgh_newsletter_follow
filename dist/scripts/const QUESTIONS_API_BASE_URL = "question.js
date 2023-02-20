const QUESTIONS_API_BASE_URL = "questions.json"

// ALL FUNCTIONS BELOW ARE HOISTED AS DECLARATIONS AND NOT ASSIGNMENTS!!
fetchAndAppendQuestions()

// STITCHING ALL THREE FUNCTIONS TOGETHER [NEED ASYNC HERE TOO]
async function fetchAndAppendQuestions() {
  const questions = await fetchQuestions()
  const questionsByCategory = getQuestionsByCategory(questions)
  const wrapper = document.getElementById("wrapper")

  for (const [category, questions] of Object.entries(questionsByCategory)) {
    const categoryDiv = createCategory(category, questions)
    wrapper.append(categoryDiv)
  }
}




// APPEND TO PAGE BY CREATING INDIVIDUAL CATEGORY DIVS WITH ASSOCIATED QUESTIONS
function createCategory(category, questions) {
  const categoryDiv = document.createElement("div")
  categoryDiv.classList.add("category", "col", "s3")
  const h4 = document.createElement("h4")
  h4.classList.add("card-panel", "pink", "lighten-2")
  h4.textContent = category
  categoryDiv.append(h4)

  questions.forEach(question => {
    console.log(question)
    const questionDiv = document.createElement("div")
    questionDiv.classList.add("question")
    const p = document.createElement("p")
    p.textContent = question.name
    questionDiv.append(p)
    categoryDiv.append(questionDiv)
  })

  return categoryDiv
}



// TRANSFORM THE DATA INTO ORGANISED USABLE OBJECT of CATEGORY ARRAYS
function getQuestionsByCategory(questions) {
  // EMPTY OBJ
  const questionsByCategory = {}
  // LOOP OVER THE QUESTIONS

  questions.forEach(question => {
    // ALREADY FINDING SOME DATA INSIDE
    if (questionsByCategory.hasOwnProperty(question.category)) {
      // ADD THE CURRENT ITERATION FROM QUESTIONS TO THE RIGHT CATEGORY
      questionsByCategory[question.category].push(question)
      // CATEGORY SET UP WITH FIRST QUESTIONS
    } else {
      questionsByCategory[question.category] = [question]
    }
  })

  console.log(questionsByCategory)
  return questionsByCategory
}




// FIRST A FETCH OF DATA
async function fetchQuestions() {
  const response = await fetch(QUESTIONS_API_BASE_URL)
  const questions = response.json()

  // ALL THE UNORGANISED DATA
  console.log(questions)
  return questions
}
