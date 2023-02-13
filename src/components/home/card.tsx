import React from "react";

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="col-span-1 h-50 rounded-xl border border-neutral-500 shadow-md md:col-span-1 p-10 text-left">
      <h3 className="font-bold mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
