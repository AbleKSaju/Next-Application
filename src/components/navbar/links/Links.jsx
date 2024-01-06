// File: ./src/components/navbar/links/Links.tsx
import React from 'react';
import Link from 'next/link';


const links = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
];

const Links = () => {
  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
