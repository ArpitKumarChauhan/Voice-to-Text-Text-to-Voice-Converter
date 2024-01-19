let form = document.querySelector("form");
let sr = window.webkitSpeechRecognition || window.SpeechRecognition;//webkitSpeechReccognition for chrome and SpeechRecognition for athor we browser
let spRec = new sr();

spRec.continuous = false;
spRec.interimResults = true;

form.addEventListener("submit", e => {
    e.preventDefault();
    let selectedLanguage = form.querySelector("#language").value;
    setRecognitionLanguage(selectedLanguage);
    spRec.start();
});

spRec.onresult = res => {
    let text = Array.from(res.results)
        .map(r => r[0])
        .map(txt => txt.transcript)
        .join("");
    form.querySelector("textarea").value = text;
};

function setRecognitionLanguage(language) {
    spRec.lang = language;
}
