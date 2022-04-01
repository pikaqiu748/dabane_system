<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../common/bus';

export default {
  data () {
    return {
      collapse: false,
      items: [
        // {
        //   icon: 'el-icon-view',
        //   index: 'dashboard',
        //   title: '系统首页'
        // },
        {
          icon: 'el-icon-view',
          index: '1',
          title: '大班额总体情况模块',
          subs: [
              {
                  index: 'zhengti',
                  title: '大班额整体分布情况'
              },
              {
                  index: 'shizhou',
                  title: '大班额市州分布情况'
              }
          ]
      },
      {
          icon: 'el-icon-view',
          index: '2',
          title: '区域类型分布情况模块',
          subs: [
              {
                  index: 'yuquzhengti',
                  title: '大班额区域整体分布情况'
              },
              {
                  index: 'quyushizhou',
                  title: '大班额区域市州分布情况'
              }
          ]
      },
        {
          icon: 'el-icon-view',
          index: 'schooltotal',
          title: '学校类型分布情况',
          subs: [
            {
              index: 'schooltotal',
              title: '学校整体分布'
            },
            {
              index: 'schoolshizhou',
              title: '学校市州分布'
            }
          ]
        },
        {
          icon: 'el-icon-view',
          index: 'gradetotal',
          title: '年级分布情况',
          subs: [
            {
              index: 'gradetotal',
              title: '年级整体分布'
            },
            {
              index: 'gradeshizhou',
              title: '年级市州分布'
            }
          ]
        },
        {
          icon: 'el-icon-view',
          index: 'classtypedist',
          title: '班级类型分布情况',
          subs: [
            {
              index: 'classtypeshizhou',
              title: '班级类型整体分布'
            },
            {
              index: 'classtypedist',
              title: '班级类型市州分布'
            },
          ]
        },
        {
          icon: 'el-icon-view',
          index: 'toschoolyearshizhou',
          title: '入学年份分布情况',
          subs: [
            {
              index: 'toschoolyearzhengti',
              title: '入学年份整体分布'
            },
            {
              index: 'toschoolyearshizhou',
              title: '入学年份市州分布'
            },
          ]
        },
        {
          icon: 'el-icon-lx-warn',
          index: '7',
          title: '错误处理',
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        },
        // {
        //   icon: 'el-icon-lx-redpacket_fill',
        //   index: '/donate',
        //   title: '支持作者'
        // }
      ]
    };
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '');
    }
  },
  created () {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
    bus.$on('collapse', msg => {
      this.collapse = msg;
      bus.$emit('collapse-content', msg);
    });
  }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    margin: 0px;
    padding: 0px;
}
.sidebar::-webkit-scrollbar {
    width: 0;
    margin: 0px;
    padding: 0px;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
    margin: 0px;
    padding: 0px;
}
.sidebar > ul {
    height: 100%;
    margin: 0px;
    padding: 0px;
}
</style>
