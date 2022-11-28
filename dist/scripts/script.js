window.addEventListener("DOMContentLoaded", () => {
  const bp = BiggerPicture({
    target: document.body,
  })

  const setOfImages = document.querySelectorAll("#printwrap .print")
  const setOfNewDrawings = document.querySelectorAll(".slideshow .slide-link")

  for (let link of setOfImages) {
    link.addEventListener("click", openGallery)
  }

  for (let link of setOfNewDrawings) {
    link.addEventListener("click", openDrawings)
  }

  // open BiggerPicture
  function openDrawings(e) {
    e.preventDefault()
    bp.open({
      items: setOfNewDrawings,
      el: e.currentTarget,
    })
  }

  // open BiggerPicture
  function openGallery(e) {
    e.preventDefault()
    bp.open({
      items: setOfImages,
      el: e.currentTarget,
    })
  }
})
