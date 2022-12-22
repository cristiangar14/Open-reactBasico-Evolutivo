import React from 'react';

const AsyncExample = () => {

    async function generateNumber(){
        return 1
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }


    function obtainNumber(){
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Somethind went wrong: ${error}`))
    }

    function obtainPromiseNumber(){
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Somethind went wrong: ${error}`))
    }

    async function saveSessionStorage(key, value){
       sessionStorage.setItem(key,value);

       return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage(){
        saveSessionStorage('name', 'Cristian')
            .then((response) => {
                let value = response;
                alert(`Saved name: ${value}`)
            })
            .catch((error) => alert(`Somethind went wrong: ${error}`))
            .finally(() => alert(`SUCCESS: Name saved and retrived`))
    }

    async function obtainMessage(){
        let promise = new Promise((resolve, reject) => {
            setTimeout(()=> resolve('Hello world'), 2000)
        });

        let message = await promise;

        await alert(`Message received: ${message}`)

    }

    const returnError = async () => {
        await Promise.reject(new Error('Ooops!'))
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything in OK: ${response}`))
            .catch((error) => alert(`Somethind went wrong: ${error}`))
            .finally(() => alert(`Finally executed`))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com');
            alert(`Response:${JSON.stringify(response)}`)
        } catch (error) {
            alert(`Somethind went wrong with your URL: ${error} (Check your console)`)
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all([
            fetch('https://reqres.in/api/users'),
            fetch('https://reqres.in/api/users?page=2'),
        ]).then((res) => console.log(res)).catch((error) => {
            alert(`Somethind went wrong with your URLs: ${error} (Check your console)`);
        })
    }


    return (
        <div>
            <h1>Async, Promise Examples</h1>
            <button onClick={obtainNumber}>Obtain number</button>
            <button onClick={obtainPromiseNumber}>Obtain promise number</button>
            <button onClick={showStorage}>Save name and show</button>
            <button onClick={obtainMessage}>Receive message in 2 seconds</button>
            <button onClick={consumeError}>Obtain error</button>
            <button onClick={urlNotFound}>Request to Unknown URL</button>
            <button onClick={multiplePromise}>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
