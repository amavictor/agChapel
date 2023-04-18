import React from 'react'
import { Home } from '../../pages/Home/Home'
import { AboutUs } from '../../pages/About-us/About-us'
import { ContactUs } from '../../pages/Contact-us/Contact-us'
import { Events } from '../../pages/Events/Events'
import { Fundamentals } from '../../pages/Fundamentals/Fundamentals';
import { Gallery } from '../../pages/Gallery/Gallery'
import { Ministries } from '../../pages/Ministries/Ministries'
import { Pastors } from '../../pages/Pastors/Pastors';
import { Sermons } from '../../pages/Sermons/Sermons'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'



export const AnimatedRoutes = () => {

    const location = useLocation()
    const routes = [
        {
            path: "/",
            component: <Home />
        },
        {
            path: "/about-us",
            component: <AboutUs />
        },
        {
            path: "/contact-us",
            component: <ContactUs />
        },
        {
            path: "/events",
            component: <Events />
        },
        {
            path: "/fundamentals",
            component: <Fundamentals />
        },
        {
            path: "/gallery",
            component: <Gallery />
        },
        {
            path: "/ministries",
            component: <Ministries />
        },
        {
            path: "/pastors",
            component: <Pastors />
        },
        {
            path: "/sermons",
            component: <Sermons />
        },
    ]
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {
                    routes.map(({ path, component }) => (
                        <Route key={path} path={path} element={component} />
                    ))
                }
            </Routes>
        </AnimatePresence>

    )
}
