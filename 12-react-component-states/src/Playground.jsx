import Counter from './components/Counter';
function Playground() {
  return (
    <>
      <Counter count={10} step={4} min={1} max={100} />
      <Counter count={40} step={4} min={1} max={100} />
      <Counter />
    </>
  );
}

export default Playground;
