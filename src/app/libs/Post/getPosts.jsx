export default async  function getPosts(){
    const repsonse = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if(!repsonse.ok){
        throw new Error('failed to to fetch posts');
    }
    return repsonse.json();
}