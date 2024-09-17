import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-primary-foreground">
      <div className="w-16 h-16 border-8 border-t-8 border-t-yellow-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
