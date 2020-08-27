import React, { useState, useEffect } from "react";

const Child = () => {
  const init = 0;
  console.log("child start...");
  const [count, setCount] = useState(() => {
    console.log("child useState init");
    return init;
  });
  useEffect(() => {
    console.log("child useEffect...");
    return () => {
      console.log("child useEffect clean up ...");
    };
  });
  const handleClick = () =>
    setCount((prev) => {
      return prev + 1;
    });
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click me </button>
    </>
  );
};

const Layout = () => {
  console.log("start...");
  const [show, setShow] = useState(() => {
    console.log("useState init");
    return false;
  });
  console.log(show, "show child...");
  useEffect(() => {
    console.log("useEffect with dep...");
    return () => {
      console.log("useEffect clean up with dep...");
    };
  }, [show]);
  useEffect(() => {
    console.log("useEffect without dep...");
    return () => {
      console.log("useEffect clean up without dep...");
    };
  });
  useEffect(() => {
    console.log("useEffect with none...");
    return () => {
      console.log("useEffect clean up with none...");
    };
  }, []);
  const handleOnchange = () => setShow((prev) => !prev);
  return (
    <div>
      <label htmlFor="check">click to show child</label>
      <input
        id="check"
        type="checkbox"
        onChange={handleOnchange}
        checked={show}
      />
      {show && <Child />}
    </div>
  );
};

export default Layout;
