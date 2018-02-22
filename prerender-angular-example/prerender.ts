import 'zone.js/dist/zone-node';
import * as path from 'path';
import * as fs from 'fs';
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { AppPrerenderModuleNgFactory } from './dist-prerender/main.bundle';

const dist = './dist';
const index = fs
    .readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf8')
    .toString();

const paths = [
    '/about',
    '/brews',
    '/consultancy'];
enableProdMode();

paths.forEach(p => renderToHtml(p, dist + p));

// don't forget to overwrite the index.html as well
renderToHtml('/index.html', dist);

function renderToHtml(url: string, folderPath: string): void {
    renderModuleFactory(AppPrerenderModuleNgFactory, {
        url,
        document: index
    }).then(html => {
        // the root folder always exists
        if (url !== '/index.html') {
            fs.mkdirSync(folderPath);
        }
        fs.writeFile(folderPath + '/index.html', html, function (err) {
            if (err) {
                throw err;
            }
            console.log(`successfully created ${folderPath}/index.html`);
        });
    });
}
