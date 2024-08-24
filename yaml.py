
for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: addStudent ({j} Trx)
      description: Tambah data mahasiswa (addStudent) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/addStudent.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)

for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: addCourseReport ({j} Trx) 
      description: Tambah data transkrip (addCourseReport) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/addTranscript.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)


for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: addCourseReport ({j} Trx) 
      description: Tambah data transkrip (addCourseReport) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/addTranscript.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: addInternExp ({j} Trx)
      description: Tambah data pengalaman magang (addInternshipExperience) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/addInternshipExperience.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: addProject ({j} Trx)
      description: Tambah data proyek (addProject) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/addProject.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: setStudent ({j} Trx)
      description: Edit data mahasiswa (setStudent) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/setStudent.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: setCourseReport ({j} Trx)
      description: Edit data transkrip (setCourseReport) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/setTranscript.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: setInternExp ({j} Trx)
      description: Edit data pengalaman magang (setInternshipExperience) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/setInternshipExperience.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: setProject ({j} Trx)
      description: Edit data proyek (setProject) sebanyak 100 data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/setProject.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
for j in range(100,1001,100):
    for i in range(10):
        config = f'''
    - label: getSAR ({j} Trx)
      description: Ambil data mahasiswa untuk admin (getStudentAcademicReputation) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/getStudentForAdmin.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
for j in range(100,1001,100):
        for i in range(10):
                config = f'''
    - label: getSARForPublic ({j} Trx)
      description: Ambil data mahasiswa untuk publik (getStudentAcademicReputation) sebanyak {j} data (I{i})
      txNumber: {j}
      rateControl:
        type: fixed-rate
        opts:
          tps: 100
      workload:
        module: workload-module/getStudentForPublic.js
        arguments:
          contract: I{i}
          pt: false
'''
        print(config)
