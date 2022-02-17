// DOM variables
const clearButton = document.querySelector("body > div.button > button");
let container = document.querySelector("body > div.container");

// New Div

function createEtchASketch(){
	for (var i = 256; i > 0; i--) {
		let newDiv = document.createElement("div");
		newDiv.classList.add("pixel", "level-0");
		newDiv.addEventListener("mouseover", function(e){
			if (newDiv.classList.contains("level-0") === true) {
				e.target.style.backgroundColor = "grey";
				newDiv.classList.replace("level-0", "level-1");
			} else if (newDiv.classList.contains("level-1") === true) {
				e.target.style.backgroundColor = "black";
			}
		});
		container.appendChild(newDiv);
	};
};
createEtchASketch()

// Clear
clearButton.addEventListener("click", function(){
	for (var i = 256; i > 0; i--) {
		container.removeChild(container.lastChild);
	}
	createEtchASketch();
})