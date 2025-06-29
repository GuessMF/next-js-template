import { NavMenu } from "@/components/common/NavMenu";
import Header from "@/components/common/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 border-2 border-s-2">
        {children}
      </div>
    </div>
  );
}
