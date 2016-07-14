var express = require('express');
var router = express.Router();


router.get('/dict', function(req, res) {
  res.json({
    'chibidan': "laoda",
    'shilobi': "laoer"
  });
});


module.exports = router;
/*

router.get('/dict', function(req, res, next){
  res.json({
    chibidan: "laoda",
    shilobi: "laoer"
  });
});
  */
