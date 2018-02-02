const express = require('express');
const path = require('path');

const PUBLIC_PATH = path.join(__dirname, 'public');
const ASSET_PATH = path.join(__dirname, 'dist');

const app = express();

app.use('/', express.static(PUBLIC_PATH));
app.use('/assets', express.static(ASSET_PATH));

app.listen(process.env.PORT || 3000);