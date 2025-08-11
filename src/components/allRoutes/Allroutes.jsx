import React from 'react'
import { routes } from '../../routes/index.route'
import { useRoutes } from 'react-router-dom'
function Allroutes() {
const element = useRoutes(routes);
    return (
<div>{element}</div>
  )
}

export default Allroutes