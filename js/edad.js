function calcularEdad(fechaTexto) {
  const nacimiento = new Date(fechaTexto + 'T00:00:00');
  if (isNaN(nacimiento.getTime())) return null;
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
  return edad;
}

const DESTINO_MENORES = 'https://www.pbskids.org';
const nombre = prompt('¿Cuál es tu nombre?');
const fecha = prompt('¿Cuál es tu fecha de nacimiento? (AAAA-MM-DD)');
const contenido = document.getElementById('contenido');
const resultado = document.getElementById('resultado');
const edad = (nombre && fecha) ? calcularEdad(fecha) : null;

if (edad === null || edad < 0) {
  alert('Datos no válidos. Serás redirigido.');
  window.location.href = DESTINO_MENORES;
} else if (edad >= 18) {
  contenido.style.display = 'block';
  resultado.textContent = 'Bienvenido ' + nombre + ', tienes ' + edad + ' años.';
} else {
  alert('Solo se permite el ingreso a mayores de edad.');
  window.location.href = DESTINO_MENORES;
}