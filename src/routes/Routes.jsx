import Poems from "../component/Poems/Poems.jsx";
import FamousSentences from "../component/FamousSentences/FamousSentences.jsx";
import Authors from "../component/Authors/Authors.jsx";
import AncientBooks from "../component/AncientBooks/AncientBooks.jsx";
import React from "react";
import {Navigate} from "react-router-dom";
import GridAnimation from "../component/GridAnimation/GridAnimation.jsx";

export default [
    {
        path: '/poems',
        element: <Poems/>,
    },
    {
        path: '/famousSentences',
        element: <FamousSentences/>
    },
    {
        path: '/authors',
        element: <Authors/>
    },
    {
        path: '/ancientBooks',
        element: <AncientBooks/>
    },
    {
        path: '/gridAnimation',
        element: <GridAnimation/>
    },
    {
        path: '/',
        element: <Navigate to='/poems'/>
    },

]
