
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { DotIcon } from "lucide-react";
import React from "react";

type BreadcrumbItemData = {
  label: string;
  href?: string;
};

type CustomBreadcrumbsProps = {
  items: BreadcrumbItemData[];
};

export const CustomBreadcrums = ({
  items,
}: CustomBreadcrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={item.label}>
              <BreadcrumbItem>
                {isLast || !item.href ? (
                  <BreadcrumbPage>
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<a href={item.href} />}>
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && (
                <BreadcrumbSeparator>
                  <DotIcon />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
