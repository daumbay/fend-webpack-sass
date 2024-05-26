function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=20.2376&lon=84.27&appid=aac1d7f7625ee92bc0a51d78900a24a7')
    .then(res => res.json())
    .then(res => {
        const para = document.createElement('p');
        para.innerHTML = res.main.temp;
        document.getElementById('results').appendChild(para);
    })
}

export { handleSubmit }
