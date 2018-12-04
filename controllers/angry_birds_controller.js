var express = require('express');
var router = express.Router();
var angryBirds = require('../modules/angry_birds');

router.get('/',function(request,response){
 
 response.render('./homePage')
})

router.get('/birds',function(request,response){
    var mustacheVaribles = {
        angryBirdsList :angryBirds.birds
    }
    response.render('./index',mustacheVaribles)
   })



router.get('/:id',function(request,response){
    var birdId = request.params.id;
    var mustacheVaribles = {
        angryBirdsList : angryBirds.birds[birdId],
    }
    response.render('./show',mustacheVaribles)
})
module.exports = router;