function createHeader() {
  let headerBarContainer = document.createElement("div");
  headerBarContainer.classList.add("header-bar")
  let header = document.querySelector("header");
  header.appendChild(headerBarContainer);

  let headerItems = [
    document.createElement("div"),
    document.createElement("div"),
  ];
  headerItems[0].classList.add("header-logo");
  headerItems[1].classList.add("header-label");
  headerItems[0].innerText = "✓";
  headerItems[1].innerText = "Todoit!";

  let headerBar = document.querySelector(".header-bar");
  headerItems.forEach((item) => {
    headerBar.appendChild(item);
  });
}

export {createHeader}