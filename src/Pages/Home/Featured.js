const Featured = () => {
	const delays = ['0s', '0.5s', '1s'];
  
	return (
	  <div className="featured_wrapper">
		{delays.map((delay, index) => (
		  <div key={index} className="stripe" style={{ animationDelay: delay }}>
			{index === 0 && (
			  <span className="number-text" style={{ animationDelay: delay }}>
				14
			  </span>
			)}
		  </div>
		))}
		 <div className="animated-box left"></div>
      <div className="animated-box right"></div>
	  </div>
	);
  };
  
  export default Featured;