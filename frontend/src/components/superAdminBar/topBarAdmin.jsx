// Topbar.jsx
export default function Topbar({ onBurgerClick, isBurgerOpen }) {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow-md">
      <h2 className="text-black font-black text-lg">ADMIN DASHBOARD</h2>
      <button
        onClick={onBurgerClick}
        className="text-black text-2xl focus:outline-none"
      >
        {isBurgerOpen ? '✖' : '☰'}
      </button>
    </div>
  );
}
