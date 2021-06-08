import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../Css/detail.css';
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	WhatsappIcon,
} from 'react-share';
const DetailPage = (props) => {
	const { Data, match } = props;
	const [professor, setprofessor] = useState(undefined);
	useEffect(() => {
		const data = Data.filter((data) => data.id === parseInt(match.params.slug));
		setprofessor(data[0]);
	}, []);
	useEffect(() => {
		console.log(professor);
	}, [professor]);


	return (<>
		<div className='containermain'>
			<h1 className="htagindetails"><strong>Professor Info</strong></h1>
			<div className=' halfinfo'>
				{professor !== undefined && <img src={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`} className='imgindetail' alt='' />}
				{professor !== undefined && (
					<div>
						<FacebookShareButton
							url={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
							quote={`Info about Professor ${professor.professional.first_name} ${professor.professional.last_name} 
								DESCRIPTION: ${professor.background}
								`}
							hashtag='#professor'
						>
							<FacebookIcon round={true} />
						</FacebookShareButton>
						<TwitterShareButton
							url={`https://dev.perfectprof.com/storage/app/${professor.profile_pic.replaceAll(' ', '%')}`}
							title={`Info about Professor ${professor.professional.first_name} ${professor.professional.last_name} 
								DESCRIPTION: ${professor.background.slice(0, 150) + '...'}
								`}
							hashtag='#professor'
						>
							<TwitterIcon round={true} />
						</TwitterShareButton>
						<LinkedinShareButton
							url={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
							title={`Info about Professor ${professor.professional.first_name} ${professor.professional.last_name}`}
							summary={`DESCRIPTION: ${professor.background}`}
							quote={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
						>
							<LinkedinIcon round={true} />
						</LinkedinShareButton>
						<WhatsappShareButton
							url={`https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
							title={`Info about Professor ${professor.professional.first_name} ${professor.professional.last_name} 
								DESCRIPTION: ${professor.background}
								https://dev.perfectprof.com/storage/app/${professor.profile_pic}`}
						>
							<WhatsappIcon round={true} />
						</WhatsappShareButton>
					</div>
				)}
			</div>
			<div>
				{professor !== undefined && (
					<>
						<p>
							<strong>Name: </strong>
							{professor.professional.first_name} {professor.professional.last_name}
						</p>
						<p>
							<strong>Background: </strong>
							{professor.background}
						</p>
						<hr />
						<p>
							<strong>Methodology: </strong>
							{professor.methodology}
						</p>
						<hr />
						<p>
							<strong>Address:</strong>
							{professor.address} <strong>City:</strong> {professor.city}
						</p>
						<p>
							<strong>Phone: </strong>
							{professor.professional.phone}
						</p>
						<p>
							<strong>Email: </strong>
							{professor.professional.email}
						</p>
						<p>
							<strong>Landline: </strong>
							{professor.professional.landline}
						</p>
					</>
				)}
			</div>
		</div>
	</>);
}


export default withRouter(DetailPage);
