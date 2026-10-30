import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums";
import { SearchControls } from "./ui/SearchControls";
import { CustomJombotron } from "@/components/custom/CustomJombotron";

export const SearchPages = () => {

  {/* Controls */ }
  return (
    <>
      <>
        <CustomJombotron
          title="Search your Heroes or Villains" />

          <CustomBreadcrums 
          currentPage="Search your Heroes or Villains"
          breadcrumbs={[{label: 'Search', to: '/Search'}]}/>

        <SearchControls />
      </>
    </>
  )
};
