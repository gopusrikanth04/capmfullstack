/**
 * Implementation for StudentService defined in ./student-service.cds
 */

//const util = require('./util/util.js');
const { Students, Courses } = cds.entities('school');

module.exports = (srv) => {

  srv.before('READ', 'Students', req => {
    console.log("Students and Courses: ", Students);
    console.log("Students and Courses: ", Courses);
  });

  srv.before('CREATE', 'Students', async (req) => {

    //Get transaction of the request
    const tx = cds.transaction(req);

    if (!req.data.ID) {
      req.data.ID = await autoID('Students', tx);
      console.log(req.data);
    }


  });

  srv.before('CREATE', 'Enrollments', async (req) => {

    //Get transaction of the request
    const tx = cds.transaction(req);

    //check if the student has already been enrolled
    let enrollment = await tx.read('school.Enrollments').where({ student_ID: req.data.student_ID });

    // if (enrollment.length > 0)
    //   req.error(410, 'The student has already been enrolled');
    // else {
    //Search using CQL, parsing to CQN
    //MOre infos in https://cap.cloud.sap/docs/cds/cql
    let selectQuery = "SELECT from school.Enrollments{count(student_ID) as count} where class_ID = " + req.data.class_ID;
    let query = cds.parse.cql(selectQuery);
    let studentCount = await tx.run(query);
    studentCount = studentCount[0];
    console.log(studentCount);

    //Using CQN to read Courses
    //More infos in https://cap.cloud.sap/docs/cds/cqn
    let classes = await tx.read('school.Classes').where({ ID: req.data.class_ID });
    let course_ID = classes[0].course_ID;
    let classRoomId = classes[0].classRoom_ID;

    //let courses = await tx.read('school.Courses').where({ ID: course_ID });
    //let classRoomId = courses[0].classRoom_ID;

    // Using CQN SELECT to read maxClassRoom
    let maxClassRoom = await tx.run(SELECT('maxStudents').from('school.Classrooms').where({ ID: classRoomId }));
    maxClassRoom = maxClassRoom[0];

    //Check Max Number of Students in ClassRoom
    if ((studentCount.count + 1) > maxClassRoom.maxStudents)
      req.error(409, 'The Class is full, enrollment is not possible');
    else {
      console.log('Total Students ' + (studentCount.count + 1));
      console.log('Max Students ' + maxClassRoom.maxStudents)
    }

    // }

  });

}