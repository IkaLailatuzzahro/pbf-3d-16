// Contents of fantastic.js
export let render = function() {
    console.log("Hello from fantastic.render()!")
}

// Contents of wonderful.js
export let render = function() {
        console.log("Hello from wonderful.render()!");
}

// Contents of amazing.js
export let render = function () {
        console.log("Hello from amazing.render()!");
}


// Contents of script.js
import * as fantastic from './fantastic.js';
import * as wonderful from './wonderful.js';
import * as amazing from './amazing.js';

fantastic.render();
wonderful.render();
amazing.render();

// index.html
<!DOCTYPE html>
<html>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.19/system.js"></script>
  <script>
    SystemJS.config({
    map: {
    'plugin-babel'         : 'https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js',
    'systemjs-babel-build' : 'https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js'
    },
    transpiler: 'plugin-babel'
    });
  </script>
  <script>
    SystemJS.import('script.js')
  </script>
  <body>
    <h1>ES6 modules with SystemJS - See console for results</h1>
  </body>

</html>