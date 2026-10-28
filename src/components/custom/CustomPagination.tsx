import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight,} from "lucide-react";

interface Props {
    totalPages: number,
}

export const CustomPagination = ({ totalPages }: Props) => {

    const [currentPage, setCurrentPage] = useState(1);

    const goToPreviousPage = () => {
        if(currentPage <= 1) return;
        setCurrentPage((prev) => prev - 1);
    }

    const goToNextPage = () => {
        if(currentPage >= totalPages) return;
        setCurrentPage(currentPage + 1);
    }

    return (
        <div className="flex items-center justify-center space-x-2">
            <Button
                size="sm"
                variant='outline'
                onClick={goToPreviousPage}
                disabled={currentPage <= 1 ? true : false}>
                previous
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({length: totalPages}, (_, index) => {
                const page = index + 1;

                return(
                    <Button
                    size="sm"
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    onClick={() => setCurrentPage(page)}
                    aria-current={currentPage === page ? 'page' : undefined}>
                        {page}
                    </Button>
                )
            })}

            <Button
            size="sm"
            variant="outline"
            onClick={() => goToNextPage()}
            disabled={currentPage >= totalPages ? true : false}>
                Next
                <ChevronRight className="h-4 w-4"/>
            </Button>

        </div>
    )
}
