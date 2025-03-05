<template>
    <div class="experience">
        <h1>实习经历</h1>
        <div v-for="(project, index) in projects" :key="index" class="project">
            <h3>{{ project.title }}</h3>
            <p><strong>项目</strong>: {{ project.description }}</p>
            <p><strong>技术实现</strong>: {{ project.tech }}</p>
            <p><strong>结果</strong>: {{ project.result }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            projects: [
                {
                    title: '项目一: 数据分析',
                    description: '电视剧评论数据可视化分析。',
                    tech: '使用 Python 爬虫抓取 10,000 条评论数据，通过 MongoDB 存储并生成可视化图表（饼图、柱状图、词云等）。',
                    result: '提出 3 条内容优化建议，帮助影视团队提升用户满意度 10%。数据分析报告被公司采纳，用于后续内容策划，项目 ROI 提升 15%。'
                },
                {
                    title: '项目二: Web 应用开发',
                    description: '使用 Vue 3 和 Vite框架,结合 JSON Server 和 Rap2 API 管理工具，开发移动端/PC端自适应的 Web 应用。',
                    tech: '集成 Vant UI 组件库，创建 13 个自定义组件，实现数据驱动的 UI 界面，利用 Rap2 简化 API 开发流程，提升前后端协作效率，确保应用跨平台兼容性。',
                    result: '提升 API 开发效率 30%，缩短项目交付时间。应用支持 5 种设备屏幕尺寸，用户留存率提升 15%。项目上线后，用户满意度达 90%，获得公司内部优秀项目奖。'
                },
                {
                    title: '项目三: 前端开发',
                    description: '自适应移动网站开发。',
                    tech: '使用 HTML5 和 CSS3 实现多页面布局，运用 Flex 布局提升响应式设计，集成字体图标和 SVG 图形，增强页面视觉效果和交互性，确保在不同设备上均能良好展示，为用户提供流畅的浏览和学习体验。',
                    result: '页面加载速度提升 20%，用户访问时长增加 25%。网站支持 3 种主流浏览器，兼容性测试通过率 100%。项目上线后，用户注册量增长 10%，获得公司客户高度评价。'
                },
                {
                    title: '项目四: 活动策划',
                    description: '大型文艺活动策划与执行。',
                    tech: '策划并组织多场大型文艺活动，提升公司品牌影响力，协调内外部资源，设计活动流程，负责宣传推广和现场管理。',
                    result: '活动参与人数同比增长 20%，品牌曝光度提升 30%。活动满意度达 95%，为公司带来潜在客户增长 10%。活动模式被推广至其他分公司。'
                }
            ]
        }
    }
}
</script>

<style scoped>
.experience {
    margin: 20px;
    text-align: left;
}

h1 {
    color: #2c3e50;
}

.project {
    margin-bottom: 20px;
}
</style>