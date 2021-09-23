import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Service from "./Sevies"
function Home(){
	return(
		<>
		<div className="bg-white">
	<div className="container mt-3">
	<Service/>
		<section id="content">
		<h1 className="text-center">Our Core Values</h1>
			<div className="row">

				<div className="col-sm row my-2">
					<div className="col-4 align-self-center text-center font"><i aria-hidden="true" className="fa fa-copy"></i>
					</div>
					<div className="col-8 align-self-center">
						<h3>+200 Formats Supported</h3>
						 <p className="mb-0">
                CloudConvert is your Swiss army knife for file conversions. We support nearly all audio, video,
                document, ebook, archive, image, spreadsheet, and presentation formats. Plus, you can use our online
                tool without downloading any software.
            </p>
        </div>
    </div>
    <div className="col-sm row my-2">
    	<div className="col-4 align-self-center text-center font"><i className="fas fa-shield-alt"></i></div>
    	<div className="col-8">
    		<h3>Data Security</h3>
    		 <p className="mb-0">
                CloudConvert has been trusted by our users and customers since its founding in 2012. No one except you
                will ever have access to your files. We earn money by selling access to our API, not by selling your
                data. Read more about that in our
             Privacy Policy.
            </p>
        </div>
       </div>
      </div>
      <div className="row">
				<div className="col-sm row my-2">
					<div className="col-4 align-self-center text-center font"><i aria-hidden="true" className="fa fa-cogs"></i>
					</div>
					<div className="col-8 align-self-center">
						<h3>High-Quality Conversions</h3>
						 <p className="mb-0">
               Besides using open source software under the hood, we’ve partnered with various software vendors to provide the best possible results. Most conversion types can be adjusted to your needs such as setting the quality and many other options.
            </p>
        </div>
    </div>
    <div className="col-sm row my-2">
    	<div className="col-4 align-self-center text-center font"><i aria-hidden="true" className="fa fa-cubes"></i></div>
    	<div className="col-8">
    		<h3>Powerful API</h3>
    		 <p className="mb-0">
               Our API allows custom integrations with your app. You pay only for what you actually use, and there are huge discounts for high-volume customers. We provide a lot of handy features such as full Amazon S3 integration. Check out the API documentation.
            </p>
        </div>
       </div>
      </div>
	</section>
</div>
</div>
		</>
	)
}
export default Home;