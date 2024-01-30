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
            throw new Error("Une erreur est survenue.", {
                cause: {request}
        })}
        else return request.json();
    }
    catch(err){
        return err.cause.requete;
    }
}

function displayError(text) {
    const toast = document.getElementById('toast');
    toast.textContent = text;
    toast.style.display = "block";
}