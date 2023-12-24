const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require('../db');
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username : req.body.username,
        password : req.body.password
    })
    res.send({msg : "User Created Successfully"})
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((course) => {
        res.json(course)
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    try{
        let isCourseExists = await Course.exists({_id : courseId})
        if(isCourseExists){
            await Course.findByIdAndUpdate(courseId, {$set : {purchasedBy : req.params.username}});
            res.status(200).json({msg : "Course Buyed Successfully"})
        }
    }catch(err){
        res.status(404).json({msg : "Course Not Found"})
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    let purchasedCourses = await Course.find({purchasedBy : req.params.username});
    res.json({purchasedCourses})
});

module.exports = router