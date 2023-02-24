// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <Routes />
        </ScrollTop>
    </ThemeCustomization>
);

export default App;

//import React, { Component } from "react";
//import configData from "./data/config.json";

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

// class App extends Component {
//   constructor (props) {
//     super(props);

//     this.state = {
//       items: [],
//       isLoaded: false,

//     }
//   }

//   componentDidMount () {
//     fetch(configData.USERS_URL)
//     .then(res => res.json())
//     .then(json => {
//       console.log(json);
//       this.setState({
//         isLoaded: true,
//         items: json,
//       });
//     });
//   }

//   render() {

//     var { isLoaded, items } = this.state;

//     if(!isLoaded){
//       return <div>Loading...</div>
//     }
//     else{
//       return (
//         <div className="App">
            
//             <ul>
//               {items.map(item => (
//                 <li key={item.id}>
//                   Name: {item.name} |  Email:{item.email}
//                 </li>
//               ))}
//             </ul>
//             <div>
//               <Button variant="contained">Hello World</Button>
//             </div>
//         </div>
//       );
//     }
//   }

// }

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
