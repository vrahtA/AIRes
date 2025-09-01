import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/">
                <p className="text-2xl font-black text-gradient">Resume Analyser</p>
            </Link>
            <Link to="/upload">
                <p className="primary-button w-fit">
                    Upload your resume
                </p>
            </Link>
        </nav>
    )
}
export default Navbar
