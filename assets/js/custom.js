const navLinks = document.querySelectorAll(".sidebar li");
const navCollapse = document.querySelectorAll(".sidebar .bta-collapse li");
const url = window.location.href;

if (url.includes("dashboard")) {
  navLinks[0].classList.add("active");

} else if (url.includes("tickets_index")) {
  navLinks[1].classList.add("active");
  navCollapse[0].classList.add("active");

} else if (url.includes("tickets_create")) {
  navLinks[1].classList.add("active");
  navCollapse[1].classList.add("active");

} else if (url.includes("tickets_view")) {
  navLinks[1].classList.add("active");

} else if (url.includes("announcements")) {
  navLinks[4].classList.add("active");

} else if (url.includes("faq")) {
  navLinks[5].classList.add("active");

} else if (url.includes("about")) {
  navLinks[6].classList.add("active");

} else if (url.includes("settings")) {
  navLinks[7].classList.add("active");

} else {
  // navLinks[0].classList.remove("active");
}