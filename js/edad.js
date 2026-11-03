function calcularEdad(fechaTexto) {
  const nacimiento = new Date(fechaTexto + 'T00:00:00');
  if (isNaN(nacimiento.getTime())) return null;
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
  return edad;
}

const nombre = prompt('¿Cuál es tu nombre?');
const fecha = prompt('¿Cuál es tu fecha de nacimiento? (AAAA-MM-DD)');
const resultado = document.getElementById('resultado');
const edad = (nombre && fecha) ? calcularEdad(fecha) : null;

if (edad === null || edad < 0) {
  resultado.textContent = 'Datos no válidos.';
} else {
  resultado.textContent = 'Hola ' + nombre + ', tienes ' + edad + ' años.';
}