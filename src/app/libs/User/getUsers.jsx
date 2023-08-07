export default async  function getUsers(){
    const repsonse = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if(!repsonse.ok){
        throw new Error('failed to to fetch users');
    }
    return repsonse.json();
}