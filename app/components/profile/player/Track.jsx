import React from 'react'

class Track extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className='single-track'>
				<div className='track-image'>
					<div></div>
				</div>

				<div>
					<p>{this.props.num}</p>
					<div className='track-button'>
						<span className='icon-favorite_border'></span>
					</div>

					<div className='track-button' onClick={this.props.handleTogglePlay}>
						<span className='icon-play_arrow'></span>
					</div>
				</div>

				<div>
					<p>{this.props.name}</p>
				</div>

				<div>
					<p>{this.props.album}</p>
				</div>

				<div>
					<p>{this.props.time}</p>
				</div>
			</div>
		);
	}
}

export default Track