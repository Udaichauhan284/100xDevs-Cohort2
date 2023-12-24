const mongoose = require('mongoose');
const process = require('process');
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username : String,
    password : String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    decription : String,
    price : Number,
    imageLink : String,
    createdBy : String,
    purchaseBy : String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}