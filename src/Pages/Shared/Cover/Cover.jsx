

const Cover = ({img,title}) => {
  return (
	<div className="hero min-h-screen" style={{backgroundImage: `url("${img}")`}}>
	<div className="hero-overlay bg-opacity-60"></div>
	<div className="hero-content text-center text-neutral-content">
	  <div className="max-w-md">
	    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
	    <p className="mb-5">Check out our Menu. I hope you or your Pet will love it</p>
	  </div>
	</div>
    </div>
	
  );
};

export default Cover;
