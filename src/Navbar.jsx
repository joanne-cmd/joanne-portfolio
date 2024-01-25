const Navbar = () => {
    return (  
        <div className="navheader text-amber-600 p-4 bg-slate-950  flex flex-wrap items-center justify-between mx-auto p-4" >
            <div className="text-xl font-extrabold ">Dev</div>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                <li>
                    <a href="#">
                        <span>
                            Home
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            About
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            Projects
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            Blog
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>
                            Contact
                        </span>
                    </a>
                </li>
            </ul>
            </div>
            
        </div>
    )
    ;
}
 
export default Navbar;