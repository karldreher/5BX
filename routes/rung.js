var express = require('express');
var router = express.Router();
const Cakebase = require('cakebase')("./db/ladder.json");

/* GET users listing. */
router.get('/:slug', function(req, res, next) {

  slug = req.params.slug;
  row = Cakebase.get(r => r.rung == slug)
  let {rung,bend,situp,leglift,pushup,runandjump } = row[0]

  res.render('rung', {
     title: 'Express', 
     rung: rung,
     bend: bend,
     situp: situp,
     leglift: leglift,
     pushup: pushup,
     runandjump: runandjump,
    });
});

module.exports = router;
