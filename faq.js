const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector("svg");

  button.addEventListener("click", () => {
    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    // Close all
    faqItems.forEach((i) => {
      i.querySelector(".faq-answer").style.maxHeight = null;
      i.querySelector("svg").classList.remove("rotate-180");
    });

    // Open current one if not already
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.add("rotate-180");
    }
  });
});
