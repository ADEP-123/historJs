# Historia de JavaScript – cuenta regresiva

Página web interactiva hecha con **HTML, CSS y JavaScript puro**. Tú defines un tiempo, un contador estilo *flip clock* baja hasta cero, despega un cohete y aparece una línea de tiempo con la **historia de JavaScript**.

## Cómo funciona

1. **Inicio**: ingresas minutos y segundos (`MM:SS`, de 00 a 59). La app valida que los campos no estén vacíos ni fuera de rango.
2. **Transición**: pantalla de carga breve.
3. **Cuenta regresiva**: contador con tarjetas que se voltean cada segundo, con sonido de *beep*.
4. **Despegue**: al llegar a `00:00` se muestra un cohete con su sonido.
5. **Historia JS**: línea de tiempo con animaciones al hacer scroll (librería [AOS](https://michalsnik.github.io/aos/)): creación por Brendan Eich (1995), Netscape Navigator 2.0, estandarización como ECMAScript (1997) y la actualidad con AJAX. Incluye bibliografía.

## Estructura

```
index.html
style/styles.css
scripts/
  index.js                  Eventos y validación del tiempo ingresado
  variables.js              Referencias al DOM y estado del contador
  modules/
    inicio/                 setUserTime, startAPP
    counter/                flip, flipDigit, reprodBeep
    transCohete/            insertarCohete, reproducitAudCohe, switchToHistory
images/  sounds/            Imágenes y audios
```

## Cómo ejecutarlo

Usa módulos ES, así que debe servirse por HTTP:

```bash
git clone https://github.com/ADEP-123/historJs.git
cd historJs
npx serve .
```

También puedes abrirlo con la extensión **Live Server** de VS Code.

## Tecnologías

HTML5, CSS3, JavaScript (ES Modules), AOS (vía CDN).
