export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      {/* Logo */}
      <h1 className="text-3xl font-bold text-blue-500">
        Portivo
      </h1>

      {/* Navigation */}
      <ul className="hidden md:flex items-center gap-10 text-gray-300">
        <li className="cursor-pointer hover:text-white transition">
          Features
        </li>

        <li className="cursor-pointer hover:text-white transition">
          How It Works
        </li>

        <li className="cursor-pointer hover:text-white transition">
          Pricing
        </li>

        <li className="cursor-pointer hover:text-white transition">
          About
        </li>
      </ul>

      {/* Right Buttons */}
      <div className="flex items-center gap-5">
        <button className="text-gray-300 hover:text-white transition">
          Sign In
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 h-11 rounded-xl font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
}