const express = require('express');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/email/:message/:math', function (req, res) {
     if (req.params.math !== '4') {
          res.json({
               mathError: "Sorry! Double check your math."
          })
          return
     }
     var transporter = nodemailer.createTransport({
          service: 'mailgun',
          auth: {
               user: 'postmaster@sandboxb13f84ca6b2a410393cf0c6a71b391f4.mailgun.org',
               pass: '92ec2f681a04a9b5583f004a65797ec3-9a235412-a650a7fe'
          }
     });

     let message = "something went wrong"
     try {
          message = decodeURI(req.params.message)
     } catch (e) {
          console.log(e);
     }
     var mailOptions = {
          from: 'noreply@fadelshtiui.github.io',
          to: 'fadelshtiui@gmail.com',
          subject: 'Personal Website Inquiry',
          text: message
     };
     transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
               console.log(error);
          } else {
               res.json({
                    mathError: ""
               })
          }
     });
});

app.get('/api/courses', (req, res) => {

     let sql = "SELECT * FROM courses;";

     let con = mysql.createConnection({
          host: 'remotemysql.com',
          user: 'OUPoBPzhum',
          password: 'qbBvQLfhoX',
          database: 'OUPoBPzhum'
     });

     con.connect();
     con.query(sql, function (err, result) {
          if (err) throw err;
          res.json(result);
     });
     con.end();
});

app.get('/api/experience', (req, res) => {

     let sql = "SELECT * FROM experience;";

     let con = mysql.createConnection({
          host: 'remotemysql.com',
          user: 'OUPoBPzhum',
          password: 'qbBvQLfhoX',
          database: 'OUPoBPzhum'
     });

     con.connect();
     con.query(sql, function (err, result) {
          if (err) throw err;
          res.json(result);
     });
     con.end();
});

app.get('/api/projects', (req, res) => {

     let sql = "SELECT * FROM projects;";

     let con = mysql.createConnection({
          host: 'remotemysql.com',
          user: 'OUPoBPzhum',
          password: 'qbBvQLfhoX',
          database: 'OUPoBPzhum'
     });

     con.connect();
     con.query(sql, function (err, result) {
          if (err) throw err;
          res.json(result);
     });
     con.end();
});

app.get('/ping', function (req, res) {
     res.type("text").send("pong");
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log('App is listening on port ' + port);