import { memo, useEffect, useState } from "react";

const CounterA = memo(({ count }) => {
  useEffect(() => {
    console.log("countA");
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log("countB");
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  //  return true; //이전 프롭스 현재 프롭스가 같다 -> 리렌더링을 일으키지 않게됨
  //  return false; //이전 프롭스 현재 프롭스가 같다 -> 리렌더링을 일으키지 않게됨
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};

const MemoizaedCounterB = memo(CounterB, areEqual);

const OptiomizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizaedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};

export default OptiomizeTest;
