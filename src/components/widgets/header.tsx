"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { menu } from "@/constants/menu";

import { Logo } from "@/components/widgets/logo";
import { MenuMobile } from "@/components/widgets/menu-mobile";
import { useState } from "react";

export const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState<boolean>(false);

  return (
    <>
      <header className="flex items-center justify-between">
        <section>
          <Logo />
        </section>
        <section className="hidden lg:block">
          <nav>
            <ul className="flex items-center gap-x-1 bg-background-foreground p-1 rounded-full">
              {menu.map((menu) => (
                <li key={menu.href}>
                  <Link
                    href={menu.href}
                    className={cn(
                      "flex items-center gap-x-2 py-3 px-6 rounded-full transition-colors",
                      menu.href === "/menu"
                        ? "bg-primary font-medium"
                        : "hover:bg-background/70"
                    )}
                  >
                    <i className={menu.icon}></i>
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section>
          <ul className="flex items-center gap-x-3 bg-background-foreground p-3 rounded-full">
            <li className="flex items-center gap-x-2">
              <Image
                src="https://img.freepik.com/foto-gratis/retrato-feliz-mujer-romantica-tranquila-caucasica-look-casual-pelo-largo-aretes-collar-sobre-fondo-increible-vista-hermosa-montanas-verdes_343596-951.jpg?t=st=1714552106~exp=1714555706~hmac=9b8fac4936de6c4bd33676c76dbb6da5dc8497d8f7e05faaa940014090ea8a04&w=1480"
                alt="Image"
                width={100}
                height={100}
                className="w-10 h-10 object-cover rounded-full"
              />
              <h5 className="font-medium">Antonella</h5>
            </li>
            <li>
              <button className="bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full">
                <i className="fi fi-rr-settings"></i>
              </button>
            </li>
            <li className="lg:hidden">
              <button
                onClick={() => setShowMenuMobile(true)}
                className="bg-background text-xl w-10 h-10 flex items-center justify-center rounded-full"
              >
                <i className="fi fi-rr-bars-staggered"></i>
              </button>
            </li>
          </ul>
        </section>
      </header>
      <MenuMobile isOpen={showMenuMobile} onClose={setShowMenuMobile} />
    </>
  );
};
