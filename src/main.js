import App from './App.html';

const app = new App({
	target: document.body,
	data:{
		server:"http://localhost:8888"
	}
});
window.app = app;
export default app;