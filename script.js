let input = document.getElementById("input");
let result = document.getElementById("result");


function translate() {
    let text = input.value;
    let url = "https://api.funtranslations.com/translate/minion.json?text=" + encodeURIComponent(text);

    let options = {
        method: "GET",
    };
    fetch(url, options)
        .then(function (response) {
            console.log(response);
            return response.json()
            
        })
        .then(function (json) {
            console.log(json);
            let translation = json.contents.translated;
            result.value = translation;
        })
        .catch(function (error) {
            console.log("error", error);
        });
}

document.getElementById("btn").addEventListener("click", translate);
