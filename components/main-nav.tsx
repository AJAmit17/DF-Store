"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route)=> ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))
  
  return (
    <nav className="mx-5">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm text-primary font-medium transition-colors hover:opacity-70',
            // route.active ? 'text-primary' : 'text-secondary'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};

export default MainNav;
