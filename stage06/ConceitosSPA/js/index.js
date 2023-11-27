import Router from'./router.js'

Router.add("/", "../stage06/ConceitosSPA/pages/home.html");
Router.add("/about", "../stage06/ConceitosSPA/pages/about.html");
Router.add("/contact", "../stage06/ConceitosSPA/pages/contact.html");
Router.add(404, "../stage06/ConceitosSPA/pages/404.html");

Router.handle()
window.onpopstate = () => Router.handle()  
window.route = () => Router.route() 