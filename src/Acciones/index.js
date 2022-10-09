export const enviaRegistro = async (usuario) => {

    let respuesta = false;

    await fetch('http://localhost:8000/api/createDocuments',{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
                "accept" : "application/json"
            },
            body: JSON.stringify(usuario)
        }
    )
    .then(response =>{
        if(response.status == 200){
            respuesta = true
        }
    })

    return respuesta

}

export const eliminarUsuario = async (id) => {

    let respuesta = false;

    await fetch('http://localhost:8000/api/deleteDocuments',{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify({
            id:id
        })
        }
    )
    .then(response =>{
        if(response.respuesta == true){
            respuesta = true;
        }
    })

    return respuesta;
}

export const agregarMatricula = async (datos) => {

    let respuesta = false;

    await fetch('http://localhost:8000/api/createMatricula',{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify(datos)
        }
    )
    .then(response =>{
        if(response.respuesta == true){
            respuesta = true;
        }
    })

    return respuesta;
}

export const agregarCuotaFetch = async (datos) => {

    let respuesta = false;

    await fetch('http://localhost:8000/api/createCuota',{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "accept" : "application/json"
        },
        body: JSON.stringify(datos)
        }
    )
    .then(response =>{
        if(response.respuesta == true){
            respuesta = true;
        }
    })

    return respuesta;
}
