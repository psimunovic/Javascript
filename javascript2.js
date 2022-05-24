var numero1, numero2, menu, resultado;


numero1 = Number(window.prompt('ingrese el 1er numero: '));
numero2 = Number(window.prompt('ingrese el 2do numero: '));
menu = Number(window.prompt(['MENU CALCULADORA\n','opcion1 SUMA\n','opcion2 RESTA\n','opcion3 MULTIPLICACION\n','opcion4 DIVISION\n','seleccione una opcion del menu : '].join('')));
if (menu == 1) {
  resultado = numero1 + numero2;
  window.alert(resultado);
} else if (menu == 2) {
  resultado = numero1 - numero2;
  window.alert(resultado);
} else if (menu == 3) {
  resultado = numero1 * numero2;
  window.alert(resultado);
} else if (menu == 4) {
  resultado = numero1 / numero2;
  window.alert(resultado);
}
