import Image from "next/image";
import Link from "next/link";

const menu = [
  "Oferta",
  "Realizacje",
  "Opinie",
  "Kontakt",
];

export default function Navbar() {
  return (
    <header className="bg-[#ededed] flex py-4">
      <div className="max-w-7xl flex px-8 mr-0 ml-auto items-center justify-between w-full">

        <Link href="/">
        <Image
          src="/logo.png"
          alt="PREMO"
          width={150}
          height={50}
        />
        </Link>

        <nav>
          <ul className="flex gap-6">
            {menu.map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  className="
                  bg-red-700
                  hover:bg-red-800
                  text-white
                  uppercase
                  px-8
                  py-3
                  flex
                  font-bold
                  transition
                "
                >
                  {item}
                </Link>
              </li>
            ))}

          </ul>
        </nav>

      </div>
    </header>
  );
}