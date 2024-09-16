import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div>
            <Header />
            <div>
                <div>
                    <button className="bg-slate-700 hover:bg-black text-white font-bold px-3 py-2 rounded" onClick={() => navigation(-1)}>Back</button>
                </div>
                <br></br>
                <h2>
                   <b> Blog Tagged</b> <span className='text-indigo-700 font-semibold'>  #{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage