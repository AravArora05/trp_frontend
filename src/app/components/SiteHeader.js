"use client";

import React from 'react';
import Link from 'next/link';

const SiteHeader = () => {
  const sports = ["NBA", "MLB", "NFL", "Soccer"];
  return (
    <header className="siteHeader">
      <h1 className="siteTitle">
        <Link href="/" className="navLink">TheRolePlayer</Link>
      </h1>
      <hr className="divider" />
      <nav className="mainNav">
        <ul className="navList">
          {sports.map((sport) => (
            <li className="navItem" key={sport}>
              <Link href={`/sports/${sport}`} className="navLink">{sport}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default SiteHeader;
