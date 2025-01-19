// Credit types and corresponding courses
const courses = {
    English: [
        'Humanities 9',
        'English 10',
        'American Studies',
        'Asian Lit',
        'British Lit: Shakespeare',
        'Contemporary American Lit',
        'Sci-Fi',
        'Myths and Monsters',
        'Creative Writing',
        'Studies in Satire',
        'Read, Write, Publish',
        'AP English Lang',
        'AT English: Lit',
        'AT Nonfiction & Rhetoric',
        'AT Writing Workshop: Pub',
    ],
    'Social Studies': [
        'Humanities 9',
        'US History/Gov',
        'American Studies',
        'Modern History of Singapore',
        'Modern Philosophy',
        'Law and Justice',
        'Behavioral Economics/Game Theory',
        'Psychology',
        'Economics',
        'AP US History',
        'AP US Gov',
        'AP Comparative Gov',
        'AP Economics',
        'AT African American Studies',
        'AT Historical Inquiry & Research',
        'AT Psychology',
        'AT Economics',
        'AT Urban Studies',
        'AT Geo & Field Research'
    ],
    Math: [
        'Int. Math I',
        'Geometry',
        'Algebra II',
        'Algebra II/Trig',
        'Int. Math II/Trig',
        'Data Analytics',
        'Int. Math III/PreCalc',
        'Precalc w/ Stats',
        'Precalc w/ Parametrics',
        'AP Calc AB',
        'AP Calc BC',
        'AP Calc BC (Post-AB)',
        'AP Stats',
        'Discrete Math',
        'AT Post-Euclidean Geo',
        'AT Finite Math Modeling',
        'AT Multivariable Calc',
        'AT Linear Algebra',
    ],
    Science: [
        'Biology',
        'XL Biology',
        'Anatomy/Physiology',
        'Biotech',
        'Environmental Science',
        'Forensic Science',
        'Marine Biology',
        'Zoology',
        'Chemistry',
        'XL Chemistry',
        'Physical Science',
        'Physics',
        'XL Physics',
        'AP Biology',
        'AP Chemistry',
        'AP Physics 2',
        'AP Physics C',
        'AT Environmental Science',
        'AT Science: Comp Models',
    ],
    'PE / Health': [
        'Indoor Team Sports',
        'International Sports',
        'Racquet Sports',
        'Soccer/Football/Rugby',
        'Softball/Field Hockey/Golf',
        'Adventure/Climbing',
        'Athletics',
        'Lifeguarding',
        'Personal Defense',
        'Fitness for Body & Mind',
        'Group Fitness I',
        'Group Fitness II',
        'Weight Training I',
        'Weight Training II',
        'Dance I',
        'Dance II',
        'Dance III',
        'Dance Performance',
        'Health',
        'AT Kinesiology',
    ],
    Arts: [
        'Art Foundations',
        'Studio Art',
        'Ceramics I',
        'Ceramics II',
        'Ceramics III',
        'Mixed Media',
        'Digital Photo',
        'Adv Digital Photo',
        'Filmmaking',
        'Adv Filmmaking',
        'Broadcast Film',
        'Graphic Design',
        'AP Drawing',
        'AP 2D Art',
        'AP 3D Art',
        'AT VA Collab',
        'AT VA Catalyst',
        'Theater: Stagecraft',
        'Theater: Prod.',
        'Theater: Improv',
        'Theater: Adv Prod.',
        'Theater: Adv Improv',
        'Sketch Comedy',
        'Musical Theater',
        'Dance I',
        'Dance II',
        'Dance III',
        'Dance Performance',
        'Concert Strings',
        'String Ensemble',
        'Chamber Strings',
        'Concert Band',
        'Symphonic Band',
        'Wind Ensemble',
        'Jazz Improv',
        'SATB Choir',
        'Chorale Choir',
        'Chanterie Choir',
        'SAS Singers',
        'Intro to Guitar',
        'Adv Guitar',
        'AT PA Catalyst',
    ],
    Language: [
        'Chinese Novice',
        'Chinese Int. I',
        'Chinese Int. II',
        'Chinese Int. III',
        'Chinese IH I',
        'Chinese IH II',
        'Chinese IH III',
        'AP Chinese',
        'Chinese Advanced I',
        'Chinese Advanced II',
        'AT Chinese',
        'French Novice',
        'French Int. I',
        'French Int. II',
        'French Int. III',
        'French IH I',
        'French IH II',
        'French IH III',
        'AP French',
        'Spanish Novice',
        'Spanish Int. I',
        'Spanish Int. II',
        'Spanish Int. III',
        'Spanish IH I',
        'Spanish IH II',
        'Spanish IH III',
        'Spanish Advanced I',
        'AP Spanish',
        'Spanish Advanced II',
        'AT Spanish',
    ],
    Elective: [
        'Intro to Robotics',
        'Robotics Science',
        'Computer Science I',
        'Mobile App Devt.',
        'Des. Virtual Worlds',
        'AI I',
        'AP Computer Science',
        'AT Data Structures',
        'SAS Catalyst Project',
        'AT Seminar',
        'AT Research/Catalyst',
        'Business',
        'Personal Finance',
        'AT Entrepreneurship',
        'Yearbook'
    ],
};

// Courses and corresponding allowed grades / prerequisites
const prereqs = {
    'Humanities 9': [9,''],
    'English 10': [10,''],
    'American Studies': [10,''],
    'Asian Lit': [11,12,''],
    'British Lit: Shakespeare': [11,12,''],
    'Contemporary American Lit': [11,12,''],
    'Sci-Fi': [11,12,''],
    'Myths and Monsters': [11,12,''],
    'Studies in Satire': [11,12,''],
    'Creative Writing': [11,12,''],
    'Read, Write, Publish': [11,12,''],
    'AP English Lang': [10,11,12,'Humanities 9'],
    'AT English: Lit': [11,12,''],
    'AT Nonfiction & Rhetoric': [11,12,'AP English Lang'],
    'AT Writing Workshop: Pub': [11,12,''],
    'US History/Gov': [10,11,12,''],
    'Modern History of Singapore': [10,11,12,''],
    'Modern Philosophy': [10,11,12,''],
    'Law and Justice': [10,11,12,''],
    'Behavioral Economics/Game Theory': [10,11,12,''],
    'Psychology': [10,11,12,''],
    'Economics': [10,11,12,''],
    'AP US History': [10,11,12,'Humanities 9'],
    'AP US Gov': [11,12,''],
    'AP Comparative Gov': [11,12,''],
    'AP Economics': [10,11,12,'Humanities 9'],
    'AT African American Studies': [10,11,12,'Humanities 9'],
    'AT Historical Inquiry & Research': [10,11,12,'Humanities 9'],
    'AT Psychology': [11,12,''],
    'AT Economics': [11,12,'AP Economics'],
    'AT Urban Studies': [11,12,''],
    'AT Geo & Field Research': [10,11,12,'Humanities 9'],
    'Int. Math I': [9,''],
    'Geometry': [9,10,11,12,''],
    'Algebra II': [10,11,12,'Geometry'],
    'Algebra II/Trig': [9,10,11,12,'Geometry'],
    'Int. Math II/Trig': [9,10,11,12,''],
    'Data Analytics': [9,10,11,12,'Geometry'],
    'Int. Math III/PreCalc': [10,11,12, 'Int. Math II/Trig'],
    'Precalc w/ Stats': [9,10,11,12,'Algebra II/Trig'],
    'Precalc w/ Parametrics': [9,10,11,12,'Algebra II/Trig'],
    'AP Calc AB': [9,10,11,12,'Precalc w/ Stats'],
    'AP Calc BC': [9,10,11,12,'Int. Math III/PreCalc'],
    'AP Calc BC (Post-AB)': [10,11,12,'AP Calc AB'],
    'AP Stats': [10,11,12,''],
    'Discrete Math': [11,12,'Algebra II/Trig'],
    'AT Post-Euclidean Geo': [10,11,12,''],
    'AT Finite Math Modeling': [10,11,12,''],
    'AT Multivariable Calc': [10,11,12,'AP Calc BC'],
    'AT Linear Algebra': [10,11,12,'AP Calc BC'],
    'Biology': [9,''],
    'XL Biology': [9,10,11,12,''],
    'Anatomy/Physiology': [10,11,12,''],
    'Biotech': [10,11,12,''],
    'Environmental Science': [10,11,12,''],
    'Forensic Science': [11,12,''],
    'Marine Biology': [10,11,12,''],
    'Zoology': [11,12,''],
    'Chemistry': [10,11,12,''],
    'XL Chemistry': [10,11,12,''],
    'Physical Science': [10,11,12,''],
    'Physics': [10,11,12,'Int. Math I'],
    'XL Physics': [10,11,12,''],
    'AP Biology': [11,12,'XL Biology'],
    'AP Chemistry': [11,12,'XL Chemistry'],
    'AP Physics 2': [11,12,'XL Physics'],
    'AP Physics C': [11,12,'XL Physics'],
    'AT Environmental Science': [10,11,12,'XL Biology'],
    'AT Science: Comp Models': [10,11,12,'XL Physics'],
    'Indoor Team Sports': [9,10,11,12,''],
    'International Sports': [9,10,11,12,''],
    'Racquet Sports': [9,10,11,12,''],
    'Soccer/Football/Rugby': [9,10,11,12,''],
    'Softball/Field Hockey/Golf': [9,10,11,12,''],
    'Adventure/Climbing': [9,10,11,12,''],
    'Athletics': [9,10,11,12,''],
    'Lifeguarding': [9,10,11,12,''],
    'Personal Defense': [9,10,11,12,''],
    'Fitness for Body & Mind': [9,10,11,12,''],
    'Group Fitness I': [9,10,11,12,''],
    'Group Fitness II': [9,10,11,12,'Group Fitness I'],
    'Weight Training I': [9,10,11,12,''],
    'Weight Training II': [9,10,11,12,'Weight Training I'],
    'Dance I': [9,10,11,12,''],
    'Dance II': [9,10,11,12,'Dance I'],
    'Dance III': [9,10,11,12,'Dance II'],
    'Dance Performance': [10,11,12,'Dance III'],
    'Health': [10,11,12,''],
    'AT Kinesiology': [11,12,''],
    'Art Foundations': [9,10,11,12,''],
    'Studio Art': [9,10,11,12,'Art Foundations'],
    'Ceramics I': [9,10,11,12,''],
    'Ceramics II': [9,10,11,12,'Ceramics I'],
    'Ceramics III': [9,10,11,12,'Ceramics II'],
    'Mixed Media': [9,10,11,12,''],
    'Digital Photo': [9,10,11,12,''],
    'Adv Digital Photo': [9,10,11,12,'Digital Photo'],
    'Filmmaking': [9,10,11,12,''],
    'Adv Filmmaking': [9,10,11,12,'Filmmaking'],
    'Broadcast Film': [10,11,12,''],
    'Graphic Design': [10,11,12,''],
    'AP Drawing': [10,11,12, 'Studio Art'],
    'AP 2D Art': [10,11,12, 'Studio Art'],
    'AP 3D Art': [10,11,12, 'Ceramics III'],
    'AT VA Collab': [11,12,''],
    'AT VA Catalyst': [11,12,''],
    'Theater: Stagecraft': [9,10,11,12,''],
    'Theater: Prod.': [9,10,11,12,''],
    'Theater: Improv': [9,10,11,12,''],
    'Theater: Adv Prod.': [10,11,12,''],
    'Theater: Adv Improv': [10,11,12,''],
    'Musical Theater': [9,10,11,12,''],
    'Sketch Comedy': [10,11,12,'Theater: Improv'],
    'Concert Strings': [9,10,11,12,''],
    'String Ensemble': [9,10,11,12,''],
    'Chamber Strings': [9,10,11,12,''],
    'Concert Band': [9,10,11,12,''],
    'Symphonic Band': [9,10,11,12,''],
    'Wind Ensemble': [9,10,11,12,''],
    'Jazz Improv': [10,11,12,''],
    'SATB Choir': [9,10,11,12,''],
    'Chorale Choir': [9,10,11,12,''],
    'Chanterie Choir': [9,10,11,12,''],
    'SAS Singers': [10,11,12,''],
    'Intro to Guitar': [9,10,11,12,''],
    'Adv Guitar': [9,10,11,12,'Intro to Guitar'],
    'AT PA Catalyst': [12,''],
    'Chinese Novice': [9,10,11,12,''],
    'Chinese Int. I': [9,10,11,12,''],
    'Chinese Int. II': [9,10,11,12,''],
    'Chinese Int. III': [9,10,11,12,''],
    'Chinese IH I': [9,10,11,12,''],
    'Chinese IH II': [9,10,11,12,''],
    'Chinese IH III': [9,10,11,12,''],
    'AP Chinese': [9,10,11,12,''],
    'Chinese Advanced I': [9,10,11,12,''],
    'Chinese Advanced II': [9,10,11,12,''],
    'AT Chinese': [10,11,12,''],
    'French Novice': [9,10,11,12,''],
    'French Int. I': [9,10,11,12,''],
    'French Int. II': [9,10,11,12,''],
    'French Int. III': [9,10,11,12,''],
    'French IH I': [9,10,11,12,''],
    'French IH II': [9,10,11,12,''],
    'French IH III': [9,10,11,12,''],
    'AP French': [9,10,11,12,''],
    'Spanish Novice': [9,10,11,12,''],
    'Spanish Int. I': [9,10,11,12,''],
    'Spanish Int. II': [9,10,11,12,''],
    'Spanish Int. III': [9,10,11,12,''],
    'Spanish IH I': [9,10,11,12,''],
    'Spanish IH II': [9,10,11,12,''],
    'Spanish IH III': [9,10,11,12,''],
    'Spanish Advanced I': [9,10,11,12,''],
    'AP Spanish': [9,10,11,12,''],
    'Spanish Advanced II': [9,10,11,12,''],
    'AT Spanish': [10,11,12,''],
    'Intro to Robotics': [9,10,11,12,''],
    'Robotics Science': [9,10,11,12,''],
    'Computer Science I': [9,10,11,12,''],
    'Mobile App Devt.': [9,10,11,12,''],
    'Des. Virtual Worlds': [9,10,11,12,''],
    'AI I': [10,11,12,'Computer Science I'],
    'Engineering Design': [10,11,12,''],
    'AP Computer Science': [10,11,12,'Computer Science I'],
    'AT Data Structures': [11,12,'AP Computer Science'],
    'SAS Catalyst Project': [11,12,''],
    'AT Seminar': [10,11,12,'Humanities 9'],
    'AT Research/Catalyst': [11,12,'AT Seminar'],
    'Business': [10,11,12,''],
    'Personal Finance': [10,11,12,''],
    'AT Entrepreneurship': [10,11,12,'Humanities 9'],
    'Yearbook': [9,10,11,12,'']
};

// Credit requirements for each academic area
const creditRequirements = {
    English: 4,
    'Social Studies': 2,
    Math: 2,
    Science: 2,
    'PE / Health': 2,
    Arts: 1,
    Language: 2
};

// Function to populate tables for each grade
function populateTable(grade) {
    const table = document.getElementById(`courseTable${grade}`);

    for (let i = 0; i < 7; i++) {
        const row = document.createElement('tr');

        // Credit Type Dropdown for Semester 1
        const creditCell1 = document.createElement('td');
        const creditSelect1 = document.createElement('select');
        creditSelect1.id = `${grade}credit${i}`;
        creditSelect1.className = 'credit-select';
        creditSelect1.innerHTML = `
            <option value="" disabled selected>Select Credit</option>
            ${Object.keys(courses).map(credit => `<option value="${credit}">${credit}</option>`).join('')}
        `;
        creditCell1.appendChild(creditSelect1);
        row.appendChild(creditCell1);

        // First Semester Dropdown
        const semester1Cell = document.createElement('td');
        const semester1Select = document.createElement('select');
        semester1Select.id = `${grade}semester1Select${i}`;
        semester1Select.className = 'semester-select';
        semester1Select.innerHTML = '<option value="" disabled selected>Select Course</option>';
        semester1Cell.appendChild(semester1Select);
        row.appendChild(semester1Cell);

        // Credit Type Dropdown for Semester 2
        const creditCell2 = document.createElement('td');
        const creditSelect2 = document.createElement('select');
        creditSelect2.id = `${grade}credit2${i}`;
        creditSelect2.className = 'credit-select';
        creditSelect2.innerHTML = `
            <option value="" disabled selected>Select Credit</option>
            ${Object.keys(courses).map(credit => `<option value="${credit}">${credit}</option>`).join('')}
        `;
        creditCell2.appendChild(creditSelect2);
        row.appendChild(creditCell2);

        const matchButton = document.createElement('button');
        matchButton.type = "button";
        matchButton.id = `${grade}matchButton${i}`;
        matchButton.className = 'match-button';
        matchButton.textContent = "Match Sem. 1";
        matchButton.addEventListener('click', () => {
            creditSelect2.value = creditSelect1.value;  // Copy the credit from Semester 1 to Semester 2
            const courseOptions2 = courses[creditSelect2.value]
                    .map(course => `<option value="${course}">${course}</option>`)
                    .join('');
            semester2Select.innerHTML = `<option value="" disabled selected>Select Course</option>${courseOptions2}`;
            semester2Select.value = semester1Select.value;  // Copy the course from Semester 1 to Semester 2
            matchButton.style.display = 'none';
        });
        creditCell2.append(matchButton);


        // Second Semester Dropdown
        const semester2Cell = document.createElement('td');
        const semester2Select = document.createElement('select');
        semester2Select.id = `${grade}semester2Select${i}`;
        semester2Select.className = 'semester-select';
        semester2Select.innerHTML = '<option value="" disabled selected>Select Course</option>';
        semester2Cell.appendChild(semester2Select);
        row.appendChild(semester2Cell);

        table.appendChild(row);

        // Event listeners for credit selection
        creditSelect1.addEventListener('change', () => {
            updateCourses(creditSelect1, semester1Select);
            if (semester2Select.value != semester1Select.value) {
                matchButton.style.display = 'inline';
            }
        });
        creditSelect2.addEventListener('change', () => {
            updateCourses(creditSelect2, semester2Select);
            if (semester2Select.value != semester1Select.value) {
                matchButton.style.display = 'inline';
            }
        });
        semester2Select.addEventListener('change', () => {
            if (semester2Select.value != semester1Select.value) {
                matchButton.style.display = 'inline';
            }
        })

        // Load saved data if available
        loadSavedData(grade, i, creditSelect1, semester1Select, creditSelect2, semester2Select);
        if (semester1Select.value == semester2Select.value && semester1Select.value != "") {
            matchButton.style.display = 'none';
        }
        else {
            matchButton.style.display = 'inline';
        }
    }
}

// Update course options based on selected credit
function updateCourses(creditSelect, semesterSelect) {
    const selectedCredit = creditSelect.value;
    if (selectedCredit) {
        semesterSelect.innerHTML = `
            <option value="" disabled selected>Select Course</option>
            ${courses[selectedCredit].map(course => `<option value="${course}">${course}</option>`).join('')}
        `;
    }
}

// Load saved data from localStorage
function loadSavedData(grade, row, credit1, semester1, credit2, semester2) {
    const savedData = localStorage.getItem(`${grade}row${row}`);
    if (savedData) {
        const data = JSON.parse(savedData);
        credit1.value = data.semester1.credit;
        updateCourses(credit1, semester1);
        semester1.value = data.semester1.course;

        credit2.value = data.semester2.credit;
        updateCourses(credit2, semester2);
        semester2.value = data.semester2.course;
    }
    document.getElementById('exemption').style.display = 'none';
}

// Save data of selected course choices to localStorage
function saveGradeData(grade) {
    for (let i = 0; i < 7; i++) {

        const credit1 = document.getElementById(`${grade}credit${i}`).value;
        const semester1 = document.getElementById(`${grade}semester1Select${i}`).value;
        const credit2 = document.getElementById(`${grade}credit2${i}`).value;
        const semester2 = document.getElementById(`${grade}semester2Select${i}`).value;

        if (credit1 && semester1 && credit2 && semester2) {
            const data = {
                semester1: { credit: credit1, course: semester1 },
                semester2: { credit: credit2, course: semester2 },
            };
            localStorage.setItem(`${grade}row${i}`, JSON.stringify(data));
        }
    }
    alert(`Grade ${grade} data saved!`);
}

// Function to clear the data for a specific grade
function clearGradeData(grade) {
    for (let i = 0; i < 7; i++) {
        selectedCredit1 = document.getElementById(`${grade}credit${i}`);
        selectedCredit1.value = '';
        selectedSemester1 = document.getElementById(`${grade}semester1Select${i}`);
        selectedSemester1.innerHTML = `<option value="" disabled selected>Select Course</option>`;

        selectedCredit2 = document.getElementById(`${grade}credit2${i}`);
        selectedCredit2.value = '';
        selectedSemester2 = document.getElementById(`${grade}semester2Select${i}`);
        selectedSemester2.innerHTML = `<option value="" disabled selected>Select Course</option>`;

        // Remove data from localStorage
        Object.keys(localStorage).forEach(key => {
        if (key.startsWith(`${grade}row`)) {
            localStorage.removeItem(key);
        }
    });
        
    }
    alert(`Grade ${grade} data cleared!`);
}

// Function to count up the number of credits attained for each academic area
function tallyCreditsByType() {
    const creditTotals = {};

    // Initialize all course types to 0
    Object.keys(courses).forEach(type => {
        creditTotals[type] = 0;
    });

    // Iterate over grades 9 to 12
    for (let grade = 9; grade <= 12; grade++) {
        for (let i = 0; i < 7; i++) {
            const credit1 = document.getElementById(`${grade}credit${i}`).value;
            const credit2 = document.getElementById(`${grade}credit2${i}`).value;

            // Increment the totals for the respective course types
            if (credit1) creditTotals[credit1]+= 0.5;
            if (credit2) creditTotals[credit2]+= 0.5;
        }
    }
    return creditTotals;
}

// Function to add all this information to the Results display
function updateCreditsByType() {
    const totals = tallyCreditsByType();
    const display = document.getElementById('creditsByTypeDisplay');

    // Clear previous results
    display.innerHTML = '';

    // Populate the list with totals
    Object.entries(totals).forEach(([type, count]) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${type}: ${count} credits`;
        if (type != 'Elective') {
            listItem.textContent = `${type}: ${count} credits ; ${creditRequirements[type]} credits required`;
        }
        if (type == 'PE / Health') {
            if (checkCourse('Health')) {
                listItem.textContent = `PE: ${count-0.5} credits ; 1.5 credits required ; Health requirement fulfilled`
            }
            else {
                listItem.textContent = `PE: ${count} credits ; 1.5 credits required ; Health requirement MISSED`
            }
        }
        display.appendChild(listItem);
    });
    const catalystListItem = document.createElement('li');
    if (checkCatalyst()) {
        catalystListItem.textContent = `Catalyst requirement fulfilled`
    }
    else {
        catalystListItem.textContent = `Catalyst requirement MISSED`
    }
    display.appendChild(catalystListItem);
    const APCapListItem = document.createElement('li');
    if (getAPCreditsCount() <= 7.0) {
        APCapListItem.textContent = `Courses satisfy 7.0 AP Cap`
    }
    else {
        APCapListItem.textContent = `Courses EXCEED 7.0 AP Cap`
    }
    display.appendChild(APCapListItem);
    const USHistoryListItem = document.createElement('li');
    if (checkUSHistory()) {
        USHistoryListItem.textContent = `US History credit obtained`
    }
    else {
        USHistoryListItem.textContent = `NO US History course taken`
    }
    display.appendChild(USHistoryListItem);
    AlertCoursePrereqs();
    overallCheck();
}

// Function returns the total number of AP credits listed
function getAPCreditsCount() {
    var APCount = 0;
    for (let grade = 9 ; grade <=12 ; grade++) {
        for (let i=0 ; i < 7 ; i++) {
            if (document.getElementById(`${grade}semester1Select${i}`).value.substr(0,2) == 'AP') {
                APCount += 0.5;
            }
            if (document.getElementById(`${grade}semester2Select${i}`).value.substr(0,2) == 'AP') {
                APCount += 0.5;
            }
        }
    }
    return APCount;
}

// Function checks whether a course that satisfies the Catalyst requirement has been taken
function checkCatalyst() {
    for (let grade = 9 ; grade <=12 ; grade++) {
        for (let i=0 ; i < 7 ; i++) {
            if (document.getElementById(`${grade}semester1Select${i}`).value.includes('Catalyst')) {
                return true;
            }
            if (document.getElementById(`${grade}semester2Select${i}`).value.includes('Catalyst')) {
                return true;
            }
        }
    }
    return false;
}

// Function to check whether the course provided as input has been taken
function checkCourse(courseName) {
    for (let grade = 9 ; grade <=12 ; grade++) {
        for (let i=0 ; i < 7 ; i++) {
            if (document.getElementById(`${grade}semester1Select${i}`).value == courseName) {
                return true;
            }
            if (document.getElementById(`${grade}semester2Select${i}`).value == courseName) {
                return true;
            }
        }
    }
    return false;
}

// Function to check whether a course that satisfies the US History requirement has been taken
function checkUSHistory() {
    const USHistoryCourses = [
        'US History/Gov',
        'American Studies',
        'AP US History',
        'AP US Gov',
        'AT African American Studies'
    ]
    for (let grade = 9 ; grade <=12 ; grade++) {
        for (let i=0 ; i < 7 ; i++) {
            if (USHistoryCourses.includes(document.getElementById(`${grade}semester1Select${i}`).value)) {
                return true;
            }
            if (USHistoryCourses.includes(document.getElementById(`${grade}semester2Select${i}`).value)) {
                return true;
            }
        }
    }
    return false;
}

// Function to find and add any alerts about missing prerequisites to the prerequisite display
function AlertCoursePrereqs() {
    prerequisiteDisplay = document.getElementById('prerequisiteCheckDisplay');
    prerequisiteDisplay.innerHTML = ``;
    for (let grade = 9; grade <= 12; grade++) {
        for (let i = 0; i < 7; i++) {
            var indexCourse = document.getElementById(`${grade}semester1Select${i}`).value;
            // Skip if the course is not selected or not in the prereqs object
            let alertString = '';
            if (indexCourse && prereqs[indexCourse]) {
                let coursePrereqs = prereqs[indexCourse];
                let prereq = coursePrereqs.at(-1); // The last element is the prerequisite
                // Check if the prerequisite course exists and has not been taken
                if (prereq && !checkCourse(prereq)) {
                    alertString = `You have not taken: ${prereq}, which is a prerequisite for: ${indexCourse} that you have chosen to take in Grade ${grade}`;
                }
                if (alertString !== '') { // Avoid adding empty alert
                    alertListItem = document.createElement('li');
                    alertListItem.textContent = alertString;
                    prerequisiteDisplay.appendChild(alertListItem);
                }
            }

            var indexCourse2 = document.getElementById(`${grade}semester2Select${i}`).value;
            // Skip if the course is not selected or not in the prereqs object
            if (indexCourse2 && prereqs[indexCourse2]) {
                let alertString2 = '';
                let coursePrereqs2 = prereqs[indexCourse2];
                let prereq2 = coursePrereqs2.at(-1); // The last element is the prerequisite
                // Check if the prerequisite course exists and has not been taken
                if (prereq2 && !checkCourse(prereq2)) {
                    alertString2 = `You have not taken: ${prereq2}, which is a prerequisite for: ${indexCourse2} that you have chosen to take in Grade ${grade}`;
                }
                if (alertString2 !== '' && alertString2 != alertString) { // Avoid adding empty alert
                    alertListItem2 = document.createElement('li');
                    alertListItem2.textContent = alertString2;
                    prerequisiteDisplay.appendChild(alertListItem2);
                }
            }
        }
    }
    if (prerequisiteDisplay.innerHTML != ``) {
        document.getElementById('exemption').style.display = 'block';
    }
    else {
        document.getElementById('exemption').style.display = 'none';
    }
    return prerequisiteDisplay;
}

// Function to set the display for the Things to Change section (an overall summary of the course selection)
function overallCheck() {
    console.log('Overall checking');
    const overallDisplay = document.getElementById('overallSummaryDisplay');
    overallDisplay.innerHTML = ``;
    for (let i=0 ; i<8 ; i++) {
        let courseType = Object.keys(tallyCreditsByType())[i];
        let gotCredits = tallyCreditsByType()[courseType];
        if (creditRequirements[courseType] && gotCredits < creditRequirements[courseType]) {
            const courseListItem = document.createElement('li');
            courseListItem.textContent = `${creditRequirements[courseType] - gotCredits} more credits needed for ${courseType}`
            overallDisplay.appendChild(courseListItem);
        }
    }
    if (!checkCatalyst()) {
        const courseListItem = document.createElement('li');
        courseListItem.textContent = `You need some way to fulfil the Catalyst requirement.`
        overallDisplay.appendChild(courseListItem);
    }
    if (!checkCourse('Health')) {
        const courseListItem = document.createElement('li');
        courseListItem.textContent = `You need to take Health for one semester. You can take it in Grade 10-12.`
        overallDisplay.appendChild(courseListItem);
    }
    if (!checkUSHistory()) {
        const courseListItem = document.createElement('li');
        courseListItem.textContent = `You might want to take a US History course (Required for U.S Citizens and for UC Admissions).`
        overallDisplay.appendChild(courseListItem);
    }
    if (getAPCreditsCount() > 7) {
        const courseListItem = document.createElement('li');
        courseListItem.textContent = `You need to remove ${getAPCreditsCount() - 7.0} AP credits. MAX 7.0 credits.`
        overallDisplay.appendChild(courseListItem);
    }
    if (overallDisplay.innerHTML == ``) {
        if (AlertCoursePrereqs().innerHTML == ``) {
            const nothingToChangeListItem = document.createElement('li');
            nothingToChangeListItem.textContent = `You have met all credit requirements! Nothing to change. VALID course selection!`
            overallDisplay.appendChild(nothingToChangeListItem);
        }
        else {
            const PrereqListItem = document.createElement('li');
            PrereqListItem.textContent = `Credits are good. However, you need to check the prerequisites you are missing (listed below) and incorporate them into your course selection.`
            overallDisplay.appendChild(PrereqListItem);
        }
        
    }
    else if (AlertCoursePrereqs().innerHTML != ``) {
        const PrereqListItem = document.createElement('li');
        PrereqListItem.textContent = `You need to check the prerequisites you are missing (listed below) and incorporate them into your course selection.`
        overallDisplay.appendChild(PrereqListItem);
    }
}

for(let grade=9; grade<=12 ; grade++) {
    populateTable(grade);
    document.getElementById(`saveButton${grade}`).addEventListener('click', () => saveGradeData(grade));
}