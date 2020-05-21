async function postLoginUser(username,password) {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username,password:password })
    };
    const response = await fetch('http://55.55.55.5:8080/Supply/users/login/', requestOptions);
    const data = await response.json();
    return data;
}
export {postLoginUser}