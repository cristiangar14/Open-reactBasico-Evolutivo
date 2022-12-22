export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    // console.log(response);
    // console.log('Status: ', response.status);
    // console.log('ok? ', response.ok);

    // //We return the json
     return response.json();
}
export const getAllPagedUsers = async (page) => {
    let response = await fetch('https://reqres.in/api/users?page='+page);
    // console.log(response);
    // console.log('Status: ', response.status);
    // console.log('ok? ', response.ok);

    // //We return the json
     return response.json();
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);
    // console.log(response);
    // console.log('Status: ', response.status);
    // console.log('ok? ', response.ok);

    // //We return the json
     return response.json();
}

export const login = async (email, password) => {
    let body = {
        email:email,
        password:password
    }

    let response = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        //mode:'no-cors',
        //credentials: 'omit',
        //cache: 'no-cache',
        // headers: {
        //     'Content-type': 'application/json'
        // },
        body: JSON.stringify(body),

    });

    return response.json()
}