const btn = async () => {
    let username = document.getElementById("Input").value;

    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (data.message == "Not Found") {
        alert(data.message);
    }
     else {
        document.getElementById("userDetails").innerHTML = `



        









     `
    }
}