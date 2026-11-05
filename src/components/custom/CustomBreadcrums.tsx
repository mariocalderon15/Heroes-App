import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router";
import { Fragment } from "react";

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
      <BreadcrumbList>
        {breadcrumbs.map((crumb) => (
          <Fragment key={crumb.to}>
            <BreadcrumbItem>
                <Link 
                className="transition-colors hover:text-foreground"
                to={crumb.to}>{crumb.label}</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbItem>
          <BreadcrumbPage>
            {currentPage}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

  );
};

