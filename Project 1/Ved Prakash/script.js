const current = new Date();

const currentTime = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  hour12: false,
});

if (currentTime < "19") {
  // Light Mode
  document.querySelector("body").style.backgroundColor = "#90ee90";
  document.querySelector(".mode").innerHTML = "Currently Viewing this page in Light Mode.";
} else {
  // Dark Mode
  document.querySelector("body").style.backgroundColor = "#008000";
  document.querySelector(".mode").innerHTML = "Currently Viewing this page in Dark Mode.";
}

// Hamburger Operation
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 300);
  }
});