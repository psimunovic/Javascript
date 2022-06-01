var litros_actuales, exceso;


litros_actuales = Number(window.prompt('ingrese la cantidad de litros actuales del estanque '));
while (litros_actuales < 10) {
  litros_actuales = litros_actuales + 1;
  window.alert('litros aumentando en ... ' + String(litros_actuales));
}
if (litros_actuales > 10) {
  exceso = litros_actuales - 10;
  litros_actuales = litros_actuales - exceso;
  window.alert('tuvo un exceso de : ' + String(exceso));
}
window.alert('estanque lleno');
