namespace school;
using { User, Country, managed } from '@sap/cds/common';

entity Students: managed {
	key ID: Integer;
	name  : String;
	birthDate: Date;
	enrollments: Association to many Enrollments on enrollments.student = $self;
}

entity Courses: managed{
	key ID: Integer;
	name: localized String;
	courseLoad: Integer;	
	classes: Association to many Classes on classes.course = $self;
	country: Country;
}

entity Classes: managed{
	key ID: Integer;
	name: String;
	beginDate: Date;
	finishDate: Date;
	course: Association to Courses;
	classRoom: Association to Classrooms;
	enrollments: Association to many Enrollments on enrollments.class = $self;
}

entity Enrollments: managed{
	key ID: UUID;
	student: Association to Students;
	class: Association to Classes;
	Date: Date;
}

entity Classrooms: managed{
	key ID: Integer;
	name: String;
	maxStudents: Integer;
	classes: Association to many Classes on classes.classRoom = $self;
	
}