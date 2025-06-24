import { motion } from 'framer-motion';

const gradients = [
  {
    name: "orange",
    gradient: "conic-gradient(from 270deg, #ff7f50, #ffa07a, #ff4500)",
  },
  {
    name: "green",
    gradient: "conic-gradient(from 270deg, #32cd32, #3cb371, #2e8b57)",
  },
  {
    name: "blue",
    gradient: "conic-gradient(from 270deg, #1e90ff, #00bfff, #87cefa)",
  },
  {
    name: "yellow",
    gradient: "conic-gradient(from 270deg, #ffd700, #ffffe0)",
  },
  {
    name: "red",
    gradient: "conic-gradient(from 270deg, #ff4d4d, #ffcccc)",
  },
  {
    name: "pink",
    gradient: "conic-gradient(from 270deg, #ff69b4, #ffc0cb)",
  },
];

const Nav = ({ gradientName, isDark }) => {
  // If a gradientName is provided, filter the gradients array.
  const filteredGradients = gradientName
    ? gradients.filter((item) => item.name === gradientName)
    : gradients;

  return (
    <div className={`flex flex-wrap gap-4 p-10 ${isDark ? "bg-gray-800" : "bg-slate-200"}`}>
      {filteredGradients.map((item) => (
        <motion.div
          key={item.name}
          className="w-80 h-80 rounded-full"
          style={{ background: item.gradient }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default Nav;
