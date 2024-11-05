// Announcement management variables
let announcements = [];

// Function to load announcements from local storage
function loadAnnouncements() {
    const storedAnnouncements = localStorage.getItem('announcements');
    if (storedAnnouncements) {
        announcements = JSON.parse(storedAnnouncements);
        renderAnnouncements();
    }
}

// Function to update the time every second
function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timeElement.textContent = currentTime;
}

// Display the current date
const dateElement = document.getElementById('date');
const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
dateElement.textContent = currentDate;

// Initial call to update time
updateTime();
// Update the time every second
setInterval(updateTime, 1000);

// Function to add an announcement
function addAnnouncement() {
    const newAnnouncementInput = document.getElementById('new-announcement');
    const announcementText = newAnnouncementInput.value.trim();

    if (announcementText) {
        const confirmation = prompt("Enter the password to confirm addition:", "");
        if (confirmation === "admincute") {
            announcements.push(announcementText);
            newAnnouncementInput.value = '';
            renderAnnouncements();
            saveAnnouncements(); // Save to local storage
        } else {
            alert("Incorrect password!");
        }
    } else {
        alert("Please enter an announcement.");
    }
}

// Function to render announcements
function renderAnnouncements() {
    const announcementList = document.getElementById('announcement-list');
    announcementList.innerHTML = '';

    announcements.forEach((announcement, index) => {
        const li = document.createElement('li');
        li.textContent = announcement;

        // Create Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editAnnouncement(index);
        
        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteAnnouncement(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        announcementList.appendChild(li);
    });
}

// Function to delete an announcement
function deleteAnnouncement(index) {
    const confirmation = prompt("Enter the password to confirm deletion:", "");
    if (confirmation === "admincute") {
        announcements.splice(index, 1);
        renderAnnouncements();
        saveAnnouncements(); // Save to local storage
    } else {
        alert("Incorrect password!");
    }
}

// Function to edit an announcement
function editAnnouncement(index) {
    const confirmation = prompt("Enter the password to confirm editing:", "");
    if (confirmation === "admincute") {
        const newAnnouncementText = prompt("Edit announcement:", announcements[index]);
        if (newAnnouncementText !== null) {
            announcements[index] = newAnnouncementText;
            renderAnnouncements();
            saveAnnouncements(); // Save to local storage
        }
    } else {
        alert("Incorrect password!");
    }
}

// Function to save announcements to local storage
function saveAnnouncements() {
    localStorage.setItem('announcements', JSON.stringify(announcements));
}

// Load announcements when the page loads
loadAnnouncements();


// floor

// Initialize the current floor and total floors
let currentFloor = 1;
const totalFloors = 4; // Number of floors

// Function to update the image based on the current floor
function updateImage() {
    const imageElement = document.getElementById('pagination-image');
    imageElement.src = `floor${currentFloor}.png`; // Adjust image file names accordingly
    document.getElementById('floor-header').textContent = `Floor ${currentFloor}`; // Update the header
}

// Function to go to the previous floor
function previousImage() {
    if (currentFloor > 1) {
        currentFloor--; // Decrement the floor number
        updateImage(); // Update the displayed image
    }
}

// Function to go to the next floor
function nextImage() {
    if (currentFloor < totalFloors) {
        currentFloor++; // Increment the floor number
        updateImage(); // Update the displayed image
    }
}

// Initial call to set the image for the first floor
updateImage();
