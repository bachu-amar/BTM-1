import mongoose from 'mongoose';
 
const adminSchema = new mongoose.Schema({
    fullname:String, 
    mobile:Number, 
    email:String, 
    password:String,
});

const Admin = mongoose.model('admin', adminSchema);
export default Admin

