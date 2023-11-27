class Router { // iniciando minha class
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event){ // trabalhar com rota
        event = event || window.event; // window é global da DOM pai de todos
        event.preventDefault();
      
        window.history.pushState({}, "", event.target.href); 
        this.handle() // this referencia que estou falando daquela função
      }

     handle() {
        const { pathname }  = window.location // dessestruturando meu objeto window
        const route = this.routes[pathname] || this.routes[404]  
      
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        }) // then === entao  
      }

}

export default new Router() // fazendo a instacia do meu objeto criado na linha UM