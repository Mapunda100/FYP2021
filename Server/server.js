const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fs = require('fs')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//Take the created model of personlikizo
const UserModel = require('./Models/UserSchema');
const BirthModel = require('./Models/BirthSchema')
const { count } = require('./Models/UserSchema');
const PersoninfoModel = require('./Models/PersoninfoSchema');



//connect to DB;

const dbURI = 'mongodb://localhost:27017/roughfyp'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        app.listen(3002, () => {
            console.log('listerning for port 3002');
        })

    )


app.post('/signup', async (req, res) => {


    async function getId() {
        const userid = await UserModel.countDocuments();

        return req.body.user.date + '__' + '000' + userid

    }

    const id = await getId()


    // console.log(req.body.user)
    try {
        let person = await UserModel.create({
            name: req.body.user.name,
            email: req.body.user.email,
            // date: req.body.user.date,
            phonenumber: req.body.user.phonenumber,
            password: req.body.user.password,
            // _id: id
        })
        console.log(person)
        return res.status(200).json({
            message: 'user has been registered successful',
            data: person

        })
    }
    catch (err) {
        console.log(err)
    }

})


/* This work fine for searching someone and print single info to the client side*/
app.post('/search', async (req, res) => {
    console.log(req.body.searchInput)

    try {
        let dbsearched = await UserModel.findOne({ name: req.body.searchInput })

        if (dbsearched === null) { console.log('User not there') }
        else { console.log('User is already existed in a database') }

        console.log(dbsearched)

        return res.status(200).json({
            message: 'hello user has an account in the system',
            data: dbsearched
        })
    }

    catch {
        console.log('There is error somewhere')
    }
})

/*now i want to send all the display all the information towards client side*/

app.post('/viewall', async (req, res) => {

    try {
        let viewalldb = await UserModel.find();
        return res.status(200).json({
            data: viewalldb
        })
    }
    catch {
        console.log(err)

    }

})

//Login Authentification

app.post('/login', async (req, res) => {

    try {
        let userValues = await UserModel.findOne({ name: req.body.loginInput.name, password: req.body.loginInput.password })
        console.log(userValues)
        if (userValues === null) {
            console.log('User does not exit')

        }

        else {
            return res.status(200).json({
                data: userValues
            })
            console.log('User is successfully LOGIN')
        }

    }
    catch {
        console.log('Error has occurred')
    }
})

async function generateId(dateofbirth) {
    const userid = await PersoninfoModel.countDocuments() + 1;
    return dateofbirth + '000' + userid;
}

app.post('/register', async (req, res) => {
    try {
        // console.log(req.body)
        const userId = await generateId(req.body.birthinfo.dateofbirth)
        // const a = { ...req.body.personalInformations, _id: userId }
        // console.log('#####################')
        // console.log(a)
        // console.log('#####################')

        const person = await PersoninfoModel.create({ ...req.body.personalInformations, _id: userId })
        console.log(person)

        const birthModel = await BirthModel.create({ ...req.body.birthinfo, personid: person._id })


        console.log(birthModel)

    } catch (error) {
        console.log(error)
    }
})


app.post('/registerParent', async (req, res) => {
    try {
        console.log(req.body)
        const userId = await generateId(req.body.personinfo.dateofbirth)


        const person = await PersoninfoModel.create({ ...req.body.personinfo, _id: userId })
        console.log(person)
        res.status(200).json(person)

    } catch (error) {
        console.log(error)
    }
})

app.post('/personinfo', async (req, res) => {
    console.log(req.body)

    async function getId() {
        const userid = await PersoninfoModel.countDocuments();

        return '__' + '000' + userid;
    }
    const id = await getId();
    console.log(id);

    await PersoninfoModel.create({
        firstname: req.body.personinfo.firstname,
        middlename: req.body.personinfo.middlename,
        lastname: req.body.personinfo.lastname,
        gender: req.body.personinfo.gender,
        phonenumber: req.body.personinfo.phonenumber,
        country: req.body.personinfo.country,
        region: req.body.personinfo.region,
        distric: req.body.personinfo.distric,
        ward: req.body.personinfo.ward,
        street: req.body.personinfo.street,
        _id: id
    })
        .then(res => {
            return res.status(200).json(person)

        })

        .catch(error => {
            console.log(error)
            return res.status(500).json(error)
        })
})



// app.post('/birthinfo', async (req, res) => {
//     // console.log(req.body)

//     try {
//         let birthinfo = await BirthModel.create(req.body.birthinfo)
//         console.log(birthinfo)
//     }

//     catch {
//         console.log('error')
//     }
// })

//fetch FATHER information
app.post('/fatherinfo', async (req, res) => {
    console.log(req.body.fatherinfo)

    try {
        let fatherinfo = await PersoninfoModel.findOne({
            firstname: req.body.fatherinfo.firstname,
            middlename: req.body.fatherinfo.middlename,
            lastname: req.body.fatherinfo.lastname

        })

        return res.status(200).json({
            data: fatherinfo
        })

    }
    catch (err) {
        console.log(err)
    }
})

app.post('/motherinfo', async (req, res) => {
    console.log(req.body.motherinfo)

    try {
        let motherinfo = await PersoninfoModel.findOne({
            firstname: req.body.motherinfo.firstname,
            middlename: req.body.motherinfo.middlename,
            lastname: req.body.motherinfo.lastname

        })
        return res.status(200).json({
            data: motherinfo
        })
    }
    catch (err) {
        console.log(err)
    }
})

app.post('/birth', async (req, res) => {
    console.log(req.body)

    async function getId() {
        const userid = await BirthModel.countDocuments();

        return req.body.birthinfo.dateofbirth + '__' + '000' + userid;
    }
    const id = await getId();
    console.log(id);

    try {
        let birthinfo = await BirthModel.create({
            personid: req.body.birthinfo.personid,
            dateofbirth: req.body.birthinfo.dateofbirth,
            typeofbirth: req.body.birthinfo.typeofbirth,
            placeofbirth: req.body.birthinfo.placeofbirth,
            country: req.body.birthinfo.country,
            region: req.body.birthinfo.region,
            distric: req.body.birthinfo.distric,
            ward: req.body.birthinfo.ward,
            street: req.body.birthinfo.street,
            _id: id
        })

    }
    catch (err) {
        console.log(err)
    }


})
















