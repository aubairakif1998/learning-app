import Link from "next/link";
import { useState } from "react"; // Import useState
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { User } from "../models/User";
import "@/app/components/Navbar.css"; // Add your CSS for the navbar module here
import { setUser } from "@/slices/userSlice";

const Navbar: React.FC = () => {
  const router = useRouter();

  const user = useSelector((state: RootState) => state.user.value) as User;
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false); // Define a loading state

  const logout = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/logout").then((res) => {
        console.log(res.data);
        dispatch(setUser(null)); // Set user state to null on logout
        toast.success("Logout successful");
        router.push("/login");
      });
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          className={windowWidth <= 768 ? "" : "h-12 w-12 rounded-full"}
          src={windowWidth <= 768 ? `mobile.jpeg` : `desktop.jpeg`}
          alt={windowWidth <= 768 ? `mobile.jpeg` : `desktop.jpeg`}
          width={windowWidth <= 768 ? 100 : 100} // Adjust width as needed
          height={windowWidth <= 768 ? 70 : 90} /// Adjust height as needed
        />
      </div>

      <ul className="navLinks">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <div className="user-dropdown">
        {user !== null ? (
          <div className="dropdown">
            <div className="user-info"></div>
            <div className="dropdown-content">
              <button
                className="greenButton"
                onClick={handleLogout}
                disabled={loading}
              >
                {loading ? "Logging out..." : "Logout"}
              </button>
            </div>
          </div>
        ) : (
          <ul className="navLinks">
            <li>
              <a href="/login" className="greenButton">
                Sign In
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
