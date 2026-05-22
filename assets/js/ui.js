export function mostrarContactos(contactos) {

    const tabla = document.getElementById('tablaContactos');

    tabla.innerHTML = '';

    contactos.forEach(contacto => {

        tabla.innerHTML += `
            <tr>
                <td>${contacto.id}</td>
                <td>${contacto.nombre}</td>
                <td>${contacto.telefono}</td>
                <td>${contacto.correo}</td>
                <td>
                <button
                        class="btn btn-warning btn-sm editar"
                        data-id="${contacto.id}"
                        data-nombre="${contacto.nombre}"
                        data-telefono="${contacto.telefono}"
                        data-correo="${contacto.correo}"
                    >
                        ✏️
                    </button>

                    <button
                        class="btn btn-danger btn-sm eliminar"
                        data-id="${contacto.id}"
                    >
                        🗑️
                    </button>

                </td>
            </tr>
        `;
    });
}