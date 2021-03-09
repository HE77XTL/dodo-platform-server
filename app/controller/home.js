'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const user = await this.app.mysql.get('ds_test', { test: '1' });
    const res = {
      code: '0000',
      data: user
    };
    ctx.body = res;
  }

  async getUser() {
    const { ctx } = this;

    const user = await this.app.mysql.get('ds_test', { test: '1' });
    const res = {
      code: '0000',
      data: user
    };
    ctx.body = res;
  }

  async login() {
    const { ctx, app } = this;
    //生成 token 的方式
    const token = app.jwt.sign({
      username: 'heds', //需要存储的 token 数据
    }, app.config.jwt.secret);
    const res = {
      code: '0000',
      data: token
    };
    ctx.body = res;
  }
}

module.exports = HomeController;
