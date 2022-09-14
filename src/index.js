import hbs from 'handlebars';
import login from './markup/pages/login/login.tmp';
import register from './markup/pages/register/register.tmp';
import error from './markup/pages/error/error.tmp';
import chats from './markup/pages/chats/chats.tmp';
import errorsData from './mocks/errors';

const template = hbs.compile(chats);
const html = template({});

const rootNode = document.getElementById('root');
rootNode.innerHTML = html;
