
function menubar() {
    // document.querySelector('.content').style = "display: initial;"
}

function adjust() {
  const wrapper = document.querySelector(".wrapper");
  const top = wrapper.getBoundingClientRect().top;
  const content = document.querySelector(".content");


  if (top < content.getBoundingClientRect().height) {
    content.classList.add("down");
  } else {
    content.classList.remove("down");
  }
}

