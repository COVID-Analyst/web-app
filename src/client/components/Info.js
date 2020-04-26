import React, { Component } from 'react';
import '../styles/Info.css';
import topsvgs from '../images/topsvgs.png';
import rightsvgs from '../images/rightsvgs.png';
import logo from '../images/logo.png';
import ncdh from '../images/ncdh.png';
import tno from '../images/tno.png';
import gov from '../images/gov.png';
import raleigh from '../images/raleigh.png';
import { useParams } from 'react-router-dom';
import Script from 'react-load-script';

export default class Info extends Component {
	constructor(props) {
		super(props);

		// Declare State
		this.state = {
			location: '',
			news: '',
		};
	}

	componentDidMount() {
		let location = this.props.location.state.location;
		this.setState({ location: location });
	}

	render() {
		return (
			<div className="wrapper">
				<div className="background"></div>
				<Script url="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" />
				<df-messenger
					intent="welcome"
					chat-title="Virtual Assistant"
					agent-id="e1378f24-0025-4da3-b871-60936d0bfa05"
					language-code="en"
				></df-messenger>
				<img src={logo} className="slogo" />
				<img src={topsvgs} className="topsvgs" />
				<img src={rightsvgs} className="rightsvgs" />
				<div className="main">
					<p className="sub">The situation in:</p>
					<p className="header">{this.state.location}</p>
					<iframe
						width="800"
						height="500"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
						title="COVID19 Risk Maps"
						src="//www.arcgis.com/apps/Embed/index.html?webmap=f8522fa9d4e740eda52c86b659ecdd24&extent=-78.9707,35.528,-77.8089,36.081&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=false&theme=light"
					></iframe>
					<p className="sources">Sources: ArcGIS, US Census</p>
					<p className="subheader">Trusted local COVID-19 news</p>
					{/* <div>
						{this.state.news ? this.state.news.map(headline => <p>{headline}</p>) : <p>Loading...</p>}
          </div> */}
					<a
						target=" "
						href="https://www.cbs17.com/news/local-news/wake-county-news/raleigh-company-offers-free-disinfectant-amid-covid-19-pandemic/"
					>
						<div className="newsBlock">
							<img className="coverImage" src={raleigh} />
							<div className="newsInfo">
								<p className="source">Wake County News</p>
								<p className="headline">
									Raleigh company offers free disinfectant amid COVID-19 pandemic
								</p>
								<p className="description">
									One Wake County business is giving back by handing out free hospital-grade
									disinfectant. Raleigh Cleaning Company says they stocked up on disinfectant at
									the...
								</p>
								<p className="date">April 25, 2020</p>
							</div>
						</div>
					</a>
					<a
						target=" "
						href="https://www.ncdhhs.gov/news/press-releases/ncdhhs-awarded-2-million-emergency-grant-support-behavioral-health-response"
					>
						<div className="newsBlock">
							<img className="coverImage" src={ncdh} />
							<div className="newsInfo">
								<p className="source">NC Department of Health and Human Services</p>
								<p className="headline">
									NCDHHS Awarded $2 million Emergency Grant to Support COVID-19
								</p>
								<p className="description">
									The North Carolina Department of Health and Human Services has been awarded a $2
									million grant from the SAMHSA to support the state’s behavioral health response
									to...
								</p>
								<p className="date">April 25, 2020</p>
							</div>
						</div>
					</a>
					<a target=" " href="https://www.newsobserver.com/news/local/article242262951.html">
						<div className="newsBlock">
							<img className="coverImage" src={tno} />
							<div className="newsInfo">
								<p className="source">The News &#38; Observer</p>
								<p className="headline">
									Triangle schools to continue distance learning, explore alternative graduation plans
								</p>
								<p className="description">
									Triangle area school systems will continue distance learning and look for
									alternative ways to honor graduating seniors now that the state’s schools will
									remain...
								</p>
								<p className="date">April 24, 2020</p>
							</div>
						</div>
					</a>
					<a target=" " href="http://www.wakegov.com/news/Lists/Posts/Post.aspx?ID=1228">
						<div className="newsBlock">
							<img className="coverImage" src={gov} />
							<div className="newsInfo">
								<p className="source">Wake County Government</p>
								<p className="headline">
									NOTICE: Relief for County-Funded Borrowers Impacted by COVID-19
								</p>
								<p className="description">
									Wake County is offering temporary loan forbearance on Wake County Housing loans to
									homeowners and multifamily property owners who have been impacted by COVID-19...
								</p>
								<p className="date">April 24, 2020</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		);
	}
}
