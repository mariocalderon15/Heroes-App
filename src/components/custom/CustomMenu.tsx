import { cn } from "cn";
import { NavLink, useLocation } from "react-router";

export const CustomMenu = () => {

   const {pathname} = useLocation();

    const isActive = (path: string) => {
        return pathname === path;
    }
  return (  

     <nav>
      <NavLink to="/" end className={cn( isActive('/') && 'bg-slate-200', 'rounded-md p-2')}>
        Home
      </NavLink>
      <NavLink to="/Search" end className={cn(isActive('/Search') && 'bg- bg-slate-200 rounded-md', 'p-2' )}>
        Search
      </NavLink>   
    </nav>

  )
};
