window.addEventListener("DOMContentLoaded", () => {
  const setOfImages = Array.from(document.querySelectorAll("#printwrap .print"))

  setOfImages.map((element, index) => {
    element.addEventListener("click", (e) => {
      index++
      e.preventDefault()
      const bp = BigPicture({
        el: e.target,
        gallery: document.querySelectorAll("#printwrap .print"),
        position: index,
        loop: true,
      })
    })
  })
})
