// Line 3 - Please use a css preprocessor and move the code to the specifice scss / less file and import the sytels
// Line 4 - Please use a constant for the font-size which can be imported from a global constants file. 

// Line 7 - Create a Functional Component and fix the typo for the function name ('CarsFuel')
// Line 8 - Remove inline style and move this to a separate scss file. 
// Line 8 - props.children not required as the value is passed down to the child component.
// Line 8 - Pass fuel as an argument and the usage of the component can be modified as <Alert fuel={fuel} />

// Line 11 - Move this to a functional component // const Alert = (props) => {}
// Line 13 - Change the state to a boolean value (false)
// Line 17 - Chagne the state to a boolean value (true)

// Line 21 - 25 - Use ternary operator like the following and return it,
// const text = state ? 'Alert' : 'All is fine';
// const style = state ? 'alert-danger' : '';
// return <h2 className={style}>{text}</h2>;

// Line 28 - use a functional component rather than a class component and import the componet
// Line 29 - Constructor not needed when changed to the functional component
// Line 33 - USe React hooks useState for x and f; Also x and f could be changed to position and fuel and change whereever necessary
// Line 40 - prevState.x could be changed to stat.position amd prevstate.f could be changed to state.fuel

// Line 43 - code insdie componentDidMount could be changed to useEffect hook
// Line 48, 49 - Use destructure variable to get position and fuel // const { position, fuel } = this.state;

// Line 54 - fix the typo for CarsFuuel
// Line 55 - use <Alert fuel={fuel} />
