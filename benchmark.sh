export TELEGRAM_BOT_TOKEN=
export TELEGRAM_CHAT_ID=


rm -rf ./workload-module/dataStudent
cp -r ./workload-module/dataStudent-pt ./workload-module/dataStudent

caliper launch manager --caliper-workspace . --caliper-benchconfig ./benchmark/pos/performance.yaml --caliper-networkconfig ./network/network.json --caliper-report-path ./reports/performance-test-report.html

rm -rf ./workload-module/dataStudent
cp -r ./workload-module/dataStudent-st ./workload-module/dataStudent

caliper launch manager --caliper-workspace . --caliper-benchconfig ./benchmark/pos/scalability.yaml --caliper-networkconfig ./network/network.json --caliper-report-path ./reports/scalability-test-report.html
