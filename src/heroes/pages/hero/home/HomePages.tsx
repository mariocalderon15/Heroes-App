import {
  Filter,
  Heart,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJombotron } from "@/components/custom/CustomJombotron"
import { HeroesStats } from "@/heroes/components/HeroesStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useEffect, useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrums } from "@/components/custom/CustomBreadcrums"
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page.actions"


export const HomePages = () => {

 const [activeTab, setactiveTab] = useState<
'all'|
'favorites'|
'heroes'|
'villains'>('all');

useEffect(()=> {
  getHeroesByPage().then((heroes) => {
    console.log({heroes});
  })
})
  
  return (
    <>
        <>
        <CustomJombotron 
        title="Superhero Universe" 
        description="Discover, explore, and manage your favorite superheroes and villains"/>

        <CustomBreadcrums 
        currentPage="Super Heroes"
        breadcrumbs={[{label: 'Home', to: '/'}]}/>

        <HeroesStats/>
        
       

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger 
            value="all" 
            onClick={() => setactiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger 
            value="favorites" 
            onClick={() => setactiveTab('favorites')}
            className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger 
            value="heroes"
            onClick={() => setactiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger 
            value="villains"
            onClick={() => setactiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value={'all'}>
          <h1>Todos los personajes</h1>
          </TabsContent>

          <TabsContent value={'favorites'}>
            <h1>Favoritos</h1>
          </TabsContent>

          <TabsContent value={'heroes'}>
            <h1>Heroes</h1>
          </TabsContent>

          <TabsContent value={'villains'}>
            <h1>Villanos</h1>
          </TabsContent>
        </Tabs>
      

        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div>

        <HeroGrid/>

        {/* Pagination */}
        <CustomPagination totalPages={4}/>
        </>
    </>
  )
}