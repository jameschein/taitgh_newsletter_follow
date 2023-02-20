// FIRST A FETCH OF DATA
// json seems to be fetched using a site-root-relative path in vscode
const DRAWINGS_API_BASE_URL = "scripts/newdrawings.json"

async function fetchData() {
  const response = await fetch(DRAWINGS_API_BASE_URL)
  const data = await response.json()

  // ALL THE UNORGANISED DATA
  return data
}

function organiseData(drawings) {
  console.log(drawings.list)
  // MAKE EMPTY OBJECT
  const organiser = {}
  for (let drawing of drawings.list) {
    // ALREADY FINDING SOME DATA INSIDE
    organiser.push(drawing)
  }

  console.log(organiser)
  return organiser
}

const drawings = fetchData()
console.log(drawings)
organiseData(drawings)

// function getQuestionsByCategory(questions) {
//   // EMPTY OBJ
//   const questionsByCategory = {}
//   // LOOP OVER THE QUESTIONS

//   questions.forEach(question => {
//     // ALREADY FINDING SOME DATA INSIDE
//     if (questionsByCategory.hasOwnProperty(question.category)) {
//       // ADD THE CURRENT ITERATION FROM QUESTIONS TO THE RIGHT CATEGORY
//       questionsByCategory[question.category].push(question)
//       // CATEGORY SET UP WITH FIRST QUESTIONS
//     } else {
//       questionsByCategory[question.category] = [question]
//     }
//   })

//   console.log(questionsByCategory)
//   return questionsByCategory
// }

// BUILD THE DOM PICTURE PART
// const picture = createElement("picture")
// const slideLink = createElement("a")
// const imageTag = createElement("img")
// // need an array of sources
// const sources = []
// for (let i = 0; i < dataBlob.sources.length; i++) {
//   const source = createElement("source")
//   source.addAttribute("media")
//   source.addAttribute("srcset")
// }

//
// STRUCTURE FOR SLIDES
/* <picture id="drawing1">
                
      <source
      media="(min-width:980px)"
      srcset="
        images/drawings/desktop/landscape/NGA2BW2022477-meditation-app-140922.jpg
      " />
    
      <source
      media="(min-width:767px)"
      srcset="
        images/drawings/ipad/landscape/NGA2BW2022477-meditation-app-140922.jpg
      " />
    
      <source
      media="(min-width:535px)"
      srcset="
        images/drawings/iphone/landscape/NGA2BW2022477-meditation-app-140922.jpg
      " />




    <a
      href="images/drawings/desktop/landscape/NGA2BW2022477-meditation-app-140922.jpg"
      data-img=
          "images/drawings/iphone/landscape/NGA2BW2022477-meditation-app-140922.jpg 1133w, 
          images/drawings/desktop/landscape/NGA2BW2022477-meditation-app-140922.jpg 1667w"
      data-thumb="images/drawings/iphone/landscape/NGA2BW2022477-meditation-app-140922.jpg"
      data-height="1667"
      data-width="2500"
      data-alt="Insanely still for an hour."
      class="slide-link">
      
      <img
        src="images/drawings/iphone/landscape/NGA2BW2022477-meditation-app-140922.jpg"
        alt="Meditation App"
        class="slide landscape" />
    
    </a>
    
</picture> 




*/
