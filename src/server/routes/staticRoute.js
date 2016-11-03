import EXPRESS from 'express';
import PATH from 'path';

export default function setup(app){
    app.use('/', EXPRESS.static(PATH.resolve(__dirname, '../../../', 'public')));
}
