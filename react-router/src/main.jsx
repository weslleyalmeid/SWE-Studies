import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'

// 1- configurando router

import {
    createBrowserRouter,
    RouterProvider,
    Navigate
} from 'react-router-dom'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ContactDetails from './routes/ContactDetails.jsx'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />
//     },
//     {
//         path: 'contact',
//         element: <Contact />
//     }
//  ]);


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            // 5 - dynamic routes
            {
                path: '/contact/:id',
                element: <ContactDetails />
            },
            // 7 - navigate para paginas nao existentes
            {
                path: 'oldcontact',
                element: <Navigate to='/contact' />
            }
        ]
    },
 ]);

render(<RouterProvider router={router} />, document.getElementById('app'))
