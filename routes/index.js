var express = require('express');
var router = express.Router();

function random(lowValue,highValue){
    var choice=highValue-lowValue+1;
    return Math.floor(Math.random()*choice+lowValue);
}

var frequency = 8
var giftArray = [
    '抱枕',
    '手办',
    '100元话费',
    '笔记本电脑',
    'iphoneX手机'
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.art', {
      user: {
          frequency: frequency //默认8次
      }
  });
});

router.get('/getTheGift', function(req, res, next) {

  if(frequency <= 0){
      res.json({
          name: '啥都没有哦~',
          just: frequency,
          code: 500,
          msg: '没有更多次数了'
      });
      return
  }
  res.json({
      name: giftArray[random(0, giftArray.length-1)],
      just: frequency--,
      code: 200,
      msg: '成功'
  });
});

module.exports = router;
