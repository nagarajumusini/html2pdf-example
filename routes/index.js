var express = require('express');
var router = express.Router();

var htmlToPdf = require('html-to-pdf');
/* GET home page. */
router.get('/', function (req, res, next) {
  var html = `<html>  
    <head>
        <title>
            School
        </title>
    </head>
    <body>
        <h1>Welcome to school</h1>
    </body>
</html>`;
  htmlToPdf.convertHTMLString(html, 'routes/school.pdf',
    function (error, success) {
      if (error) {
        console.log('Oh noes! Errorz!');
        console.log(error);
      } else {
        console.log('Woot! Success!');
        console.log(success);

        // PDF from FILE
        htmlToPdf.convertHTMLFile('html2pdf/school.html', 'html2pdf/school.pdf',
          function (error, success) {
            if (error) {
              console.log('Oh noes! Errorz!');
              console.log(error);
            } else {
              console.log('Woot! Success!');
              console.log(success);
              res.render('index', { title: 'Express' });
            }
          }
        );
        // END PDF from FILE
      }
    }
  );


});

module.exports = router;
