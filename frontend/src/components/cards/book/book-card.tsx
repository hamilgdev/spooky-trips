import './styles.css';

const BOOK_DATA = [
  {
    id: 1,
    original_image: '',
    tranformed_image:
      'https://res.cloudinary.com/prod-hamilgdev/image/upload/e_gen_background_replace:prompt_anAdd%20spooky%20witches%20to%20the%20background./ar_9:16,b_gen_fill,c_pad,h_1920/v1/upload-unsigned-images/spooky/ec7dglbwpa7dczwtmm1a?_a=BAMCkGP80',
  },
  {
    id: 2,
    original_image: '',
    tranformed_image:
      'https://res.cloudinary.com/prod-hamilgdev/image/upload/e_gen_background_replace:prompt_anAdd%20spooky%20witches%20to%20the%20background./ar_9:16,b_gen_fill,c_pad,h_1920/v1/upload-unsigned-images/spooky/vyz5e62fuxkdjva0hsfq?_a=BAMCkGP80',
  },
  {
    id: 3,
    original_image:
      'https://res.cloudinary.com/prod-hamilgdev/image/upload/ar_9:16,b_gen_fill,c_pad,h_1920/v1/upload-unsigned-images/spooky/ebrpq1sno2lcun1ia4ey?_a=BAMCkGP80',
    tranformed_image:
      'https://res.cloudinary.com/prod-hamilgdev/image/upload/e_gen_background_replace:prompt_anAdd%20spooky%20witches%20to%20the%20background./ar_9:16,b_gen_fill,c_pad,h_1920/v1/upload-unsigned-images/spooky/ebrpq1sno2lcun1ia4ey?_a=BAMCkGP80',
  },
];

/* eslint-disable @next/next/no-img-element */
export const BookCard = () => {
  return (
    <ul className='list-inline'>
      <li className='book shadow-2xl'>
        <img
          src='https://res.cloudinary.com/prod-hamilgdev/image/upload/e_gen_background_replace:prompt_anAdd%20spooky%20witches%20to%20the%20background./ar_9:16,b_gen_fill,c_pad,h_1920/v1/upload-unsigned-images/spooky/vyz5e62fuxkdjva0hsfq?_a=BAMCkGP80'
          alt='book'
        />
      </li>
    </ul>
  );
};
