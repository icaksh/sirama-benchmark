rm -rf ./workload-module/dataStudent
cp -r ./workload-module/dataStudent-storage ./workload-module/dataStudent

caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/student-add.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/student-edit.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/student-get-admin.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/student-get-public.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/transcript-add.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/transcript-edit.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/intern-add.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/intern-edit.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/project-add.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install
sleep 5
caliper launch manager --caliper-workspace . --caliper-benchconfig ./storage-test/project-edit.yaml --caliper-networkconfig ./networkConfig.json --caliper-flow-skip-install




