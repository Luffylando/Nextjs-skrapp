import getPost from '@/app/libs/Post/getPost';

type TGetPost = {
    params: {
        id: string | number;
    }
}

export default async function UserPage({ params: { id }}:TGetPost) {
  const post = await getPost(id);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-1/2 my-20">
      <p className="text-3xl mb-6 text-center">(SSR) data fetch</p>
      <p className="text-3xl mb-6 text-center">{post.title}</p>
      <p className="text-xl">{post.body}</p>
      </div>
    </div>
  )
}