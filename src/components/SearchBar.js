import React from 'react';

class SearchBar extends React.Component {
	state = { term: 'Hi, there!' };

	onFormSubmit(event) {
		event.preventDefault();
		console.log(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(event) => this.setState({ term: event.target.value })}
						/>
						<button onSubmit={this.onInputClick} />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;