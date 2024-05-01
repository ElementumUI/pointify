import { ReactNode } from "react";

import { Header } from "@/components/widgets/header";
import { Sidebar } from "@/components/widgets/sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-[100dvh]">
      <section className="h-[10dvh] p-5 lg:p-8">
        <Header />
      </section>
      <section className="h-[90dvh] lg:flex">
        <main className="basis-3/4 p-5 lg:p-8  overflow-y-auto">
          {children}
        </main>
        <div className="basis-1/4 p-5 lg:p-8">
          <Sidebar />
        </div>
      </section>
    </div>
  );
};

export default Layout;
