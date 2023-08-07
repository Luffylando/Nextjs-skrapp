export default async  function getUser(id){
    const repsonse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if(!repsonse.ok){
        throw new Error('failed to to fetch user');
    }
    return repsonse.json();
}