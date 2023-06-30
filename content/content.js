const inti = () => {
  const printButton = document.querySelector(
    'button[onclick="printInvoice(913)"]'
  );
  if (printButton) {
    printButton.addEventListener("click", () => {
      console.log("clicked..");
    });
  } else {
    console.log("btn not fount!");
  }
};

if (document.readyState === "complete") {
  inti();
} else {
  inti();
}
