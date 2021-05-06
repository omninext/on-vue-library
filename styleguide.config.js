const path = require('path')



// const store = new Vuex.Store({
//   state,
//   getters,
//   mutations
// })

module.exports = {
	// set your styleguidist configuration here
	title: 'Omninext',
	pagePerSection:true,
	//components: 'src/_design/**/[A-Z]*.vue',
	copyCodeButton:true,
	defaultExample: true,
	
	locallyRegisterComponents:false,
	sections:[
  {
		name: "Get started",
		content:"./src/lib-components/Readme.md"
	},
	// {
	// 	name:"Atoms",
	// 	components:"./src/lib-components/Atoms/**/[A-Z]*.vue"
	// },
	// {
	// 	name:"Molecules",
	// 	components:"./src/lib-components/Molecules/**/[A-Z]*.vue"
	// },
	// {
	// 	name:"Organism",
	// 	components:"./src/lib-components/Organism/**/[A-Z]*.vue"
	// },
	// {
	// 	name:"Templates",
	// 	components:"./src/lib-components/Templates/**/[A-Z]*.vue"
	// }
],
	require:[
		//path.join(__dirname,'src/main.pcss'),
		path.join(__dirname,'config/global.requires.js'),
		path.join(__dirname,'config/router-mock.js'),
	],
	exampleMode: 'expand'
}










