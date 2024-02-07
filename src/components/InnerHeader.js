import React from 'react'
import { useNavigate } from 'react-router-dom'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const InnerHeader = () => {
    const navigate = useNavigate();
    const langKey = useSelector((store) => store?.config?.lang);
  return (
    <ul className="text-white lg:flex gap-8 pl-3 pt-5 hidden sm:hidden">
      <li
        className="cursor-pointer hover:text-red-700"
        onClick={() => navigate("/browse")}
      >
        {lang[langKey].home}
      </li>
      <li
        className="cursor-pointer hover:text-red-700"
        onClick={() => navigate("/popular")}
      >
        {lang[langKey].popularMovies}
      </li>
      <li
        className="cursor-pointer  hover:text-red-700"
        onClick={() => navigate("/toprated")}
      >
        {lang[langKey].topRated}
      </li>
      <li
        className="cursor-pointer  hover:text-red-700"
        onClick={() => navigate("/upcoming")}
      >
        {lang[langKey].upcoming}
      </li>
      </ul>
  )
}

export default InnerHeader