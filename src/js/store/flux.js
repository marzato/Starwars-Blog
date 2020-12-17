const BASE_URL = "https://swapi.dev/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				let url = `${BASE_URL}/people`;
				try {
					let response = await fetch(url);
					let responseObject = await response.json();
					setStore({
						people: responseObject.results
					});
				} catch (error) {
					console.log(error);
				}
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
