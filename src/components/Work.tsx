import "../styles/Work.scss"
import BlogImage from "../Assets/Screenshot 2022-01-22 210902.png"
import tictactoeGame from "../Assets/Screenshot 2022-01-22 210926.png"
import instagramClone from "../Assets/Screenshot 2022-01-22 212113.png"
import CoolNavbar from "../Assets/Screenshot 2022-01-22 212502.png"

const Work = () => {
  return (
	  <>
	  <div className="portfolio_projects">
		  <div className="header">
			  <h1>Portfolio Projects</h1>
		  </div>
		  <div className="portfolio-grid">
			<div className="project-Portfolio">
				<div className="left-Img">
				<img src={BlogImage} loading="lazy"/>
				</div>
				<div className="right_Data">
					<div className="projectName">
						<h1>Hartaj Writes</h1>
					</div>
					<div className="projectDescription">

					</div>
				</div>
			</div>  
			<div className="project-Portfolio">
				<div className="left-Img">
					<img src={tictactoeGame} loading="lazy"  alt="" />
				</div>
				<div className="right_Data">
                                     <div className="projectName">
						<h1>Tic Tac Toe</h1>
					</div>
					<div className="projectDescription">

					</div>
				</div>
			</div>  
			<div className="project-Portfolio">
				<div className="left-Img">
				<img src={instagramClone} loading="lazy" alt="" />
				</div>
				<div className="right_Data">
                                       <div className="projectName">
						<h1> Instagram Clone</h1>
					</div>
					<div className="projectDescription">

					</div>
				</div>
			</div>  
			<div className="project-Portfolio">
				<div className="left-Img">
				<img src={CoolNavbar} alt="" loading='lazy' />
				</div>
				<div className="right_Data">
			               <div className="projectName">
						<h1> cool Navbar</h1>
					</div>
					<div className="projectDescription">

					</div>
				</div>
			</div>  
		  </div>
	  </div>
	  </>
  );
};

export default Work;
