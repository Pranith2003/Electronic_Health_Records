const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    email: String,
    gender: String,
    address: String,
    phoneNumber: String,
    bloodgroup: String,
    metaMaskAccount: String,
    insuranceProvider: String,
    policyNumber: String
});


const Patient = mongoose.model('PatientInfo', patientSchema);
module.exports = Patient;