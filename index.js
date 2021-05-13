import express from 'express';
import puppeteer from 'puppeteer';

import appSrc from './app.js';

const app = appSrc(express, puppeteer);

try {
    app.listen(process.env.PORT);
} catch(e) {
    console.log(e.codeName);
}
