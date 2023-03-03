var express = require('express');

var router = express.Router();

router.route('').get( function(req, resp){
    resp.render('user/info',{
        no:req.query.no || 0
    });
});

router.route('/join').get( function(req, resp){
    resp.render('user/join');
});
router.route('/join').post( function(req, resp){
    console.log(req.body);
    resp.render('/');
});



router.route('/api').get( function(req, resp){
    var vo = {
        no:10,
        name:'둘리',
        email:'dooly@gmail.com'
    }
    resp.send(vo);
});

router.route('/:no').get( function(req, resp){
    resp.render('user/info',{
        no:req.params.no || 0
    });
});

module.exports = router;