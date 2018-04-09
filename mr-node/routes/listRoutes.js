module.exports = function(app) {
    var service = require('../controllers/controller');
    // using router.get() to prefix our path
    // url: http://localhost:3000/list/
    app.get('/list', (request, response) => {
        service.listAll(request, response, app.get('folder'), function (files) {
            response.json(files);
        });
    });
};
