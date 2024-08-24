'use strict';

const fs = require('fs');
const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class AddStudent extends WorkloadModuleBase {

    constructor() {
        super();
        this.data = JSON.parse(fs.readFileSync("./workload-module/dataStudent/dataProjects.json", 'utf8'));
        this.txIndex = 0;
    }

    async submitTransaction() {
        let project = this.data[0][this.txIndex];
        if(!this.roundArguments.pt){
            project = this.data[this.roundIndex][this.txIndex];
        }
        this.txIndex++;
        let txArgs = [{
            contract: this.roundArguments.contract,
            verb: 'addProject',
            readOnly: false,
            args: [project.studentNumber, project.name, project.yearMonth],
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