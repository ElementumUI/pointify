import { ReactNode } from "react";

import { Header } from "@/components/widgets/header";
import { Cart } from "@/components/widgets/cart";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[100dvh]">
      <section className="h-[10dvh] py-4 px-5">
        <Header />
      </section>
      <section className="h-[90dvh] lg:flex lg:gap-x-4">
        <main className="basis-4/4 xl:basis-3/4 p-5 lg:pr-2 overflow-y-auto">
          {children}
        </main>
        <div className="xl:basis-1/4 p-5 lg:pl-2">
          <Cart />
        </div>
      </section>
    </div>
  );
};

export default Layout;
