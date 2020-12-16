import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
// sweetAlert2
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ko';
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);
Vue.use(ElementUI, { locale });

Vue.mixin({
	methods: {
		// 전역 알림 창
		sAlert(text, title, okLabel, okFunction) {
			title = title ? title : '알림';

			text = text ? text : '';
			okLabel = okLabel ? okLabel : '확인';

			this.$alert(text, title, {
				confirmButtonText: okLabel,
				callback: action => {
					/*this.$message({
						type: 'info',
						message: `action: ${action}`,
					}); */
					if (action) {
						if (typeof okFunction == 'function') {
							okFunction();
						}
					}
				},
			});
		},
		// 전역 확인 창
		async sConfirm(text, successFunction) {
			this.$confirm(text, '확인', {
				confirmButtonText: '예',
				cancelButtonText: '아니오',
				type: 'warning',
			})
				.then(() => {
					/*this.$message({
						type: 'success',
						message: 'Delete completed',
					});*/
					successFunction();
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: 'Delete canceled',
					});
				});
		},
	},
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
