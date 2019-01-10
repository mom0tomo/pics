import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
	onSearchSubmit(term) {
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID 01cf607bfd3864df27da23225b7602cc8000dfd79ae6bd3ea503ba76a0dcc4a9'
			}
		}).then(response => {
			console.log(response.data.results)
		})
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		)
	}
}

export default App
