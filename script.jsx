
function caricaFile() {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'https://restcountries.eu/rest/v2/capital/london', true);
        xhttp.send();

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.responseText);
            } else if (this.statusText === 404) {
                reject(new Error(this.responseText));
            }
        }
        xhttp.onerror=function(){
            reject(new Error(this.responseText));
        }
    })
}

function convertiJson() {
    caricaFile().then((res) => {
        const dati = JSON.parse(res);
        console.log('DATI', dati)
        //document.getElementById('display').innerHTML= dati.stringyfi();
    }).catch((err) => {
        console.log(err)
    })
}