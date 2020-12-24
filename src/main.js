import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
// sweetAlert2
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ko';
import VueCookie from 'vue-cookie';
import onlyInt from 'vue-input-only-number';

Vue.use(onlyInt);
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
				.catch(() => {});
		},
		engOnly(e) {
			e.target.value = e.target.value.replace(/[0-9]|[^\\!-z]/gi, '');
		},
		engNumberOnly(e) {
			e.target.value = e.target.value.replace(/[^\\!-z]/gi, '');
		},
	},
});

Vue.config.productionTip = false;

// 통화로 변경해 주는 필터링
Vue.filter('currency', function(value, flag) {
	if (!value) {
		return;
	} else {
		value = value.toString();
		if (value.indexOf('.') != -1) {
			// 소수점 들어왔을 시
			if (flag) {
				// 반올림 여부
				value = Math.round(value);
			} else {
				let values = value.split('.');
				return values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + values[1];
			}
		}
		return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
});

// 넘겨진 번호를 사업자 번호 포맷에 맞춰서 마스킹 해주는 필터링
Vue.filter('bizNoFilter', function(value, type) {
	if (!value) return;
	if (value.includes('-')) {
		return value;
	}
	var formatNum = '';
	try {
		if (value.length == 10) {
			if (type == 0) {
				formatNum = value.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-*****');
			} else {
				formatNum = value.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
			}
		}
	} catch (e) {
		formatNum = value;
		console.log(e);
	}
	return formatNum;
});

Vue.filter('dateFilter', (value, type = '-') => {
	if (!value) return '';
	return value.substr(0, 4) + type + value.substr(4, 2) + type + value.substr(6, 2);
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
