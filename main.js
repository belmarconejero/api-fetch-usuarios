function selectUsers(genero = 'female'){
    var display = document.getElementById("display");
    //para borrar el lienzo(sino nos suma hacia abajo)
    display.innerHTML = '';
    fetch("https://randomuser.me/api?gender="+genero+"&&results=10")
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var personas = data.results;
            console.log(personas);
           
            for (var persona of personas) {
                var registro = `
        <tr>
        
            <td>${persona.name.first} ${persona.name.last}</td>
            <td><img src='${persona.picture.thumbnail}'></td>
            <td>${persona.email} </td>
            <td>${persona.location.coordinates.latitude} </td>
            <td>${persona.location.coordinates.longitude}</td>
        </tr>
        `;
                display.innerHTML += registro;
            }
         
        }).catch(function (err) {
            console.log(err);
        })
}
// utilizamos lo de abajo para que por defecto salgan mujeres de primeras
selectUsers('female');