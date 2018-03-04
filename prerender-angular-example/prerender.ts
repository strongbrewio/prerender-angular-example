import 'zone.js/dist/zone-node';
import * as path from 'path';
import * as fs from 'fs';
import { enableProdMode } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import { AppPrerenderModuleNgFactory } from './dist-prerender/main.bundle';

const distFolder = './dist';
const index = fs
    .readFileSync(path.resolve(__dirname, `${distFolder}/index.html`), 'utf8')
    .toString();

// you could automate this based on the app.routes.ts file but
// to keep it simple let's just create an array with the routes we want
// to prerender
const paths = [
    '/about',
    '/brews',
    '/consultancy'];
enableProdMode();

// for every route render the html and save it in the correct folder
paths.forEach(p => renderToHtml(p, distFolder + p));

// don't forget to overwrite the index.html as well
renderToHtml('/index.html', distFolder);

function renderToHtml(url: string, folderPath: string): void {
    // Render the module with the correct url just as the server would do
    renderModuleFactory(AppPrerenderModuleNgFactory, {
        url,
        document: index
    }).then(html => {
        // create the route directory
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
