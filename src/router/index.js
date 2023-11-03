import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
		path: '/',
		name: 'home',
		component: () => import("@/page/Home")
	},{
		path:'/news',
		name:'news',
		component: () => import("@/views/news/News"),
	},
	{
		path:'/news/detail',
		name:'news-detail',
		component: () => import("@/views/news/NewsDetail"),
	},
	{
		path:'/navigation',
		name:'navigation',
		component: () => import("@/views/Navigation"),
	},
	{
		path:'/market',
		name:'marketplace',
		component: () => import("@/views/Market"),
	},
	{
		path:'/creator',
		name:'creator',
		component: () => import("@/views/Creator"),
	},
	{
		path:'/create',
		name:'create',
		component: () => import("@/views/Create"),
	},
	{
		path: '/user',
		name: 'user',
		component: () => import("@/page/User"),
		children: [
			{
				path: '/balance',
				name: 'balance',
				component: () => import("@/views/user/Balance"),
			},
			{
				path: '/nfts',
				name: 'nfts',
				component: () => import("@/views/user/NFTs"),
			},
			{
				path: '/profile',
				name: 'profile',
				component: () => import("@/views/user/Profile"),
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
	
});
export default router;