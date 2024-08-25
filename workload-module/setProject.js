'use strict';

const fs = require('fs');
const axios = require('axios');
const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class AddStudent extends WorkloadModuleBase {

    constructor() {
        super();
        this.data = JSON.parse(fs.readFileSync("./workload-module/dataStudent/dataProjectsSet.json", 'utf8'));
        this.txIndex = 0;
    }

    async submitTransaction() {
        let project = this.data[0][this.txIndex]
        if(!this.roundArguments.pt){
            project = this.data[this.roundIndex%100][this.txIndex];
        }
        this.txIndex++;
        let txArgs = [{
            contract: this.roundArguments.contract,
            verb: 'setProject',
            readOnly: false,
            args: [project.studentNumber, 0, project.name, project.yearMonth],
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
        message += `setProject has been executed successfully (${this.txIndex}) (${this.roundArguments.contract})`

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
        console.log(url)
        await axios.get(url);
    }
}

function createWorkloadModule() {
    return new AddStudent();
}

module.exports.createWorkloadModule = createWorkloadModule;