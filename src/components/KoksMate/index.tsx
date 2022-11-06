import React, { useEffect, useState } from "react";
import "./styles.module.css";

export  function KoksMateInteraction({
  children,
  caption,
}: {
  children: React.ReactChildren;
  caption: string;
}): JSX.Element {
  return (
    
      <div
        className="koksmat-interaction"
             >
        HELP
      </div>
    
  );
}


export default function KoksMate({
  children,
  caption,
}: {
  children: React.ReactChildren;
  caption: string;
}): JSX.Element {
  const [showInteraction, setShowInteraction] = useState(false)
  return (
    <>
      <div
      onClick={() => setShowInteraction(!showInteraction)}
        className="koksmat-button"
             >
        GET HELP
      </div>
      {showInteraction && <KoksMateInteraction caption={caption}>{children}</KoksMateInteraction>}
      </>
  );
}
