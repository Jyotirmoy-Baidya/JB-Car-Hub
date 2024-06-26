'use client'

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components"
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

import { fetchCars } from "@/utils"
import { useEffect, useState } from "react";

const Home = () => {

    const [allCars, setAllCars] = useState([]);
    const [loading, setLoading] = useState(false);

    //Search States
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");

    //filter state
    const [fuel, setFuel] = useState("");
    const [year, setYear] = useState(2020);

    //pagination
    const [limit, setLimit] = useState(10);

    useEffect(() => {

        const getCars = async () => {
            setLoading(true);
            try {
                const result = await fetchCars({
                    manufacturer: manufacturer || "",
                    year: year || 2022,
                    fuel: fuel || "",
                    limit: limit || 10,
                    model: model || "",
                });
                setAllCars(result);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getCars();
    }, [fuel, model, year, manufacturer, limit]);

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className=" overflow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p>Explore the cars you might like</p>
                </div>

                <div className="home__filters">
                    <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
                    <div className="home__filter-container">
                        <CustomFilter options={fuels} setFilter={setFuel} />
                        <CustomFilter options={yearsOfProduction} setFilter={setYear} />
                    </div>
                </div>

                {allCars.length > 0 ? (
                    <section>
                        <div className="home__cars-wrapper">
                            {
                                allCars?.map((car) => (
                                    <CarCard key={car} car={car} />
                                ))
                            }
                        </div>
                        <ShowMore
                            pageNumber={(limit) / 10}
                            isNext={(limit) > allCars.length}
                            setLimit={setLimit}
                        />
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no results</h2>
                        {/* <p>{allCars?.message}</p> */}
                    </div>

                )

                }
            </div>
        </main>
    )
}

export default Home