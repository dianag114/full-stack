const API_URL = 'https://dianalau.site/backend-contactos/';


// ==========================
// OBTENER CONTACTOS
// ==========================
export async function obtenerContactos() {

    const response = await fetch(API_URL);

    return await response.json();
}


// ==========================
// AGREGAR CONTACTO
// ==========================
export async function agregarContacto(contacto) {

    await fetch(API_URL, {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(contacto)
    });
}


// ==========================
// ACTUALIZAR CONTACTO
// ==========================
export async function actualizarContacto(contacto) {

    await fetch(API_URL, {

        method: 'PUT',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(contacto)
    });
}


// ==========================
// ELIMINAR CONTACTO
// ==========================
export async function eliminarContacto(id) {

    await fetch(API_URL, {

        method: 'DELETE',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ id })
    });
}