document.addEventListener('DOMContentLoaded', () => {
    const goalForm = document.getElementById('goal-form');
    const goalTitleTextarea = document.getElementById('goal-title');
    const goalPeriodSelect = document.getElementById('goal-period');
    const dailyGoalList = document.getElementById('daily-goal-list');
    const weeklyGoalList = document.getElementById('weekly-goal-list');
    const monthlyGoalList = document.getElementById('monthly-goal-list');

    goalForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = goalTitleTextarea.value;
        const period = goalPeriodSelect.value;
        addGoal(title, period);
        goalTitleTextarea.value = '';
    });

    function addGoal(title, period) {
        const goal = document.createElement('li');
        goal.classList.add('goal');
        goal.innerHTML = `
            <input type="checkbox">
            <span>${title}</span>
            <button class="delete-button">삭제</button>
        `;

        if (period === 'daily') {
            dailyGoalList.appendChild(goal);
        } else if (period === 'weekly') {
            weeklyGoalList.appendChild(goal);
        } else if (period === 'monthly') {
            monthlyGoalList.appendChild(goal);
        }

        const deleteButton = goal.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            goal.remove();
        });
    }
});
