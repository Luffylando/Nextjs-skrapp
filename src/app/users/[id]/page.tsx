import getUser from '@/app/libs/User/getUser';
import getUsers from '@/app/libs/User/getUsers';

type TGetUser = {
  params: {
      id: string | number;
  }
}
export default async function UserPage({ params: { id }}:TGetUser) {
  const userData = getUser(id);
  const user = await userData;

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-1/2 my-20">
        <p className="text-3xl mb-6 text-center">(SSG) data fetch</p>
        <p className="text-3xl mb-6 text-center">{user.name}</p>
        <p className="text-3xl text-center">{user.email}</p>
      </div>
  </div>
  )
}

export async function generateStaticParams() {
  const usersData = getUsers();
  const users = await usersData;

  return users.map( (user:any) => (
    { id: user.id.toString() }
  ))
}