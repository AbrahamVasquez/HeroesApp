import { Navbar } from "../../UI"
import {Routes, Route, Navigate} from 'react-router-dom';
import { MarvelPage, DcPage, Hero, Search } from "../index";

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">

            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<Search />} />
                <Route path="hero/:id" element={<Hero />} />

                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </div>
    </>
  )
}
