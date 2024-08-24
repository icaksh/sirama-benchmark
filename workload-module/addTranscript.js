'use strict';

const fs = require('fs');
const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class AddStudent extends WorkloadModuleBase {

    constructor() {
        super();
        this.data = JSON.parse(fs.readFileSync("./workload-module/dataStudent/dataCourseReports.json", 'utf8'));
        this.txIndex = 0;
    }

    async submitTransaction() {
        let transcript = this.data[0][this.txIndex];
        if(!this.roundArguments.pt){
            transcript = this.data[this.roundIndex%10][this.txIndex];
        }
        this.txIndex++;
        let txArgs = [{
            contract: this.roundArguments.contract,
            verb: 'addCourseReports',
            readOnly: false,
            args: [transcript.studentNumber, transcript.semester, transcript.courseCode, transcript.courseName, transcript.credit, transcript.score, transcript.grade,  transcript.absence, transcript.absence],
        }];

        return this.sutAdapter.sendRequests(txArgs);
    }

    async cleanupWorkloadModule() {
        console.log(`Worker is cleaning up.`);
    }
}

function createWorkloadModule() {
    return new AddStudent();
}

module.exports.createWorkloadModule = createWorkloadModule;