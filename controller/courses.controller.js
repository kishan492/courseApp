import Course from "../models/courseModel.js";

// Controller to create a course
export const createCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(500).json({ message: "Error creating course", error: error.message });
    }
};

// Controller to delete a course
export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting course", error: error.message });
    }
};

// Controller to show all courses
export const showAllCourse = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses", error: error.message });
    }
};

// Controller to update a course
export const updateCourse = async (req, res) => {
    try {
        const {id} = req.params;
        const updateData = req.body;
        const updatedCourse = await Course.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ message: "Error updating course", error: error.message });
    }
};
// Controller to get all courses
export const getcourse = async (req, res) => {
    try {
        const {id} = req.params;
        const courses = await Course.findById(id);
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses", error: error.message });
    }
};

// Controller to get courses by branch
export const getcoursebybranch = async (req, res) => {
    try {
        const { branch } = req.body;
        if (!branch) {
            return res.status(400).json({ message: "Branch parameter is required" });
        }

        const courses = await Course.find({ cobranch: branch });
        if (courses.length === 0) {
            return res.status(404).json({ message: "No courses found for the specified branch" });
        }

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses by branch", error: error.message });
    }
};

// Controller to get courses by active/inactive flag
export const getcoursebyflag = async (req, res) => {
    try {
        const { active } = req.query; 
        if (active === undefined) {
            return res.status(400).json({ message: "Active parameter is required" });
        }

        const isActive = active.toLowerCase() === "true"; 
        const courses = await Course.find({ coactive: isActive });
        if (courses.length === 0) {
            return res.status(404).json({ message: "No courses found for the specified flag" });
        }

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses by flag", error: error.message });
    }
};

// Controller to get courses within a date range
export const getcoursebydate = async (req, res) => {
    try {
        const { startdate, enddate } = req.body;
        if (!startdate || !enddate) {
            return res.status(400).json({ message: "Start date and end date are required" });
        }

        const startDate = new Date(startdate);
        const endDate = new Date(enddate);

        const courses = await Course.find({
            costdate: { $gte: startDate, $lte: endDate }
        });

        if (courses.length === 0) {
            return res.status(404).json({ message: "No courses found within the specified date range" });
        }

        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Error fetching courses by date range", error: error.message });
    }
};
