const element = document.getElementById("main");
let nameL = element.innerHTML;
// if(nameL==="Hello World")
if (nameL.length > 7) {
  element.style.color = "green";
} else {
  nameL = "Helllo";
  element.style.color = "red";
}
console.log(nameL);
