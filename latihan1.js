const mongoose = require('mongoose')
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost/tutorial",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection
db.on('error', function () {
    console.log('connnection error');
})

db.once('open', function () {
    console.log('successfully connection');
})

const kelasSchema = new Schema({
    judul : String,
    deskripsi: String,
    tglPosting: {
        type: Date,
        default: Date.now
    }
})

const Kelas = mongoose.model('Kelas', kelasSchema)

// kode 1 
// const nodeJs = new Kelas({
//     judul: 'nodejs',
//     deskripsi: 'learning mongoDb Danang',
// })

// nodeJs.save(function (error, result) {
//     if (error) console.log(error)

//     console.log(result)
//     console.log('succeffully created kelas')
// })

// kode 2
// const express = new Kelas()
// express.judul = 'express',
// express.deskripsi = 'fast, unopinionated'

// express.save(function (error, result) {
//     if (error) console.log(error)

//     console.log(result)
//     console.log('succeffully created kelas')
// })

// kode 3
// Kelas.create({
//     judul: 'vuejs',
//     deskripsi: 'the progressive.'
// }, function (err, data){
//     if(err) console.log(err)

//     console.log(data)
//     console.log('succeffully created kelas')
// })


// METODE FIND
// .find = mengeluarkan data array dan mencari semua data
// .findOne = mengeluarkan data object dan mencari 1 data yg di cari

// Mencari data object sesuai keyword yg ingin kita cari
// Kelas.findOne({judul: 'vuejs'}, function (err, data){
//     if(err) console.log(err)

//     console.log(data)
// })

// mencari data object yg kita inginkan
// Kelas.find({judul: /js/}, 'judul, deskripsi', function (err, data){
//     if(err) console.log(err)

//     console.log(data)
// })

// mencari data spesifikasi sesuai ID yang dinginkan
// Kelas.findById('6100304f078da231d85556c0', function (err, data){
//     if(err) console.log(err)

//     console.log(data)
// })

// Kelas.findById('6100312d567ed834347a0988', function(err, data) {
//     if(err) console.log(err)

//     console.log(data)
// })

// const query = Kelas.find({judul: 'nodejs'})
// query.select('judul tglPosting')
// query.exec(function(err, data) {
//     if (err) console.log

//     console.log(data)
// })

// const query = Kelas.findOne({judul: 'nodejs'})
// query.select('judul tglPosting')
// query.exec(function(err, data) {
//     if (err) console.log

//     console.log(data)
// })


// const query = Kelas.findById('6100304f078da231d85556c0')
// query.select('judul tglPosting')
// query.exec(function(err, data) {
//     if (err) console.log

//     console.log(data)
// })