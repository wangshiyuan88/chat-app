import EXPRESS from 'express';
import PATH from 'path';

module.exports = function(app){
    app.use('/', EXPRESS.static(PATH.resolve(__dirname, '../../../', 'public')));
}
