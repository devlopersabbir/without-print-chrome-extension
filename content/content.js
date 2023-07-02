/**
 * Name: Print Shortcut Google Chrome Extension
 * Version: 0.0.1
 * Manifest_version: 3
 * Supported: Google Chrome | null
 * Language: JavaScript && HTML && JSON
 * Author: Stasysvoras
 * Creator: Sabbir Hossain Shuvo
 * Author_Email: devlopersabbir@gmail.com
 * Author_username: @devlopersabbir
 * Github_repo: https://github.com/devlopersabbir/without-print-chrome-extension
 */

console.clear();
const init = () => {
  const checkPrintBtn = () => {
    const printBtn = document.querySelector(
      'button[onclick="printInvoice(923)"]'
    );
    if (printBtn) {
      printBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("print btn clicked..");
      });
    } else {
      console.log("btn not found");
      setTimeout(checkPrintBtn, 1000); // Wait for 1 second and check again
    }
  };

  const viewBtn = document.querySelector('a[onclick="orderView(923)"]');
  if (viewBtn) {
    viewBtn.addEventListener("click", () => {
      console.log("clicked viewBtn.");
      setTimeout(checkPrintBtn, 2000); // Wait for 2 seconds and check for printBtn
    });
  } else {
    console.log("view btn not found!");
  }
};

if (document.readyState === "complete") {
  init();
} else {
  init();
}
