/*import React from 'react';
import './Profile.css';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render(){
		return(
			<div className="layout">

	
	<section className="sidebar">
		<div className="brand">
			<i className="icon fa fa-building"> </i>
			<h2> Buildings </h2>
		</div>

		<nav className="main-nav">
			
			<ul className="main-menu menu">
				<li className="menu-item">
					<a href="#"> Dashboard </a>
				</li>

				<li className="menu-item">
					<a href="#"> Buildings </a>
				</li>

				<li className="menu-item">
					<a href="#"> Posts </a>
				</li>

				<li className="menu-item">
					<a href="#"> Conversations </a>
					<span className="badge"> 2 </span>
				</li>

				<li className="menu-item">
					<a href="#"> Amentities </a>
				</li>

				<li className="menu-item">
					<a href="#"> Tenants </a>
				</li>

				<li className="menu-item">
					<a href="#"> Performance </a>
				</li>

				<li className="menu-item selected selected">
					<a href="#"> Users </a>
				</li>
			</ul>

		</nav>

	</section>

	
	<section className="content">

		
		<div className="topbar">
			<h2 className="title"> Users </h2>
		</div>

		
		<div className="container">
			<section className="user-list">

				
				<div className="search-bar">
					<input type="text" name="searchtext" placeholder="Search Users" />
					<i className="fa fa-search"> </i>
				</div>

				
				<div className="list-wrapper">

					<div className="list-section">
						<label> A </label>
						<ul className="list">
							<li> <img src="https://source.unsplash.com/40x40/?adam" alt="Image 001" />
								<div className="text">
									<h3> Adrian Boyz</h3>
									<h5> AirBnb </h5>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

			
			<section className="user-detail">

		
				<div className="profile-info">
					<img src="https://source.unsplash.com/100x100/?face" alt="Image 001" />

					<div className="desc">
						<h3 className="name"> Angelino Newa</h3>
						<h5> Toyota </h5>
						<div className="reviews">
							<span className="count"> 9 </span>
							<span> Reviews </span>
						</div>
					</div>
				</div>

				
				<div className="basic-details profile-item">
					<h4> Basic Details </h4>
					<ul className="info">
						<li> <i className="fa fa-comment-o"> </i> <span> meangelino@toyota.con </span> </li>
						<li> <i className="fa fa-mobile"> </i> <span> +1 (200) 888 - 8888 </span> </li>
						<li> <i className="fa fa-map-marker"> </i> <span> California, United States </span> </li>
					</ul>
				</div>

			
				<div className="bio-details profile-item">
					<h4> Bio </h4>
					<p className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
				</div>

				
				<div className="tags-details profile-item">
					<h4> Tags </h4>
					<ul className="info">
						<li className="high"> Office Management </li>
						<li className="medium"> Design </li>
						<li className="low"> Developer </li>
					</ul>
				</div>

				<div className="divider profile-item">

				</div>

			

				
				<div className="divider profile-item">

				</div>

				
				<div className="members profile-item">
					<h4> Member of teams (5) </h4>
					<a href="#" className="more"> See All </a>

					<ul className="owners">
						<li>
							<img src="https://source.unsplash.com/160x160/?members" alt="Image 001" />
							<div class="desc">
								<h3> Historical</h3>
								<h4> 35 Members </h4>
							</div>
						</li>

						<li>
							<img src="https://source.unsplash.com/160x160/?paris" alt="Image 001" />
							<div className="desc">
								<h3> Paris Design </h3>
								<h4> 3 Members </h4>
							</div>
						</li>

						<li>
							<img src="https://source.unsplash.com/160x160/?artist" alt="Image 001" />

							<div className="desc">
								<h3> Modernists </h3>
								<h4> 102 Members </h4>
							</div>
						</li>
					</ul>
				</div>

				<div className="divider profile-item">

				</div>

				
				<div className="reviews profile-item">
					<h4> Reviews (9)</h4>
					<a href="#" className="more"> See All </a>

					<ul className="list">
						<li> <img src="https://source.unsplash.com/40x40/?artist" alt="profile" />
							<div className="text-content">
								<h4> Alice Townsend </h4>
								<p className="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	</section>
</div>
		);
	}
}

export default Profile;


**********
dokimi 3
**********




import React from 'react';
import './Profile.css';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render(){
		return(
			
<div>
  <header>
    
    <ul id="dropdown1" className="dropdown-content">
      <li><a href="#!">Logout</a></li>
    </ul>
    <div className="navbar-fixed">
      <nav className="red darken-1">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#!" class="brand-logo">Title</a>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right">
              <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Hello User<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
   
    <ul id="nav-mobile" className="sidenav sidenav-fixed">
      <li className="bold">
        <a href="#" className="waves-effect waves-teal">Dashboard</a>
      </li>
      <li className="bold">
        <a href="#" className="waves-effect waves-teal">My Events</a>
      </li>
      <li className="bold">
        <a href="#" className="waves-effect waves-teal">Joined Events</a>
      </li>
      <li className="bold">
        <a href="#" className="waves-effect waves-teal">My Schedule</a>
      </li>
      <li className="bold">
        <a className="waves-effect waves-teal modal-trigger" href="#calendar">Calendar</a>
      </li>
      <li className="bold">
        <a className="waves-effect waves-teal modal-trigger" href="#event-today">Events Today</a>
      </li>
      <div className="logo"><h3>Logo</h3></div>
    </ul>
    
  </header>
 
  <main>
    <div className="container">
      <div className="row">
       
        <div className="col s12 l7 dashboard">
          <div className="card grey lighten-3">
            <div className="card-content posts">
             
              <nav className="red darken-1">
                <div className="nav-wrapper">
                  <h4 className="left event-title">EVENTS</h4>
                  <form className="search-field right">
                    <div className="input-field">
                      <input id="search" type="search" required />
                      <label className="label-icon search-icon" htmlFor="search"><i className="material-icons">search</i></label>
                      <i className="material-icons close-icon">close</i>
                    </div>
                  </form> 
                </div>
              </nav>
              
              <div className="card medium event-card">
                <div className="card-image">
                  <img src="https://images.pexels.com/photos/1081912/pexels-photo-1081912.jpeg?cs=srgb&dl=agriculture-bird-s-eye-view-colors-1081912.jpg&fm=jpg" alt="banner"/>
                </div>
                <div className="card-content">
                  <div className="card-title"><b>Event Title</b></div>
                  <div className="left">
                    <p>01/10/2019 - USA</p>
                    <p><a href="#">View Details</a></p>
                  </div>
                  <div className="right-align">
                    <button className="waves-effect waves-light btn"><i className="material-icons left">add</i>Join</button>
                    <p><b>Capacity: </b> 3/100</p>
                  </div>
                </div>
              </div>
              <div className="card medium event-card">
                <div className="card-image">
                  <img src="https://images.pexels.com/photos/1853371/pexels-photo-1853371.jpeg?cs=srgb&dl=adventure-cliff-daylight-1853371.jpg&fm=jpg" alt="banner"/>
                </div>
                <div className="card-content">
                  <div className="card-title"><b>Event Title</b></div>
                  <div className="left">
                    <p>01/10/2019 - USA</p>
                    <p><a href="#">View Details</a></p>
                  </div>
                  <div className="right-align">
                    <button className="waves-effect waves-light btn"><i className="material-icons left">add</i>Join</button>
                    <p><b>Capacity: </b> 3/100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        
        <div className="col">
          <a className="btn-floating btn-large waves-effect waves-light blue modal-trigger calendar-btn" href="#calendar">C</a> -->
          <div className="calendar modal" id="calendar">
            <div className="month">      
              <ul>
                <li className="prev">&#10094;</li>
                <li className="next">&#10095;</li>
                <li>
                  January<br/>
                  
                </li>
              </ul>
            </div>
            <ul className="weekdays">
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
            </ul>
            <ul className="days">  
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li><span className="active">10</span></li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
            </ul>
          </div>
          
           <a className="btn-floating btn-large waves-effect waves-light green modal-trigger event-today-btn" href="#event-today">E</a> -->
          <div className="card event-today modal" id="event-today">
            <div className="card-title white-text red darken-1"><b>Events Today</b></div>
            <div className="card-content">
              <ul>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil autem maiores, non culpa error odit, perspiciatis nostrum porro nobis sapiente consectetur possimus. Ratione architecto alias tempore quidem, modi asperiores suscipit.</li>
                <li>Event 2</li>
                <li>Event 3</li>
              </ul>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </main>
  </div>

		);
	}
}

export default Profile;

***********
dokimi 4 apotuxia
***********

import React from 'react';
import './Profile.css';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render(){
		return(

<div>
	<div className="header">
  <div className="container">
    <div className="brand">Dashboard Name</div>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
        <li className="profile">
          <span>John Smith</span>
          <img src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg" alt="" />
        </li>
      </ul>
    </nav>
  </div>
  </div>
<div className="container">
  <aside className="panel">
    <ul>
      <li className="active">
        <span>Home</span>
      </li>
      <li>
        <span>Cart</span>
      </li>
      <li>
        <span>Coupons</span>
      </li>
    </ul>
    <div className="footer">
      <p>&copy; 2019</p>
      <p>Privacy Policy</p>
      <p>Terms &amp; Conditions</p>
    </div>
  </aside>

  <main>
  <section className="panel">
    <h2>Top Sellers</h2>
    <div className="top-sellers">
      <div className="seller">
        <img src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg" alt="" className="seller-img" />
        <div className="seller-details">
          <p className="seller-name">John Smith</p>
          <p className="seller-stat">123 Orders</p>
        </div>
      </div>
       <div className="seller">
        <img src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg" alt="" className="seller-img" />
        <div className="seller-details">
          <p className="seller-name">John Smith</p>
          <p className="seller-stat">123 Orders</p>
        </div>
      </div>
       <div className="seller">
        <img src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg" alt="" className="seller-img" />
        <div className="seller-details">
          <p className="seller-name">John Smith</p>
          <p className="seller-stat">123 Orders</p>
        </div>
      </div>
       <div className="seller">
        <img src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg" alt="" className="seller-img" />
        <div className="seller-details">
          <p className="seller-name">John Smith</p>
          <p className="seller-stat">123 Orders</p>
        </div>
      </div>
       <div className="seller">
        <img src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg" alt="" className="seller-img" />
        <div className="seller-details">
          <p className="seller-name">John Smith</p>
          <p className="seller-stat">123 Orders</p>
        </div>
      </div>
       <div className="seller">
        <img src="https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_goodcrop.jpg" alt="" className="seller-img" />
        <div className="seller-details">
          <p className="seller-name">John Smith</p>
          <p className="seller-stat">123 Orders</p>
        </div>
      </div>
    </div>
    <hr />
    <h2>Top Articles</h2>
    <div className="top-articles">
      <div className="article">
        <div className="article-img">
          <img className="article-img" src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" alt="" className="seller-img" />
        </div>
        <div className="article-details">
          <h4>Article Title</h4>
          <p>By <span>John Smith</span></p>
        </div>
      </div>
      <div className="article">
        <div className="article-img">
          <img className="article-img" src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" alt="" />
        </div>
        <div className="article-details">
          <h4>Article Title</h4>
          <p>By <span>John Smith</span></p>
        </div>
      </div>
      <div className="article">
        <div className="article-img">
          <img className="article-img" src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" alt="" />
        </div>
        <div className="article-details">
          <h4>Article Title</h4>
          <p>By <span>John Smith</span></p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="panel">
    <h2>Latest Products</h2>
    <div className="product-search">
      <form className="form-inline">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div className="product-group">
      <div className="product">
        <div className="product-img">
          <img src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" />
        </div>
        <div className="product-details">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>By <span>John Smith</span></p>
        </div>
      </div>
      <div className="product">
        <div className="product-img">
          <img src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" />
        </div>
        <div className="product-details">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>By <span>John Smith</span></p>
        </div>
      </div>
      <div className="product">
        <div className="product-img">
          <img src="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image" />
        </div>
        <div className="product-details">
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
          <p>By <span>John Smith</span></p>
        </div>
      </div>
    </div>
  </section>
  </main>
</div>
</div>
		);
	}
}

export default Profile;
*/


//*******************
//dokimi 2 doulepse
//*******************

import React from 'react';
import './Profile.css';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render(){
		return(
			
    <div className="grid-page">
      <div className="menu-container">
        <h1>Profile</h1>
        <nav>
          <ul className="nav-bar">
            <li>
              <a href="#" onclick="clickChange(this.innerHTML)">Projetos</a>           
            </li>
            <li>
              <a href="#" onclick="clickChange(this.innerHTML)">Time</a>             
            </li>
            <li>
              <a href="#" onclick="clickChange(this.innerHTML)">Diário</a>
            </li>
            <li>
              <a href="#" onclick="clickChange(this.innerHTML)">Timeline</a>            
            </li>
            <li>
              <a href="#" onclick="clickChange(this.innerHTML)">Configurações</a>              
            </li>
            <li>
              <a href="#" onclick="clickChange(this.innerHTML)">Pesquisa</a>              
            </li>
          </ul>
        </nav>
      </div>
      <div className="option">
        <h2 id="title" onclick="clickChange()">Details</h2>
        <div className="accordion-container">
          <button className="accordion">Projeto 1</button>
          <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="accordion-container">
          <button className="accordion">Projeto 2</button>
          <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="accordion-container">
          <button className="accordion">Projeto 3</button>
          <div className="panel">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  
		);
	}

}

export default Profile;