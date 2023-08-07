import Link from 'next/link';
import getUsers from '@/app/libs/User/getUsers';
import Sort from '@/components/Sort';

export default async function Users() {
    const users = await getUsers();

    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-2xl mt-20">Users Page - random content</p>
            (User single page is SSG, while Post single page is SSR)
            <Sort items={users} />
        </div>
    )
}