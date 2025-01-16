import { Router } from "express";
import {createCourse,deleteCourse,showAllCourse,updateCourse,getcourse,getcoursebydate,getcoursebybranch,getcoursebyflag } from "../controller/courses.controller.js"

const router = Router();
router.post('/createCourse', createCourse);
router.delete('/deleteCourse/:id', deleteCourse);
router.put('/updateCourse/:id', updateCourse);
router.get('/showAllCourse', showAllCourse);
router.get('/getcourse/:id', getcourse);
router.get('/getcoursebybranch', getcoursebybranch);
router.get('/getcoursebyflag', getcoursebyflag);
router.get('/getcoursebydate', getcoursebydate);

export default router;