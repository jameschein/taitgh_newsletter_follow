window.addEventListener("DOMContentLoaded", () => {
  let {documentElement: html, body} = document
  let defaultHtmlOverflow, defaultBodyOverflow

  // BIG-PICTURE HIDESHOW SCROLL FUNCTIONS
  let hideScroll = () => {
    if (html.scrollHeight > html.clientHeight) {
      // store existing overflow style
      defaultHtmlOverflow =
        defaultHtmlOverflow || getComputedStyle(html).overflowY
      defaultBodyOverflow =
        defaultBodyOverflow || getComputedStyle(body).overflowY
      // hide overflow
      html.style.overflowY = "hidden"
      body.style.overflowY = "scroll"
    }
  }

  let showScroll = (index) => {
    console.log("pers" + index)
    // show overflow
    html.style.overflowY = defaultHtmlOverflow
    body.style.overflowY = defaultHtmlOverflow
  }

  // END BIG-PICTURE HIDESHOW SCROLL FUNCTIONS

  const setOfImages = Array.from(document.querySelectorAll("#printwrap .print"))

  setOfImages.map((element, index) => {
    element.addEventListener("click", (e) => {
      console.log(index)
      e.preventDefault()
      BigPicture({
        el: e.target,
        gallery: document.querySelectorAll("#printwrap .print"),
        position: index,
        loop: true,

        // animationStart executed immediately before open animation starts
        animationStart: hideScroll(index),
        // animationEnd executed immediately after open animation finishes
        animationEnd: function () {
          console.log("it has opened")
        },
        // onClose executed immediately after close animation finishes
        onClose: showScroll(index),
        // onChangeImage executed on gallery image change
        onChangeImage: function (props) {
          console.log("gallery image changed", props)
        },
      })
    })
  })
})
