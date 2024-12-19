const API_URL = 'http://localhost:4000/Login/users'

//get all users
// async function fetchUsers(API_URL) {
//     try {
//         response =>()
//     } catch (e) {
        
//     }
// }

fetch(API_URL)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))