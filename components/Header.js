import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4">
      <img src="/img/tekvibe.png" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
      </div>
      <p className="text-4xl dark:text-white text-center ">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p> 
    </header>
  );
}
