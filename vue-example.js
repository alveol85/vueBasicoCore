var app = new Vue({
  el: '#alveol',
  data: {
    message: 'Hello Vue!',
    procesadores: ['I3','I5','I7','I9']
	
  }
});
console.log("variable de mensaje a continuacion");
console.log(app.message);

app.message = "Hola mundo";

// DOM not updated yet
Vue.nextTick(function () {
  // DOM updated
})

// usage as a promise (2.1.0+, see note below)
// Vue.nextTick()
//   .then(function () {
//     // DOM updated
//   })

//********************* */

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Carlos',
    lastName: 'Marques',
    // fullName: ''
  },
  // watch: {
  //   firstName: function (val) {
  //     this.fullName = val + ' ' + this.lastName
  //   },
  //   lastName: function (val) {
  //     this.fullName = this.firstName + ' ' + val
  //   }
  // },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
});

vm.fullName = 'Phillip Expenser';

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false,
    rawHtml: "<table border='1'><tr><td>Celda 3</td></tr><tr><td>Celda 6</td></tr></table>",
    isButtonDisabled: true,
    estilo: "color:red;text-align:center",
    parametro: "color:blue",
    atributo: "style",
    message: "Alexander Velez Olarte",
    isActive: false,
    hasError: true,
    error: true,
    classObject: {
      active2: true,
      'text-danger2': false
    }
  },
  computed: {
    // a computed getter
    mensageAlReves: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
    now: function () {
      return Date.now()
    },
    classObject2: function () {
      console.log('style clase active3: ');
      console.log(this.isActive && !this.error);
      console.log('style clase text-danger3: ');
      console.log(this.error && this.error.type === 'fatal');
      return {
        active3: this.isActive || this.error,
        'text-danger3': this.error && this.error.type === 'fatal'
      }
    }
  }
});

console.log(app3.mensageAlReves);

var msg5 = "mensaje modificado";

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: msg5
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    isActive: true,
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});

var msgFreeze = {saludo:"hola"};
var msgFreeze2 = {saludo:"hola"};

Object.freeze(msgFreeze); // sirve para desenlazar el objeto del controlador

var appFreezVista = new Vue({
  el: '#freezExampleVista',
  data: {
    msgControler: msgFreeze,
    msgControler2: msgFreeze2
  }
});


appFreezVista.saludo = "despues del saludo con el controlador";
msgFreeze.saludo = "despues del saludo";

msgFreeze2.saludo = "despues del saludo";

d = document.getElementById("d");
console.log('Aqui el html: ' + d.outerHTML);

Vue.component('button-counter', {
  data: function () {
    return {
    count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  });

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // define methods under the `methods` object
  methods: {
    warn: function (message, event) {
      // now we have access to the native event
      if (event){ 
        event.preventDefault();
        console.log(message);
      }
      
    },
    doThis: function () {
      // now we have access to the native event
        console.log('Hola mundo');
    },
    doSomething: function () {
      // now we have access to the native event
        console.log('Hiso algo');
    }
  }
});


