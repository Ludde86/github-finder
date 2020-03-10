import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
	// pull the username (the login) from the url, and then call getUser
	// params = '/user/:login'
	// this params is passed in as an argument (username)
	// -> fetch the data with this username
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
	}

	static propTypes = {
		getUser: PropTypes.func.isRequired,
		loading: PropTypes.bool.isRequired,
		user: PropTypes.object.isRequired
	};

	render() {
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable
		} = this.props.user;

		const { loading } = this.props;

		return (
			<Fragment>
				{loading && <Spinner />}
				<Link to="/" className="btn btn-light">
					Back To Search
				</Link>
				<br />
				{name}
				<br />
				Hireable:{' '}
				{hireable ? (
					<i className="fas fa-check text-success" />
				) : (
					<i className="fas fa-times-circle text-danger" />
				)}
			</Fragment>
		);
	}
}

export default User;
