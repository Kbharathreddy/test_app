function sem1() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const subcode=["Subject Code","23ENG101","23MAT107","23CSE101","23EEE104","23EEE184","23CSE102","22ADM101","22AVP103"];
    const sub=["Subject Title","Technical Communication","Calculus","Computational Problem Solving","Introduction to Electrical and Electronics Engineering","Basic Electrical and Electronics Engineering Practice","Computer Hardware Essentials","Foundations of Indian Heritage","Mastery Over Mind"];
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        const cellCode = document.createElement("td");
        const codeText = document.createTextNode(subcode[i]);
        cellCode.appendChild(codeText);
        row.appendChild(cellCode);
        const cellTitle = document.createElement("td");
        const titleText = document.createTextNode(sub[i]);
        cellTitle.appendChild(titleText);
        row.appendChild(cellTitle);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.querySelector("table")?.remove();
    document.body.appendChild(tbl);
}

function sem2() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const subcode=["Subject Code","23MAT116","23MAT117","23CSE111","23PHY115","23CSE113","23MEE115","22ADM111"];
    const sub=["Subject Title","Discrete Mathematics","Linear Algebra","Object Oriented Programming","Modern Physics","User Interface Design","Manufacturing Practice","Glimpses of Glorious India"];
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        const cellCode = document.createElement("td");
        const codeText = document.createTextNode(subcode[i]);
        cellCode.appendChild(codeText);
        row.appendChild(cellCode);
        const cellTitle = document.createElement("td");
        const titleText = document.createTextNode(sub[i]);
        cellTitle.appendChild(titleText);
        row.appendChild(cellTitle);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.querySelector("table")?.remove();
    document.body.appendChild(tbl);
}

function sem3() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const subcode=["Subject Code","23MAT206","23ECE205","23CSE201","23CSE202","23CSE203","23ECE285","23LSE201","22ADM201"];
    const sub=["Subject Title","Optimization Techniques","Digital Electronics","Procedural Programming Using C","Database Management Systems","Data Structures and Algorithms","Digital Electronics Laboratory","Life Skills for Engineers I","Amrita Value Programme I"];
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        const cellCode = document.createElement("td");
        const codeText = document.createTextNode(subcode[i]);
        cellCode.appendChild(codeText);
        row.appendChild(cellCode);
        const cellTitle = document.createElement("td");
        const titleText = document.createTextNode(sub[i]);
        cellTitle.appendChild(titleText);
        row.appendChild(cellTitle);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.querySelector("table")?.remove();
    document.body.appendChild(tbl);
}
function sem1Arrears() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        const cellCode = document.createElement("td");
        const codeText = document.createTextNode(subcode[i]);
        cellCode.appendChild(codeText);
        row.appendChild(cellCode);
        const cellTitle = document.createElement("td");
        const titleText = document.createTextNode(sub[i]);
        cellTitle.appendChild(titleText);
        row.appendChild(cellTitle);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.querySelector("table")?.remove();
    document.body.appendChild(tbl);
}

function sem2Arrears() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const subcode=["Subject Code","23MAT116","23MAT117"];
    const sub=["Subject Title","Discrete Mathematics","Linear Algebra"];
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        const cellCode = document.createElement("td");
        const codeText = document.createTextNode(subcode[i]);
        cellCode.appendChild(codeText);
        row.appendChild(cellCode);
        const cellTitle = document.createElement("td");
        const titleText = document.createTextNode(sub[i]);
        cellTitle.appendChild(titleText);
        row.appendChild(cellTitle);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.querySelector("table")?.remove();
    document.body.appendChild(tbl);
}

function sem3Arrears() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    const subcode=["Subject Code","23MAT206","23ECE205"];
    const sub=["Subject Title","Optimization Techniques","Digital Electronics"];
    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");
        const cellCode = document.createElement("td");
        const codeText = document.createTextNode(subcode[i]);
        cellCode.appendChild(codeText);
        row.appendChild(cellCode);
        const cellTitle = document.createElement("td");
        const titleText = document.createTextNode(sub[i]);
        cellTitle.appendChild(titleText);
        row.appendChild(cellTitle);
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.querySelector("table")?.remove();
    document.body.appendChild(tbl);
}

function reRegister(){
    var subcode1="23MAT116";
    var sub1="Discrete Mathematics";
    var subcode2="23MAT117";
    var sub2="Linear Algebra";
    var subc1=document.getElementById("sc1");
    var subc2=document.getElementById("sc2");
    var sb1=document.getElementById("s1");
    var sb2=document.getElementById("s2");
    sb1.innerHTML=sub1;
    sb2.innerHTML=sub2;
    subc1.innerHTML=subcode1;
    subc2.innerHTML=subcode2;

}

function additionalSlot(){
    var subcode1="23MAT116";
    var sub1="Discrete Mathematics";
    var subcode2="23MAT117";
    var sub2="Linear Algebra";
    var subc1=document.getElementById("sc1");
    var subc2=document.getElementById("sc2");
    var sb1=document.getElementById("s1");
    var sb2=document.getElementById("s2");
    sb1.innerHTML=sub1;
    sb2.innerHTML=sub2;
    subc1.innerHTML=subcode1;
    subc2.innerHTML=subcode2;

}

function supply(){
    var subcode1="23MAT116";
    var sub1="Discrete Mathematics";
    var subcode2="23MAT117";
    var sub2="Linear Algebra";
    var subc1=document.getElementById("sc1");
    var subc2=document.getElementById("sc2");
    var sb1=document.getElementById("s1");
    var sb2=document.getElementById("s2");
    sb1.innerHTML=sub1;
    sb2.innerHTML=sub2;
    subc1.innerHTML=subcode1;
    subc2.innerHTML=subcode2;

}

function contact(){
    var subcode1="23MAT116";
    var sub1="Discrete Mathematics";
    var subcode2="23MAT117";
    var sub2="Linear Algebra";
    var subc1=document.getElementById("sc1");
    var subc2=document.getElementById("sc2");
    var sb1=document.getElementById("s1");
    var sb2=document.getElementById("s2");
    sb1.innerHTML=sub1;
    sb2.innerHTML=sub2;
    subc1.innerHTML=subcode1;
    subc2.innerHTML=subcode2;

}

const subjects = {
    semester1: [
        { name: "Calculus", code: "23MAT107" },
        { name: "CPS", code: "23CSE101" },
        { name: "EEE", code: "23EEE104" },
        { name: "BEEE", code: "23EEE184" },
        { name: "CHE", code: "23CSE102" }
    ],
    semester2: [
        { name: "DM", code: "23MAT116" },
        { name: "LA", code: "23MAT117" },
        { name: "OOPS", code: "23CSE111" },
        { name: "MP", code: "23PHY115" },
        { name: "UID", code: "23CSE113" }
    ],
    semester3: [
        { name: "OT", code: "23MAT206" },
        { name: "DE", code: "23ECE205" },
        { name: "C Programming", code: "23CSE201" },
        { name: "DBMS", code: "23CSE202" },
        { name: "DSA", code: "23CSE203" },
        { name: "DE Lab", code: "23ECE285" },
    ]
};

function updateTable() {
    const semester = document.getElementById("semesterSelect").value;
    const tablesContainer = document.getElementById("tablesContainer");
    tablesContainer.innerHTML = ""; // Clear previous tables

    if (semester && subjects[semester]) {
        const table = document.createElement("table");
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Subject Name</th>
                    <th>Subject Code</th>
                </tr>
            </thead>
            <tbody id="subjectTable">
            ${subjects[semester].map(subject => `
                <tr>
                    <td><input type="checkbox" value="${subject.code}"></td>
                    <td>${subject.name}</td>
                    <td>${subject.code}</td>
                </tr>
            `).join('')}
            </tbody>
        `;
        tablesContainer.appendChild(table);
    }
}

function releaseCourse() {
    const checkboxes = document.querySelectorAll('#subjectTable input[type="checkbox"]');
    const selectedSubjects = [];
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedSubjects.push(checkbox.value);
        }
    });

    if (selectedSubjects.length > 0) {
        document.getElementById('result').innerText = "Course Released with subjects: " + selectedSubjects.join(", ");
    } else {
        document.getElementById('result').innerText = "No subjects selected.";
    }
}

const students = {
    Math101: ["Alice", "Bob"],
    Phys101: ["Charlie"],
    Chem101: ["David", "Eva"],
    CS101: ["Frank", "Grace"],
    Eng101: ["Hannah"],
    Hist101: ["Ivy", "Jack"]
};

function displayStudents(selectedSubjects) {
    const studentsContainer = document.getElementById('studentsContainer');
    studentsContainer.innerHTML = ""; // Clear previous student list

    selectedSubjects.forEach(subjectCode => {
        const studentList = students[subjectCode] || [];
        if (studentList.length > 0) {
            const subjectHeader = document.createElement('h3');
            subjectHeader.innerText = `Students who applied for ${subjectCode}:`;
            studentsContainer.appendChild(subjectHeader);

            const studentListTable = document.createElement('ul');
            studentList.forEach(student => {
                const listItem = document.createElement('li');
                listItem.innerText = student;
                studentListTable.appendChild(listItem);
            });
            studentsContainer.appendChild(studentListTable);
        }
    });
}

function updateTable_RR() {
    const semester = document.getElementById('semesterSelect').value;
    if (!semester) return;

    fetch(`http://127.0.0.1:5000/get-courses_RR?semester=${semester}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('coursesTableBody');
            tableBody.innerHTML = '';  // Clear any existing rows

            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="2">No courses found for this semester.</td></tr>';
                return;
            }

            // Populate table rows with course data
            data.forEach(course => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><input type="checkbox" name="selectedCourses" value="${course.Cname}"></td>
                    <td>${course.Cname}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
}

function submitSelectedCourses_RR() {
    const semester = document.getElementById('semesterSelect').value;
    if (!semester) {
        alert("Please select a semester.");
        return;
    }

    const selectedCourses = Array.from(document.querySelectorAll('input[name="selectedCourses"]:checked'))
        .map(input => input.value);

    if (selectedCourses.length === 0) {
        alert("Please select at least one course.");
        return;
    }

    fetch(`http://127.0.0.1:5000/add-selected-courses_RR`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            semester: semester,
            courses: selectedCourses
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.status);
    })
    .catch(error => console.error('Error submitting courses:', error));
}

function updateTable_AS() {
    const semester = document.getElementById('semesterSelect_1').value;
    if (!semester) return;

    fetch(`http://127.0.0.1:5000/get-courses_AS?semester=${semester}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('coursesTableBody');
            tableBody.innerHTML = '';  // Clear any existing rows

            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="2">No courses found for this semester.</td></tr>';
                return;
            }

            // Populate table rows with course data
            data.forEach(course => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><input type="checkbox" name="selectedCourses" value="${course.Cname}"></td>
                    <td>${course.Cname}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
}

function submitSelectedCourses_AS() {
    const semester = document.getElementById('semesterSelect_1').value;
    if (!semester) {
        alert("Please select a semester.");
        return;
    }

    const selectedCourses = Array.from(document.querySelectorAll('input[name="selectedCourses"]:checked'))
        .map(input => input.value);

    if (selectedCourses.length === 0) {
        alert("Please select at least one course.");
        return;
    }

    fetch(`http://127.0.0.1:5000/add-selected-courses_AS`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            semester: semester,
            courses: selectedCourses
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.status);
    })
    .catch(error => console.error('Error submitting courses:', error));
}

function updateTable_CC() {
    const semester = document.getElementById('semesterSelect_2').value;
    if (!semester) return;

    fetch(`http://127.0.0.1:5000/get-courses_CC?semester=${semester}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('coursesTableBody');
            tableBody.innerHTML = '';  // Clear any existing rows

            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="2">No courses found for this semester.</td></tr>';
                return;
            }

            // Populate table rows with course data
            data.forEach(course => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><input type="checkbox" name="selectedCourses" value="${course.Cname}"></td>
                    <td>${course.Cname}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
}

function submitSelectedCourses_CC() {
    const semester = document.getElementById('semesterSelect_2').value;
    if (!semester) {
        alert("Please select a semester.");
        return;
    }

    const selectedCourses = Array.from(document.querySelectorAll('input[name="selectedCourses"]:checked'))
        .map(input => input.value);

    if (selectedCourses.length === 0) {
        alert("Please select at least one course.");
        return;
    }

    fetch(`http://127.0.0.1:5000/add-selected-courses_CC`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            semester: semester,
            courses: selectedCourses
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.status);
    })
    .catch(error => console.error('Error submitting courses:', error));
}

function updateTable_S() {
    const semester = document.getElementById('semesterSelect_3').value;
    if (!semester) return;

    fetch(`http://127.0.0.1:5000/get-courses_S?semester=${semester}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('coursesTableBody');
            tableBody.innerHTML = '';  // Clear any existing rows

            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="2">No courses found for this semester.</td></tr>';
                return;
            }

            // Populate table rows with course data
            data.forEach(course => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><input type="checkbox" name="selectedCourses" value="${course.Cname}"></td>
                    <td>${course.Cname}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
}

function submitSelectedCourses_S() {
    const semester = document.getElementById('semesterSelect_3').value;
    if (!semester) {
        alert("Please select a semester.");
        return;
    }

    const selectedCourses = Array.from(document.querySelectorAll('input[name="selectedCourses"]:checked'))
        .map(input => input.value);

    if (selectedCourses.length === 0) {
        alert("Please select at least one course.");
        return;
    }

    fetch(`http://127.0.0.1:5000/add-selected-courses_S`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            semester: semester,
            courses: selectedCourses
        })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.status);
    })
    .catch(error => console.error('Error submitting courses:', error));
}
