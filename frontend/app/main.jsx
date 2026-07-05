import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp from "./MyApp"
import "./styles/app.layout.css"


createRoot(document.getElementById('root')).render(
    <MyApp />
)
