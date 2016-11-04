import express from 'express';
import path from 'path';

export default function setup(app){
    app.use('/', express.static(path.resolve(__dirname, '../../../', 'public')));
}
