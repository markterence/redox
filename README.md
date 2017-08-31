# Redox
Ionic + Electron template.

# Main Dependency Versions
```
Ionic: 3.9.2
Electron: 1.7.5
NPM: 6.11.2
Node: 5.3.0
```

# Notes
- Install `electron` globally. 
```bash
npm install -g electron
```

# Running
- Open 1st command line, then
```bash
ionic serve
```

- Open 2nd command line, then
```bash
npm run electron serve 
# or 
npm run electron
```
- `npm run electron serve` - this will open the electron window and will listen to `ionic serve` (`http://localhost:8100`) by default.
- `npm run electron` - will use the `file:` protocol and serve the `www/index.html` in the electron window


# Changelogs
### 2017, August 31st
- Downgraded from `"@ionic/app-scripts": "2.1.4"` to `"@ionic/app-scripts": "2.1.3"` to fix `npm ERR! code EINTEGRITY npm ERR! sha512....`