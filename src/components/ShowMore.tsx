'use client'

import { showMoreProps } from "@/types";
import { useRouter } from "next/navigation"
import Custombutton from "./Custombutton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: showMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;
        // const newPathname = updateSearchParams('limit', newLimit.toString());
        // router.push(newPathname);
        setLimit(newLimit);
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <Custombutton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    )
}

export default ShowMore