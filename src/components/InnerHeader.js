import React from "react";
import { NavLink } from "react-router-dom";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const InnerHeader = () => {
  const langKey = useSelector((store) => store?.config?.lang);
  return (
    <ul className="text-white gap-8 md:gap-3 lg:gap-8 pt-5 flex max-[767px]:hidden">
      <li className="cursor-pointer hover:text-red-700">
        <NavLink to="/browse">{lang[langKey].home}</NavLink>
      </li>
      <li className="cursor-pointer hover:text-red-700">
        <NavLink to="/toprated">{lang[langKey].topRated}</NavLink>
      </li>
      <li className="cursor-pointer hover:text-red-700">
        <NavLink to="/popular">{lang[langKey].popularMovies}</NavLink>
      </li>
      <li className="cursor-pointer hover:text-red-700">
        <NavLink to="/upcoming">{lang[langKey].upcoming}</NavLink>
      </li>
    </ul>
  );
};

export default InnerHeader;
