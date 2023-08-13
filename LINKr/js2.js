let newURL = document.getElementById("shortlink");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}
// https://amritauniv-my.sharepoint.com/:v:/g/personal/geetham_am_amrita_edu/EesuZ6UAcHhHr3yIIs3MVJsBQA5UoLy0cWWkTeFQb05RsA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZyIsInJlZmVycmFsQXBwUGxhdGZvcm0iOiJXZWIiLCJyZWZlcnJhbE1vZGUiOiJ2aWV3In19&e=2DpWwY