async function fetchData(link, payload){
    try{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        request = await fetch(link, {
            method: "POST",
            mode:"cors",
            headers: headers,
            body: payload
        });
        if(!(request.Accept || request.ok)){
            throw new Error(request.json(), {
            cause: {request}
        })}
        else return request.json();
    }
    catch(err){
        console.log(request.json());
        throw err;
    }
}

function displayError(text) {
    console.log(text);
    const toast = document.getElementById('toast');
    toast.textContent = text;
    toast.style.display = "block";
}