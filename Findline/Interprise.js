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

