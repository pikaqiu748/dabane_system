import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path:'/home3',
      name:'Home3',
      component: () => import('@/views/Home3.vue'),
      meta:{
        title:'初中情况'
      }

    },
    {
      path:'/register',
      name:'Register',
      component:()=>import('../components/li/registerUser.vue'),
      meta:{
        title:'添加用户'
      }
    },
    {
      path:'/home2',
      name:'Home2',
      component: () => import('@/views/Home2.vue'),
      meta:{
        title:'小学情况'
      }

    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: '大班额首页统计图'
      }
    },
    {
      path:'/starrain',
      name:'starRain',
      component:()=>import('../components/li/StarRain.vue')
    },
    {
      path: '/energy',
      name: 'Energy',
      component: () => import('../components/Layout.vue')
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: '/dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '../views/Home.vue'),
          // component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
          meta: { title: '系统首页' }
        },
        {
          path:'/zhengti',
          component: () => import(/*webpackChunkName:"zhengti"*/ 'components/chenmy/zhengti.vue'),
          meta: {title:'大班额整体分布情况' }
        },
        {
          path:'/shizhou',
          component: () => import(/*webpackChunkName:"zhengti"*/ 'components/chenmy/shizhou.vue'),
          meta: {title:'大班额市州整体分布情况' }
       },
        {
          path: '/schooltotal',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/SchoolTotal.vue'),
          meta:
          {
            title: '学校类型整体分布情况',
            role: '2',
            permission: true
          }
        },
        {
          path: '/schoolshizhou',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/SchoolShiZhou.vue'),
          meta:
          {
            title: '学校类型市州分布情况',
            role: '2',
            permission: true
          }
        },
        {
          path: '/gradetotal',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/GradeTotal.vue'),
          meta:
          {
            title: '年级整体分布情况',
            role: '1',
            permission: true
          }
        },
        {
          path: '/gradeshizhou',
          component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/GradeShiZhou.vue'),
          meta: {
            title: '年级市州分布情况',
            permission: true
          }
        },
        {
          path: '/classtypedist',
          component: () => import('../components/page/ClassTypeDist.vue'),
          meta:
          {
            title: '班级类型整体分布情况',
            role: '2',
            permission: true
          }
        },
        {
          path: '/classtypeshizhou',
          component: () => import('../components/page/AllClassType.vue'),
          meta:
          {
            title: '班级类型市州分布情况',
            role: '2',
            permission: true
          }
        },
        
        {
          path: '/toschoolyearzhengti',
          component: () => import('../components/page/ToSchoolYearzhengti.vue'),
          meta:
          {
            title: '入学年份整体分布情况',
            // role: '2',
            permission: true
          }
        },
        {
          path: '/toschoolyearshizhou',
          component: () => import('../components/page/ToSchoolYearshizhou.vue'),
          meta:
          {
            title: '入学年份市州分布情况',
            // role: '2',
            permission: true
          }
        },

        {
          path: '/icon',
          component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
          meta: { title: '自定义图标' }
        },
        {
          path: '/table',
          component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
          meta: { title: '基础表格' }
        },
        {
          path: '/tabs',
          component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
          meta: { title: 'tab选项卡' }
        },
        {
          path: '/form',
          component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
          meta: { title: '基本表单' }
        },
        {
          // 富文本编辑器组件
          path: '/editor',
          component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
          meta: { title: '富文本编辑器' }
        },
        {
          // markdown组件
          path: '/markdown',
          component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
          meta: { title: 'markdown编辑器' }
        },
        {
          // 图片上传组件
          path: '/upload',
          component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
          meta: { title: '文件上传' }
        },
        {
          // vue-schart组件
          path: '/charts',
          component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
          meta: { title: 'schart图表' }
        },
        {
          // 拖拽列表组件
          path: '/drag',
          component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
          meta: { title: '拖拽列表' }
        },
        {
          // 拖拽Dialog组件
          path: '/dialog',
          component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
          meta: { title: '拖拽弹框' }
        },
        {
          // 国际化组件
          path: '/i18n',
          component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
          meta: { title: '国际化' }
        },
        {
          // 权限页面
          path: '/permission',
          component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
          meta: { title: '权限测试', permission: true }
        },
        {
          path: '/404',
          component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
          meta: { title: '404' }
        },
        {
          path: '/403',
          component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
          meta: { title: '403' }
        },
        {
          path: '/donate',
          component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
          meta: { title: '支持作者' }
        }
      ]
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
      // component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
      meta: { title: '登录页面' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

