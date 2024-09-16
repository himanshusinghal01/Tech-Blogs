import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className=''>
            <Header />
            <div>
                <div>
                    <button className="bg-slate-700 hover:bg-black text-white font-bold px-3 py-2 rounded " onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2>
                    Blogs On <span className='font-bold'> {category}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage