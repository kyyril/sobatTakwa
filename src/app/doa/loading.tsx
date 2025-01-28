import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-primary-foreground">
      <div className="w-16 h-16 border-2 border-t-2 border-t-yellow-500 rounded-full border-dotted animate-spin"></div>
    </div>
  );
};

export default Loading;
