export default function setup(app){
    app.get('/api/userInfo', function(req, res){
        console.log(req.user);
        res.json({
            authenticated: !!req.user,
            ...req.user
        });
    });
}
