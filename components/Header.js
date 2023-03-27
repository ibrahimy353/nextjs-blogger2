import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
   <div className="w-x h-x md:w-x1 md:h-y1 lg:w-x2 lg:h-y2">
    <Image
        src={img.tekvibe.png}
        width={x}
        height={y}
   />
</div>
      <p className="text-4xl dark:text-white text-center ">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p> 
    </header>
  );
}
