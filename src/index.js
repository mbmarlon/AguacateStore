// Se define la URL de la API
const url = "https://platzi-avo.vercel.app/api/avo";

// Se realiza la solicitud HTTP a la API
window.fetch(url)
    .then((respuesta) => respuesta.json())
    .then((responseJson) => {

        // Se crea un arreglo vacío para almacenar todos los elementos de la página
        const allItems = [];

        // Se itera sobre cada objeto en la propiedad "data" del objeto "responseJson"
        responseJson.data.forEach(element => {

            // Se crean elementos HTML para mostrar la información de cada objeto
            const image = document.createElement('img');
            const title = document.createElement('h2');
            const price = document.createElement('div');

            // Se crea un contenedor para los elementos HTML
            const container = document.createElement('div');
            container.append(image, title, price);

            // Se agrega el contenedor al arreglo "allItems"
            allItems.push(container);
        });

        // Se agregan todos los elementos del arreglo "allItems" al cuerpo de la página
        document.body.append(...allItems);
    });