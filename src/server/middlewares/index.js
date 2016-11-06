export const isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    } else {
        res.json({
            authenticated: false
        })
    }
}

export const redirectMiddleware = (req, res, next) => {
    res.redirect('/');
}
