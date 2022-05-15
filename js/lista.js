
const Users = [
    {user: "Pikachu", password:"pikachu1234"},
    {user: "Bulbasaur", password:"bulbasaur1234"},
    {user: "juan", password:"123"},
    {user: "leidy", password:"1234"},
    {user: "nora", password:"12345"}
];

console.log(Users);

//Funcion Validar
function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    for (let i = 0; i < Users.length; i++) {
        if(usuario=="" || contraseña==""){
            alert("Por favor Ingrese los datos");
            return;
        }else{
            if (usuario==Users[i].user && contraseña==Users[i].password) {
                alert("Bienvenido " + Users[i].user);
                window.location.href = "lista.html"
                return;
            }
        }
    }
    alert("Datos Incorrectos o Usuario No Registrado");
    return;
    
    
    
}


//Se estadeclarando la variable lista y estamos inicializando
var lista1 = document.getElementById("listaflores");
//Crear un elemento a la lista de html



    var Listarosas = ["Rosas", "Tulipanes", "Claveles", "Gerbera", "Orquideas", "Lilis", "Alcatrace"]
    Listarosas.push()
    for (let i = 0; i < Listarosas.length; i++) {
        const element = Listarosas[i];
        var li = document.createElement("li");
        li.textContent = element;
        lista1.appendChild(li);


    }
    
