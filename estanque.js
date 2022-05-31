var litros_actuales;


litros_actuales = Number(window.prompt('ingrese la cantidad de litros actuales del estanque '));
while (litros_actuales < 10) {
  litros_actuales = litros_actuales + 1;
  window.alert('litros aumentando en ... ' + String(litros_actuales));
}
window.alert('estanque lleno');
