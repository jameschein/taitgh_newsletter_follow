window.addEventListener("DOMContentLoaded", () => {
  const bp = BiggerPicture({
    target: document.body,
  })

  const setOfImages = document.querySelectorAll("#printwrap .print")

  for (let link of setOfImages) {
    link.addEventListener("click", openGallery)
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
