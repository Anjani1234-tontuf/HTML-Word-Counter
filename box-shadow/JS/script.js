let text = document.getElementById("text");
let x = document.getElementById("x-position");
let y = document.getElementById("y-position");
let blur = document.getElementById("blur");
let spread = document.getElementById("spread");
let color = document.getElementById("shadow-color");

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", changeInput);
});

text.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blur.value}px ${spread.value}px ${color.value};`;

function changeInput(evt) {
    document.documentElement.style.setProperty(
        `--${evt.target.name}`,
        evt.target.value
    );
    text.innerHTML = `box-shadow: ${x.value}px ${y.value}px ${blur.value}px ${spread.value}px ${color.value};`;
}
