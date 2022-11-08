import NavBar from './component/NavBar';
import CardDetalis from './component/CardDetalis';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';

const App = () => {
	const data = [
		{ title: 'title11', description: 'description 1', img:  img1  },
		{ title: 'title12', description: 'description 2', img:  img2  },
		{ title: 'title13', description: 'description 3', img:  img3  },
		{ title: 'title13', description: 'description 3', img:  img4  },
		{ title: 'title13', description: 'description 3', img:  img5  },
		{ title: 'title13', description: 'description 3', img:  img6  },
		{ title: 'title13', description: 'description 3', img:  img7  },
	];
	return (
		<div>
			<NavBar />
			{data.map((item, index) => {
				return (
					<CardDetalis
						key={index}
						title={item.title}
						description={item.description}
						img={item.img}
					/>
				);
			})}
		</div>
	);
};
export default App;
