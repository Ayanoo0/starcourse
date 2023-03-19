// 定义了一个名为App的React组件
// const Header = (prop) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>{prop.course}</h1>
//     </div>
//   );
// };
// const Part1 = (prop) => {
//   return (
//     <div>
//       {prop.part1} {prop.exercises1}
//     </div>
//   );
// };
// const Part2 = (prop) => {
//   return (
//     <div>
//       {prop.part2} {prop.exercises2}
//     </div>
//   );
// };
// const Part3 = (prop) => {
//   return (
//     <div>
//       {prop.part3} {prop.exercises3}
//     </div>
//   );
// };
// const Content = (prop) => {
//   return (
//     <div>
//       <Part1 part1={prop.part1} exercises1={prop.exercises1} />
//       <Part2 part2={prop.part2} exercises2={prop.exercises2} />
//       <Part3 part3={prop.part3} exercises3={prop.exercises3} />
//     </div>
//   );
// };
// const Total = (prop) => {
//   return (
//     <div>
//       <p>
//         Number of exercises{" "}
//         {prop.exercises1 + prop.exercises2 + prop.exercises3}
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };
//   return (
//     <div>
//       <p>{course.name}</p>
//       <p>
//         {course.parts[0].name} {course.parts[0].exercises}
//       </p>
//       <p>
//         {course.parts[1].name} {course.parts[1].exercises}
//       </p>
//       <p>
//         {course.parts[2].name} {course.parts[2].exercises}
//       </p>
//     </div>
//   );
// };
const App = (prop) => {
  const { counter } = prop;
  return <div>{counter}</div>;
};

export default App;
