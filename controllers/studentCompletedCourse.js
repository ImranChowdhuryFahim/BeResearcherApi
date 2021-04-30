const StudentCompletdCourseModel = require('../models/StudentCompletedCourse');

const StudentSchema = require('../models/student');

module.exports = {
	createStudentCompletedCourseList: function (req, res) {
		const { courseId, students } = req.body;
		console.log(courseId, students);
		const studentCompletedCourseModel = new StudentCompletdCourseModel({
			courseId,
			students,
		});
		studentCompletedCourseModel
			.save()
			.then((result) => {
				res.send({ message: result });
			})
			.catch((err) => {
				res.send({ message: err });
			});
	},
	pushStudentCompletedCourse: function (req, res) {
		
		const { courseId, student } = req.body;
		const { email } = student;
		
		StudentSchema.findOne({ email })
      .select('institution dept country')
	  .then((res1) => {
		  
		student['institution']=res1.institution;
		student['dept']=res1.dept;
		student['country']=res1.country;
		
		StudentCompletdCourseModel.updateOne(
			{ courseId },
			{ $push: { students: student } }
		)
			.then((result) => res.send({ result }))
			.catch((err) => res.send({ err }));

	  });

		
	},
	getStudentCompletedCourse: function (req, res) {
		const { courseId } = req.params;
		StudentCompletdCourseModel.findOne({ courseId }).then((result) =>
			res.send(result)
		);
	},
};
