import { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="*" element={<div>Hello world</div>} />
            </Routes>
        </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter