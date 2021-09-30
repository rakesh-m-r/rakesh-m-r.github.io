
function menubar() {
    document.querySelector('.content').style = "display: none;"
}

function adjust() {
  const wrapper = document.querySelector(".wrapper");
  const top = wrapper.getBoundingClientRect().top;
  const content = document.querySelector(".content");

  document.querySelector('.content').style = "display: flex;"

  if (top < content.getBoundingClientRect().height) {
    content.classList.add("down");
  } else {
    content.classList.remove("down");
  }
}

