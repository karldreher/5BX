var express = require('express');
var router = express.Router();
const Cakebase = require('cakebase')("./db/ladder.json");

/* GET users listing. */
router.get('/:slug', function(req, res, next) {

  slug = req.params.slug;
  row = Cakebase.get(r => r.rung == slug)
  result = row[0]

  res.render('rung', {
     title: 'Express', 
     rung: row.rung,
     bend: result.bend,
     situp: result.situp,
     leglift: result.leglift,
     pushup: result.pushup,
     runandjump: result.runandjump,
    });
});

module.exports = router;
