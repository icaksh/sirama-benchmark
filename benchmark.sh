export TELEGRAM_BOT_TOKEN=
export TELEGRAM_CHAT_ID=

rm -rf ./workload-module/dataStudent
cp -r ./workload-module/dataStudent-pt ./workload-module/dataStudent

caliper launch manager --caliper-workspace . --caliper-benchconfig ./benchmark/pos/performance.yaml --caliper-networkconfig ./network/network.json --caliper-report-path ./reports/performance-test-report.html

rm -rf ./workload-module/dataStudent
cp -r ./workload-module/dataStudent-st ./workload-module/dataStudent

caliper launch manager --caliper-workspace . --caliper-benchconfig ./benchmark/pos/scalability-1.yaml --caliper-networkconfig ./network/network.json --caliper-report-path ./reports/scalability-1-test-report.html
caliper launch manager --caliper-workspace . --caliper-benchconfig ./benchmark/pos/scalability-2.yaml --caliper-networkconfig ./network/network.json --caliper-report-path ./reports/scalability-2-test-report.html
caliper launch manager --caliper-workspace . --caliper-benchconfig ./benchmark/pos/scalability-3.yaml --caliper-networkconfig ./network/network.json --caliper-report-path ./reports/scalability-3-test-report.html
