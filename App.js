        // const heading = React.createElement('h1', {id:'heading'}, 'Hello React!');

        // heading is a object .... react element is a js object
        // {} props are children and attricutes we pass it
        // 'hello react' is a children

        // console.log(heading);

        // const root = ReactDOM.createRoot(document.getElementById('root'));

        // root.render(heading); // heading is js object | React,createElement is a js object

        // <div id="parent">
        //      <div id="child">
        //          <h1>Hello world </h1>
        //          <h2>Hello World 2!</h2>
        //      </div>
        //      <div id="child2">
        //          <h1>Hello world </h1>
        //          <h2>Hello World 2!</h2>
        //      </div>
        // </div>


        const nestedStruc = React.createElement(
                'div',
                {id: 'parent'},
                [React.createElement('div', {id: 'child'}, [React.createElement('h1', {}, 'Hello World!'), React.createElement('h2', {}, 'Hello World 2!')]),
                 React.createElement('div', {id: 'child2'}, [React.createElement('h1', {}, 'Hello World!'), React.createElement('h2', {}, 'Hello World 2!')])]
        );

        console.log(nestedStruc);


        const root = ReactDOM.createRoot(document.getElementById('root'));

        root.render(nestedStruc); // nested elements

        // React.createElement is creating an object then that converts into HTML
        // nestedStruc is an object


        // Why do we need JSX because it solves the problem of complex structure
        // we can create react elements without jsx