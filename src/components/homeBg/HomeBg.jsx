import Image from 'next/image';
import flower from '@/assets/images/flower.png';
import shit from '@/assets/images/shit.png';
import skull from '@/assets/images/skull.png';
import './homeBg.scss';

const HomeBg = () => {
  return (
    <div className="homeBg">
      <ul className="circles">
        <li>
          <Image
            src={skull}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={shit}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={flower}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={skull}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={flower}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={skull}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={flower}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={flower}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={flower}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
        <li>
          <Image
            src={shit}
            alt="images"
            style={{ width: '70px', height: '70px' }}
          />
        </li>
      </ul>
    </div>
  );
};

export default HomeBg;
