export default function setup(app){
    app.get('/api/userInfo', function(req, res){
        res.json({
            authenticated: !!req.user,
            ...req.user
        });
    });
}
