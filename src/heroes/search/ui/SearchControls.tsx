import { Input } from "@base-ui/react/input";
import { Button } from "@/components/ui/button"
import { Search, Filter, SortAsc, Grid, Plus } from "lucide-react";
import { useState } from "react";

//falta implementar por falta de datos de los personajes.
export const SearchControls = () => {
    const [isActive, setIsActive] = useState(false);
    const [search, setSearch] = useState();

    const toggleFilter = () => {
        setIsActive((prev) => !prev);
    }
    {/* Search */ }

    return (

        <>
            <>
                <div className="flex flex-col lg:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search
                            className="absolute left-3 top-6 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                        <Input
                            placeholder="Search heroes, villains, powers, teams..." className="bg-white pl-10 h-12 w-3xl text-lg border-2 rounded-xl" />
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                        <Button
                            value='filter'
                            variant={isActive ? 'default' : 'outline'}
                            onClick={toggleFilter}
                            className="h-12 ">
                            <Filter className="h-4 w-4 mr-2" />
                            Filters
                        </Button>

                        <Button
                            value='sortAsc'
                            variant={isActive ? 'default' : 'outline'}
                            onClick={toggleFilter}
                            className="h-12 ">
                            <SortAsc className="h-4 w-4 mr-2" />
                            Sort by Name
                        </Button>

                        <Button
                            value='grid'
                            variant={isActive ? 'default' : 'outline'}
                            onClick={toggleFilter}
                            className="h-12">
                            <Grid className="h-4 w-4" />
                        </Button>

                        <Button
                            value='addCharacter'
                            variant={isActive ? 'default' : 'outline'}
                            onClick={toggleFilter}
                            className="h-12">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Character
                        </Button>
                    </div>
                </div>

                {/* Advanced Filters */}
                <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Advanced Filters</h3>
                        <Button variant="ghost">Clear All</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Team</label>
                            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                All teams
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                All categories
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Universe</label>
                            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                All universes
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Status</label>
                            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                                All statuses
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="text-sm font-medium">Minimum Strength: 0/10</label>
                        <div className="relative flex w-full touch-none select-none items-center mt-2">
                            <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
                                <div className="absolute h-full bg-primary" style={{ width: "0%" }} />
                            </div>
                            <div className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors" />
                        </div>
                    </div>
                </div>
            </>
        </>



    );
};
