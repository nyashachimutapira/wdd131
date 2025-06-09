// Calendar functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December"];
    
    const calendarGrid = document.querySelector('.calendar-grid');
    const currentMonthElement = document.getElementById('current-month');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    
    // Sample events data
    const events = {
        '2025-7-20': ['Summer Street Fair - 10:00 AM to 6:00 PM'],
        '2025-7-24': ['Tech Workshop: Intro to Coding - 6:00 PM to 8:00 PM'],
        '2025-7-28': ['Community Park Cleanup - 9:00 AM to 12:00 PM'],
        '2025-8-5': ['Book Club Meeting - 7:00 PM'],
        '2025-8-15': ['Farmers Market - 9:00 AM to 1:00 PM']
    };
    
    function renderCalendar(month, year) {
        // Clear previous calendar
        while (calendarGrid.children.length > 7) {
            calendarGrid.removeChild(calendarGrid.lastChild);
        }
        
        // Update month header
        currentMonthElement.textContent = `${monthNames[month]} ${year}`;
        
        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Create empty cells for days before first day
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('calendar-day', 'empty');
            calendarGrid.appendChild(emptyDay);
        }
        
        // Create cells for each day
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.textContent = day;
            
            // Check if day has events
            const dateKey = `${year}-${month + 1}-${day}`;
            if (events[dateKey]) {
                dayElement.classList.add('event');
            }
            
            // Highlight current day
            if (day === currentDate.getDate() && 
                month === currentDate.getMonth() && 
                year === currentDate.getFullYear()) {
                dayElement.classList.add('selected');
                updateEventsList(dateKey);
            }
            
            // Add click event
            dayElement.addEventListener('click', () => {
                document.querySelectorAll('.calendar-day.selected').forEach(el => {
                    el.classList.remove('selected');
                });
                dayElement.classList.add('selected');
                updateEventsList(dateKey);
            });
            
            calendarGrid.appendChild(dayElement);
        }
    }
    
    function updateEventsList(dateKey) {
        const selectedDateElement = document.getElementById('selected-date');
        const eventsList = document.getElementById('events-list');
        
        // Format selected date
        const dateParts = dateKey.split('-');
        const formattedDate = `${monthNames[parseInt(dateParts[1]) - 1]} ${parseInt(dateParts[2])}, ${dateParts[0]}`;
        selectedDateElement.textContent = formattedDate;
        
        // Clear previous events
        eventsList.innerHTML = '';
        
        // Add events for selected date
        if (events[dateKey]) {
            events[dateKey].forEach(event => {
                const eventItem = document.createElement('li');
                eventItem.textContent = event;
                eventsList.appendChild(eventItem);
            });
        } else {
            const noEventItem = document.createElement('li');
            noEventItem.textContent = 'No events scheduled for this date';
            eventsList.appendChild(noEventItem);
        }
    }
    
    // Navigation buttons
    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });
    
    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });
    
    // Initialize calendar
    renderCalendar(currentMonth, currentYear);
});