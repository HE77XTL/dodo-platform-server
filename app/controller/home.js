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
}

module.exports = HomeController;
