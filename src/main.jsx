import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {UserListApp} from "./component/UserListApp.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
         <UserListApp></UserListApp>
  </StrictMode>,
)
