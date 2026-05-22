import {
    obtenerContactos,
    agregarContacto,
    actualizarContacto,
    eliminarContacto
} from './api.js';

import { mostrarContactos } from './ui.js';

const cargarContactos = async () => {

    const contactos = await obtenerContactos();

    mostrarContactos(contactos);
};

cargarContactos();


// ==========================
// AGREGAR CONTACTO
// ==========================

const formAgregar = document.getElementById('formAgregar');

formAgregar.addEventListener('submit', async (e) => {

    e.preventDefault();

    const contacto = {

        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        correo: document.getElementById('correo').value
    };

    await agregarContacto(contacto);

    location.reload();
});


// ==========================
// EVENTOS TABLA
// ==========================

const tabla = document.getElementById('tablaContactos');

tabla.addEventListener('click', async (e) => {

    // ==========================
    // ELIMINAR
    // ==========================

    if(e.target.classList.contains('eliminar')) {

        const id = e.target.dataset.id;

        const confirmar = confirm(
            '¿Deseas eliminar este contacto?'
        );

        if(confirmar) {

            await eliminarContacto(id);

            location.reload();
        }
    }

    // ==========================
    // EDITAR
    // ==========================

    if(e.target.classList.contains('editar')) {

        document.getElementById('editId').value =
            e.target.dataset.id;

        document.getElementById('editNombre').value =
            e.target.dataset.nombre;

        document.getElementById('editTelefono').value =
            e.target.dataset.telefono;

        document.getElementById('editCorreo').value =
            e.target.dataset.correo;

        const modal = new bootstrap.Modal(
            document.getElementById('modalEditar')
        );

        modal.show();
    }
});


// ==========================
// ACTUALIZAR CONTACTO
// ==========================

const formEditar = document.getElementById('formEditar');

formEditar.addEventListener('submit', async (e) => {

    e.preventDefault();

    const contacto = {

        id: document.getElementById('editId').value,

        nombre: document.getElementById('editNombre').value,

        telefono: document.getElementById('editTelefono').value,

        correo: document.getElementById('editCorreo').value
    };

    await actualizarContacto(contacto);

    location.reload();
});