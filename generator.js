const { fakerID_ID: faker } = require('@faker-js/faker');
const { data } = require('./workload-module/data.js');
const fs = require('fs');


function generate_st(max, round) {
    let store = []
    let storeGet = []
    let courseReportsData = []
    let internshipExperiencesData = []
    let projectsData = []
    let storeSet = []
    let courseReportsDataSet = []
    let internshipExperiencesDataSet = []
    let projectsDataSet = []
    for (let i = 1; i <= round; i++) {
        let students = []
        let courseReports = []
        let projects = []
        let internshipExperiences = []
        let studentsSet = []
        let courseReportsSet = []
        let projectsSet = []
        let internshipExperiencesSet = []
        let studentsQuery = []
        for (let j = 1; j <= max * i; j++) {
            number = j
            const dataStudent = data
            const studentNumber = faker.string.alphanumeric(10);
            let date = faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2020-12-31T00:00:00.000Z' });
            let fakultas = dataStudent[Math.floor(Math.random() * dataStudent.length)];
            let prodi = fakultas.daftar_prodi[Math.floor(Math.random() * fakultas.daftar_prodi.length)];


            let absence = Math.floor((Math.random() * 4))
            let score = 300 + Math.floor((Math.random() * 100))
            let grade = 'E';
            if (score > 100) grade = 'D';
            if (score > 200) grade = 'C';
            if (score > 270) grade = 'C+';
            if (score > 300) grade = 'B';
            if (score > 330) grade = 'B+';
            if (score > 370) grade = 'A-';
            if (score >= 400) grade = 'A';

            let matkul = prodi.daftar_matkul[Math.floor(Math.random() * prodi.daftar_matkul.length)];
            let courseName = matkul.mata_kuliah
            let credit = matkul.sks
            let semester = Math.floor(Math.random() * 7)
            let courseCode = matkul.kode_matkul

            let student = {
                name: faker.person.fullName(),
                studentNumber: studentNumber,
                prodi: prodi.prodi,
                fakultas: fakultas.fakultas,
                year: date.getFullYear().toString()
            }

            let studentQuery = {
                studentNumber: studentNumber,
                address: "0x01FEdeD5655D14873f81Be2493cfd09bC3D55D7A"
            }

            let course = {
                studentNumber: studentNumber,
                semester: semester,
                courseCode: courseCode,
                courseName: courseName,
                credit: parseInt(credit),
                score: score,
                grade: grade,
                attendance: 16 - absence,
                absence: absence
            }

            let project = {
                studentNumber: studentNumber,
                name: faker.company.name(),
                yearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),

            }

            let intern = {
                studentNumber: studentNumber,
                company: faker.company.name(),
                position: faker.person.jobTitle(),
                startYearMonth: date.getTime() + 1000 + Math.floor((Math.random() * 10000)),
                endYearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),
                score: 70 + Math.floor((Math.random() * 20)),
            }


            date = faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2020-12-31T00:00:00.000Z' });
            fakultas = dataStudent[Math.floor(Math.random() * dataStudent.length)];
            prodi = fakultas.daftar_prodi[Math.floor(Math.random() * fakultas.daftar_prodi.length)];


            absence = Math.floor((Math.random() * 4))
            score = 300 + Math.floor((Math.random() * 100))
            grade = 'E';
            if (score > 100) grade = 'D';
            if (score > 200) grade = 'C';
            if (score > 270) grade = 'C+';
            if (score > 300) grade = 'B';
            if (score > 330) grade = 'B+';
            if (score > 370) grade = 'A-';
            if (score >= 400) grade = 'A';

            matkul = prodi.daftar_matkul[Math.floor(Math.random() * prodi.daftar_matkul.length)];
            courseName = matkul.mata_kuliah
            credit = matkul.sks


            let studentSet = {
                name: faker.person.fullName(),
                studentNumber: studentNumber,
                prodi: prodi.prodi,
                fakultas: fakultas.fakultas,
                year: date.getFullYear().toString()
            }

            let courseSet = {
                studentNumber: studentNumber,
                semester: semester,
                courseCode: courseCode,
                newCourseCode: courseCode + 1,
                courseName: courseName,
                credit: parseInt(credit),
                score: score,
                grade: grade,
                attendance: 16 - absence,
                absence: absence
            }

            let projectSet = {
                studentNumber: studentNumber,
                name: faker.company.name(),
                yearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),

            }

            let internSet = {
                studentNumber: studentNumber,
                company: faker.company.name(),
                position: faker.person.jobTitle(),
                startYearMonth: date.getTime() + 1000 + Math.floor((Math.random() * 10000)),
                endYearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),
                score: 70 + Math.floor((Math.random() * 20)),
            }


            courseReports.push(course)
            internshipExperiences.push(intern)
            projects.push(project)
            students.push(student)
            studentsQuery.push(studentQuery)

            courseReportsSet.push(courseSet)
            internshipExperiencesSet.push(internSet)
            projectsSet.push(projectSet)
            studentsSet.push(studentSet)
        }
        for(let k= 0; k < 5; k++){
            storeGet.push(studentsQuery)
            store.push(students)
            courseReportsData.push(courseReports)
            internshipExperiencesData.push(internshipExperiences)
            projectsData.push(projects)
            storeSet.push(studentsSet)
            courseReportsDataSet.push(courseReportsSet)
            internshipExperiencesDataSet.push(internshipExperiencesSet)
            projectsDataSet.push(projectsSet)
        }
    }

    fs.writeFileSync(`./workload-module/dataStudent-st/dataStudents.json`, JSON.stringify(store));
    fs.writeFileSync(`./workload-module/dataStudent-st/dataQuery.json`, JSON.stringify(storeGet));
    fs.writeFileSync(`./workload-module/dataStudent-st/dataCourseReports.json`, JSON.stringify(courseReportsData));
    fs.writeFileSync(`./workload-module/dataStudent-st/dataInternshipExperiences.json`, JSON.stringify(internshipExperiencesData));
    fs.writeFileSync(`./workload-module/dataStudent-st/dataProjects.json`, JSON.stringify(projectsData));
    fs.writeFileSync(`./workload-module/dataStudent-st/dataStudentsSet.json`, JSON.stringify(storeSet));
    fs.writeFileSync(`./workload-module/dataStudent-st/dataCourseReportsSet.json`, JSON.stringify(courseReportsDataSet));
    fs.writeFileSync(`./workload-module/dataStudent-st/dataInternshipExperiencesSet.json`, JSON.stringify(internshipExperiencesDataSet));
    fs.writeFileSync(`./workload-module/dataStudent-st/dataProjectsSet.json`, JSON.stringify(projectsDataSet));
}


function generate_pt(max, round) {
    let store = []
    let storeGet = []
    let courseReportsData = []
    let internshipExperiencesData = []
    let projectsData = []
    let storeSet = []
    let courseReportsDataSet = []
    let internshipExperiencesDataSet = []
    let projectsDataSet = []
    for (let i = 1; i <= round; i++) {
        let students = []
        let courseReports = []
        let projects = []
        let internshipExperiences = []
        let studentsSet = []
        let courseReportsSet = []
        let projectsSet = []
        let internshipExperiencesSet = []
        let studentsQuery = []
        for (let j = 1; j <= max; j++) {
            number = j
            const dataStudent = data
            const studentNumber = faker.string.alphanumeric(10);
            let date = faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2020-12-31T00:00:00.000Z' });
            let fakultas = dataStudent[Math.floor(Math.random() * dataStudent.length)];
            let prodi = fakultas.daftar_prodi[Math.floor(Math.random() * fakultas.daftar_prodi.length)];


            let absence = Math.floor((Math.random() * 4))
            let score = 300 + Math.floor((Math.random() * 100))
            let grade = 'E';
            if (score > 100) grade = 'D';
            if (score > 200) grade = 'C';
            if (score > 270) grade = 'C+';
            if (score > 300) grade = 'B';
            if (score > 330) grade = 'B+';
            if (score > 370) grade = 'A-';
            if (score >= 400) grade = 'A';

            let matkul = prodi.daftar_matkul[Math.floor(Math.random() * prodi.daftar_matkul.length)];
            let courseName = matkul.mata_kuliah
            let credit = matkul.sks
            let semester = Math.floor(Math.random() * 7)
            let courseCode = matkul.kode_matkul

            let student = {
                name: faker.person.fullName(),
                studentNumber: studentNumber,
                prodi: prodi.prodi,
                fakultas: fakultas.fakultas,
                year: date.getFullYear().toString()
            }

            let studentQuery = {
                studentNumber: studentNumber,
                address: "0x01FEdeD5655D14873f81Be2493cfd09bC3D55D7A"
            }

            let course = {
                studentNumber: studentNumber,
                semester: semester,
                courseCode: courseCode,
                courseName: courseName,
                credit: parseInt(credit),
                score: score,
                grade: grade,
                attendance: 16 - absence,
                absence: absence
            }

            let project = {
                studentNumber: studentNumber,
                name: faker.company.name(),
                yearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),

            }

            let intern = {
                studentNumber: studentNumber,
                company: faker.company.name(),
                position: faker.person.jobTitle(),
                startYearMonth: date.getTime() + 1000 + Math.floor((Math.random() * 10000)),
                endYearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),
                score: 70 + Math.floor((Math.random() * 20)),
            }


            date = faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2020-12-31T00:00:00.000Z' });
            fakultas = dataStudent[Math.floor(Math.random() * dataStudent.length)];
            prodi = fakultas.daftar_prodi[Math.floor(Math.random() * fakultas.daftar_prodi.length)];


            absence = Math.floor((Math.random() * 4))
            score = 300 + Math.floor((Math.random() * 100))
            grade = 'E';
            if (score > 100) grade = 'D';
            if (score > 200) grade = 'C';
            if (score > 270) grade = 'C+';
            if (score > 300) grade = 'B';
            if (score > 330) grade = 'B+';
            if (score > 370) grade = 'A-';
            if (score >= 400) grade = 'A';

            matkul = prodi.daftar_matkul[Math.floor(Math.random() * prodi.daftar_matkul.length)];
            courseName = matkul.mata_kuliah
            credit = matkul.sks


            let studentSet = {
                name: faker.person.fullName(),
                studentNumber: studentNumber,
                prodi: prodi.prodi,
                fakultas: fakultas.fakultas,
                year: date.getFullYear().toString()
            }

            let courseSet = {
                studentNumber: studentNumber,
                semester: semester,
                courseCode: courseCode,
                newCourseCode: courseCode + 1,
                courseName: courseName,
                credit: parseInt(credit),
                score: score,
                grade: grade,
                attendance: 16 - absence,
                absence: absence
            }

            let projectSet = {
                studentNumber: studentNumber,
                name: faker.company.name(),
                yearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),

            }

            let internSet = {
                studentNumber: studentNumber,
                company: faker.company.name(),
                position: faker.person.jobTitle(),
                startYearMonth: date.getTime() + 1000 + Math.floor((Math.random() * 10000)),
                endYearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),
                score: 70 + Math.floor((Math.random() * 20)),
            }


            courseReports.push(course)
            internshipExperiences.push(intern)
            projects.push(project)
            students.push(student)
            studentsQuery.push(studentQuery)

            courseReportsSet.push(courseSet)
            internshipExperiencesSet.push(internSet)
            projectsSet.push(projectSet)
            studentsSet.push(studentSet)
        }
        storeGet.push(studentsQuery)
        store.push(students)
        courseReportsData.push(courseReports)
        internshipExperiencesData.push(internshipExperiences)
        projectsData.push(projects)
        storeSet.push(studentsSet)
        courseReportsDataSet.push(courseReportsSet)
        internshipExperiencesDataSet.push(internshipExperiencesSet)
        projectsDataSet.push(projectsSet)
    }

    fs.writeFileSync(`./workload-module/dataStudent-pt/dataStudents.json`, JSON.stringify(store));
    fs.writeFileSync(`./workload-module/dataStudent-pt/dataQuery.json`, JSON.stringify(storeGet));
    fs.writeFileSync(`./workload-module/dataStudent-pt/dataCourseReports.json`, JSON.stringify(courseReportsData));
    fs.writeFileSync(`./workload-module/dataStudent-pt/dataInternshipExperiences.json`, JSON.stringify(internshipExperiencesData));
    fs.writeFileSync(`./workload-module/dataStudent-pt/dataProjects.json`, JSON.stringify(projectsData));
    fs.writeFileSync(`./workload-module/dataStudent-pt/dataStudentsSet.json`, JSON.stringify(storeSet));
    fs.writeFileSync(`./workload-module/dataStudent-pt/dataCourseReportsSet.json`, JSON.stringify(courseReportsDataSet));
    fs.writeFileSync(`./workload-module/dataStudent-pt/dataInternshipExperiencesSet.json`, JSON.stringify(internshipExperiencesDataSet));
    fs.writeFileSync(`./workload-module/dataStudent-pt/dataProjectsSet.json`, JSON.stringify(projectsDataSet));
}


function generate_storage(max, round) {
    let store = []
    let storeGet = []
    let courseReportsData = []
    let internshipExperiencesData = []
    let projectsData = []
    let storeSet = []
    let courseReportsDataSet = []
    let internshipExperiencesDataSet = []
    let projectsDataSet = []
    for (let i = 1; i <= round; i++) {
        let students = []
        let courseReports = []
        let projects = []
        let internshipExperiences = []
        let studentsSet = []
        let courseReportsSet = []
        let projectsSet = []
        let internshipExperiencesSet = []
        let studentsQuery = []
        for (let j = 1; j <= max; j++) {
            number = j
            const dataStudent = data
            const studentNumber = faker.string.alphanumeric(10);
            let date = faker.date.between({ from: '2020-01-01T00:00:00.000Z', to: '2020-12-31T00:00:00.000Z' });
            let fakultas = dataStudent[Math.floor(Math.random() * dataStudent.length)];
            let prodi = fakultas.daftar_prodi[Math.floor(Math.random() * fakultas.daftar_prodi.length)];


            let absence = Math.floor((Math.random() * 4))
            let score = 300 + Math.floor((Math.random() * 100))
            let grade = 'E';
            if (score > 100) grade = 'D';
            if (score > 200) grade = 'C';
            if (score > 270) grade = 'C+';
            if (score > 300) grade = 'B';
            if (score > 330) grade = 'B+';
            if (score > 370) grade = 'A-';
            if (score >= 400) grade = 'A';

            let matkul = prodi.daftar_matkul[Math.floor(Math.random() * prodi.daftar_matkul.length)];
            let courseName = matkul.mata_kuliah
            let credit = matkul.sks
            let semester = Math.floor(Math.random() * 7)
            let courseCode = matkul.kode_matkul

            let student = {
                name: faker.person.fullName(),
                studentNumber: studentNumber,
                prodi: prodi.prodi,
                fakultas: fakultas.fakultas,
                year: date.getFullYear().toString()
            }

            let studentQuery = {
                studentNumber: studentNumber,
                address: "0x01FEdeD5655D14873f81Be2493cfd09bC3D55D7A"
            }

            let course = {
                studentNumber: studentNumber,
                semester: semester,
                courseCode: courseCode,
                courseName: courseName,
                credit: parseInt(credit),
                score: score,
                grade: grade,
                attendance: 16 - absence,
                absence: absence
            }

            let project = {
                studentNumber: studentNumber,
                name: faker.company.name(),
                yearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),

            }

            let intern = {
                studentNumber: studentNumber,
                company: faker.company.name(),
                position: faker.person.jobTitle(),
                startYearMonth: date.getTime() + 1000 + Math.floor((Math.random() * 10000)),
                endYearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),
                score: 70 + Math.floor((Math.random() * 20)),
            }


            date = faker.date.between({ from: '2021-01-01T00:00:00.000Z', to: '2021-12-31T00:00:00.000Z' })
            fakultas = dataStudent[Math.floor(Math.random() * dataStudent.length)];
            prodi = fakultas.daftar_prodi[Math.floor(Math.random() * fakultas.daftar_prodi.length)];


            absence = Math.floor((Math.random() * 4))
            score = 300 + Math.floor((Math.random() * 100))
            grade = 'E';
            if (score > 100) grade = 'D';
            if (score > 200) grade = 'C';
            if (score > 270) grade = 'C+';
            if (score > 300) grade = 'B';
            if (score > 330) grade = 'B+';
            if (score > 370) grade = 'A-';
            if (score >= 400) grade = 'A';

            matkul = prodi.daftar_matkul[Math.floor(Math.random() * prodi.daftar_matkul.length)];
            courseName = matkul.mata_kuliah
            credit = matkul.sks


            let studentSet = {
                name: faker.person.fullName(),
                studentNumber: studentNumber,
                prodi: prodi.prodi,
                fakultas: fakultas.fakultas,
                year: date.getFullYear().toString()
            }

            let courseSet = {
                studentNumber: studentNumber,
                semester: semester,
                courseCode: courseCode,
                newCourseCode: courseCode + 1,
                courseName: courseName,
                credit: parseInt(credit),
                score: score,
                grade: grade,
                attendance: 16 - absence,
                absence: absence
            }

            let projectSet = {
                studentNumber: studentNumber,
                name: faker.company.name(),
                yearMonth: date.getTime() + 1000 + Math.floor((Math.random() * 10000)),

            }

            let internSet = {
                studentNumber: studentNumber,
                company: faker.company.name(),
                position: faker.person.jobTitle(),
                startYearMonth: date.getTime() + 1000 + Math.floor((Math.random() * 10000)),
                endYearMonth: date.getTime() + 2000 + Math.floor((Math.random() * 10000)),
                score: 70 + Math.floor((Math.random() * 20)),
            }

            
                courseReports.push(course)
                internshipExperiences.push(intern)
                projects.push(project)
                students.push(student)
                studentsQuery.push(studentQuery)

                courseReportsSet.push(courseSet)
                internshipExperiencesSet.push(internSet)
                projectsSet.push(projectSet)
                studentsSet.push(studentSet)
        }
        storeGet.push(studentsQuery)
        store.push(students)
        courseReportsData.push(courseReports)
        internshipExperiencesData.push(internshipExperiences)
        projectsData.push(projects)
        storeSet.push(studentsSet)
        courseReportsDataSet.push(courseReportsSet)
        internshipExperiencesDataSet.push(internshipExperiencesSet)
        projectsDataSet.push(projectsSet)
    }

    fs.writeFileSync(`./workload-module/dataStudent-storage/dataStudents.json`, JSON.stringify(store));
    fs.writeFileSync(`./workload-module/dataStudent-storage/dataQuery.json`, JSON.stringify(storeGet));
    fs.writeFileSync(`./workload-module/dataStudent-storage/dataCourseReports.json`, JSON.stringify(courseReportsData));
    fs.writeFileSync(`./workload-module/dataStudent-storage/dataInternshipExperiences.json`, JSON.stringify(internshipExperiencesData));
    fs.writeFileSync(`./workload-module/dataStudent-storage/dataProjects.json`, JSON.stringify(projectsData));
    fs.writeFileSync(`./workload-module/dataStudent-storage/dataStudentsSet.json`, JSON.stringify(storeSet));
    fs.writeFileSync(`./workload-module/dataStudent-storage/dataCourseReportsSet.json`, JSON.stringify(courseReportsDataSet));
    fs.writeFileSync(`./workload-module/dataStudent-storage/dataInternshipExperiencesSet.json`, JSON.stringify(internshipExperiencesDataSet));
    fs.writeFileSync(`./workload-module/dataStudent-storage/dataProjectsSet.json`, JSON.stringify(projectsDataSet));
}

generate_pt(100, 1)
generate_st(100, 10)
generate_storage(10, 10)