import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => (
<ul className="navigation">
    <li>
        <Link to="/about/">About</Link>
    </li>
    <li>
        <Link to="/contact/">Contact</Link>
    </li>
</ul>
)

export default Navigation