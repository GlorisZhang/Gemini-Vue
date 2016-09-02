import Vue from 'vue';
import ServiceCallerPlugin from 'taurus/plugins/service';
import cookieHelper from 'taurus/utils/cookie-helper';
import appConfig from 'taurus/config/app-config.json';

Vue.use(ServiceCallerPlugin);

new Vue({
  el: 'body',
  data: function () {
    return {
      sec_auth_token_key: '--',
      sec_auth_tenant_key: '--',
      sec_auth_roletype_key: '--',
      sec_auth_zone_key: '--'
    };
  },
  methods: {
    callService: function () {
      var url = 'http://bj.web.crm.veris7.ai:30051/HubCrmServlet?servicecode=queryTodo';
      var p = {
        'queryCondition': {
          'conditionType': [
            {
              'condType': 'OP_ID',
              'condValue': [
                '200000001'
              ]
            }
          ],
          'pageNumber': 1,
          'pageSize': 20
        }
      };
      this.$service.post(url, p, {
        header: {
          'hello': 'This is a test header'
        },
        success: function (data) {
          alert('服务调用成功!\n服务返回内容如下:\n' + JSON.stringify(data));
        },
        error: function (code, info) {
          alert('服务调用失败!服务返回状态码为: ' + code + '；错误信息为：' + info);
        }
      });
    },
    writeCookie: function () {
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_TOKEN_KEY, '7faf3df3d00c809b4e67b13f2778850e3f8d2fa241e143401d09c691fb6b5d5c');
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_TENANT_KEY, '10');
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_ROLETYPE_KEY, 'Operator');
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_ZONE_KEY, '+0900');
      this.readCookie();
    },
    readCookie: function () {
      this.sec_auth_token_key = cookieHelper.readCookie(appConfig.sec.SEC_AUTH_TOKEN_KEY);
      this.sec_auth_tenant_key = cookieHelper.readCookie(appConfig.sec.SEC_AUTH_TENANT_KEY);
      this.sec_auth_roletype_key = cookieHelper.readCookie(appConfig.sec.SEC_AUTH_ROLETYPE_KEY);
      this.sec_auth_zone_key = cookieHelper.readCookie(appConfig.sec.SEC_AUTH_ZONE_KEY);
    },
    removeCookie: function () {
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_TOKEN_KEY);
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_TENANT_KEY);
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_ROLETYPE_KEY);
      cookieHelper.writeCookie(appConfig.sec.SEC_AUTH_ZONE_KEY);
      this.sec_auth_token_key = '--';
      this.sec_auth_tenant_key = '--';
      this.sec_auth_roletype_key = '--';
      this.sec_auth_zone_key = '--';
    }
  }
});
