const { $ } = require('@wdio/globals')
const Page = require('./page');


class DashboardPage extends Page {
    
    get getHeaderText () {
        return $('//h1');
    };
};

module.exports = new DashboardPage();
