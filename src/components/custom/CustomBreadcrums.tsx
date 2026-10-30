import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router";

interface Breadcrumbs {
  label: string;
  to: string;
}

interface Props {
  currentPage: string,
  breadcrumbs?: Breadcrumbs[];
}

export const CustomBreadcrums = ({ currentPage, breadcrumbs = [] }: Props) => {

  return (
    <Breadcrumb className="my-5">
         {
          breadcrumbs.map(crumb => (    
            <BreadcrumbList>
            <BreadcrumbItem>
             <BreadcrumbLink>
             <Link to={crumb.to}>{crumb.label}</Link>
             </BreadcrumbLink>
             <BreadcrumbSeparator/>
             <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
            </BreadcrumbList>
            
          ))
        }
    </Breadcrumb>

  );
};

