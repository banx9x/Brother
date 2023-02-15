export function createUserRow({ id, login, avatar_url, url, repos_url }) {
    return `
            <tr>
                <td>${id}</td>
                <td>
                    <img src="${avatar_url}" alt="${login}" />
                </td>
                <td>${login}</td>
                <td>${url}</td>
                <td>${repos_url}</td>
            </tr>
          `;
}

export function renderUsers(target, users) {
    const tbody = document.querySelector(target);

    tbody.innerHTML = users.map(createUserRow).join(""); // ??
}
