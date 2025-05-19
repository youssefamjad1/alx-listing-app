// src/components/Card.tsx
import { FC } from "react";
import { CardProps } from "../interfaces";

const Card: FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="border rounded shadow p-4 w-64">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default Card;
