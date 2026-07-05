import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp from "./MyApp"
// import App from "./App"
import "./styles/app.layout.css"


createRoot(document.getElementById('root')).render(
    <MyApp />
)
