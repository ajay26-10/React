import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import RecipeCards from "./pages/RecipeCards"
import AddRecipePage from "./pages/AddRecipePage"

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AuthLayout />} >
                    <Route index element={<LoginPage />} />
                    <Route path="/sign-up" element={<SignupPage />} />
                </Route>

                <Route path="/" element={<MainLayout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/recipes" element={<RecipeCards />} />
                    <Route path="/add-recipe" element={<AddRecipePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </>
        )
    )

    return (

        <>

            <RouterProvider router={router} />

        </>

    )
}

export default App
