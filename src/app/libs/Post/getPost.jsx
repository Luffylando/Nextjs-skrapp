export default async  function getPost(id){
    const repsonse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(!repsonse.ok){
        throw new Error('failed to to fetch post');
    }
    return repsonse.json();
}