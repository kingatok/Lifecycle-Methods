var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	getDefaultProps: function() {
		console.log('Here we can add additional Props, for example change color');
	},

	componentWillMount: function() {
		console.log('It runs on both client and server side, we can set the state of one specific attribute');
	},

	componentDidMount: function() {
		console.log('Here we can add jQuery event listener or load something from a server');
	}, 

	componentWillReceiveProps: function() {
		console.log('We use it when we want to do something if any of the props changes');
	},

	shouldComponentUpdate: function() {
		return true;
		console.log('Here we decide if component should update or not by choosing true or false');
	},

	componentWillUpdate: function() {
		console.log('Here we can access the old props, compare them to the new values and make required changes');
	},

	componentDidUpdate: function() {
		console.log('Here we are updating the DOM in response to prop changes');
	},

	componentWillUnmount: function() {
		console.log('Here we can remove jQuery event listener');
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('span', {}, 'Licznik ' + this.state.counter),
				React.createElement('button', {type: 'submit', onClick: this.increment}, 'Increase'),
				React.createElement('button', {type: 'submit', onClick: this.decrement}, 'Decrease')
			)
		);
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));