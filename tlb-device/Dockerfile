# 使用 Node.js 14 镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install vue-router

# 将源代码复制到工作目录
COPY . .

# 构建生产环境代码
RUN npm run build

# 暴露容器端口
EXPOSE 8080

# 启动应用
CMD ["npm", "run", "serve"]
