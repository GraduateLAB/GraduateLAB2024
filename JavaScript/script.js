// script.js
document.addEventListener('DOMContentLoaded', () => {
    const noticeForm = document.getElementById('notice-form');
    const noticeTitle = document.getElementById('notice-title');
    const noticeContent = document.getElementById('notice-content');
    const noticesDiv = document.getElementById('notices');

    noticeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = noticeTitle.value;
        const content = noticeContent.value;

        if (title && content) {
            addNotice(title, content);
            noticeTitle.value = '';
            noticeContent.value = '';
        }
    });

    function addNotice(title, content) {
        const notice = document.createElement('div');
        notice.classList.add('notice');

        const noticeTitleDiv = document.createElement('div');
        noticeTitleDiv.classList.add('notice-title');
        noticeTitleDiv.textContent = title;

        const noticeContentDiv = document.createElement('div');
        noticeContentDiv.classList.add('notice-content');
        noticeContentDiv.textContent = content;

        const noticeActionsDiv = document.createElement('div');
        noticeActionsDiv.classList.add('notice-actions');

        const editButton = document.createElement('button');
        editButton.classList.add('edit-button');
        editButton.textContent = '수정';
        editButton.addEventListener('click', () => editNotice(notice, noticeTitleDiv, noticeContentDiv));

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '삭제';
        deleteButton.addEventListener('click', () => deleteNotice(notice));

        noticeActionsDiv.appendChild(editButton);
        noticeActionsDiv.appendChild(deleteButton);

        notice.appendChild(noticeTitleDiv);
        notice.appendChild(noticeContentDiv);
        notice.appendChild(noticeActionsDiv);

        noticesDiv.appendChild(notice);
    }

    function editNotice(notice, titleDiv, contentDiv) {
        const newTitle = prompt('새로운 제목을 입력하세요', titleDiv.textContent);
        const newContent = prompt('새로운 내용을 입력하세요', contentDiv.textContent);

        if (newTitle && newContent) {
            titleDiv.textContent = newTitle;
            contentDiv.textContent = newContent;
        }
    }

    function deleteNotice(notice) {
        noticesDiv.removeChild(notice);
    }
});
