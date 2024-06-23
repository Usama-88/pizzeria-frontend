import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container max-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-3xl text-white font-bold tracking-tight">
          Pizzeria
        </Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span className="cursor-pointer hover:text-black">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-black">
            Terms of Service
          </span>
        </span>
      </div>
    </div>
  );
}
