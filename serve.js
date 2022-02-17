'use strict'
const path = require('path');
const express = require('express')

// const cors = require('./admin/untils/cors')
const portfinder = require('portfinder')


const app = new express()

/* 设置跨域 */
// app.use(cors)

/* 静态文件夹 */
app.use(express.static(__dirname + '/page/')); 

let port = process.env.PORT
if(port) {
    app.listen(port)
    console.log('run', `http://localhost:${port}`)
 
} else {
  port = new Promise((resolve, rejects) => {
    portfinder.getPort({port:90, stopPort: 9999 }, function (err, port) {
     if(port){
      console.log('run', `http://localhost:${port}`)
      resolve(port)
     } else {
      rejects(9527)
     }
    });
  })
  
  port.then(res => {
    app.listen(res)
  }, err => {
    console.log(err, 'err')
  })
}