window.addEventListener("scroll", moveScrollIndicator);

const scrollIndicatorElement = document.getElementById("scrollIndicator");
const maxheight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e) {
  const percentage = (window.scrollY / maxHeight) * 100;
  scrollIndicatorElement.style.width = percentage + "%";
}
