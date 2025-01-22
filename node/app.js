const fs = require('fs');


const filePath = './notas.json';


/*@param {string} titulo 
@param {string} contenido*/ 
function agregarNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(filePath)) {

    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2), 'utf8');
  console.log('Nota agregada con éxito.');
}


function listarNotas() {
  if (fs.existsSync(filePath)) {

    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    console.log('Notas guardadas:');
    notas.forEach((nota, index) => {
      console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
  } else {
    console.log('No hay notas guardadas.');
  }
}


/*
 @param {string} titulo - El título de la nota a eliminar.
*/
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);


    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2), 'utf8');
    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay notas para eliminar.');
  }
}


agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
eliminarNota('Compras');
listarNotas();

