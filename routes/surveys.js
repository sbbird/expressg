var express = require('express');
var router = express.Router();

var records = {
    'sbbird.zhu@gmail.com': {
        email:    'sbbird.zhu@gmail.com',
        name:     '鸟哥哥',
        chibidan: '抱抱',
        reason:   '打蚊子'
    }
}


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('surveys', {
        records: records
    });
});


router.post('/add', function (req, res) {
    var email = req.body.email;
    if (email in records)
        res.status(500).send('你已经把它丢出去了，不能再回答了');
    else {
        records[email] = req.body;
        console.log(req.body);
        res.redirect('/surveys');
    }
});


module.exports = router;
