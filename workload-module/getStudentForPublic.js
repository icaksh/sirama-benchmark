'use strict';

const fs = require('fs');
const axios = require('axios');

const { WorkloadModuleBase} = require('@hyperledger/caliper-core');

class AddStudent extends WorkloadModuleBase {

    constructor() {
        super();
        this.data = JSON.parse(fs.readFileSync("./workload-module/dataStudent/dataQuery.json", 'utf8'));
        this.txIndex = 0;
    }

    async submitTransaction() {
        let student = this.data[0][this.txIndex];
        if(!this.roundArguments.pt){
            student = this.data[this.roundIndex%100][this.txIndex];
        }
        this.txIndex++;
        let txArgs = [{
            contract: this.roundArguments.contract,
            verb: 'getStudentAcademicReputationForPublic',
            readOnly: true,
            args: [student.studentNumber, student.address],
        }];

        return this.sutAdapter.sendRequests(txArgs);
    }

    async cleanupWorkloadModule() {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;
        let message = 'Scalability test\n'
        if(this.roundArguments.pt){
            message = 'Performance test\n'
        }
        message += `getStudentForPublic has been executed successfully (${this.txIndex}) (${this.roundArguments.contract})`

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
        console.log(url)
        await axios.get(url);
    }
}

function createWorkloadModule() {
    return new AddStudent();
}

module.exports.createWorkloadModule = createWorkloadModule;