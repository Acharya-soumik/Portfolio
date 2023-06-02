import { motion } from "framer-motion";
import Bracket from "../pages/assets/icons/bracket.svg";
import Image from "next/image";
import { useState } from "react";

interface Skills {
  type: string;
  data: [
    {
      title: string;
      description: string;
    }
  ];
}

const SkillCard = ({ type, data }: Skills) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prev: boolean) => !prev);
  };
  return (
    <div className="border p-4 mx-2 rounded-2xl snap-mandatory flex flex-col flex-shrink-0 snap-start">
      <h2 className="text-xl mb-4 text-white font-extralight">{type}</h2>
      {data.slice(0, 2).map((skill, skillIndex) => (
        <motion.div
          key={skillIndex}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-2 bg-gray-200 mb-2 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <p className="text-gray-200 text-sm font-extralight">{skill.title}</p>
        </motion.div>
      ))}
      {data.length > 2 && (
        <div className={`flex ${expanded ? "flex-col-reverse" : "flex-col"}`}>
          <button
            className="text-gray-300 text-xs"
            onClick={() => handleToggleExpand()}
          >
            {expanded ? "Hide" : "show more"}
          </button>
          {expanded && (
            <>
              {data.slice(2).map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 bg-gray-200 mb-2 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                >
                  <p className="text-gray-200 text-sm font-extralight">
                    {skill.title}
                  </p>
                </motion.div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
