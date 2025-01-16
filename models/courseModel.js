import mongoose from "mongoose";

const coursesSchemma = new mongoose.Schema(
    {
        "coid": {
          "type": "String",
          "required": true
        },
        "coname": {
          "type": "String",
          "required": true
        },
        "codescription": {
          "type": "String",
          "required": false
        },
        "cobranch": {
          "type": "String",
          
        },
        "costdate": {
          "type": "Date",
          
        },
        "coenddate": {
          "type": "Date",
          
        },
        "coduration": {
          "type": "Number",
          
        },
        "coprice": {
          "type": "Number",
          
        },
        "coactive": {
          "type": "Boolean",
          "default":"true"
        },
        "registerd_date": {
          "type": "Date",
          "default": Date.now
        }
    }   
)

const Course =  mongoose.model("Course" ,coursesSchemma )

export default Course;