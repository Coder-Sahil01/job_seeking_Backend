import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3, "Job title must contain at least 3 charaters!"],
        maxLength: [50, "Job title cannot exceed 50 charaters!"],
    },
    description: {
        type: String,
        required: [true, "Please provide job description"],
        minLength: [50, "Job description must contain at least 50 charaters!"],
        maxLength: [3350, "Job description cannot exceed 3350 charaters!"],
    },
    category: {
        type: String,
        required: [true, "Job Category is required!"]
    },
    country: {
        type: String,
        required: [true, "Please Provide the Country Name Where the Job is Located!"]
    },
    city: {
        type: String,
        required: [true, "Please Provide the City Name Where the Job is Located!"]
    },
    location: {
        type: String,
        required: [true, "Please Provide Exact Location Where the Job is Located!"],
        minLength: [15, "Location must contain at least 15 charaters!"],
    },
    fixedSalary: {
        type: Number,
        minLength: [4, "Fixed salary must contain at least 4 Digit's!"],
        maxLength: [9, "Fixed salary cannot exceed 9 Digit's!"]
    },
    salaryFrom: {
        type: Number,
        minLength: [4, "Salary From must contain at least 4 Digit's!"],
        maxLength: [9, "Salary From cannot exceed 9 Digit's!"]
    },
    salaryTo: {
        type: Number,
        minLength: [4, "Salary  To must contain at least 4 Digit's!"],
        maxLength: [9, "Salary To cannot exceed 9 Digit's!"]
    },
    expired: {
        type: Boolean,
        default: false,
    },
    jobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);
