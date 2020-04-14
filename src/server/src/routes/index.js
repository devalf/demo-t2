const router = require('express').Router();

router.get('/', function(req, res) {
    res.send('Demo t2 - API');
});

module.exports = router;
