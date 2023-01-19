import { useEffect, useState } from "react";

// export function GithubUser() {
export function GithubUser({ username }) {
  // console.log(username);
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch(`https://api.github.com/users/ibrahimusluu`)
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, []);

  return <div>GithubUser: {data && <span>{data.name}</span>}</div>;
}

// export function GithubUser() {
//   const [data, setData] = useState(null);
//   // let name = "";

//   // THIS WAY DIDN'T WORK
//   useEffect(() => {
//     fetch(`https://api.github.com/users/ibrahimusluu`)
//       .then((response) => {
//         //   console.log(response);
//         console.log("Response status: ", response.status);
//         // console.log(response.json()); // don't execute the "response.json()" twice.
//         // return "b";
//         return response.json();
//       })
//       .then((a) => {
//         console.log("a: ", a);
//         setData(a);
//         console.log(data);
//       }); // a become "b" if the return is b in previous "then"
//   }, []);

//   useEffect(() => {
//     // console.log(data);
//     fetch(`https://api.github.com/users/ibrahimusluu`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         console.log("json: ", json);
//         // Without "State"
//         // name = json.name;
//         // console.log(name);

//         setData(json);
//         console.log(data);
//       });
//   }, [data]);

//   useEffect(() => {
//     // console.log(data);
//     fetch(`https://api.github.com/users/ibrahimusluu`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         console.log("json: ", json);

//         setData(json);
//       });
//   }, []);

//   useEffect(() => {
//     console.log("what happens here: ", data);
//   }, [data]);

//   return (
//     <div>GithubUser: {data && <h1>{data.name}</h1>}</div>
//     // <div>GithubUser: </div>
//     // <div>
//     //   <div>GithubUser: {data && <h1>{data}</h1>}</div>
//     //   <p>GithubUser: {data && <h1>{data.name}</h1>}</p>
//     // </div>
//   );
// }
