import User from './models/User';

export function getUsers(query={}){
    return Promise.resolve(User.find(query));
}
