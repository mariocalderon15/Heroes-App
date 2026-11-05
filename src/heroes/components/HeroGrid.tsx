import { HeroGridCard } from "./HeroGridCard";
import { useHeroes } from "../actions/hooks/useHeroes";


export const HeroGrid = () => {

  const { data: heroesResponse, isError, isLoading } = useHeroes();

  if(isError) return <p>Error al Cargar los Heroes</p>;
  if(isLoading) return <p>Cargando Heroes..</p>
  if(!heroesResponse) return null;

    {/* Character Grid */}
  return (
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Hero Card 1 - Superman */}
          {
            heroesResponse.heroes.map((hero) => (
              <HeroGridCard key={hero.id} hero={hero}/>
            ))
          }
                
        </div>
  )
};
