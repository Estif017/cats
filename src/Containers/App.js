import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist';
import 'tachyons';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			serchField: '',
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((kittys) => this.setState({ robots: kittys }));
	}
	onsearchChange = (event) => {
		this.setState({ serchField: event.target.value });
	};
	render() {
		const kittyfilter = this.state.robots.filter((kitty) => {
			return kitty.name
				.toLowerCase()
				.includes(this.state.serchField.toLowerCase());
		});
		if (this.state.robots.length === 0) {
			return <h1>Loading....</h1>;
		} else {
			return (
				<div className='tc'>
					<SearchBox onsearch={this.onsearchChange} />
					<Scroll>
						<ErrorBoundary>
							<Cardlist robots={kittyfilter} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
