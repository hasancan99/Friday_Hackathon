document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: form.get("username"),
            password: form.get("password")
        })
    }
    
 //to be changed depending on the address for users/login
    const response = await fetch("http://localhost:3000/users/register", options); 
    const data = await response.json();

    if (response.status == 201) {
        alert("Registered!");
    } else {
        alert(data.error);
    }
})
