const users = [{
    id: 1,
    name: "Marvin Javier Carias",
    email: "secu1jv@gmail.com",
},
{
    id:2,
    name: "andy pineda",
    email: "none",
},
];



const routes = app => {
    app.get('/users', (request, response) => {
        response.send(users);
    });
}

//exportar rutas 
module.exports = routes;
