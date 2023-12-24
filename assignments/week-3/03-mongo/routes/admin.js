const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db');
let courseId = 0

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username : req.body.username,
        password : req.body.password
    })
    res.json({msg : "Admin Created Successfully"});
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    ++courseId;
    Course.create({
        id: courseId,
        title : req.body.title,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink,
        createdBy : req.headers.username
    })
    res.json({msg : "COurse Created Successfully", courseId : courseId})

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    let username = req.headers.username;
    Course.find({createdBy : username}).then((courses) =>{
        res.status(200).json({courses})
    })
});

module.exports = router;