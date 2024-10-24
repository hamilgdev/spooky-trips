import Link from 'next/link';

import './styles.css';

/* eslint-disable @next/next/no-img-element */
export const BookCard = () => {
  return (
    <ul className='list-inline'>
      <Link href='/spooky-studio/new-story'>
        <li className='book shadow-2xl'>
          <img
            className='pointer-events-none'
            src='/assets/images/book-covers/book_cover_transformed_2.webp'
            alt='cover book'
            width={1080}
            height={1920}
          />
        </li>
      </Link>
    </ul>
  );
};
