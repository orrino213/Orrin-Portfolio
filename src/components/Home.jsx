import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  setCount((count) => {
    count++;
  });

  return (
    <div>
      <div>
        <div>
          <button>count</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
