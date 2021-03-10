
function caricaFile() {
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://restcountries.eu/rest/v2/capital/london', true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //console.log(JSON.parse(this.responseText))
            convertiJson(this.responseText);
        } 
    }
}

function convertiJson(dati) {
   const data = JSON.parse(dati);
   console.log(data)
}