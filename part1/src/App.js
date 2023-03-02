// 定义了一个名为App的React组件
const Header = (prop) => {
  return (
    <div>
      <h1>{prop.course}</h1>
    </div>
  );
};
const Part1 = (prop) => {
  return (
    <div>
      {prop.part1} {prop.exercises1}
    </div>
  );
};
const Part2 = (prop) => {
  return (
    <div>
      {prop.part2} {prop.exercises2}
    </div>
  );
};
const Part3 = (prop) => {
  return (
    <div>
      {prop.part3} {prop.exercises3}
    </div>
  );
};
const Content = (prop) => {
  return (
    <div>
      <Part1 part1={prop.part1} exercises1={prop.exercises1} />
      <Part2 part2={prop.part2} exercises2={prop.exercises2} />
      <Part3 part3={prop.part3} exercises3={prop.exercises3} />
    </div>
  );
};
const Total = (prop) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {prop.exercises1 + prop.exercises2 + prop.exercises3}
      </p>
    </div>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of componet";
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  );
};

export default App;
