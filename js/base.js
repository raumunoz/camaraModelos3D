// Get a reference to the database service
var database = firebase.database();

function escribirDato(apodo) {
  database.ref('0/brazos' + apodo).set({
    apodo: 'nuevo',
  });
}