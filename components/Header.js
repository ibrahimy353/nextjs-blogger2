import Link from 'next/link';
import image from '../img/tekvibe.png';
export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
   <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-">
    <Img
        src={img.tekvibe.png}
        width={11}
        height={11}
   />
         {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
</div>
      <p className="text-4xl dark:text-white text-center ">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p> 
    </header>
  );
}
