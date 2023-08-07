"use client"
import { useState } from 'react';
import Link from 'next/link';

const Sort = ({ items }:any) => {
    const [sorting, setSorting] = useState("asc");

    const handleChange = (e:any) => {
        const value = e.target.value;
        setSorting(value);
    }
    
    return (
        <div>
            <div className="flex mt-10">
                <p className="mr-4">Sort by: </p>
                <select 
                    className="border pr-4"
                    value={sorting} 
                    onChange={handleChange}>
                    <option className="rounded-xs" value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </select>
            </div>
            <table className="table-auto mt-4">
                <thead className="border border-slate-400">
                    <tr>
                    <th className="border border-slate-400">Id</th>
                    <th>Name</th>
                    </tr>
                </thead>
                <tbody className="border border-slate-400">
                    {items.sort((a:any, b:any) => sorting === 'asc' ? a.id - b.id : b.id - a.id).map((item:any) => (
                        <tr key={item.id} className="border border-slate-400">
                        <td className="border border-slate-400">{item.id}</td>
                        <Link key={item.id} href={`/users/${item.id}`}>
                            <td className="hover:underline">{item.name}</td>
                        </Link>
                    </tr>
                    ))}
             </tbody>
            </table>
        </div>
    )
}

export default Sort;